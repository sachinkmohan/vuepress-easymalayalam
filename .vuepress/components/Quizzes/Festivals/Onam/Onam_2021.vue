<template>
    <div>
        <h4> Long Quiz - 10 Questions - Test your knowledge on the Onam festival </h4>
        <div>
            <div v-if="index < count">
            
            <img :src="require(`@alias/quizzes/festivals/onam2021/onam_${index}.jpg`)" alt="No image here too" height="200" width="300"/> <br>
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
                    <h4 style="color:blue;">Wish you a happy Onam 2021!!</h4>
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
      count: 10,
      correctAnswerCount: 0,
      wrongAnswerCount: 0,
      isHidden: false,
      isHiddenCorrectAnswerValidation: false,
      isHiddenWrongAnswerValidation: false,
      activeColor: "red",
      selectedAnswer: "",
      questions: [
        {
          question: "Who celebrates Onam?",
          answers: {
            a: "a) Kannadigas",
            b: "b) Maratis",
            c: "c) Malayalis",
            d: "d) Tamilians",
          },
          correctAnswer: "c",
        },
        {
          question: "Which King's return is celebrated on Onam?",
          answers: {
            a: "a) Bahubali",
            b: "b) Mahabali",
            c: "c) Bruce Lee",
            d: "d) Shivaji",
          },
          correctAnswer: "b",
        },
        {
          question: "Which God sends Mahabali to Pathalam(Hell/Underworld)?",
          answers: {
            a: "a) Lord Shiva",
            b: "b) Lord Brahma",
            c: "c) Lord Ganesh",
            d: "d) Lord Vishnu",
          },
          correctAnswer: "d",
        },
        {
          question:
            "Why was Mahabali sent to Pathalam though he was a good ruler?",
          answers: {
            a: "a) He was cruel minded",
            b: "b) He was mean",
            c: "c) He had defeated gods(Devas) and captured over the 3 worlds",
            d: "d) He wanted to go to Pathalam",
          },
          correctAnswer: "c",
        },
        {
          question:
            "Which avatar does Lord Vishnu takes himself to visit Mahabali?",
          answers: {
            a: "a) Vamana",
            b: "b) Hanuman",
            c: "c) Parashurama",
            d: "d) Kamsa",
          },
          correctAnswer: "a",
        },
        {
          question:
            "What is the traditional dress Men and Women wear on the occasion of Onam?",
          answers: {
            a:
              "a) Sherwani and Kasavu(A garment made of gold thread and other cloth) Sari",
            b:
              "b) Kurta and Kasavu(A garment made of gold thread and other cloth) Sari",
            c:
              "c) Pajama and Kasavu(A garment made of gold thread and other cloth) Sari",
            d:
              "d) Mundu and Kasavu(A garment made of gold thread and other cloth) Sari",
          },
          correctAnswer: "d",
        },
        {
          question:
            "Though onam lasts for a duration of 10 days, which day is primarily celebrated?",
          answers: {
            a: "a) Onnam Onam",
            b: "b) Randam Onam",
            c: "c) Thiruvonam",
            d: "d) Attham",
          },
          correctAnswer: "c",
        },
        {
          question:
            "People buy and wear new clothes on the occasion of Onam, what is it called?",
          answers: {
            a: "a) Dhanushkodi",
            b: "b) Onakkodi",
            c: "c) Vadakkodi",
            d: "d) Thekkodi",
          },
          correctAnswer: "b",
        },
        {
          question:
            "What is the name of the dance form, where women perform in circles around a lamp?",
          answers: {
            a: "a) Kaikkotti Kali",
            b: "b) Ottam thullal",
            c: "c) Thiruvathira Kali",
            d: "d) Puli Kali",
          },
          correctAnswer: "c",
        },
        {
          question: "What feast does Malayalees make on this day?",
          answers: {
            a: "a) Onam Sadya",
            b: "b) Onam Milk",
            c: "c) Onam Shake",
            d: "d) Onam Lassi",
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
      this.count = 3;
    },
  },
};
</script>