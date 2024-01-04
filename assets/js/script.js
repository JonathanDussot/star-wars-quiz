/*Declaration of various variables*/
let easy = document.getElementById('easy-game');
let medium = document.getElementById('medium-game');
let hard = document.getElementById('hard-game');
let instructions = document.getElementById('instructions');
let gameContainerElement = document.getElementById('game-container');
let shuffledQuestions, currentQuestionIndex
let questionElement = document.getElementById('question');
let answerBtnAreaElement = document.getElementById('answer-btn-area');
let nextButton = document.getElementById('next-btn');
let resultsButton = document.getElementById('results-btn');
let resultsBox = document.getElementById('results');
let totalQuestions = 10;
/*Game-type event listeners to determine which code and questions to use.*/

easy.addEventListener('click', () => runGame(easyQuestions, displayEasyQuestion));
medium.addEventListener('click', () => runGame(mediumQuestions, displayMediumQuestion));
hard.addEventListener('click', () => runGame(hardQuestions, displayHardQuestion));

/**
 * Provides the starting conditions for the game by shuffling the questions and then calling the
 * specific string of questions selected by the user.
 * Majority of code used from YouTube tutorial from Web Dev Simplified
 * provided in the credits section of README.md
 */
function runGame(questions, displayFunction) {
    instructions.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    gameContainerElement.classList.remove('hide');
    displayFunction();
}

/**
 * Starts to display easyQuestions in a shuffled order.
 * some code used from YouTube tutorial from Web Dev Simplified
 * provided in the credits section of README.md
 */

function displayEasyQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex], 'easy');
}

function displayMediumQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex], 'medium');
}

function displayHardQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex], 'hard');
}

function showQuestion(question, difficulty) {
    const currentQuestionNumber = document.getElementById('current-question');
    currentQuestionNumber.innerText = currentQuestionIndex + 1;

    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerBtnAreaElement.appendChild(button);
    });
}

/**hides next button again and returns answer boxes to original state before and replacing 
 * original buttons from HTML
 */
function resetState() {
    nextButton.classList.add('hide');
    while (answerBtnAreaElement.firstChild) {
        answerBtnAreaElement.removeChild(answerBtnAreaElement.firstChild);
    }
}
/**
 * Starts to display mediumQuestions in a shuffled order.
 * some code used from YouTube tutorial from Web Dev Simplified
 * provided in the credits section of README.md
 */

/**
 * Starts to display hardQuestions in a shuffled order.
 * some code used from YouTube tutorial from Web Dev Simplified
 * provided in the credits section of README.md
 */

/**
 * Starts to display hardQuestions
 * some code used from YouTube tutorial from Web Dev Simplified
 * provided in the credits section of README.md
 */
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
        selectedButton.style.backgroundColor = "#0c0c";
        /*selectedButton.addEventListener('click', playCorrectSound);*/
        increaseScore();
    } else {
        selectedButton.style.backgroundColor = "#c00c";
        /*selectedButton.addEventListener('click', playIncorrectSound);*/
        selectedButton.style.color = "#fff";
        increaseIncorrect();
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        resultsButton.classList.remove('hide');
    }
}

/**function playCorrectSound() {
    let correctSound = document.getElementById('correct-sound');
    correctSound.play();
    console.log('well is it working?')
}

function playIncorrectSound() {
    let incorrectSound = document.getElementById('incorrect-sound');
    incorrectSound.play();
}*/

/*Functions to increase scores, taken from Love Maths Walkthrough*/
function increaseScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function increaseIncorrect() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}
/*function for 'next button' */
nextButton.addEventListener('click',() => {
    currentQuestionIndex++;
    displayEasyQuestion();
});
/**
 * leads to the results section, displaying feedback results and messages
 */
