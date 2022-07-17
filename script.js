//flash card arrays
const htmlCards = []
const cssCards = []
const jsCards = []

//dom targets
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
showAnswer.addEventListener('click', displayAnswer)

//function to show answer and ref documents 
function displayAnswer(){
    flashAnswer.style.visibility = 'visible'
    flashReference.style.visibility = 'visible'
    flashCard.removeChild(showAnswer)
}

function someListener(event){
    var element = event.target;
    var randomhtml = Math.floor((Math.random()*htmlCards.length));
    var randomcss = Math.floor((Math.random()*htmlCards.length));
    var randomjs = Math.floor((Math.random()*htmlCards.length));


    if(element.id == 'html'){
        let i = randomhtml
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
        let i = randomcss
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
    }else if (element.id == 'javascript'){
        let i = randomjavascript
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
    }
}

function getHtmlCard(){

}

//push to HTML array (htmlCards)
function htmlCard(language, question, answer, reference){
    this.language = language;
    this.question = question;
    this.answer = answer;
    this.reference = reference;
    htmlCards.push(this)
}

//push to CSS array (cssCards)
function cssCard(language, question, answer, reference){
    this.language = language;
    this.question = question;
    this.answer = answer;
    this.reference = reference;
    cssCards.push(this)
}

//push to javascript array (jsCards)
function jsCard(language, question, answer, reference){
    this.language = language;
    this.question = question;
    this.answer = answer;
    this.reference = reference;
    jsCards.push(this)
}


//      new htmlCard('','','','')
//      new cssCard('','','','')
//      new jsCard('','','','')


//ADD NEW HTML CARDS HERE HTMLCARDADD
//      new htmlCard('','','','')
new htmlCard(   'HTML', 
                'How do you link a CSS stylesheet to html?',
                '<link rel="stylesheet" href="style.css">',
                'https://www.w3schools.com/tags/tag_link.asp'
)
new htmlCard(   'HTML', 
                'What is the correct HTML element for the largest heading?',
                '<h1>',
                'https://www.w3schools.com/tags/tag_hn.asp'
)

new htmlCard(   'HTML', 
                'How do you define important text?',
                '<strong>',
                'https://www.w3schools.com/tags/tag_strong.asp'
)
new htmlCard(   'HTML',
                'How do you link an external JavaScript file?',
                '<script src="myscripts.js"></script>',
                'https://www.w3schools.com/tags/att_script_src.asp')
new htmlCard('','','','')
new htmlCard('','','','')
new htmlCard('','','','')
new htmlCard('','','','')

//ADD NEW CSS CARDS HERE CSSCARDADD
//      new cssCard('','','','')
new cssCard('','','','')
new cssCard('','','','')
new cssCard('','','','')
new cssCard('','','','')
new cssCard('','','','')
new cssCard('','','','')
new cssCard('','','','')
new cssCard('','','','')

//ADD NEW JAVASCRIPT CARDS HERE JSCARDADD
//      new jsCard('','','','')
new jsCard('','','','')
new jsCard('','','','')
new jsCard('','','','')
new jsCard('','','','')
new jsCard('','','','')
new jsCard('','','','')
new jsCard('','','','')
new jsCard('','','','')
