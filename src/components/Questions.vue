<template>
  <v-row justify="center" align="start" class="mt-5">
    <v-col cols="12" md="10" lg="8">
      <v-sheet elevation="1" rounded class="pa-5">
        <v-form v-model="valid" class="d-flex flex-column">
          <p>Q1: {{ question.question }}</p>
          <v-sheet elevation="2" rounded class="mb-5">
            <v-radio-group v-model="selectedAnswer" dense>
              <v-radio
                v-for="(answer, index) in question.answers"
                :key="index"
                :label="answer"
                :value="answer"
                class="pa-2"
              ></v-radio>
            </v-radio-group>
          </v-sheet>
          <v-btn v-if="valid" depressed color="primary" class="align-self-end">
            Next
          </v-btn>
        </v-form>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      valid: false,
      selectedAnswer: null,
      question: [],
    };
  },
  computed: {
    ...mapState({
      questions: (state) => state.question.questions,
    }),
  },
  mounted() {
    this.fetchQuestions().then(() => (this.question = this.questions[0]));
  },
  methods: {
    ...mapActions("question", ["fetchQuestions"]),
  },
};
</script>
