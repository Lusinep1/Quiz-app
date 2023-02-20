// QUESTIONS

const quizData = [
    {
        question: 'Are you searching for a Front-End Developer?',
        a: 'Yes',
        b: 'No',
        c: 'Maybe',
        d: 'Oh, go to hell',
        correct: 'a'
    }, {
        question: 'What is the most used programming language in 2020?',
        a: 'Java',
        b: 'C',
        c: 'JavaScript',
        d: 'Python',
        correct: 'c'
    }, {
        question: 'Where do you see yourself in 5 years?',
        a: 'In Ipanema Beach',
        b: 'I see myself to be a successful person and growing along with the company',
        c: 'Not here',
        d: 'My hope is that I can apply my new skills to my job with you.',
        correct: 'a'
    }, {
        question: 'Who do you like more?',
        a: 'George Clooney',
        b: 'Ben Afleck',
        c: 'Tomothy Chalamet-Malameh',
        d: 'Your mom',
        correct: 'a'
    }, {
        question: 'Would you like this quiz to end?',
        a: 'No, I want more stupid questions',
        b: 'End it if you already got my personality type',
        c: 'c',
        d: 'Yes',
        correct: 'd'
    }
];

// SELECTORS

const questionEl = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('button');



// VARIABLES

let currentQuiz = 0;
let score = 0;


// FUNCTIONS

loadQuiz(); // call everytime we submit


function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}


function getSelected() {

    const answerEls = document.querySelectorAll('.answer');

    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// EVENTS

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // todo: show right answers count
            alert('You finished the Quiz, to onboard me in your team, please call me at 094710253')
        }
    }
});
