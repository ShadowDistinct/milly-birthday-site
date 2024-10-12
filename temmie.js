let score = 0;
let challengeActive = false;
let countdownTime = 30; // Countdown duration in seconds

function startChallenge() {
    score = 0;
    challengeActive = true;
    countdownTime = 30; // Reset countdown time
    document.getElementById('challenge-result').innerText = '';
    document.getElementById('spaghetti-container').innerHTML = ''; // Clear previous items
    document.getElementById('countdown').innerText = `Time left: ${countdownTime} seconds`; // Display initial countdown
    setTimeout(endChallenge, countdownTime * 1000); // End challenge after countdown
    spawnItems();
    startCountdown();
}

function startCountdown() {
    const countdownInterval = setInterval(() => {
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
        } else {
            countdownTime--;
            document.getElementById('countdown').innerText = `Time left: ${countdownTime} seconds`; // Update countdown display
        }
    }, 1000); // Update countdown every second
}

function spawnItems() {
    if (!challengeActive) return;

    const items = ['🍝', '🐾', '✨', '🍜']; // Temmie-themed items
    const notCoolItems = ['🚫', '😱']; // Not-so-cool items

    const isCoolItem = Math.random() < 0.5; // 50% chance to spawn a cool item (increased spawn rate for bad items)
    const item = isCoolItem ? items[Math.floor(Math.random() * items.length)] : notCoolItems[Math.floor(Math.random() * notCoolItems.length)];

    const itemDiv = document.createElement('div');
    itemDiv.className = 'temmie-item';
    itemDiv.style.position = 'absolute';
    itemDiv.style.left = Math.random() * 90 + 'vw'; // Random position
    itemDiv.style.top = Math.random() * 90 + 'vh';
    itemDiv.innerText = item;

    itemDiv.onclick = () => {
        if (isCoolItem) {
            score++;
            document.getElementById('spaghetti-container').removeChild(itemDiv);
        } else {
            score = Math.max(0, score - 1); // Decrease score for not cool items
            document.getElementById('spaghetti-container').removeChild(itemDiv);
        }
    };

    document.getElementById('spaghetti-container').appendChild(itemDiv);
    setTimeout(spawnItems, 1000); // Spawn an item every second
}

function endChallenge() {
    challengeActive = false;
    document.getElementById('challenge-result').innerText = `Time's up! You caught ${score} tasty items! Temmie thinks you're super cool!`;
}
