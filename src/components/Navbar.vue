<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-title>Vuetify Dashboard</v-app-bar-title>
    <v-spacer />
    <v-btn text rounded :to="{ name: 'home' }">Home</v-btn>
    <v-btn text rounded v-bind:to="{ name: 'login' }">Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style></style>
