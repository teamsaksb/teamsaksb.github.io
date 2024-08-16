// data.js 파일에서 const question = []만 가져옵니다.

import {questions} from "./data.js";

// console.log(question[1]);
// progress Bar의 노란색 value를 선택
const progressValueEl = 
    document.querySelector('.progress .value');

const numberEl = 
    document.querySelector(".number");

const qeustionEl = 
    document.querySelector(".question");

const choice1El = 
    document.querySelector(".choice1");

const choice2El = 
    document.querySelector(".choice2");

let currentNumber = 0; // 9까지만 존재, 마지막 번호는 체크 필요
let mbti = "";
let question = "";

function renderQuestion () {
    question = questions[currentNumber];
    numberEl.innerHTML = question.number;
    qeustionEl.innerHTML = question.question;
    choice1El.innerHTML = question.choices[0].text;
    choice2El.innerHTML = question.choices[1].text;
    progressValueEl.style.width = 
        (currentNumber+1) * 10 + '%';
}

choice1El.addEventListener("click", function(){nextQuestion(0)})
choice2El.addEventListener("click", function(){nextQuestion(1)})

function nextQuestion (choiceNumber) {
    renderQuestion();
    mbti = mbti + question.choices[choiceNumber].value;
    console.log(mbti);
    if (currentNumber === questions.length - 1) {
        location.href="./results.html?mbti=" + mbti;
    }
    currentNumber  = currentNumber + 1;
}