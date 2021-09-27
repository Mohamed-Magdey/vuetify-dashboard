<template>
  <v-app>
    <Navbar :links="links" />
    <v-main>
      <router-view />
    </v-main>
    <Footer :links="links" />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
  data: () => ({
    links: ["home", "login", "signup", "dashboard"],
  }),
};
</script>
