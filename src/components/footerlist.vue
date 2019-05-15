<template>
  <div class="footerlist">
    <input type="checkbox" v-model="ischeck" >
    已完成{{hasFinishedThings}}件/总计{{allthings}}件
    <button @click="handleClick">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {
  name: "footerlist",
 
  methods: {
      ...mapActions(['todos/isCheckAllThings','todos/DeleteHasfinished']),
      handleClick(){
          this['todos/DeleteHasfinished']()
      }
  },
  computed:{
     ...mapGetters({
         todos:'todos/todos',
         allthings:'todos/Allthings',
         hasFinishedThings:'todos/hasFinishedThings'
     }),
     ischeck:{
         get(){
            return this.hasFinishedThings === this.todos.length && this.todos.length>0
         },
         set(value){
             this['todos/isCheckAllThings'](value)
         }
     }
  }
   

};
</script>


<style scoped lang="less">
.footer {
  margin-top: 40px;
}
</style>
