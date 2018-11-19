import Vue from 'vue'
import Vuex from 'vuex'
import { getAllTodos } from './apiHelper.js'

Vue.use(Vuex)

export default new Vuex.Store({
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
      state.todoList.splice(index, 1);
    },
    UPDATE_TODO(state, todo){
      const index = state.todoList.findIndex(x => x.id  === todo.id);
      state.todoList[index] = todo;
      state.todoList = [...state.todoList]; // allow vue to detect change
    }
  },
  actions: {
    getTodoList({commit}){
      getAllTodos().then(json => {
        commit("SET_TODOLIST", json);
      })
    }
  }
})
