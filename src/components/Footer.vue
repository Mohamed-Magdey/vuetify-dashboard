<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="`${link}-footer-link`"
        color="white"
        text
        rounded
        class="my-2"
        :to="{ name: link }"
      >
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ footerDate }} — <strong>Vuetify Dashboard</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import sharedHeaderFooter from "../mixins/sharedHeaderFooter";

export default {
  mixins: [sharedHeaderFooter],
  computed: {
    footerDate() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style></style>
