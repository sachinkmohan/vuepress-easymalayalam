(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{368:function(e,n,s){"use strict";s.r(n);var t={data:function(){return{index:0,answerIndex:0,count:3,correctAnswerCount:0,wrongAnswerCount:0,isHidden:!1,activeColor:"red",selectedAnswer:"",questions:[{question:"How do you say 'My Car' in Malayalam",answers:{a:"Ente Car",b:"Ninte/Ningalude Car",c:"Onte Car",d:"Aarudeyo Car"},correctAnswer:"a"},{question:"How do you say 'your Car' in Malayalam",answers:{a:"Onte Car",b:"Aarudeyo Car",c:"Ninte/Ningalude Car",d:"Ente Car"},correctAnswer:"c"},{question:"How do you say 'our car' in Malayalam",answers:{a:"Achante Car",b:"Ninte/Ningalude Car",c:"Ente Car",d:"Nammalude/Njangalude Car"},correctAnswer:"d"}]}},methods:{answered:function(e){this.selectedAnswer=e.target.value,console.log(this.selectedAnswer),this.answerIndex++,this.isHidden=!0,this.selectedAnswer==this.questions[this.index].correctAnswer?this.correctAnswerCount++:this.wrongAnswerCount++,console.log(this.correctAnswerCount+" "+this.wrongAnswerCount)},nextQuestion:function(){this.index++,this.selectedAnswer="",console.log(this.selectedAnswer),this.isHidden=!1},uncheck:function(){this.selectedAnswer=""},showResults:function(){this.index++},displayAnswer:function(){}}},r=s(42),o=Object(r.a)(t,(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",[s("h3",[e._v(" Page under construction ")]),e._v(" "),s("h4",[e._v(" Simple Quiz")]),e._v(" "),s("div",[e.index<e.count?s("div",[s("p",[e._v("Here comes the question")]),e._v(" "),s("p",[e._v(e._s(e.questions[e.index].question))]),e._v(" "),e._l(e.questions[e.index].answers,(function(n,t){return s("label",{attrs:{for:t}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswer,expression:"selectedAnswer"}],staticClass:"hidden",class:{activeColor:t==e.questions[0].correctAnswer},attrs:{type:"radio",id:t,disabled:""!=e.selectedAnswer},domProps:{value:t,checked:e._q(e.selectedAnswer,t)},on:{change:[function(n){e.selectedAnswer=t},function(n){return e.answered(n)}],click:e.uncheck}}),e._v("\n           "+e._s(n)+"\n\n        ")])})),e._v(" "),e.isHidden?s("div",[s("h5",[e._v(" Correct Answer is "+e._s(e.questions[e.answerIndex-1].correctAnswer)+"  ")])]):e._e(),e._v(" "),s("div",[s("button",{directives:[{name:"show",rawName:"v-show",value:""!=e.selectedAnswer&&e.index<e.count-1,expression:"selectedAnswer !='' && index < count-1"}],on:{click:e.nextQuestion}},[e._v("\n                Next >\n            ")]),e._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:""!=e.selectedAnswer&&e.index==e.count-1,expression:"selectedAnswer !='' && index == count-1"}],on:{click:e.showResults}},[e._v("\n                Finish\n            ")])])],2):s("div",[s("h2",[e._v("Results")]),e._v(" "),s("div",[s("h4",[e._v("You are one awesome Malayalee for completing the quiz!! ")]),e._v(" "),s("p",[e._v(" Correct Answers: "+e._s(e.correctAnswerCount))]),s("p"),s("p",[e._v(" Wrong Answers: "+e._s(e.wrongAnswerCount))]),e._v(" "),s("h5",[e._v("If you get all the answers right in the first attempt, take a screenshot and tag me @easymalayalam. \n                    P.S, if your account is private, inbox me the screenshot ")])])])])])}),[],!1,null,null,null);n.default=o.exports}}]);