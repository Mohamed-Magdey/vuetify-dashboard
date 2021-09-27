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
    <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
  </v-app-bar>
</template>

<script>
import sharedHeaderFooter from "../mixins/sharedHeaderFooter";

export default {
  mixins: [sharedHeaderFooter],
  methods: {
    toggleTheme() {
      // this.$vuetify.theme.themes.dark.paragraph = "#000";
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style></style>
