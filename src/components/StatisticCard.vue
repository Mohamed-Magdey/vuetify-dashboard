<template>
  <v-card>
    <v-card-title>{{ statistic.title }}</v-card-title>
    <v-card-text class="display-2">{{ statistic.value }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    statistic: {
      type: Object,
      required: true,
    },
  },
};
</script>
