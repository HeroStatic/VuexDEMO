<template>
  <div class="todos">
    <div class="content">
        <input type="text" v-model="tip"  @keyup.enter="handleKeyup" placeholder="请输入今天的任务清单">
      </div>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: 'todos',
  props: {
     
  },
  data(){
      return {
         tip:""
      }
  },
  methods:{
     ...mapActions(['todos/AddTodo']),
      handleKeyup(){
          if(this.tip==""){
              alert('不能为空')
              return 
          }
          const todo = {
              list:this.tip,
              hasfinished:false
          }
          this['todos/AddTodo'](todo)
      }
  }
}
</script>


<style scoped lang="less">
.content{
      input{
        display: inline-block;
        width:100%;
        padding-left:20px;
        box-sizing: border-box;
      }
    }
</style>