resultsButton.addEventListener('click',() => {
    gameContainerElement.classList.add('hide');
    resultsBox.classList.remove('hide');
    restartButton.classList.remove('hide');
    let scoreTotal = document.getElementById('total');
    let finalScoreElement = document.getElementById('score');
    let finalScore = parseInt(finalScoreElement.innerText);
    let finalResult;

    if (finalScore <= 3) {
        finalResult = `
        <p id="results-message">You got ${finalScore} correct!<br> "Patience you must have, my young Padawan."</p>
        `;
    } else if (finalScore >= 4 && finalScore <= 7) {
        finalResult = `
        <p id="results-message">You got ${finalScore} correct!<br> "If no mistake have you made, yet losing you are, a different game you should play."</p>
        `;
    } else if (finalScore >= 8) {
        finalResult = `
        <p id="results-message"> You got ${finalScore} correct!<br> "Pass on what you have learned. Strength, mastery, hmm… but weakness, folly, failure, also. Yes, failure, most of all. The greatest teacher, failure is."</p>
        `;
    }
    scoreTotal.innerHTML = finalResult;
});
/*Restart button function to take user back to the first page*/
let homePage = 'index.html';
let restartButton = document.getElementById('restart-div');
restartButton.addEventListener('click', () => {
    window.location.href = homePage;
});
 /*Easy set of Questions*/
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
];
/*Medium set of Questions*/
const mediumQuestions = [
    {
        question: 'What planet is Obi-Wan Kenobi from?',
        answers: [
            { text: 'Ahch-To', correct: false },
            { text: 'Stewjon', correct: true },
            { text: 'Endor', correct: false },
            { text: 'Scarif', correct: false }
        ]
    },
    {
        question: 'What is the name of Anakin\'s stepbrother?',
        answers: [
            { text: 'Owen Lars', correct: true },
            { text: 'Wedge Antilles', correct: false },
            { text: 'Greedo', correct: false },
            { text: 'Wilhuff Tarkin', correct: false }
        ]
    },
    {
        question: 'What happened to Anakin Skywalker during the battle with Count Dooku?',
        answers: [
            { text: 'He lost his Master', correct: false },
            { text: 'He lost his honour', correct: false },
            { text: 'He lost Padmé', correct: false },
            { text: 'He lost his right arm', correct: true }
        ]
    },
    {
        question: 'Who killed Jabba?',
        answers: [
            { text: 'Luke Skywalker', correct: false },
            { text: 'Chewbacca', correct: false },
            { text: 'Princess Leia', correct: true },
            { text: 'Han Solo', correct: false }
        ]
    },
    {
        question: 'Who killed Jango Fett?',
        answers: [
            { text: 'Obi Wan kenobi', correct: false },
            { text: 'Mace Windu', correct: true },
            { text: 'Boba Fett', correct: false },
            { text: 'Yoda', correct: false }
        ]
    },
    {
        question: 'Who offered to lead the attack against the Death Star?',
        answers: [
            { text: 'Princess Leia', correct: false },
            { text: 'Luke Skywalker', correct: false },
            { text: 'Admiral Ackbar', correct: false },
            { text: 'Lando Calrissian', correct: true }
        ]
    },
    {
        question: 'According to Obi-Wan, how long had the Jedi been the guardians of peace and justice in the galaxy?',
        answers: [
            { text: 'For more than 1,000 generations', correct: true },
            { text: 'Since the clone wars', correct: false },
            { text: 'For around 100 years', correct: false },
            { text: 'For approximately 400 years', correct: false }
        ]
    },
    {
        question: 'How many meals does Jabba consume per day?',
        answers: [
            { text: 'One', correct: false },
            { text: 'Nine', correct: true },
            { text: 'Six', correct: false },
            { text: 'At least fifteen', correct: false }
        ]
    },
    {
        question: 'Who provided the voice of Darth Vader?',
        answers: [
            { text: 'Hayden Christensen', correct: false },
            { text: 'David Prowse', correct: false },
            { text: 'Sebastian Shaw', correct: false },
            { text: 'James Earl Jones', correct: true }
        ]
    },
    {
        question: 'How many estimated deaths are there in the original trilogy?',
        answers: [
            { text: 'Approximately 2,002,795,192', correct: true },
            { text: 'Approximately 202,795,192', correct: false },
            { text: 'Approximately 2,795,192', correct: false },
            { text: 'Approximately 5,002,795,192', correct: false }
        ]
    }
];
/*hard set of Questions*/
const hardQuestions = [
    {
        question: 'Who was the first character to speak in the first Star Wars film, \'A New Hope\'?',
        answers: [
            { text: 'Owen Lars', correct: false },
            { text: 'C-3PO', correct: true },
            { text: 'Princess Leia', correct: false },
            { text: 'Luke Skywalker', correct: false }
        ]
    },
    {
        question: 'What species is native to Endor?',
        answers: [
            { text: 'Gungan', correct: false },
            { text: 'Wookiee', correct: false },
            { text: 'Rodian', correct: false },
            { text: 'Ewok', correct: true }
        ]
    },
    {
        question: 'Which actor is the only one who\'s appeared in every single Star Wars movie to date?',
        answers: [
            { text: 'Carrie Fisher (Princess Leia)', correct: false },
            { text: 'Peter Mayhew (Chewbacca)', correct: false },
            { text: 'Kenny Baker (R2-D2)', correct: false },
            { text: 'Anthony Daniels (C-3PO)', correct: true }
        ]
    },
    {
        question: 'Where did the Clone Wars begin?',
        answers: [
            { text: 'Mustafar', correct: false },
            { text: 'Kamino', correct: false },
            { text: 'Geonosis', correct: true },
            { text: 'Naboo', correct: false }
        ]
    },
    {
        question: 'Who taught Lando Calrissian how to pilot a ship?',
        answers: [
            { text: 'Nien Nunb', correct: false },
            { text: 'Han Solo', correct: true },
            { text: 'Poe Dameron', correct: false },
            { text: 'Ezra Bridger', correct: false }
        ]
    },
    {
        question: 'What was the diameter of the first Death Star?',
        answers: [
            { text: '50 kilometres', correct: false },
            { text: '150 kilometres', correct: false },
            { text: '100 kilometres', correct: false },
            { text: '120 kilometres', correct: true }
        ]
    },
    {
        question: 'Count Dooku was one of how many Jedi who had left the Jedi Order?',
        answers: [
            { text: '20', correct: true },
            { text: '27', correct: false },
            { text: '52', correct: false },
            { text: '13', correct: false }
        ]
    },
    {
        question: 'What kind of weapon did Han carry?',
        answers: [
            { text: 'A BlasTech DL-22', correct: false },
            { text: 'A DL-44 pistol', correct: true },
            { text: 'A SE-14C blaster pistol', correct: false },
            { text: 'A 434 DeathHammer blaster pistol', correct: false }
        ]
    },
    {
        question: 'How old was Padmé when she was elected the Queen of Naboo?',
        answers: [
            { text: '15', correct: false },
            { text: '18', correct: false },
            { text: '9', correct: false },
            { text: '14', correct: true }
        ]
    },
    {
        question: 'On what planet did Han accept Chewbacca as his partner?',
        answers: [
            { text: 'Devaron', correct: true },
            { text: 'Lothal', correct: false },
            { text: 'Jedha', correct: false },
            { text: 'Kamino', correct: false }
        ]
    }
];