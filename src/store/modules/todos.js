import { get } from "http";

const state = {
   todos:[]
}
const getters = {
    todos:()=>state.todos,
    Allthings:()=>state.todos.length,
    hasFinishedThings:()=>state.todos.reduce((prev,cur)=>prev+ (cur.hasfinished?1:0),0),
   
}

const mutations = {
    getTodos(state,todos){
        state.todos = todos
    },
    addToto(state,todo){
        state.todos.unshift(todo)
    },
    deleteToto(state,index){
        state.todos.splice(index,1)
    },
    isCheckAll(state,flag){
        state.todos.forEach((item)=>item.hasfinished = flag)
    },
    deleteHasfinished(state){
        state.todos = state.todos.filter((item)=>!item.hasfinished)
    }
}
const actions = {
    AddTodo({commit},todo){
        commit('addToto',todo)
    },
    DeleteTodo({commit},index){
        commit('deleteToto',index)
    },
    getTodos({commit}){
        setTimeout(() => {
            var todos = [
                {list:"打场高尔夫",hasfinished:true},
                {list:"会见奥巴马",hasfinished:false},
                {list:"回家敲代码",hasfinished:false},
                {list:"回家吃饭",hasfinished:true}
            ]
            commit('getTodos',todos)    
        }, 2000);
    },
    isCheckAllThings({commit},flag){
        commit('isCheckAll',flag)
    },
    DeleteHasfinished({commit}){
        console.log(111)
        commit('deleteHasfinished')
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}