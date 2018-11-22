<template>
  <div class="home">
          
    <el-card body-style="padding:0">

      <input-bar slot="header" 
        @btn-click="addTodo"
        btn-text="Add"
        placeholder="What do you need to do?"></input-bar>

      <el-table :show-header="false" :data="todoList" v-loading="isLoading">

        <div slot="empty">
          Nothing to do yet. Add to get started!
        </div>

        <el-table-column :width="40" align="center">
          <template slot-scope="{row}">
            <checkbox :done="row.done" 
              :isLoading="row.isPending"
              @click.native="setDone(row)"></checkbox>
          </template>
        </el-table-column>

        <el-table-column>
          <div slot-scope="{row: {text, done, isPending}}" 
            :class="{'strikeout': done, 'text-lighter': done || isPending }">
            {{text}}
          </div>
        </el-table-column>

        <el-table-column align="right" width="90">
          <template slot-scope="{row}"> 

            <el-button circle
              @click="goToEdit(row)"
              size="mini" 
              icon="el-icon-edit">
            </el-button>

            <el-button circle
              @click="deleteTodo(row.id)"
              size="mini" 
              icon="el-icon-delete"
              type="danger">
            </el-button>

          </template>
        </el-table-column>
        

      </el-table>

    </el-card>


  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex"
import Checkbox from "@/components/Checkbox.vue"
import InputBar from "@/components/InputBar.vue"


export default {
  name: 'home',
  components:{
    Checkbox,
    InputBar
  },
  created(){
    this.SET_TITLE("To-do App")

    if(!this.$route.params.preventLoad || this.todoList.length === 0)
      this.getTodoList()
  },
  computed:{
    ...mapState(["todoList", "isLoading"])
  },
  methods:{
    ...mapMutations(["SET_TITLE"]),
    ...mapActions([
      "getTodoList",
      "addTodo",
      "updateTodo",
      "deleteTodo"
      ]),
    setDone(todo){
      this.updateTodo({...todo, done: !todo.done})
    },
    goToEdit(todo){
      this.$router.push({ 
        name: "edit", 
        params: {id: todo.id, todo}
      })
    }
  }
}
</script>

