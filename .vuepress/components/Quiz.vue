<template>
    <div>
        <h3> Page under construction </h3>
        <h4> Simple Quiz</h4>
        <div>
            <p>Here comes the question</p>
            
            <p>{{ questions[index]['question']}}</p>
            <label 
                :for="key" 
                v-for="answer,key in questions[0]['answers']"
            >
                
                <input 
                    type="radio" 
                    :id="key" 
                    class="hidden" 
                    :value="key" 
                    @change="answered($event)"
                    :disabled="selectedAnswer != ''"
                />
               {{ answer }} 
            </label>
            <div>
                <button  
                    v-show="selectedAnswer !=''"
                    @click="nextQuestion"
                >
                    Next &gt;
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            questions: [
                {
                    question: "How do you say 'My Car' in Malayalam",
                    answers: {a: 'Bags', b: 'Watches', c: 'Shoes', d: 'Laptops'},
                    correctAnswer: 'b'
                },
                {
                    question: "How do you say 'your Car' in Malayalam",
                    answers: {a: 'Njan', b: 'Chacko', c: 'parashu', d: 'raman'},
                    correctAnswer: 'c'
                },
                {
                    question: "How do you say 'our car' in Malayalam",
                    answers: {a: 'Ethen', b: 'Thottam', c: 'Drishyam', d: 'Sagaram'},
                    correctAnswer: 'd'
                },
            ]
        }
    },
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            console.log(this.selectedAnswer)
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        }
    }
    
}
</script>