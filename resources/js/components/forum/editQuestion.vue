<template>
  <v-container>
      <v-form @submit.prevent="update" >
    <v-text-field
      v-model="form.title"
      label="Title"
      type="text"
      required
    ></v-text-field>

     <vue-simplemde v-model="form.body" ref="markdownEditor" />
      <v-card-actions>
        <v-btn icon small type="submit">
            <v-icon color="teal">save</v-icon>
        </v-btn>      
        <v-btn icon small @click="cancel">
            <v-icon >cancel</v-icon>
        </v-btn>      
    </v-card-actions> 
      </v-form>
  </v-container>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
      components: {
      VueSimplemde
    },

    props:['data'],
    
    data(){
        return{
            form:{
                title:null,
                body:null,
            }
        }
    },

    mounted(){
        this.form=this.data
    },

    methods:{
      cancel(){
        EventBus.$emit('cancelEditing')
      },

      update(){
        axios.patch(`/api/question/${this.form.slug}`, this.form)
        .then(res=>this.cancel())
      }
    }
}
</script>

<style>

</style>