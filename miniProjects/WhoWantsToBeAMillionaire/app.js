const quizQuestions = [
    {
      id: 0,
      title: 'Почему вода в море кажется синей?',
      answers: ['A: Из-за водорослей', 'B: Из-за цвета дна', 'C: Вода отражает небо', 'D: Из-за растворенной соли'],
      rightAnswer: 2,
      money: 100,
      fireproofBank: false
    },
    {
      id: 1,
      title: 'Чего не может торнадо?',
      answers: [ 'A: Стоять на месте', 'B: Поднять в воздух автомобиль', 'C: Вырвать с корнями дерево', 'D: Разрушить здание'],
      rightAnswer: 0,
      money: 200,
      fireproofBank: false
    },
    {
      id: 2,
      title: 'Раньше было модно носить вместо очков...',
      answers: ['A: Микроскоп', 'B: Бинокль', 'C: Монокль', 'D: Телескоп'],
      rightAnswer: 2,
      money: 300,
      fireproofBank: false
    },
    {
      id: 3,
      title: 'С каким цветом ассоциируится JavaScript?',
      answers: ['A: Желтый', 'B: Красный', 'C: Белый', 'D: Фиолетовый'],
      rightAnswer: 0,
      money: 500,
      fireproofBank: false
    },
    {
      id: 4,
      title: 'Какой цвет на флагах государств обозначает смелость и мужество?',
      answers: ['A: Коричневый', 'B: Красный', 'C: Зеленый', 'D: Синий'],
      rightAnswer: 1,
      money: 1000,
      fireproofBank: true
    },
    {
      id: 5,
      title: 'Какая из перечисленных рек — самая длинная?',
      answers: ['A: Нева', 'B: Миссисипи', 'C: Нил', 'D: Волга'],
      rightAnswer: 2,
      money: 2000,
      fireproofBank: false
    },
    {
      id: 6,
      title: 'Какой по счету от Солнца является Земля?',
      answers: ['A: Третья', 'B: Пятая', 'C: Вторая', 'D: Первая'],
      rightAnswer: 0,
      money: 4000,
      fireproofBank: false
    },
    {
      id: 7,
      title: 'Чему равно отношение пути к времени?',
      answers: ['A: Расстоянию', 'B: Скорости', 'C: Производительности', 'D: Силе'],
      rightAnswer: 1,
      money: 8000,
      fireproofBank: false
    },
    {
      id: 8,
      title: 'Как называется прямая, ограниченная точками?',
      answers: ['A: Луч', 'B: Отрезок', 'C: Биссектриса', 'D: Плоскость'],
      rightAnswer: 1,
      money: 16000,
      fireproofBank: false
    },
    {
      id: 9,
      title: 'Сколько звуков в слове «конь»?',
      answers: ['A: Четыре', 'B: Три', 'C: Пять', 'D: Два'],
      rightAnswer: 1,
      money: 32000,
      fireproofBank: true
    },
    {
      id: 10,
      title: 'Каким животным было Серебряное копытце?',
      answers: ['A: Олень', 'B: Лось', 'C: Козел', 'D: Антилопа'],
      rightAnswer: 2,
      money: 64000,
      fireproofBank: false
    },
    {
      id: 11,
      title: 'Какой предмет хранила говорящая голова из поэмы «Руслан и Людмила»?',
      answers: ['A: Меч', 'B: Топор', 'C: Скатерть-самобранка', 'D: Не было там такого'],
      rightAnswer: 0,
      money: 125000,
      fireproofBank: false
    },
    {
      id: 12,
      title: 'Какой из этих цветов больше всего любят комары?',
      answers: ['A: Желтый', 'B: Белый', 'C: Синий', 'D: Красный'],
      rightAnswer: 2,
      money: 250000,
      fireproofBank: false
    },
    {
      id: 13,
      title: 'Если смешать краску красного и синего цвета, получится...',
      answers: ['A: Зеленый', 'B: Желтый', 'C: Фиолетовый', 'D: Черный'],
      rightAnswer: 0,
      money: 500000,
      fireproofBank: false
    },
    {
      id: 14,
      title: 'Как называется активная оболочка Земли, которая населена живыми организмами?',
      answers: ['A: Атмосфера', 'B: Гидросфера', 'C: Биосфера', 'D: Земная кора'],
      rightAnswer: 2,
      money: 1000000,
      fireproofBank: true
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
}

let state = {
  score: 0,
  money: 125000,
  indexQuestionId: 0,
  indexOfPage: 0,
  indexOfQuestion: 0,
  attempt: 1,
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
  const listOfQuestions = createListOfQuestions(quizQuestions[state.indexOfQuestion].answers);
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
    state.attempt -= 1
    clearInterval(timer60sec)
    if(state.attempt == 0) {
      alert('Вы не успели ответить на вопрос! Вы использовали право на ошибку! Больше права на ошибку нету!')
    } else if (state.attempt < 0) {
      alert('К сожалению, игра для вас окончена!')
      reloadPage()
    }
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
}

function quizOver() {
  references.quizOverModal.classList.add('show');
  references.correctAnswer.innerHTML = state.score;
  references.totalMoney.innerHTML = state.money;
  references.numberOfAllquestion2.innerHTML = quizQuestions.length;
}

function checkAnswers(event) {
  if (event.target.tagName == 'LI') {
    if (event.target.dataset.id == quizQuestions[state.indexOfQuestion].rightAnswer) {
      enableOpts();
      event.target.classList.add('correct');
      state.score += 1;
      state.money += state.money;
      clearInterval(timer60sec)
        setTimeout(() => {
          if (quizQuestions[state.indexOfQuestion].id !== 1) {
            choiceOfNextQuestion();
          } else {
            if (confirm('Хотите забрать деньги и закончить игру?')) {
              clearInterval(timer60sec)
              quizOver();
            } else {
              choiceOfNextQuestion();
            }
          }
        }, 1500);
        
      } else {
      clearInterval(timer60sec)
        state.attempt -= 1;
        event.target.classList.add('wrong');
        disabledOpts();
        setTimeout(() => {
          if (state.attempt < 0) {
            alert('К сожалению, игра для вас окончена! Вы ранее потратили своё право на ошибку!')
            reloadPage()
          } else if (state.attempt == 0) {
            alert('Вы использовали право на ошибку. И так, следующий вопрос!')
            choiceOfNextQuestion();
            enableOpts();
          }
        }, 1500);
      }}}


function reloadPage() {
  window.location.reload();
}

function firstHelp() {
  let g = quizQuestions[state.indexOfQuestion].rightAnswer
  references.frth = document.querySelectorAll('.frtH')
  references.frth.forEach(item => {
    item.classList.add('none')
  })
  references.frth[g].classList.remove('none')
  references.frth[g+1].classList.remove('none')
  references.fH.classList.add('disabled');

}

function secondHelp() {
  let randomHelp = Math.floor(Math.random() * quizQuestions.length);
  references.helpForUser.innerHTML = quizQuestions[state.indexOfQuestion].answers[randomHelp];
  references.taskModal.classList.add('show');
  references.sH.classList.add('disabled');
}

function thirdHelp() {
  let max = 100;
  let r1 = randombetween(1, max - 3);
  let r2 = randombetween(1, max - 2 - r1);
  let r3 = randombetween(1, max - 1 - r1 - r2);
  let r4 = max - r1 - r2 - r3;

  function randombetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const progressList = renderProgressList (r1,r2,r3,r4)
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

function createListOfQuestions(questions) {
  return questions
    .map(
      item =>
        `<li class="option option-items card frtH col-5" data-id="${state.indexQuestionId++}">
              ${item}
          </li>`,
    )
    .join('');
}

function renderProgressList (a,b,c,d) {
  return (`
    А ${a}%
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar" style="width: ${a}%" aria-valuenow="${a}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    В ${b}%
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" style="width: ${b}%" aria-valuenow="${b}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    С ${c}%
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" style="width: ${c}%" aria-valuenow="${c}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    D ${d}%
    <div class="progress">
      <div class="progress-bar bg-danger" role="progressbar" style="width: ${d}%" aria-valuenow="${d}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  `)
};
