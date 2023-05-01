<template>
    <div>
        <h4> Long Quiz - 11 Questions</h4>
        <div>
            <div v-if="index < count">
            <br>
            <h2 class="has-text-info"> Question {{ index + 1}} of {{questions.length }} </h2>
            
            <br>
            <p>{{ questions[index]['question']}}</p>
            
            <br>
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
           
            <br>
           
            <div class="has-text-primary" v-if="isHidden">
                <!-- <button v-on:click="displayAnswer">Show correct answer</button> -->
                <h5 v-if="isHiddenCorrectAnswerValidation"> Pwolichuuu!! Correct answer &#128512 !!   </h5>
                <h5 v-if="isHiddenWrongAnswerValidation"> Pani pali 😢. Correct answer is {{ questions[answerIndex-1]['correctAnswer']}}  </h5>
            </div>
           
            <br>
           
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
                    <br>
            <h2 class="has-text-link">Results</h2>
            <div>
                    <br>
                    <h4 class="is-italic is-size-5">You are one awesome Malayalee for completing the quiz!! 👏 </h4>
                    <h4 style="color:blue;">Hope you are not confused anymore 😉 </h4>
                    
                    <br>
                    
                    <p class="has-text-success"> Correct Answers: {{ correctAnswerCount}}<p>
                    <p class="has-text-danger"> Wrong Answers: {{ wrongAnswerCount }}</p>

                    <br>
                    
                    <h5>No matter your what you score, take a screenshot and tag me @easymalayalam on Insta</h5>

                    <br>

            </div>
            <div>
                <button  
                    @click="resetQuiz"
                >

                    Take Again
                </button>

                    <br>
                    <br>

                <p>
                    <a href="/quiz">Back to Quiz Home</a>
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
      count: 11,
      correctAnswerCount: 0,
      wrongAnswerCount: 0,
      isHidden: false,
      isHiddenCorrectAnswerValidation: false,
      isHiddenWrongAnswerValidation: false,
      activeColor: "red",
      selectedAnswer: "",
      questions: [
        {
          question: "_____ Vishakunnu? - I am hungry ",
          answers: {
            a: "a) Ente",
b: "b) Njan",
c: "c) Enikku",
          },
          correctAnswer: "c",
        },
        {
          question: "___ Achchan. - My father",
          answers: {
            a: "a) Ente",
b: "b) Njan",
c: "c) Enikku",

          },
          correctAnswer: "a",
        },
        {
          question: "____ chiri varunilla. - I don't find it funny",
          answers: {
            a: "a) Njan",
b: "b) Ente",
c: "c) Enikku",

          },
          correctAnswer: "c",
        },
        {
          question:
            "Aaranu ____? - Who am I?",
          answers: {
            a: "a) Njan",
b: "b) Ente",
c: "c) Enikku",

          },
          correctAnswer: "a",
        },
        {
          question:
            "____ car aanu ithu - This is my car",
          answers: {
            a: "a) Enikku",
b: "b) Ente",
c: "c) Njan",

          },
          correctAnswer: "b",
        },
        {
          question:
            "____ doctor aanu. - I am a doctor",
          answers: {
            a: "a) Njan",
b: "b) Enikku",
c: "c) Ente",

          },
          correctAnswer: "a",
        },
        {
          question:
            "____ etavum valiya swapnam. - My biggest dream",
          answers: {
            a: "a) Ente",
b: "b) Enikku",
c: "c) Njan",

          },
          correctAnswer: "a",
        },
        {
          question:
            "____ 30 vayasayi. - I am 30 years old.",
          answers: {
            a: "a) Njan",
b: "b) Enikku",
c: "c) Ente",

          },
          correctAnswer: "b",
        },
        {
          question:
            "____ innale jolikku poyi. - I went work yesterday",
          answers: {
            a: "a) Njan",
b: "b) Ente",
c: "c) Enikku",


          },
          correctAnswer: "a",
        },
        {
          question: "Kashu venam ____. - I want money",
          answers: {
            a: "a) Njan",
b: "b) Ente",
c: "c) Enikku",
          },
          correctAnswer: "c",
        },
        {
          question: "____ John. - I am John",
          answers: {
            a: "a) Njan",
b: "b) Enikku",
c: "c) Ente",

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
      console.log("Inside answered");
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
      this.count;
    },
  },
};
</script>