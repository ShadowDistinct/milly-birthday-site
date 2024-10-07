let choices = []; // Array to store choices
let answers = []; // Array to store quiz answers

// Function to start the story
function startStory() {
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => scene.classList.add('hidden')); // Hide all scenes
    document.getElementById('scene-intro').classList.remove('hidden'); // Show intro
}

// Function to navigate to a specific scene
function goToScene(sceneId, choice = null) {
    // Play a click sound if needed
    // const clickSound = new Audio('click-sound.mp3');
    // clickSound.play();

    // Hide all scenes
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => scene.classList.add('hidden'));

    // Show the selected scene
    document.getElementById(sceneId).classList.remove('hidden');

    // Record the user's choice if provided
    if (choice) {
        recordChoice(choice);
    }
}

// Call startStory when the page loads
window.onload = startStory;


// Function to record Milly's answers
function recordAnswer(questionIndex, answer, button) {
    // Store the answer at the corresponding question index
    answers[questionIndex] = answer; 

    // Remove 'selected' class from all buttons in the same question
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add 'selected' class to the currently clicked button
    button.classList.add('selected');
}

// Function to toggle between story and quiz sections
function showSection(section) {
    // Hide all sections
    const scenes = document.querySelectorAll('.scene');
    const sections = document.querySelectorAll('.section');

    scenes.forEach(scene => scene.classList.add('hidden'));
    sections.forEach(section => section.classList.add('hidden'));

    // Show the selected section
    document.getElementById(section).classList.remove('hidden');
}

// Function to select and highlight an answer
function selectAnswer(answer, button) {
    selectedAnswer = answer;

    // Remove outline from all buttons and add outline to the selected one
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected')); // Remove selected class from all options

    button.classList.add('selected'); // Highlight the selected button
}

function submitQuiz() {
    // Hide the quiz questions
    const questions = document.querySelectorAll('.quiz-question');
    questions.forEach(q => q.classList.add('hidden'));

    // Generate feedback based on the answers
    let feedback = '';
    if (answers[0] === 'flying') {
        feedback += 'You would soar through the sky with your superpower of flying! ';
    }
    if (answers[1] === 'paris') {
        feedback += 'We can totally see you enjoying the city lights in Paris! ';
    }
    if (answers[2] === 'cake') {
        feedback += 'Cake on your birthday? Classic choice! 🎂 ';
    }
    // Add more feedback for other questions based on the index

    // Display feedback
    document.getElementById('quiz-feedback').innerText = feedback;
    document.getElementById('quiz-result').classList.remove('hidden'); // Show results
}

// Retry quiz function to reset the quiz state
function retryQuiz() {
    selectedAnswer = null;

    // Reset the quiz display
    document.getElementById('quiz-questions').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');

    // Clear previous selections
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected')); // Remove highlight from all options
}
function restartStory() {
    // Hide all scenes
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => {
        scene.classList.add('hidden');
    });

    // Show the first scene (intro)
    const introScene = document.getElementById('scene-intro');
    introScene.classList.remove('hidden');

    // Clear any saved answers or story progress
    // Reset any variables you might use to track progress

    // Optionally, scroll to the top of the page to ensure the start is visible
    window.scrollTo(0, 0);
}

