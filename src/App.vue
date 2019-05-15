
<style lang="less" scoped>
 
  .center{
    width:400px;
    height: 400px;
    border:1px solid red;
    position: absolute;
    left:50%;
    top:50%;
    padding:10px;
    margin-left: -200px;
    margin-top:-200px;
    overflow: hidden;

  }

</style>

<template>
  <div class="home">
    
    <div class="center">
     <todos />
     <tolist />
     <footerlist/>
    </div>
  </div>
</template>

<script>
import todos from "./components/todos.vue"
import tolist from "./components/tolist.vue"
import footerlist from "./components/footerlist.vue"
import {mapActions} from "vuex"
 export default {
  name: 'app',
  data() {
      return {
     

      };
    },
    methods: {
      ...mapActions(['todos/getTodos'])
    },
    created(){
        this['todos/getTodos']()
    },
    components:{
      todos,
      tolist,
      footerlist
    }
}
</script>
