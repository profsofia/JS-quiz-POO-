//@ts-check
import {Question} from './Question.js';

export class Quiz{
    questionIndex = 0;
    score = 0; 
   /**
    * 
    * @param {Question[]} questions pregunta
    */
    constructor(questions){
        this.questions = questions;
    }
    //método para saber en que pregunta está el usuario
    /**
     * 
     * @returns {Question} retorna un objeto Question
     */
    getQuestionIndex(){
     return this.questions[this.questionIndex];
    }
    //método para pasar a la siguiente pregunta
    /**
     * 
     * @param {string} answer respuesta
     */
    guess(answer){
        if (this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
     this.questionIndex++;
    }
    //método para saber cuando termina el cuestionario
    isEnded(){
        return this.questions.length === this.questionIndex;
    }
}