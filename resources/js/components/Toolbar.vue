<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Bitfumes</v-toolbar-title>

      <v-spacer></v-spacer>

      <div>
        <v-btn text>Forum</v-btn>
        <v-btn text>Ask Question</v-btn>
        <v-btn text>Category</v-btn>
        <router-link to="/login">
             <v-btn text>Login</v-btn>
        </router-link>
     
      </div>
  
    </v-toolbar>
  </div>
</template>
<script>
export default {

}
</script>

<style>

</style>