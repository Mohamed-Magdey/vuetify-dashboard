<template>
  <v-timeline align-top :dense="true">
    <v-timeline-item
      v-for="(item, i) in timeline"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color" dark>
        <v-card-title class="title pt-3 pb-3">
          <h3 class="title">{{ item.title }}</h3>
        </v-card-title>
        <v-card-text
          class="text--primary"
          :class="$vuetify.theme.dark ? '' : 'white'"
          :style="{ 'background-color': $vuetify.theme.dark && '#1E1E1E' }"
        >
          <p class="pt-3 body-1 mb-0">
            {{ item.text }}
          </p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    timeline: {
      type: Array,
      required: true,
    },
  },
};
</script>
