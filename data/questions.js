import {Question} from '../models/Question.js';
import {data} from './data.js';
//@ts-check
/**
 * 
 */
export const questions =  data.map(
    (question) =>{
        /**
         * Acá el map recorre el objeto que viene de data
         */
        new Question(question.question, question.choices, question.answer)
    }
    /**
 * Ejemplo de map
 * supongamos que tenemos el array [1,2,3];
 * Y hacemos [1,2,3].map(x=> x+10);
 *Esto nos va  a devolver un nuevo arreglo [11,12,13]
 */
)
