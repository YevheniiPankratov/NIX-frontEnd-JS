const quizQuestions = [
    {
      id: 0,
      title: 'Почему вода в море кажется синей?',
      answers: ['A: Из-за водорослей', 'B: Из-за цвета дна', 'C: Вода отражает небо', 'D: Из-за растворенной соли'],
      rightAnswer: 2,
      money: 100
    },
    {
      id: 1,
      title: 'Чего не может торнадо?',
      answers: [ 'A: Стоять на месте', 'B: Поднять в воздух автомобиль', 'C: Вырвать с корнями дерево', 'D: Разрушить здание'],
      rightAnswer: 0,
      money: 200
    },
    {
      id: 2,
      title: 'Раньше было модно носить вместо очков...',
      answers: ['A: Микроскоп', 'B: Бинокль', 'C: Телескоп', 'D: Монокль'],
      rightAnswer: 3,
      money: 300
    },
    {
      id: 3,
      title: 'С каким цветом ассоциируится JavaScript?',
      answers: ['A: Желтый', 'B: Красный', 'C: Белый', 'D: Фиолетовый'],
      rightAnswer: 0,
      money: 500
    },
    {
      id: 4,
      title: 'Какой цвет на флагах государств обозначает смелость и мужество?',
      answers: ['A: Коричневый', 'B: Красный', 'C: Зеленый', 'D: Синий'],
      rightAnswer: 1,
      money: 1000
    },
    {
      id: 5,
      title: 'Какая из перечисленных рек — самая длинная?',
      answers: ['A: Нева', 'B: Миссисипи', 'C: Нил', 'D: Волга'],
      rightAnswer: 2,
      money: 2000
    },
    {
      id: 6,
      title: 'Какой по счету от Солнца является Земля?',
      answers: ['A: Первая', 'B: Пятая', 'C: Вторая', 'D: Третья'],
      rightAnswer: 3,
      money: 4000
    },
    {
      id: 7,
      title: 'Чему равно отношение пути к времени?',
      answers: ['A: Расстоянию', 'B: Скорости', 'C: Производительности', 'D: Силе'],
      rightAnswer: 1,
      money: 8000
    },
    {
      id: 8,
      title: 'Как называется прямая, ограниченная точками?',
      answers: ['A: Луч', 'B: Плоскость', 'C: Биссектриса', 'D: Отрезок'],
      rightAnswer: 3,
      money: 16000
    },
    {
      id: 9,
      title: 'Сколько звуков в слове «конь»?',
      answers: ['A: Четыре', 'B: Три', 'C: Пять', 'D: Два'],
      rightAnswer: 1,
      money: 32000
    },
    {
      id: 10,
      title: 'Каким животным было Серебряное копытце?',
      answers: ['A: Олень', 'B: Лось', 'C: Козел', 'D: Антилопа'],
      rightAnswer: 2,
      money: 64000
    },
    {
      id: 11,
      title: 'Какой предмет хранила говорящая голова из поэмы «Руслан и Людмила»?',
      answers: ['A: Меч', 'B: Топор', 'C: Скатерть-самобранка', 'D: Не было там такого'],
      rightAnswer: 0,
      money: 125000
    },
    {
      id: 12,
      title: 'Какой из этих цветов больше всего любят комары?',
      answers: ['A: Желтый', 'B: Белый', 'C: Синий', 'D: Красный'],
      rightAnswer: 2,
      money: 250000
    },
    {
      id: 13,
      title: 'Если смешать краску красного и синего цвета, получится...',
      answers: ['A: Зеленый', 'B: Желтый', 'C: Фиолетовый', 'D: Черный'],
      rightAnswer: 0,
      money: 500000
    },
    {
      id: 14,
      title: 'Как называется активная оболочка Земли, которая населена живыми организмами?',
      answers: ['A: Атмосфера', 'B: Гидросфера', 'C: Земная кора', 'D: Биосфера'],
      rightAnswer: 3,
      money: 1000000
    }
  ];

