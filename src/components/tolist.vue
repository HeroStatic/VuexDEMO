<template>
  <div class="tolist">
    <div class="list">
        <ul>
          <!-- <li>
              <input type="checkbox"> 打场高尔夫<button>删除</button>
          </li> -->
         <todoitem v-for="(item,index) in todos"  :key="index" :index="index" :todo="item" />
        </ul>
      </div>
  </div>
</template>

<script>
import todoitem from "../components/todoitem.vue"
import { mapState } from 'vuex'
export default {
  name: 'tolist', 

 
  methods:{
  
  },
  components:{
      todoitem
  },
  computed:{
      ...mapState({
          todos: state=>state.todos.todos
      })
  }
}
</script>


<style scoped lang="less">

    .list{
      ul{
        list-style: none;
        margin-top:20px;
      
      }
    }
</style>
