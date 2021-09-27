<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Signup</h1>
        <v-form
          ref="signUpForm"
          @submit.prevent="register"
          v-model="formValidity"
        >
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          />

          <v-autocomplete
            label="Which browser do you use?"
            :items="browsers"
            v-model="selected"
          ></v-autocomplete>

          <v-file-input
            label="Attach prfile picture"
            v-model="uploadedFile"
            show-size
            counter
          ></v-file-input>

          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="Birthday"
                prepend-icon="mdi-calendar"
                v-model="birthday"
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="birthday"
              @input="menu = false"
            ></v-date-picker>
          </v-menu>

          <v-checkbox
            label="Agree to terms & conditions"
            v-model="agreeToTerms"
            :rules="agreeToTermsRules"
            required
          />

          <v-btn type="submit" color="primary" :disabled="!formValidity">
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: "",
    emailRules: [
      (value) => !!value || "Email is required.",
      (value) => value.indexOf("@") !== 0 || "Email should have a username.",
      (value) => value.includes("@") || "Email should include an @ symbol.",
      (value) =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain.",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extension.",
    ],
    birthday: "",
    browsers: ["Chrome", "Firefox", "Safari", "Edge", "Brave"],
    menu: false,
    uploadedFile: null,
    agreeToTerms: false,
    agreeToTermsRules: [
      (value) =>
        !!value ||
        "You must agree to the terms and conditions to sign up for an account.",
    ],
    selected: null,
    formValidity: false,
  }),
  methods: {
    register() {
      this.$refs.signUpForm.reset();
      this.$refs.signUpForm.resetValidation();
      // this.$refs.signUpForm.validate();
      console.log(
        this.birthday,
        this.uploadedFile,
        this.agreeToTerms,
        this.selected,
        this.email
      );
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
