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
    links: ["home", "mcq", "login", "signup", "dashboard"],
  }),
};
</script>

<style>
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 25px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 25px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#nprogress .bar {
  background: #00ff00 !important;
}

/* Fancy blur effect */
#nprogress .peg {
  box-shadow: 0 0 10px#00FF00, 0 0 5px #00ff00 !important;
}
</style>
