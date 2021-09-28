<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" lg="5">
      <h1 class="display-1 text-center">MCQ APP</h1>
      <v-card class="mt-2">
        <v-card-text class="pb-0">
          <v-text-field
            label="Username"
            placeholder="Enter Your Name"
            type="text"
            outlined
            prepend-inner-icon="mdi-account"
            dense
            v-model="username"
          />
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" width="100%" large @click.prevent="submit">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    submit() {
      if (this.username) {
        this.setNewUser(this.username);
        this.username = "";
      }
    },
    ...mapActions("user", ["setNewUser"]),
  },
};
</script>
