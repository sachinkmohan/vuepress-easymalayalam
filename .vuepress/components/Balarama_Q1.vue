<template>
    <div>
        <h4> Simple Quiz - 3 Questions </h4>
        <h5> Based on the above image, answer the following questions </h5>
        <div>
            <div v-if="index < count">
            
            <p>{{ questions[index]['question']}}</p>
            <label 
                :for="key" 
                v-for="answer,key in questions[index]['answers']"
            >
                
                <input 
                    type="radio" 
                    :id="key" 
                    class="hidden" 
                    :value="key" 
                    @change="answered($event)"
                    :disabled="selectedAnswer != ''"
                    v-model="selectedAnswer"
                    @click="uncheck"
                    :class="{ activeColor : key== questions[0]['correctAnswer']}"
                />
                    {{ answer}} <br>

            </label>
            <div v-if="isHidden">
                <!-- <button v-on:click="displayAnswer">Show correct answer</button> -->
                <h5 v-if="isHiddenCorrectAnswerValidation"> Pwolichuuu!! Correct answer &#128512 !!   </h5>
                <h5 v-if="isHiddenWrongAnswerValidation"> Pani pali 😢. Correct answer is {{ questions[answerIndex-1]['correctAnswer']}}  </h5>
            </div>
            <div>
                <button  
                    v-show="selectedAnswer !='' && index < count-1"
                    @click="nextQuestion"
                >
                    Next &gt;
                </button>
                <button  
                    v-show="selectedAnswer !='' && index == count-1"
                    @click="showResults"
                >
                    Finish
                </button>
            </div>
        </div>
        <div v-else>
            <h2>Results</h2>
            <div>
                    <h4>You are one awesome Malayalee for completing the quiz!! </h4>
                    <p> Correct Answers: {{ correctAnswerCount}}<p>
                    <p> Wrong Answers: {{ wrongAnswerCount }}</p>

                    <h5>No matter your what you score, take a screenshot and tag me @easymalayalam on Insta</h5>
            </div>
            <div>
                <button  
                    @click="resetQuiz"
                >
                    Take Again
                </button>
                <p>
                    <a href="/quiz/smallquizzes">Back to Quiz Home</a>
                </p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      answerIndex: 0,
      count: 3,
      correctAnswerCount: 0,
      wrongAnswerCount: 0,
      isHidden: false,
      isHiddenCorrectAnswerValidation: false,
      isHiddenWrongAnswerValidation: false,
      activeColor: "red",
      selectedAnswer: "",
      questions: [
        {
          question: "What does 'ഒരു ദിവസം' mean here?",
          answers: {
            a: "a) Once upon a time",
            b: "b) Long back",
            c: "c) One fine day",
            d: "d) One day",
          },
          correctAnswer: "d",
        },
        {
          question: "Who is this famous character flying on a 'Red arrow' referred as കുന്തം in Malayalam",
          answers: {
            a: "a) Mayavi",
            b: "b) Luttappi",
            c: "c) Kuttoosan",
            d: "d) Dakini",
          },
          correctAnswer: "b",
        },
        {
          question: "What does താഴെ mean here ",
          answers: {
            a: "a) Down",
            b: "b) Up",
            c: "c) Right",
            d: "d) Left",
          },
          correctAnswer: "a",
        },
      ],
    };
  },
  methods: {
    answered(e) {
      this.selectedAnswer = e.target.value;
      console.log(this.selectedAnswer);
      // alert('Correct answer is' + this.questions[this.answerIndex]['correctAnswer'] );
      this.answerIndex++;
      this.isHidden = true;
      if (this.selectedAnswer == this.questions[this.index]["correctAnswer"]) {
        this.correctAnswerCount++;
        this.isHiddenCorrectAnswerValidation = true;
      } else {
        this.wrongAnswerCount++;
        this.isHiddenWrongAnswerValidation = true;
      }
      console.log(this.correctAnswerCount + " " + this.wrongAnswerCount);
    },
    nextQuestion() {
      this.index++;
      this.selectedAnswer = "";
      console.log(this.selectedAnswer);
      this.isHidden = false;
      this.isHiddenCorrectAnswerValidation = false;
      this.isHiddenWrongAnswerValidation = false;
    },
    uncheck: function () {
      this.selectedAnswer = "";
    },
    showResults() {
      this.index++;
    },
    resetQuiz() {
      this.index = 0;
      this.answerIndex = 0;
      this.correctAnswerCount = 0;
      this.wrongAnswerCount = 0;
      this.selectedAnswer = "";
      this.isHidden = false;
      this.isHiddenCorrectAnswerValidation = false;
      this.isHiddenWrongAnswerValidation = false;
      this.count = 3;
    },
  },
};
</script>