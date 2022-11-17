let goButton = document.getElementById('goButton')
let quizContainer = document.getElementById('quizContainer')
let timerEl = document.getElementById('countdown')
let htmlQuestion = document.getElementById('question')
let question
let answerButtons = document.getElementById('answer-buttons')
let questions = [
    {
        question: "var fruits = [apples, bannanas, pears, oranges] Which of the following will pring 'pears' to the console?",
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
    }
]

// Starts quiz and timer and clicking Go.
goButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log("The quiz has begun!");
    startTimer()
    goButton.classList.add('hide');
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    quizContainer.classList.remove('hide');
    showNextQuestion()
}
// Time counts down from 75 seconds to 1 second. Stops at 0.
function startTimer() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining!';
            timeLeft--;
        } else if (timeLeft===1) {
            timerEl.textContent = timeLeft + ' second remaining!'
            timeLeft--;
        } else {
            timerEl.textContent = timeLeft;
        }
    }, 1000);
}

function showNextQuestion() {
    theQuestion(randomQuestion[currentQuestion])
}

function theQuestion(question) {
    htmlQuestion.innerText = question.question
    question.answers.forEach(answers => {
        let button = document.createElement('button')
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
    console.log("Answer selected");
    if (answers.correct) {
        console.log("Wrong");
    }
}











