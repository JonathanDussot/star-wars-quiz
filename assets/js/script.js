let easy = document.getElementById('easy-game')
let medium = document.getElementById('medium-game')
let hard = document.getElementById('hard-game')
let instructions = document.getElementById('instructions')
let gameContainerElement = document.getElementById('game-container')
let shuffledQuestions, currentQuestionIndex
let questionElement = document.getElementsByClassName('question')
let answerBtnAreaElement = document.getElementsByClassName('answer-btn-area')

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
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = easyQuestions.question
}

function displayMediumQuestion() {

}

function displayHardQuestion() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

const easyQuestions = [
    {
        question: 'What actress played Princess Leia in \'Star Wars: Return of the Jedi\'',
        answers: [
            { text: 'Natalie Portman', correct: false },
            { text: 'Carrie Fisher', correct: true },
            { text: 'Keira Knightley', correct: false },
            { text: 'Daisy Ridley', correct: false }
        ]
    }
]