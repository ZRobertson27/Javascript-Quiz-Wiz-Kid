let goButton = document.getElementById('goButton')
let quizContainer = document.getElementById('quizContainer')
let htmlQuestion = document.getElementById('question')
let answerButtons = document.getElementById('answer-buttons')
let randomQuestion 
let currentQuestion
let question
let answers
let questions = [
    
    {
        question: "var fruits = [apples, bannanas, pears, oranges]. Which of the following will print 'pears' to the console?",
        answers: [
            {text: 'console.log(fruits[1]);', correct: false},
            {text: 'console.log(fruits[2]);', correct: true},
            {text: 'console.log(fruits[3]);', correct: false},
            {text: 'console.log(fruits[4]);', correct: false}
        ]
    },
    {
        question: "An array can only store numbers.",
        answers: [
            {text: 'true', correct: false},
            {text: 'false', correct: true}
        ]
    },
    {
        question: "Which of the following is the correct way to do a single line comment in javascript?",
        answers: [
            {text: '//comment here.', correct: true},
            {text: '*comment here.', correct: false},
            {text: '((comment here.))', correct: false},
            {text: 'You simply cannot', correct: false}
        ]
    },
    {
        question: "Which of the following is not a Primitive Type",
        answers: [
            {text: 'function', correct: true},
            {text: 'number', correct: false},
            {text: 'boolean', correct: false},
            {text: 'string', correct: false}
        ]
    },
    {
        question: "Aaaaaaaaaaaaaaaaaaaaaaaaaa",
        answers: [
            {text: '', correct:"" },
            {text: '', correct: ""}
        ]
    },
    {
        question: "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        answers: [
            {text: '', correct: ""},
            {text: '', correct: ""}
        ]
    },
    {
        question: "Aaaaaaaaaaaaaaaaaaaaaaaaaa",
        answers: [
            {text: '', correct: ""},
            {text: '', correct: ""}
        ]
    },
    {
        question:   "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"     ,
        answers: [
            {text: '', correct: ""},
            {text: '', correct: ""}
        ]
    },
]



goButton.addEventListener('click', startQuiz)
//Function to start quiz
    //Question+answers appear
    //Timer starts counting down
    //function ends when all questions are answered or timer hits 0.

function startQuiz() {
    console.log("The quiz has begun!");
    goButton.classList.add('hide');
    randomQuestion = questions.sort(() => Math.random() - .5);
    console.log(randomQuestion);
    currentQuestion = 0;
    quizContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    theQuestion(randomQuestion[currentQuestion])
}

function resetState () {
    
    while (answerButtonsElement.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function theQuestion(question) {
    htmlQuestion.innerText = question.question
    question.answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('button')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerButtons.appendChild(button);
    })
}

function chooseAnswer(e) {

}