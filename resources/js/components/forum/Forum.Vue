<template>
   <v-container fluid grid-list-md>
    <v-layout>
      <v-flex xs8>
     <question
      v-for="question in questions" 
      :key="question.path"
      :question=question
     ></question>
      </v-flex>
      Sidebar
    </v-layout>
  </v-container>
</template>

<script>
import question from './question'

export default {
  data(){
    return{
      questions:{}
    }
  },
  components:{question},

  created(){
    axios.get('api/question')
    .then(res=>this.questions = res.data.data)
    .catch(error=>console.log(error.res.data))
  }
}
</script>

<style>

</style>