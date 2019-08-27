<template>
  <div class="hello">
        <h2>{{this.$store.state.count}}</h2>
        <button @click="add">add</button>
        <button @click="sub">sub</button>
  </div>
</template>

<script>
import {getList} from '../api/user' 
export default {
  name: 'HelloWorld',
  data(){
    return{
    
    }
  },
  mounted(){
    getList('/mock/5d613487b6b2306f284bee02/vue/list')
    .then(res=>{
      console.log(res)
    })
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      
      this.$store.commit('subment')
    }
  }
 
}
</script>

<style scoped>

</style>
