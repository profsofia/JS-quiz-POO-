//clase encargada de mostrar la interfaz
//@ts-check

export class UI{
    constructor(){}
    /**
     * 
     * @param {string} text es un texto que será renderizado 
    método para pintar la pregunta
    */

    showQuestion(text){
    const questionTitle = document.getElementById('question');
    //console.log(questionTitle);
    questionTitle.innerText = text;
    }
    /**
     * 
     * @param {string[]} choices recibe un arreglo de caracteres
     * @param {string} callback 
     */

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        //console.log(choicesContainer);
        choicesContainer.innerHTML = '';
        for (let i =0; i < choices.length; i++){
        const button = document.createElement('button')
        button.className = 'button';
        button.innerText = choices[i];
        button.addEventListener('click',() => callback(choices[i]));
        choicesContainer.append(button);

        }
    }
        /**
         * 
         * @param {number} score puntaje total
         */
    showScore(score){
     const quizEndHTML = `
     <h1>Resultado</h1>
     <h2 id="score">Tu puntaje final es: ${score}</h2>
     `
     const element = document.getElementById('quiz');
     element.innerHTML = quizEndHTML;
    }
    /**
     * 
     * @param {number} currentIndex número de pregunta actual.
     * @param {number} total suma de todas las preguntas
     */
    showProgress(currentIndex, total) {
    const element = document.getElementById('progress');
    element.innerHTML = `
    Pregunta ${currentIndex} de ${total}
    `;
    }

}