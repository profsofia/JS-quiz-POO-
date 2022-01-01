
export class Question{

    /**
     * 
     * @param {string} text este s el texto de la pregunta 
     * @param {string[]} choices estas son las opciones 
     * @param {string} answer esta es la respuesta de la pregunta 
     */
    constructor(text, choices, answer) {

        /**
         * @param {string} text este es un texto
         * @param {string[]} choices este un array de tipo string
         * @param {string} answer este un texto, que marca la respuesta correcta
         */
        /*la clase Question tiene como propiedades:
        this.text = 'ajksjakd';
        this.choices = ['dasdadsad', 'sadasdsdad', 'dsadsad'];
        this.answer = 'sadasdas';
        En vez de pasarlo así con valores, lo vamos a hacer de forma general, para que cuando creemos nuevos objetos tengan distintas preguntas, etc.
        por eso le pasamos al metodo constructor parámetros
        */
       this.text = text;
       this.choices = choices;
       this.answer = answer;
    }
    //acciones o métodos
    /**
     * 
     * @param {string} choice texto de la respuesta
     * @returns {boolean}
 retorna true si la respuesta es correcta 
      */
    correctAnswer(choice){
        //si la opción elegida es igual a answer entonces retorna true
        return choice=== this.answer;
    }
}



console.log('modulo de preguntas');

//instanciamos la clase Question

/*const question = new Question('¿cual es la capital de buenos aires', ['santa crus', 'la paz', 'la plata'], 'la plata');
*/

//console.log(question.correctAnswer('la plata'));