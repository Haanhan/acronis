<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">

h1 {
  font-size: 20px;
}

h2{
  font-size: 18px;
}

h3{
  font-size: 16px;
}

h1,h2,h3{
  font-weight: normal;
}

body{
  color: #303133;
  background: #F2F6FC;
}

.done-text{
  text-decoration: line-through;
  color: #909399
}

.cell{
  word-break: normal !important;
}

</style>
