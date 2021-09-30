<template>
  <Score v-if="submitted" />
  <v-row justify="center" align="start" class="mt-5" v-else>
    <v-col cols="12" md="10" lg="8">
      <v-sheet elevation="1" rounded class="pa-5">
        <v-form class="d-flex flex-column">
          <p>Q{{ index + 1 }}: {{ question.question }}</p>
          <v-sheet elevation="2" rounded class="mb-5">
            <v-radio-group v-model="selectedAnswer" dense>
              <v-radio
                v-for="(answer, i) in question.answers"
                :key="i"
                :label="answer"
                :value="answer"
                class="pa-2"
              ></v-radio>
            </v-radio-group>
          </v-sheet>
          <v-dialog
            v-model="dialog"
            persistent
            max-width="420"
            v-if="selectedAnswer"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                color="primary"
                class="align-self-end"
                @click="checkCorrectAnswer"
                v-bind="attrs"
                v-on="on"
              >
                {{ buttonType }}
              </v-btn>
            </template>
            <v-card>
              <v-card-text class="pt-5">
                {{ typeOfAnswer.type }}! Your score is: {{ typeAnswer
                }}{{ typeOfAnswer.score }}
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="grey lighten-5">
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="handleClick">
                  Ok
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-form>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Score: () => import("../components/Score.vue"),
  },
  data() {
    return {
      selectedAnswer: "",
      question: [],
      index: 0,
      submitted: false,
      dialog: false,
      typeOfAnswer: {
        type: "",
        score: 0,
      },
    };
  },
  computed: {
    buttonType() {
      return this.index < this.questions.length - 1 ? "Next" : "Submit";
    },
    typeAnswer() {
      return this.typeOfAnswer.type === "Correct" ? "+" : "";
    },
    ...mapState({
      questions: (state) => state.question.questions,
      user: (state) => state.user,
    }),
  },
  mounted() {
    this.fetchQuestions()
      .then((res) => {
        if (this.questions[this.index]) {
          this.question = this.questions[this.index];
        } else {
          throw res;
        }
      })
      .catch((err) => {
        this.$root.$toast.error("Something went wrong! Please try again.");
      });
  },
  methods: {
    checkCorrectAnswer() {
      const answer = this.selectedAnswer === this.question.correct;
      if (answer) {
        this.incrementScore();
        this.typeOfAnswer.type = "Correct";
        this.typeOfAnswer.score = 2;
      } else {
        this.typeOfAnswer.type = "Wrong";
        this.typeOfAnswer.score = 0;
      }
    },
    next() {
      this.index += 1;
      this.question = this.questions[this.index];
      this.selectedAnswer = "";
    },
    submit() {
      this.submitted = true;
      this.selectedAnswer = "";
    },
    handleClick() {
      let handle = {
        Next: this.next,
        Submit: this.submit,
      };
      this.dialog = false;
      handle[this.buttonType]();
    },
    ...mapActions("question", ["fetchQuestions"]),
    ...mapActions("user", ["incrementScore"]),
  },
};
</script>
