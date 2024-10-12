// Get references to the HTML elements
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit-btn');
const messageDiv = document.getElementById('message');

// Correct answer
const correctAnswer = "Mettaton";

// Add event listener for the submit button
submitBtn.addEventListener('click', checkAnswer);

// Function to check the answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim();

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        messageDiv.innerText = "Correct! Congrats.";
        // Redirect to the next level (replace 'level4.html' with your actual next level)
        setTimeout(() => {
            window.location.href = 'annoyingdogcongrats.html';
        }, 2000); // Redirect after 2 seconds
    } else {
        messageDiv.innerText = "Incorrect! Try again.";
        answerInput.value = ''; // Clear the input
        answerInput.focus(); // Focus back on the input
    }
}
