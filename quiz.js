/**Timer function */
const h2 = document.querySelector("#counter");

let sec = 0;
let min = 0;
let hrs = 0;
let interval;

function changeUnit() {
  sec++;
  if (sec >= 60) {
    sec = 00;
    min++;
    if (min >= 60) {
      min = 00;
      hrs++;
    }
  }
}
function add() {
  changeUnit();
  h2.innerHTML =
    (hrs > 9 ? hrs : "0" + hrs) +
    ":" +
    (min > 9 ? min : "0" + min) +
    ":" +
    (sec > 9 ? sec : "0" + sec);
  timer();
}
function timer() {
  interval = setTimeout(add, 1000);
}

timer();

/** Quiz function */

const quizData = [
  {
    question: "What picture is 'un canard'?",
    a: `<img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60" alt="image of a dog">`,
    b: `<img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="image of a cat">`,
    c: `<img src="https://images.unsplash.com/photo-1459682687441-7761439a709d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHVja3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60" alt="image of a duck">`,
    d: `<img src="https://images.unsplash.com/photo-1595792463990-07008351a4fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlbmd1aW58ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60" alt="image of a penguin">`,
    correct: "c",
  },
  {
    question: "What is the sound of 'un chat'?",
    a: `<audio
        controls
        src="./soundEffects/Duck-quack.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>`,
    b: `<audio
        controls
        src="./soundEffects/large-dog-bark-once-sound-effect.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>`,
    c: `<audio
        controls
        src="./soundEffects/snake-hissing-sound.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>`,
    d: `<audio
        controls
        src="./soundEffects/Sound-of-cat-meowing.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>`,
    correct: "d",
  },
  {
    question: "How to say Goodmorning in French?",
    a: "Bonjour",
    b: "Bonsoir",
    c: "Bonne journée",
    d: "Hey !",
    correct: "a",
  },
];

const quiz = document.querySelector("#quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitBtn = document.querySelector("#submit");

/**Image implementation */
// myImage.src = "";
// myImage.setAttribute("alt", "abc");

/** Quiz function */
let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      // increment the score if correct
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length}¨
      questions correctly in ${h2.innerHTML}
      
      <button class="final-screen" onclick="location.reload()">Reload!</button>
      </h2>`;
    }
  }
});
