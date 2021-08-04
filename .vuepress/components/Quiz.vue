<template>
    <div>
        <h4> Simple Quiz - 3 Questions </h4>
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
                <h5 v-if="isHiddenCorrectAnswerValidation"> Yaay!! Correct Answer &#128512 !!   </h5>
                <h5 v-if="isHiddenWrongAnswerValidation"> Oh no 😢. Correct Answer is {{ questions[answerIndex-1]['correctAnswer']}}  </h5>
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

                    <h5>If you get all the answers right in the first attempt, take a screenshot and tag me @easymalayalam. 
                        P.S, if your account is private, inbox me the screenshot </h5>
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
            activeColor: 'red',
            selectedAnswer: '',
            questions: [
                {
                    question: "How do you say 'My Car' in Malayalam",
                    answers: {a: 'Ente Car', b: 'Ninte/Ningalude Car', c: 'Onte Car', d: 'Aarudeyo Car'},
                    correctAnswer: 'a'
                },
                {
                    question: "How do you say 'your Car' in Malayalam",
                    answers: {a: 'Onte Car', b: 'Aarudeyo Car', c: 'Ninte/Ningalude Car', d: 'Ente Car'},
                    correctAnswer: 'c'
                },
                {
                    question: "How do you say 'our car' in Malayalam",
                    answers: {a: 'Achante Car', b: 'Ninte/Ningalude Car', c: 'Ente Car', d: 'Nammalude/Njangalude Car'},
                    correctAnswer: 'd'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            console.log(this.selectedAnswer)
            // alert('Correct answer is' + this.questions[this.answerIndex]['correctAnswer'] );
            this.answerIndex++;
            this.isHidden = true;
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
            {
                this.correctAnswerCount++;
                this.isHiddenCorrectAnswerValidation = true;
            }
            else
            {
                this.wrongAnswerCount++;
                this.isHiddenWrongAnswerValidation = true;

            }
            console.log(this.correctAnswerCount+" "+this.wrongAnswerCount);
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = '';
            console.log(this.selectedAnswer)
            this.isHidden = false;
            this.isHiddenCorrectAnswerValidation = false;
            this.isHiddenWrongAnswerValidation = false;
        },
        uncheck: function() {
            this.selectedAnswer = ''
        },
        showResults() {
            this.index++;
        },
        displayAnswer() {
            // this.isHidden = true;
        }
    }
    
}
</script>