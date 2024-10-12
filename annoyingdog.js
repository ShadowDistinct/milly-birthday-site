function checkForDog(event) {
    const result = document.getElementById("find-result");
    const nextButton = document.getElementById("next-level-btn");

    // Get the click position relative to the image
    const rect = document.getElementById("hidden-scene").getBoundingClientRect();
    const x = event.clientX - rect.left; // X position within the image
    const y = event.clientY - rect.top;  // Y position within the image

    console.log(`Click coordinates: X=${x}, Y=${y}`); // Debugging

    // Define the bounding box around the dog tail's position
    const dogX = 164; // X position of the clickable area around the tail
    const dogY = 100; // Y position of the clickable area around the tail
    const dogWidth = 5;  // Width of the clickable area
    const dogHeight = 25; // Height of the clickable area

    // Check if the click is within the bounds of the defined area
    if (x > dogX && x < dogX + dogWidth && y > dogY && y < dogY + dogHeight) {
        result.textContent = "You found the Annoying Dog! NYEH HEH HEH!";
        nextButton.style.display = "inline-block"; // Show the "Next Level" button
    } else {
        result.textContent = "Not quite! Keep looking for the Annoying Dog!";
    }
}

function goToNextLevel() {
    window.location.href = "annoyingdog2.html"; // Change this to your next level's HTML file
}
