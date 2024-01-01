let easy = document.getElementById('easy-game')
let medium = document.getElementById('medium-game')
let hard = document.getElementById('hard-game')
let instructions = document.getElementById('instructions')
let gameContainerElement = document.getElementById('game-container')
let shuffledQuestions, currentQuestionIndex
let questionElement = document.getElementById('question')
let answerBtnAreaElement = document.getElementById('answer-btn-area')
let nextButton = document.getElementById('next-btn')
let resultsButton = document.getElementById('results-btn')
let resultsBox = document.getElementById('results')

easy.addEventListener('click', runGameEasy)
medium.addEventListener('click', runGameMedium)
hard.addEventListener('click', runGameHard)

function runGameEasy() {
    console.log('easystarted')
    instructions.classList.add('hide')
    shuffledQuestions = easyQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    gameContainerElement.classList.remove('hide')
    displayEasyQuestion()
}

function runGameMedium() {
    console.log('mediumstarted')
    instructions.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    gameContainerElement.classList.remove('hide')
    displayMediumQuestion()
}

function runGameHard() {
    console.log('hardstarted')
    instructions.classList.add('hide')
    shuffledQuestions = easyQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    gameContainerElement.classList.remove('hide')
    displayHardQuestion()
}

function displayEasyQuestion() {
    resetState()
    showEasyQuestion(shuffledQuestions[currentQuestionIndex])
}

function showEasyQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('answer-btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnAreaElement.appendChild(button);
    }) 
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerBtnAreaElement.firstChild) {
        answerBtnAreaElement.removeChild(answerBtnAreaElement.firstChild)
    }
}

function displayMediumQuestion() {

}

function displayHardQuestion() {

}

function selectAnswer(e) {
    let selectedButton = e.target;
    let correctOption = selectedButton.dataset.correct === 'true';
    let allOptions = answerBtnAreaElement.children.length;

    for (let i = 0; i < allOptions; i++) {
        let currentButton = answerBtnAreaElement.children[i];
        let isCorrect = currentButton.dataset.correct === 'true';

        if (isCorrect) {
            currentButton.style.backgroundColor = "#0c0c";
        }
        currentButton.classList.add('disable');
    }

    if (correctOption) {
        console.log('Well done!');
        selectedButton.style.backgroundColor = "#0c0c";
        increaseScore();
    } else {
        console.log('Oops, wrong answer!');
        selectedButton.style.backgroundColor = "#c00c";
        selectedButton.style.color = "#fff";
        increaseIncorrect();
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        resultsButton.classList.remove('hide')
    }
}

function increaseScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function increaseIncorrect() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    displayEasyQuestion()
})

resultsButton.addEventListener('click',() => {
    gameContainerElement.classList.add('hide');
    resultsBox.classList.remove('hide');
    restartButton.classList.remove('hide');
    let scoreTotal = document.getElementById('total');
    let finalScoreElement = document.getElementById('score');
    let finalScore = parseInt(finalScoreElement.innerText)
    let finalResult

    if (finalScore <= 3) {
        finalResult = `
        <p id="results-message">You got ${finalScore}!<br> "Patience you must have, my young Padawan."</p>
        `;
    } else if (finalScore >= 4 && finalScore <= 7) {
        finalResult = `
        <p id="results-message">You got ${finalScore}!<br> "If no mistake have you made, yet losing you are, a different game you should play."</p>
        `;
    } else if (finalScore >= 8) {
        finalResult = `
        <p id="results-message"> You got ${finalScore}!<br> "Pass on what you have learned. Strength, mastery, hmm… but weakness, folly, failure, also. Yes, failure, most of all. The greatest teacher, failure is."</p>
        `;
    }
    scoreTotal.innerHTML = finalResult;
})

let homePage = 'index.html';
let restartButton = document.getElementById('restart-div');
restartButton.addEventListener('click', () => {
    window.location.href = homePage;
});

