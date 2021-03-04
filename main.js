'use strict';

const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');
const chatBoxContainer = document.querySelector('.chat__box__container');
const time = document.querySelector('.time');

// 현재 시간
function clock() {
  const timeNow = new Date();
  const hour = timeNow.getHours();
  const minute = timeNow.getMinutes();
  if (timeNow.getMinutes()) time.innerText = `${hour} : ${minute}`;
}

clock();
setInterval(clock, 1000);

function onAdd() {
  const text = input.value;
  if (text === '') {
    return;
  }

  const chat = createBox(text, 'chat__box box__me', 'me');
  chatBoxContainer.appendChild(chat);

  chat.scrollIntoView();

  input.value = '';
  input.focus();

  setTimeout(() => {
    chatAnswer();
  }, 700);
}

function createBox(text, className, chatter) {
  const chatBox = document.createElement('li');
  chatBox.setAttribute('class', className);
  chatBox.innerHTML = `
    <div class="chatting ${chatter}">
        <span>${text}</span>
    </div>
  `;
  return chatBox;
}

// 미리 저장되어있는 대답들
let index = 0;
const answer = [
  '안녕하세요!',
  '반가워요!',
  '오늘 하루는 어땠어요?',
  '저는 행복한 하루를 보냈어요 :)',
  '고생 많았어요. 정말!',
  '건강이 최고예요. 정말로요.',
  '건강하세요.',
  '행복하세요!',
  '고마워요. :)',
  '다음에 또 만나요!',
];

function chatAnswer() {
  if (index === answer.length) {
    return (index = 0);
  }
  const chatAnother = createBox(
    answer[index++],
    'chat__box box__another',
    'another'
  );
  chatBoxContainer.appendChild(chatAnother);
  chatAnother.scrollIntoView();
}

// addBtn 클릭 또는 Enter키 눌렀을 때 실행
addBtn.addEventListener('click', () => {
  onAdd();
});

document.addEventListener('keypress', event => {
  if (event.key !== 'Enter') {
    return;
  }
  onAdd();
});
