// Characters array with pairs for matching
const characters = [
    'Flowey', 'Flowey',
    'Toriel', 'Toriel',
    'Papyrus', 'Papyrus',
    'Sans', 'Sans',
    'Undyne', 'Undyne',
    'Alphys', 'Alphys',
    'Muffet', 'Muffet',
    'Mettaton', 'Mettaton',
    'Asgore', 'Asgore'
];

// Select the deck element
const deck = document.getElementById('card-deck');
let moves = 0;
let openedCards = [];

// Start the game
function startGame() {
    openedCards = [];
    moves = 0;
    document.querySelector('.moves').innerText = moves;
    deck.innerHTML = '';

    // Shuffle the cards and create the card elements
    const shuffledCards = shuffle(characters);
    shuffledCards.forEach(character => {
        const card = document.createElement('li');
        card.classList.add('card');
        card.setAttribute('data-name', character);
        card.innerHTML = `<img src="UndertaleCards/${character}.png" alt="${character}" style="display:none;">`;
        
        // Add event listener to each card
        card.addEventListener('click', displayCard);
        deck.appendChild(card);
    });
}

// Shuffle function
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Display card function
function displayCard() {
    if (openedCards.length < 2 && !this.classList.contains('show')) {
        this.classList.add('show');
        this.querySelector('img').style.display = 'block';
        openedCards.push(this);

        if (openedCards.length === 2) {
            moveCounter();
            checkForMatch();
        }
    }
}

// Check for match
function checkForMatch() {
    const [firstCard, secondCard] = openedCards;

    if (firstCard.getAttribute('data-name') === secondCard.getAttribute('data-name')) {
        firstCard.classList.add('match');
        secondCard.classList.add('match');
        openedCards = [];
        if (document.querySelectorAll('.match').length === characters.length) {
            setTimeout(congratulations, 500);
        }
    } else {
        disableCards();
        setTimeout(() => {
            firstCard.classList.remove('show');
            secondCard.classList.remove('show');
            firstCard.querySelector('img').style.display = 'none';
            secondCard.querySelector('img').style.display = 'none';
            openedCards = [];
            enableCards();
        }, 1000); // Cards flip back after 1 second
    }
}

// Disable cards temporarily
function disableCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.add('disabled'));
}

// Enable cards
function enableCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.remove('disabled'));
}

// Move counter function
function moveCounter() {
    moves++;
    document.querySelector('.moves').innerText = moves;
}

// Congratulations function
function congratulations() {
    const modal = document.getElementById('popup1');
    modal.classList.add('show');
    document.getElementById('finalMove').innerText = moves;
}

// Play again function
function playAgain() {
    const modal = document.getElementById('popup1');
    modal.classList.remove('show');
    startGame();
}

// Start the game on page load
document.body.onload = startGame();