const easyQuestions = [
    {
        question: 'What actress played Princess Leia in \'Star Wars: Return of the Jedi\'?',
        answers: [
            { text: 'Natalie Portman', correct: false },
            { text: 'Carrie Fisher', correct: true },
            { text: 'Keira Knightley', correct: false },
            { text: 'Daisy Ridley', correct: false }
        ]
    },
    {
        question: 'What color is R2-D2?',
        answers: [
            { text: 'black and blue', correct: false },
            { text: 'white and red', correct: false },
            { text: 'white and green', correct: false },
            { text: 'white and blue', correct: true }
        ]
    },
    {
        question: 'Which episode number is the first Star Wars film?',
        answers: [
            { text: 'V', correct: false },
            { text: 'I', correct: false },
            { text: 'VI', correct: false },
            { text: 'IV', correct: true }
        ]
    },
    {
        question: 'How long was Han Solo frozen for?',
        answers: [
            { text: 'About one month', correct: false },
            { text: 'about two years', correct: false },
            { text: 'About one year', correct: true },
            { text: 'About three days', correct: false }
        ]
    },
    {
        question: 'How many "forms of communication" is C-3P0 fluent in?',
        answers: [
            { text: 'Only 3', correct: false },
            { text: 'Over 6 million', correct: true },
            { text: 'Over 100', correct: false },
            { text: 'Over 6 thousand', correct: false }
        ]
    },
    {
        question: 'Who killed Mace Windu?',
        answers: [
            { text: 'Darth Vader', correct: false },
            { text: 'Darth Dooku', correct: false },
            { text: 'Darth Maul', correct: false },
            { text: 'Darth Sidious', correct: true }
        ]
    },
    {
        question: 'What did Luke Skywalker lose in his fight with Darth Vader?',
        answers: [
            { text: 'His right arm', correct: true },
            { text: 'His ship', correct: false },
            { text: 'His sister', correct: false },
            { text: 'His ability to write JavaScript!', correct: false }
        ]
    },
    {
        question: 'How many lightsabers does General Grievous wield in his fight with Obi-Wan on Utapau?',
        answers: [
            { text: 'Two', correct: false },
            { text: 'Four', correct: true },
            { text: 'Six', correct: false },
            { text: 'One', correct: false }
        ]
    },
    {
        question: 'According to Yoda, which of these is the path to the dark side?',
        answers: [
            { text: 'Envy', correct: false },
            { text: 'Loss', correct: false },
            { text: 'Concern', correct: false },
            { text: 'Fear', correct: true }
        ]
    },
    {
        question: 'Which James Bond actor made a cameo in \'The Force Awakens\'?',
        answers: [
            { text: 'Daniel Craig', correct: true },
            { text: 'Pierce Brosnan', correct: false },
            { text: 'Sean Connery', correct: false },
            { text: 'Barry Nelson', correct: false }
        ]
    }
]

const easyQuestions = [
    {
        question: 'What actress played Princess Leia in \'Star Wars: Return of the Jedi\'?',
        answers: [
            { text: 'Natalie Portman', correct: false },
            { text: 'Carrie Fisher', correct: true },
            { text: 'Keira Knightley', correct: false },
            { text: 'Daisy Ridley', correct: false }
        ]
    },
    {
        question: 'What color is R2-D2?',
        answers: [
            { text: 'black and blue', correct: false },
            { text: 'white and red', correct: false },
            { text: 'white and green', correct: false },
            { text: 'white and blue', correct: true }
        ]
    },
    {
        question: 'Which episode number is the first Star Wars film?',
        answers: [
            { text: 'V', correct: false },
            { text: 'I', correct: false },
            { text: 'VI', correct: false },
            { text: 'IV', correct: true }
        ]
    },
    {
        question: 'How long was Han Solo frozen for?',
        answers: [
            { text: 'About one month', correct: false },
            { text: 'about two years', correct: false },
            { text: 'About one year', correct: true },
            { text: 'About three days', correct: false }
        ]
    },
    {
        question: 'How many "forms of communication" is C-3P0 fluent in?',
        answers: [
            { text: 'Only 3', correct: false },
            { text: 'Over 6 million', correct: true },
            { text: 'Over 100', correct: false },
            { text: 'Over 6 thousand', correct: false }
        ]
    },
    {
        question: 'Who killed Mace Windu?',
        answers: [
            { text: 'Darth Vader', correct: false },
            { text: 'Darth Dooku', correct: false },
            { text: 'Darth Maul', correct: false },
            { text: 'Darth Sidious', correct: true }
        ]
    },
    {
        question: 'What did Luke Skywalker lose in his fight with Darth Vader?',
        answers: [
            { text: 'His right arm', correct: true },
            { text: 'His ship', correct: false },
            { text: 'His sister', correct: false },
            { text: 'His ability to write JavaScript!', correct: false }
        ]
    },
    {
        question: 'How many lightsabers does General Grievous wield in his fight with Obi-Wan on Utapau?',
        answers: [
            { text: 'Two', correct: false },
            { text: 'Four', correct: true },
            { text: 'Six', correct: false },
            { text: 'One', correct: false }
        ]
    },
    {
        question: 'According to Yoda, which of these is the path to the dark side?',
        answers: [
            { text: 'Envy', correct: false },
            { text: 'Loss', correct: false },
            { text: 'Concern', correct: false },
            { text: 'Fear', correct: true }
        ]
    },
    {
        question: 'Which James Bond actor made a cameo in \'The Force Awakens\'?',
        answers: [
            { text: 'Daniel Craig', correct: true },
            { text: 'Pierce Brosnan', correct: false },
            { text: 'Sean Connery', correct: false },
            { text: 'Barry Nelson', correct: false }
        ]
    }
]