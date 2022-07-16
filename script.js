const flashCards = []

const flashCard = document.querySelector('.flashcard')
const flashLanguage = document.createElement('div')
flashLanguage.classList.add('language')
const flashQuestion = document.createElement('div')
flashQuestion.classList.add('question')
const flashAnswer = document.createElement('div')
flashAnswer.classList.add('answer')
const flashReference = document.createElement('div')
flashReference.classList.add('reference')
const showAnswer = document.createElement('button')
showAnswer.classList.add('answerButton')
showAnswer.textContent= 'Show Answer'
showAnswer.id = ('answerButton')
document.addEventListener( 'click', someListener );
let flashlength = flashCards.length
showAnswer.addEventListener('click', displayAnswer)

function displayAnswer(){
    flashAnswer.style.visibility = 'visible'
    flashReference.style.visibility = 'visible'
    flashCard.removeChild(showAnswer)
}

function someListener(event){
    var element = event.target;
    var random = Math.floor((Math.random()*flashCards.length));

    if(element.id == 'html'){
        console.log(flashCards[random])
        let i = random
        flashLanguage.textContent = flashCards[i].language
        flashQuestion.textContent = flashCards[i].question
        flashAnswer.textContent = flashCards[i].answer
        flashAnswer.style.visibility = 'hidden'
        flashReference.textContent = flashCards[i].reference 
        flashReference.style.visibility = 'hidden'
        flashCard.appendChild(flashLanguage)
        flashCard.appendChild(flashQuestion)
        flashCard.appendChild(showAnswer)
        flashCard.appendChild(flashAnswer)
        flashCard.appendChild(flashReference)
    }else if(element.id == 'css'){
        console.log(element)
    }else if (element.id == 'javascript'){
        console.log(element)
    }
}

function getHtmlCard(){

}

//
function Card(language, question, answer, reference){
    this.language = language;
    this.question = question;
    this.answer = answer;
    this.reference = reference;
    flashCards.push(this)
}

new Card(   '1HTML', 
            'How do you link a CSS stylesheet to html?',
            '<link rel="stylesheet" href="style.css">',
            'https://www.w3schools.com/tags/tag_link.asp'
)

new Card(   '2HTML', 
            'How do you link a CSS stylesheet to html?',
            '<link rel="stylesheet" href="style.css">',
            'https://www.w3schools.com/tags/tag_link.asp'
)
new Card(   '3HTML', 
            'How do you link a CSS stylesheet to html?',
            '<link rel="stylesheet" href="style.css">',
            'https://www.w3schools.com/tags/tag_link.asp'
)
new Card(   '4HTML', 
            'How do you link a CSS stylesheet to html?',
            '<link rel="stylesheet" href="style.css">',
            'https://www.w3schools.com/tags/tag_link.asp'
)


