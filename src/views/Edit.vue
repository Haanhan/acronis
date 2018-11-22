<template>
  <div class="about">
    <h1>Edit To-do</h1>
    <el-card  v-loading="isLoading">
      <h3>New value</h3>
      <el-form>
        <el-form-item>
          <el-input v-model="todo.text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-close" @click="goToMain">Cancel</el-button>
          <el-button icon="el-icon-check" @click="updateTodo" type="primary">Confirm</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
import { getTodo } from "@/apiHelper"

export default {
  data(){
    return {
      todo: {}
    }
  },
  computed:{
    ...mapState(["isLoading"])
  },
  created(){
    if(this.$route.params.todo && this.$route.params.todo.id === this.$route.params.id){
      this.todo = this.$route.params.todo;
    }
    else{
      this.SET_LOADING(true);
      getTodo(this.$route.params.id)
      .then(todo => { this.todo = todo })
      .finally( ()=>{ this.SET_LOADING(false) } )
    }
  },
  methods:{
    ...mapMutations(["SET_LOADING"]),
    goToMain(){
      this.$router.push({ name: "home", params: { preventLoad: true }})
    },
    updateTodo(){
      this.$store.dispatch("updateTodo", this.todo)
      this.goToMain()

    }

  }
}
</script>
