<template>
  <v-container fill-height>
    <template v-if="!user.user">
      <McqCard />
    </template>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    McqCard: () => import("../components/McqCard.vue"),
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>
