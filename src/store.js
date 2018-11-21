import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTodos, updateTodo, insertTodo, deleteTodo } from './apiHelper.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todoList: [],
    isLoading: false
  },
  mutations: {
    SET_TODOLIST(state, todoList){
      state.todoList = todoList;
    },
    ADD_TODO(state, todo){
      state.todoList.push(todo);
    },
    REMOVE_TODO(state, id){
      const index = state.todoList.findIndex(x => x.id  === id);
      if(index >= 0)
        state.todoList.splice(index, 1);
    },
    UPDATE_TODO(state, todo){
      const index = state.todoList.findIndex(x => x.id  === todo.id);
      if(index >= 0){
        state.todoList[index] = todo;
        state.todoList = [...state.todoList]; // allow vue to detect change
      }
    },
    SET_LOADING(state, isLoading){
      state.isLoading = isLoading;
    }
  },
  actions: {
    getTodoList({commit}){
      commit("SET_LOADING", true);
      getAllTodos()
        .then(list => {
          commit("SET_TODOLIST", list);
        })
        .finally( () => { commit("SET_LOADING", false) } )
    },
    addTodo({commit}, text){
      insertTodo({text, done: false})
        .then(todo => {
          commit("ADD_TODO", todo)
        })
    },
    updateTodo({commit}, todo){
      commit("UPDATE_TODO", {...todo, isPending: true});
      updateTodo(todo)
        .then(todo => {
          commit("UPDATE_TODO", todo);
        })
        .catch( e =>{
          commit("UPDATE_TODO", {...todo, done: !todo.done, isPending: false});
        })
    },
    deleteTodo({commit}, id){
      deleteTodo(id);
      commit("REMOVE_TODO", id);
    }
  }
})
