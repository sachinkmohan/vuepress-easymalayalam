(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{585:function(e,n,s){"use strict";s.r(n);var t={data:function(){return{index:0,answerIndex:0,count:3,correctAnswerCount:0,wrongAnswerCount:0,isHidden:!1,isHiddenCorrectAnswerValidation:!1,isHiddenWrongAnswerValidation:!1,activeColor:"red",selectedAnswer:"",questions:[{question:"What does 'ഒരു ദിവസം' mean here?",answers:{a:"a) Once upon a time",b:"b) Long back",c:"c) One fine day",d:"d) One day"},correctAnswer:"d"},{question:"Who is this famous character flying on a 'Red arrow' referred as കുന്തം in Malayalam",answers:{a:"a) Mayavi",b:"b) Luttappi",c:"c) Kuttoosan",d:"d) Dakini"},correctAnswer:"b"},{question:"What does താഴെ mean here ",answers:{a:"a) Down",b:"b) Up",c:"c) Right",d:"d) Left"},correctAnswer:"a"}]}},methods:{answered:function(e){this.selectedAnswer=e.target.value,console.log(this.selectedAnswer),this.answerIndex++,this.isHidden=!0,this.selectedAnswer==this.questions[this.index].correctAnswer?(this.correctAnswerCount++,this.isHiddenCorrectAnswerValidation=!0):(this.wrongAnswerCount++,this.isHiddenWrongAnswerValidation=!0),console.log(this.correctAnswerCount+" "+this.wrongAnswerCount)},nextQuestion:function(){this.index++,this.selectedAnswer="",console.log(this.selectedAnswer),this.isHidden=!1,this.isHiddenCorrectAnswerValidation=!1,this.isHiddenWrongAnswerValidation=!1},uncheck:function(){this.selectedAnswer=""},showResults:function(){this.index++},resetQuiz:function(){this.index=0,this.answerIndex=0,this.correctAnswerCount=0,this.wrongAnswerCount=0,this.selectedAnswer="",this.isHidden=!1,this.isHiddenCorrectAnswerValidation=!1,this.isHiddenWrongAnswerValidation=!1,this.count=3}}},i=s(54),r=Object(i.a)(t,(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("h4",[e._v(" Simple Quiz - 3 Questions ")]),e._v(" "),s("h5",[e._v(" Based on the above image, answer the following questions ")]),e._v(" "),s("div",[e.index<e.count?s("div",[s("p",[e._v(e._s(e.questions[e.index].question))]),e._v(" "),e._l(e.questions[e.index].answers,(function(n,t){return s("label",{attrs:{for:t}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswer,expression:"selectedAnswer"}],staticClass:"hidden",class:{activeColor:t==e.questions[0].correctAnswer},attrs:{type:"radio",id:t,disabled:""!=e.selectedAnswer},domProps:{value:t,checked:e._q(e.selectedAnswer,t)},on:{change:[function(n){e.selectedAnswer=t},function(n){return e.answered(n)}],click:e.uncheck}}),e._v("\n                "+e._s(n)+" "),s("br")])})),e._v(" "),e.isHidden?s("div",[e.isHiddenCorrectAnswerValidation?s("h5",[e._v(" Pwolichuuu!! Correct answer 😀 !!   ")]):e._e(),e._v(" "),e.isHiddenWrongAnswerValidation?s("h5",[e._v(" Pani pali 😢. Correct answer is "+e._s(e.questions[e.answerIndex-1].correctAnswer)+"  ")]):e._e()]):e._e(),e._v(" "),s("div",[s("button",{directives:[{name:"show",rawName:"v-show",value:""!=e.selectedAnswer&&e.index<e.count-1,expression:"selectedAnswer !='' && index < count-1"}],on:{click:e.nextQuestion}},[e._v("\n                Next >\n            ")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:""!=e.selectedAnswer&&e.index==e.count-1,expression:"selectedAnswer !='' && index == count-1"}],on:{click:e.showResults}},[e._v("\n                Finish\n            ")])])],2):s("div",[s("h2",[e._v("Results")]),e._v(" "),s("div",[s("h4",[e._v("You are one awesome Malayalee for completing the quiz!! ")]),e._v(" "),s("p",[e._v(" Correct Answers: "+e._s(e.correctAnswerCount))]),s("p"),s("p",[e._v(" Wrong Answers: "+e._s(e.wrongAnswerCount))]),e._v(" "),s("h5",[e._v("No matter your what you score, take a screenshot and tag me @easymalayalam on Insta")])]),e._v(" "),s("div",[s("button",{on:{click:e.resetQuiz}},[e._v("\n                Take Again\n            ")]),e._v(" "),e._m(0)])])])])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("p",[n("a",{attrs:{href:"/quiz/smallquizzes"}},[this._v("Back to Quiz Home")])])}],!1,null,null,null);n.default=r.exports}}]);