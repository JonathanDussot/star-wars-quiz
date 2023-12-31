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
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
        if (correct) {
            console.log('well done!');
            selectedButton.style.backgroundColor = "#0c0c"
        } else {
            console.log('damn,cuz')
            selectedButton.style.backgroundColor = "#c00c"
            selectedButton.style.color = "#fff"
        }
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide')
        } else {
            resultsButton.classList.remove('hide')
        }
    }

nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    displayEasyQuestion()
})


function incrementScore() {

}

function incrementWrongAnswer() {

}

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
]