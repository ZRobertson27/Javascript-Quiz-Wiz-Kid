// Code below influences by https://www.sitepoint.com/simple-javascript-quiz/
var quizContainer = document.getElementById('quiz');
var quizQuestions = [
    {
        question: "Which of the following elements should be used to link your JAVASCRIPT to your HTML?",
        answers: {
            a: "<link>",
            b: "<javascript>",
            c: "<href>",
            d: "<script>"
        },
        correctAnswer: "d"
    },
    {
        question: "An array can only contain numbers.",
        answers: {
            a: "true",
            b: "false"
        },
        correctAnswer: "b"
    }
]
console.log(quizQuestions);



function buildQuiz(){
    // variable to store the HTML output
    var output = [];

    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
            //variable to store list of possible answers
            var answers = [];

            for(letter in currentQuestion.answers){}
        }
    )
}

















/*
<div class="playarea">
        <!--List of questions to appear on quiz-->
        <div class="questions">
            <div id="q1">
                <h2>Which of the following elements should be used to link your JAVASCRIPT to your HTML?</h2>
                <ul>
                    <li>link</li>
                    <li>href</li>
                    <li>js.script</li>
                    <li>script</li>
                </ul>
            </div> 

            <div id="q2">
                <h2>An array can only contain string items</h2>
                <ul>
                    <li>True</li>
                    <li>False</li>
                </ul>
            </div>

            <div id="q3">
                <h2>Question</h2>
                <ul>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                </ul>
            </div>

            <div id="q4">
                <h2>Question</h2>
                <ul>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                </ul>
            </div>

            <div id="q5">
                <h2>Question</h2>
                <ul>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                <li>?</li>
                </ul>
            </div>

            <div id="q6">
                <h2>Question</h2>
                <ul>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                </ul>
            </div>

            <div id="q7">
                <h2>Question</h2>
                <ul>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                </ul>
            </div>

            <div id="q8">
                <h2>Question</h2>
                <ul>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                    <li>?</li>
                </ul>
            </div>
        </div>
        */