<template>
<div>
    <el-button circle
    class="done-checkbox"
    size="mini" 
    :loading="isLoading"
    :type="buttonType">
    <i class="el-icon-check" v-if="!isLoading" :class="colour"></i>
    </el-button>
</div>

</template>

<script>
    export default{
        props:{
            done: {type: Boolean, default: false},
            isLoading: {type: Boolean, default: false}
        },
        computed:{
            colour(){
                return this.done ? "" : "colour-transparent";
            },
            buttonType(){
                return this.done && !this.isLoading ? "primary" : "";
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
