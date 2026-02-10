// script.js

// Functionality for the Valentine's Day quiz
function startQuiz() {
    // Code to start the quiz
    console.log('Quiz started!');
}

// Functionality for animations
function animateHearts() {
    // Code for heart animations
    console.log('Hearts are dancing!');
}

// Functionality for button interactions
document.getElementById('startButton').addEventListener('click', startQuiz);

// Functionality for music controls
const audio = new Audio('valentines-music.mp3');

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

// Event listeners for music controls
document.getElementById('playButton').addEventListener('click', playMusic);
document.getElementById('pauseButton').addEventListener('click', pauseMusic);