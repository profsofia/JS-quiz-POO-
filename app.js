// ya no importamos más data, ahora vamos a importtar newQuestions
//import {data} from './data/data.js';
//@ts-check
import { questions } from './data/questions.js';
import {Quiz} from './models/Quiz.js';
import {UI} from './models/UI.js';
console.log("Hola mundo, estoy programando en POO");
//console.log(questions);
/**
 * 
 * @param {Quiz} quiz 
 * @param {UI} ui ui objet
 */
const renderPage =(quiz, ui)=>{
  if (quiz.isEnded()){
   // console.log("fin");
    ui.showScore(quiz.score);
  } else{
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showProgress(quiz.questionIndex +1, quiz.questions.length);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
    quiz.guess(currentChoice);
    renderPage(quiz, ui);
  });
  }

 
};


function main(){
  const quiz =  new Quiz(questions);
  //console.log(quiz);
  const ui = new UI();
  renderPage(quiz, ui);
}
main();

