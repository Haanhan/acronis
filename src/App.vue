<template>
  <div id="app">
    <div class="topbar">{{title}}</div>

     <el-container class="topbar-offset">
        <el-main>
  
          <el-row type="flex" justify="space-around">
              <el-col :lg="14">
                <router-view/>
              </el-col>
          </el-row>

        </el-main>
     </el-container>
  </div>
</template>

<script>

import { mapState } from "vuex"

export default {
  name: 'app',
  computed:{
    ...mapState(["title"])
  }
}
</script>

<style lang="scss">

@import "element-ui/packages/theme-chalk/src/common/var.scss";

$topbar-padding: 20px;
$topbar-font-size: $--font-size-large;
$topbar-height: ($topbar-padding * 2) + $topbar-font-size; 

body{
  color: $--color-text-primary;
  background: $--border-color-extra-light;
  padding: 0;
  margin: 0;
}

.strikeout{
  text-decoration: line-through;
}
.text-lighter{
  color: $--color-info;
}

.cell{
  word-break: normal !important;
}

.topbar-offset{
  padding-top: $topbar-height + 10px;
}

label{
  font-size: $--font-size-large;
  margin-bottom: 10px;
  display: inline-block;
}

.topbar{
  position: fixed;
  width: 100%;
  background: #fff;
  font-size: $topbar-font-size;
  line-height: 1;
  padding: $topbar-padding;
  color: $--color-primary;
  height: $topbar-height;
  box-sizing: border-box;
}

</style>
