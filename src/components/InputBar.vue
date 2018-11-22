<template>
    <div class="inputbar">

        <el-input class="inputbar-text" 
            @keydown.enter.native="btnClick"
            :placeholder="placeholder" 
            v-model="inputValue">
        </el-input>

        <el-button slot="append" 
            :disabled="inputValue === ''" 
            @click="btnClick" 
            type="primary">
            {{btnText}}
        </el-button>
        
    </div>
</template>

<script>
export default {
    props:{
        placeholder: { type: String },
        btnText: { type: String }
    },
    data(){
        return {
            inputValue: ""
        }
    },
    methods:{
        btnClick(){
            this.$emit("btn-click", this.inputValue);
            this.inputValue = "";
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
