let easy = document.getElementById('easy-game')
let medium = document.getElementById('medium-game')
let hard = document.getElementById('hard-game')
let instructions = document.getElementById('instructions')
let gameContainerElement = document.getElementById('game-container')

let shuffledQuestions, currentQuestionIndex

easy.addEventListener('click', runGame)
medium.addEventListener('click', runGame)
hard.addEventListener('click', runGame)

function runGame() {
    console.log('started')
    instructions.classList.add('hide')
    gameContainerElement.classList.remove('hide')
    displayQuestion()
}

function displayQuestion() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayEasyQuestion() {
    
}

function displayMediumQuestion() {

}

function displayHardQuestion() {

}

const questions = [
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