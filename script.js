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
    var randomcss = Math.floor((Math.random()*cssCards.length));
    var randomjs = Math.floor((Math.random()*jsCards.length));


    if(element.id == 'html'){
        let i = randomhtml
        flashLanguage.textContent = htmlCards[i].language
        flashQuestion.textContent = htmlCards[i].question
        flashAnswer.textContent = htmlCards[i].answer
        flashAnswer.style.visibility = 'hidden'
        flashReference.innerHTML = htmlCards[i].reference 
        flashReference.style.visibility = 'hidden'
        flashCard.appendChild(flashLanguage)
        flashCard.appendChild(flashQuestion)
        flashCard.appendChild(showAnswer)
        flashCard.appendChild(flashAnswer)
        flashCard.appendChild(flashReference)
    }else if(element.id == 'css'){
        let i = randomcss
        flashLanguage.textContent = cssCards[i].language
        flashQuestion.textContent = cssCards[i].question
        flashAnswer.textContent = cssCards[i].answer
        flashAnswer.style.visibility = 'hidden'
        flashReference.innerHTML = cssCards[i].reference 
        flashReference.style.visibility = 'hidden'
        flashCard.appendChild(flashLanguage)
        flashCard.appendChild(flashQuestion)
        flashCard.appendChild(showAnswer)
        flashCard.appendChild(flashAnswer)
        flashCard.appendChild(flashReference)
    }else if (element.id == 'javascript'){
        let i = randomjs
        flashLanguage.textContent = jsCards[i].language
        flashQuestion.textContent = jsCards[i].question
        flashAnswer.textContent = jsCards[i].answer
        flashAnswer.style.visibility = 'hidden'
        flashReference.innerHTML = jsCards[i].reference 
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


//      new htmlCard('HTML','','','<a href="">Reference</a>')
//      new cssCard('CSS','','','<a href="">Reference</a>')
//      new jsCard('JavaScript','','','<a href="">Reference</a>')


//ADD NEW HTML CARDS HERE HTMLCARDADD
//      new htmlCard(   'HTML','','','<a href="">Reference</a>')
new htmlCard(   'HTML', 
                'How do you link a CSS stylesheet to html?',
                '<link rel="stylesheet" href="style.css">',
                '<a href="https://www.w3schools.com/tags/tag_link.asp">Reference</a>'
)
new htmlCard(   'HTML', 
                'What is the correct HTML element for the largest heading?',
                '<h1>',
                '<a href="https://www.w3schools.com/tags/tag_hn.asp">Reference</a>'
                
)

new htmlCard(   'HTML', 
                'How do you define important text?',
                '<strong>',
                '<a href="https://www.w3schools.com/tags/tag_strong.asp">Reference</a>'
                
)
new htmlCard(   'HTML',
                'How do you link an external JavaScript file?',
                '<script src="myscripts.js"></script>',
                '<a href="https://www.w3schools.com/tags/att_script_src.asp">Reference</a>'
)
new htmlCard(   'HTML',
                'How do you execute a JavaScript function when an element is clicked?',
                '<element onclick="myScript">',
                '<a href="https://www.w3schools.com/jsref/event_onclick.asp">Reference</a>'
)
new htmlCard(   'HTML',
                'What does HTML stand for?',
                'Hyper Text Markup Language',
                '<a href="https://www.w3schools.com/html/html_intro.asp">Reference</a>'
)
new htmlCard(   'HTML',
                'Who is making the Web Standards?',
                'The World Wide Web Consortium',
                '<a href="https://www.w3.org/standards/">Reference</a>')
new htmlCard(   'HTML',
                'What is the <body> tag in HTML?',
                'The <body> tag defines the documents body. It contains all the contents of an HTML document. <strong>Note:</strong> There can only be one <body> element in an HTML document',
                '<a href="https://www.w3schools.com/tags/tag_body.asp#:~:text=The%20tag%20defines%20the,%2C%20tables%2C%20lists%2C%20etc.">Reference</a>'
                )

//ADD NEW CSS CARDS HERE CSSCARDADD
//      new cssCard(    'CSS','','','<a href="">Reference</a>')

new cssCard(    'CSS',
                'How do you call a universal selector? A class selector? An Id selector?',
                '*{} - universal, .class, #Id',
                '<a href="https://www.w3schools.com/cssref/css_selectors.asp">Reference</a>')

new cssCard(    'CSS',
                'How you make text stick to the right side of the element?',
                'text-align: right;',
                '<a href="https://www.w3schools.com/cssref/pr_text_text-align.ASP">Reference</a>')
new cssCard(    'CSS',
                'How do you call flexbox for an element?',
                'display: flex;',
                '<a href="https://www.w3schools.com/css/css3_flexbox.asp">Reference</a>')



//ADD NEW JAVASCRIPT CARDS HERE JSCARDADD
//      new jsCard( 'JavaScript','','','<a href="">Reference</a>')

new jsCard( 'JavaScript',
                'What is a getter method used for?',
                'Getter methods are used to access the properties of an object, withour giving access to the object.',
                '<a href="https://www.programiz.com/javascript/getter-setter">Reference</a>')
new jsCard( 'JavaScript',
                'What is a setter method used for?',
                'Setter methods are used to change the values of an object without giving access to the object ',
                '<a href="https://www.programiz.com/javascript/getter-setter">Reference</a>')
new jsCard( 'JavaScript',
                'What is a constructor?',
                'The constructor method is a special method of a class for creating and initializing an object instance of that class.',
                '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor">Reference</a>')