let references = {
    startBtn: document.querySelector('#start-btn'),
    main: document.querySelector('main'),
    mn: document.querySelector('.mn'),
    fH: document.querySelector('.f-h'),
    sH: document.querySelector('.s-h'),
    tH: document.querySelector('.t-h'),
    optionsList: document.querySelector('.options'),
    optionElement: document.querySelector('.option'),
    questionTitle: document.querySelector('.question'),
    numberOfquestion: document.querySelector('.number-of-question'),
    quizOverModal: document.querySelector('.quiz-over-modal'),
    sec: document.querySelector('.sec'),
    correctAnswer: document.querySelector('[data-value="correct-answer"]'),
    totalMoney: document.querySelector('[data-value="total-money"]'),
    numberOfAllquestion2: document.querySelector('[data-value="number-of-all-questions-finish"]'),
    buttonFinish: document.querySelector('[data-value="close-modal-finish"]'),
    buttonTryAgain: document.querySelector('[data-value="btn-try-again"]'),
    helpForUser: document.querySelector('[data-value="answer"]'),
    taskModal: document.querySelector('.task-modal'),
    closeModal: document.querySelector('[data-value="close-modal"]'),
    timer: document.querySelector('.timer'),
    bank: document.querySelector('[data-value="bank"]'),
}

let state = {
  score: 0,
  indexQuestionId: 0,
  indexOfPage: 0,
  indexOfQuestion: 0,
  secondsLimit: 60,
  completedAnswers: [],
  numberQuest: 16
}

let timer60sec;

references.startBtn.addEventListener('click', startQuiz)
references.fH.addEventListener('click', firstHelp)
references.sH.addEventListener('click', secondHelp)
references.tH.addEventListener('click', thirdHelp)
references.optionsList.addEventListener('click', checkAnswers);
references.buttonFinish.addEventListener('click', reloadPage)
references.buttonTryAgain.addEventListener('click', reloadPage)
references.closeModal.addEventListener('click', closeModal)

function startQuiz () {
  references.main.firstElementChild.classList.add('none')
  references.main.children[1].classList.remove('none')
  startGame()
}

function backgroundForUniqLi (state,n) {
  document.querySelectorAll('.list-win ol li').forEach(item => {
    item.style.backgroundColor = 'black'
    item.style.color = 'white'
  })
  document.querySelectorAll('.list-win ol li:nth-child(5n+1)').forEach(item => item.style.color = 'yellow')
  document.querySelector(`.list-win ol li:nth-child(${state-n})`).style.backgroundColor = 'white'
  document.querySelector(`.list-win ol li:nth-child(${state-n})`).style.color = 'black'
}

function startGame () {
  const listOfQuestions = renderListOfQuestions(quizQuestions[state.indexOfQuestion].answers);
  references.questionTitle.innerHTML = quizQuestions[state.indexOfQuestion].title;
  references.optionsList.innerHTML = listOfQuestions;
  state.indexQuestionId = 0;
  references.numberOfquestion.innerHTML = state.indexOfPage + 1;
  state.indexOfPage += 1;
  state.secondsLimit = 61;
  timer60sec = setInterval(tick, 1000)
  enableOpts();
  backgroundForUniqLi(state.numberQuest, 1)
  state.numberQuest -= 1
};

function tick(){
  if (state.secondsLimit == 1) {
    references.timer.innerHTML = 'К сожалению вы не успели ответить на вопрос(('
    clearInterval(timer60sec)
      references.helpForUser.innerHTML = 'Вы не успели ответить на вопрос! Для вас игра окончена!'
      references.taskModal.classList.add('show');
      references.tH.classList.add('disabled');
      references.closeModal.addEventListener('click', () => {
        reloadPage()
      })
  } else {
    references.sec.innerHTML = (--state.secondsLimit)
  }
}

function choiceOfNextQuestion() {
  if (state.indexOfPage == quizQuestions.length) {
    quizOver();
    clearInterval(timer60sec)
  } else {
    if (state.completedAnswers.length >= 0) {
      state.indexOfQuestion += 1;
      clearInterval(timer60sec)
      startGame()
    }
  }
  state.completedAnswers.push(state.indexOfQuestion);
  userBank()
}


function quizOver() {
  references.quizOverModal.classList.add('show');
  references.numberOfAllquestion2.innerHTML = quizQuestions.length;
  references.correctAnswer.innerHTML = state.score;
  if(state.score < 5) {
    references.totalMoney.innerHTML = 0;
  } else if (state.score >= 5 && 10 > state.score) {
    references.totalMoney.innerHTML = 1000;
  } else if (state.score >= 10 && 15 > state.score){
    references.totalMoney.innerHTML = 32000;
  } else if (state.score == 15) {
    references.totalMoney.innerHTML = 1000000;
  }
}

function userBank() {
  let bank;
  if(state.completedAnswers.length == 5){
    bank = quizQuestions[4].money
     references.bank.innerHTML = bank
   }
   if (state.completedAnswers.length == 10){
    bank = quizQuestions[9].money
    references.bank.innerHTML = bank
   } 
}

