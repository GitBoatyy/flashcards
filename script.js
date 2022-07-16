const flashCards = []

const flashCard = document.querySelector('.flashcard')
const flashLanguage = document.createElement('div')
const flashQuestion = document.createElement('div')
const flashAnswer = document.createElement('div')
const flashReference = document.createElement('div')
document.addEventListener( "click", someListener );



function someListener(event){
    var element = event.target;
    if(element.id == 'html'){
        console.log(element)
        console.log(flashCards)
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

const htmlcard1 = new Card( 'HTML', 
                            'How do you link a CSS stylesheet to html?',
                            '<link rel="stylesheet" href="style.css">',
                            'https://www.w3schools.com/tags/tag_link.asp'
)
const htmlcard2 = new Card( 'HTML', 
                            'How do you link a CSS stylesheet to html?',
                            '<link rel="stylesheet" href="style.css">',
                            'https://www.w3schools.com/tags/tag_link.asp'
)

