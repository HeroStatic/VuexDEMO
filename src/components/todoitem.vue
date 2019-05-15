<template>
  <div class="todoitem">
    <li>
      <input type="checkbox" v-model="todo.hasfinished"  >
      {{todo.list}}
      <button @click="handleClick" >删除</button>
    </li>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "todoitem",
  props:['todo','index'],
  methods: {
      ...mapActions(['todos/DeleteTodo']),
      handleClick(){
         this['todos/DeleteTodo'](this.index)
      }
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
li {
  border: 1px solid black;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
