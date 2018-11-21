<template>
    <el-button circle
        class="done-checkbox"
        size="mini" 
        :type="buttonType">
        <i class="el-icon-check" :class="colour"></i>
        </el-button>
</template>

<script>
    export default{
        props:{
            done: {type: Boolean, default: false}
        },
        computed:{
            colour(){
                console.log(this.done);
                return this.done ? "" : "colour-transparent";
            },
            buttonType(){
                return this.done ? "primary" : "";
            }
        }
    }
</script>

<style lang="scss" scoped>

    .colour-transparent{
        color: transparent;
    }

    .el-icon-check{
        font-weight: bold !important;
    }
    
</style>
