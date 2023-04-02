'use strict';

const inputExpert = document.querySelector('#input_expert');
const inputTime = document.querySelector('#input_time');
const startButton = document.querySelector('.start_btn');
const closeButton = document.querySelector('.close_btn');
const goButton = document.querySelector('.go_btn');
const shareButton = document.querySelector('.share_btn');
const modal = document.getElementById('modal');
const loading = document.querySelector('.loading_wrap');
const results = document.querySelector('.results_wrap');

// 시작버튼 핸들러

function caculator() {
  const expertValue = inputExpert.value;
  const timeValue = inputTime.value;
  const timeValue_int = Number(timeValue);
  
  const expertResult = document.querySelector('.expert_result');
  const timeResult = document.querySelector('.time_result');

  expertResult.innerText = expertValue;
  timeResult.innerText = parseInt((10000/timeValue_int), 10);
}

function handleDisplay() {
  loading.style.display = 'block';
  results.style.display = 'none';
    setTimeout(() => {
      loading.style.display = 'none';
      results.style.display = 'flex';
  }, 1200);
}

function handleStart() {
  handleDisplay();
  setTimeout(() => {
    caculator();
  }, 1200);
}

startButton.addEventListener('click', handleStart);

// 계산하기 버튼 핸들러

function handleGo(){
  modal.style.display = 'flex';
}

// 훈련가기 버튼 핸들러

goButton.addEventListener('click', handleGo);

function handleClose() {
  modal.style.display = 'none';
}

window.onclick = (e) => {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}

closeButton.addEventListener('click', handleClose);

// 공유 버튼 핸들러

function handleShare() {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
  .then(() => {
    alert('URL이 복사되었습니다.');
  }).catch((err) => {
    console.error('복사 실패: ', err);
  });
}

shareButton.addEventListener('click', handleShare);

