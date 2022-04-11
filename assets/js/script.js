// the quiz questions
const quizQuestion = [{
        question: "What is the capital city of...?",
        answers: {
            a: "Answer a",
            b: "Answer b",
            c: "Answer c"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital city of...?",
        answers: {
            a: "Answer a",
            b: "Answer b",
            c: "Answer c"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital city of...?",
        answers: {
            a: "Answer a",
            b: "Answer b",
            c: "Answer c"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital city of...?",
        answers: {
            a: "Answer a",
            b: "Answer b",
            c: "Answer c"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital city of...?",
        answers: {
            a: "Answer a",
            b: "Answer b",
            c: "Answer c"
        },
        correctAnswer: "c"
    },

]

let username = document.getElementById("username");
let start = document.getElementById("start-quiz");

let question = document.getElementById("question");
let answerOne = document.getElementById("answer1");
let answerTwo = document.getElementById("answer2");
let answerThree = document.getElementById("answer3");

let submit = document.getElementById("submit-answer");
let userScore = document.getElementById("user-score");
let totalScore = document.getElementById("total-score");


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");


function runGame() {

}

function checkAnswer() {

}

function incrementScore() {

}