<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-title>Vuetify Dashboard</v-app-bar-title>
    <v-spacer />
    <v-btn
      v-for="link in links"
      :key="`${link}-header-link`"
      text
      rounded
      :to="{ name: link }"
    >
      {{ link }}
    </v-btn>
  </v-app-bar>
</template>

<script>
import sharedHeaderFooter from "../mixins/sharedHeaderFooter";

export default {
  mixins: [sharedHeaderFooter],
};
</script>

<style></style>
