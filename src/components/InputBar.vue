<template>
    <div class="inputbar">
        <el-input class="inputbar-text" :placeholder="placeholder" :value="inputValue">
        </el-input>
        <el-button slot="append" @click="btnClick" type="primary">Add</el-button>
    </div>
</template>

<script>
export default {
    props:{
        placeholder: { type: String }
    },
    data(){
        return {
            inputValue: ""
        }
    },
    methods:{
        btnClick(){
            this.inputValue = "";
            this.$emit("btn-click", this.inputValue)
        }
    }
}
</script>

<style lang="scss" scoped>
    .inputbar{
        display:flex;
    }
    .inputbar-text{
        margin-right: 10px;
    }
</style>
