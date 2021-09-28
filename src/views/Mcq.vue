<template>
  <v-container fill-height class="">
    <template v-if="!user.user">
      <McqCard />
    </template>
    <template v-else>
      <Questions />
    </template>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    McqCard: () => import("../components/McqCard.vue"),
    Questions: () => import("../components/Questions.vue"),
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style scoped>
.container.fill-height {
  align-items: unset;
}
</style>
