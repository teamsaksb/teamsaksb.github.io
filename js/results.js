import {results, mbtis} from "./data.js";

const mbti = new URLSearchParams(location.search).get("mbti");

console.log(location.search);

console.log(mbti)

// 1. 가져온 mbti 유형의 번호를 출력
// ?mbti=isfp ===> 2인 것을 출력

console.log(mbtis[mbti])

// 2. 위의 resuls 중 1번 결과에 해당하는 자료를 출력

console.log(results[mbtis[mbti]]);
let result = results[mbtis[mbti]];

// 3. 그 중 결과의 제목을 출력

console.log(results[mbtis[mbti]].title);

// 4. querySelector로 변수 선언
// --- innerHTML로 넣어주기
const title = 
    document.querySelector('.page-title');

const resultCharacter = 
    document.querySelector('.character');

const boxes = 
    document.querySelectorAll('.box');

const jobs = 
    document.querySelectorAll('.job');

const lectureUrl = 
    document.querySelector('.lecture');

const lectureImage =
    document.querySelector('.lecture img');

title.innerHTML = result.title;
resultCharacter.src = result.character;
boxes.forEach(function (boxEl, index) {
    boxEl.innerHTML = result.results[index];
});
jobs.forEach((job, index) => {
    job.innerHTML = result.jobs[index];
});

lectureImage.src = result.lectureImg;
lectureUrl.href = result.lectureUrl;