function checkAnswers(event) {
  if (event.target.tagName == 'LI') {
    if (event.target.dataset.id == quizQuestions[state.indexOfQuestion].rightAnswer) {
      enableOpts();
      setTimeout(() => {
        event.target.classList.add('correct');
        state.score += 1;
      clearInterval(timer60sec)
      setTimeout(() => {
        choiceOfNextQuestion();
    }, 2000);
      }, 1000)
      } else {
      setTimeout(() => {
        clearInterval(timer60sec)
        let rig = document.querySelector(`[data-id="${quizQuestions[state.indexOfQuestion].rightAnswer}"]`)
          event.target.classList.add('wrong');
          rig.classList.add('correct')
          disabledOpts();
          setTimeout(() => {
            quizOver()
          }, 1000);
      }, 2000)
        
      }}}


function reloadPage() {
  window.location.reload();
}

function randomNumbers(min, max) {
  let randomN = min + Math.random() * (max + 1 - min);
  return Math.floor(randomN);
}

function firstHelp() {
  let g = quizQuestions[state.indexOfQuestion].rightAnswer
  references.frth = document.querySelectorAll('.frtH')
  references.frth.forEach(item => {
    item.remove()
  })
  console.log(g);
  if (g == 0 || g == 2) {
    references.optionsList.appendChild(references.frth[g])
    randomQ()
  } else {
    randomQ()
    references.optionsList.appendChild(references.frth[g])
  }
  
  function randomQ () {
    let randomQuest = randomNumbers(0, 3)
    if(randomQuest !== g) {
        references.optionsList.appendChild(references.frth[randomQuest])
      } else if (randomQuest === g) {
        randomQ()
      }
  }
  references.fH.classList.add('disabled');
}

function secondHelp() {
  let lengthQuest = document.querySelectorAll('[data-id]').length - 1
  let randomHelp = randomNumbers(0, lengthQuest)
  references.helpForUser.innerHTML = quizQuestions[state.indexOfQuestion].answers[randomHelp];
  references.taskModal.classList.add('show');
  references.sH.classList.add('disabled');
}

function thirdHelp() {
  let max = 100;
  let arrRandom;
  let lengthQuest = document.querySelectorAll('[data-id]').length;
 
  if(lengthQuest == 4) {
    let r1 = {
      num: randomNumbers(1, max - 3),
      title: 'A'
    };
    let r2 = {
      num: randomNumbers(1, max - 2 - r1.num),
      title: 'B'
    } 
    let r3 = {
      num: randomNumbers(1, max - 1 - r1.num - r2.num),
      title: 'C'
    }
    let r4 = {
      num: max - r1.num - r2.num - r3.num,
      title: 'D'
    }
    arrRandom = [r1, r2, r3, r4]
  } else if (lengthQuest == 2) {
    
    let el1 = +document.querySelectorAll('[data-id]')[0].getAttribute('data-id')
    let el2 = +document.querySelectorAll('[data-id]')[1].getAttribute('data-id')
    
    function checkDataAtr(el) {
      switch (el){
        case 0: return 'A'; 
        case 1: return 'B'; 
        case 2: return 'C'; 
        case 3: return 'D'; 
      }
    }

    let r1 = {
      num: randomNumbers(1, max),
      title: checkDataAtr(el1)
    };
    let r2 = {
      num: max - r1.num,
      title: checkDataAtr(el2)
    } 
    arrRandom = [r1, r2]
  }
  
  const progressList = renderProgressList(arrRandom)
  references.helpForUser.innerHTML = progressList
  references.taskModal.classList.add('show');
  references.tH.classList.add('disabled');
}

function enableOpts() {
  references.optionsList.classList.remove('correct', 'disabled', 'wrong');
};

const disabledOpts = () => {
  references.optionsList.classList.add('disabled');
};

function closeModal () {
  references.taskModal.classList.remove('show');
}

function renderListOfQuestions(questions) {
  return questions
    .map(
      item =>
        `<li class="option option-items card frtH col-5" data-id="${state.indexQuestionId++}">
              ${item}
          </li>`,
    )
    .join('');
}

function renderProgressList(arr) {
  return arr
    .map(
      item =>
        `${item.title} ${item.num}%
        <div class="progress">
          <div class="progress-bar bg-success" role="progressbar" style="width: ${item.num}%" aria-valuenow="${item.num}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`,
    )
    .join('');
}