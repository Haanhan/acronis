<template>
  <div class="home">
    <el-container>
      <el-main>
          
          <el-row type="flex" justify="space-around">
            <el-col :lg="14">
              
              <h1>To-do App</h1>
              
              <el-card body-style="padding:0">

                <el-table :show-header="false" :data="todoList">

                  <el-table-column :width="40" align="center">
                    <template slot-scope="{row: {done}}">
                      <checkbox :done="done"></checkbox>
                    </template>
                  </el-table-column>

                  <el-table-column
                    prop="text">
                  </el-table-column>

                  <el-table-column align="right" width:>
                    <template slot-scope="{row: {id}}">
                      <el-button circle
                        size="mini" 
                        icon="el-icon-edit">
                      </el-button>
                      <el-button circle
                        size="mini" 
                        icon="el-icon-delete"
                        type="danger">
                      </el-button>
                    </template>
                  </el-table-column>
                  

                </el-table>

              </el-card>

            </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import Checkbox from "@/components/Checkbox.vue"

export default {
  name: 'home',
  components:{
    Checkbox
  },
  created(){
    this.getTodoList()
  },
  computed:{
    ...mapState(["todoList"])
  },
  methods:{
    ...mapActions(["getTodoList"]),
  }
}
</script>

