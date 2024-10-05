// Function to start the story
function startStory() {
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => scene.classList.add('hidden')); // Hide all scenes
    document.getElementById('scene-intro').classList.remove('hidden'); // Show intro
}

// Function to navigate to a specific scene
function goToScene(sceneId, choice = null) {
    // Optionally, play a click sound here
    const clickSound = new Audio('click-sound.mp3');
    clickSound.play();

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

let choices = []; // Array to store choices

function recordChoice(choice) {
    choices.push(choice); // Add the user's choice to the array
}

// Initialize the story on page load
window.onload = startStory;
function goToScene(sceneId) {
    // Hide all scenes
    var scenes = document.querySelectorAll('.scene');
    scenes.forEach(function(scene) {
      scene.classList.add('hidden');
    });
  
    // Show the selected scene
    var selectedScene = document.getElementById(sceneId);
    selectedScene.classList.remove('hidden');
  }
  
  function restartStory() {
    // Hide all scenes and show the intro again
    var scenes = document.querySelectorAll('.scene');
    scenes.forEach(function(scene) {
      scene.classList.add('hidden');
    });
  
    // Show the intro scene
    var introScene = document.getElementById('scene-intro');
    introScene.classList.remove('hidden');
  }
  