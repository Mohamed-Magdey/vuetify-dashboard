<template>
  <v-row justify="center" align="center" class="mt-5">
    <v-col cols="8" md="6" lg="4">
      <v-card>
        <v-card-title class="primary white--text">
          <h1 class="headline mx-auto">{{ user.user }}</h1>
        </v-card-title>
        <v-card-text class="text-center mt-5"
          >Your score is {{ user.score }}</v-card-text
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions("user", ["removeUser"]),
  },
  beforeDestroy() {
    this.removeUser();
  },
};
</script>
