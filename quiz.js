const quizData = [
    {
      question: "1. Who is the first major character you meet in Undertale?",
      options: ["Sans", "Toriel", "Papyrus", "Flowey"],
      answer: "Flowey"
    },
    {
      question: "2. What is the name of the human that you control in the game?",
      options: ["Frisk", "Chara", "Kris", "Asriel"],
      answer: "Frisk"
    },
    {
        question: "3. What is the underground?",
        options: ["A secret human village", "A place where monsters were banished", "The final level of the game", "A hidden dungeon beneath Mt. Ebott"],
        answer: "A place where monsters were banished"
    },
    {
        question: "4. Which character tells puns and loves ketchup",
        options: ["Sans", "Alphys", "Mettaton", "Papyrus"],
        answer: "Sans"
    },
    {
        question: "5. What is the name of Papyrus's signature attack?",
        options: ["Blue attack", "Gaster Blaster", "Bone attack", "Noodle attack"],
        answers: "Bone attack"
    },
    {
        question: "6. Who is the royal scientist?",
        options: ["Mettaton", "Alphys", "Toriel", "Undyne"],
        answer: "Alphys"
    },
    {
        question: "7. What type of monster is Undyne?",
        options: ["A Ghost", "A fish-like warrior", "A dog", "A skeleton" ],
        answer: "A fish-like warrior"
    },
    {
        question: "8. How many mains ending does undertale have",
        options: ["1", "2", "3", "5"],
        answer: "3"
    },
    {
        question: "9. What do you need to do in order to complete the genocide route?",
        options: ["Spare all monsters", "Kill every monsters", "Befriend every named character", "Only kill the bosses"],
        answer: "Kill every monsters"
    },
    {
        question: "10. What is the name of the place you fight Sans?",
        options: ["New home", "Snowdin", "Waterfall", "The last corridor"],
        answer: "The last corridor"
    },
    {
        question: "11. Who runs the inn at Snowdin?",
        options: ["Papyrus", "Sans", "The shopkeeper", "A bunny"],
        answer: "A bunny"
    },
    {
        question: "12. What is the name of Alphys's favorite anime?",
        options: ["Mew Mew Kissy Cutie", "Monster soul", "Super kawaii battlers", "Mettaton EX"],
        answer: "Mew Mew Kissy Cutie"
    },
    {
        question: "13. Which item is required to cross the barrier?",
        options: ["Seven human souls", "The true knife", "The locket", "A snowman piece"],
        answer: "Seven human souls"
    },
    {
        question: "14. What is the name of the hidden, mysterious character that appears in rare encounters?",
        options: ["Temmie", "Napstablook", "Gaster", "Muffet"],
        answer: "Gaster"
    },
    {
        question: "15. Who designed the character Mettaton?",
        options: ["Alphys", "Sans", "Asgore", "Gaster"],
        answer: "Alphys"
    },
    {
        question: "16. In the pacifist route, what do you need to do in order to spare Toriel?",
        options: ["Attack her", "Talk to her", "Mercy repeatedly", "Fight until low health"],
        answer: "Mercy repeatedly"
    },
    {
        question: "17. Which song plays during Sans boss fight?",
        options: ["Hopes and Dreams", "Megalovania", "Heartache", "Spider dance"],
        answer: "Megalovania"
    },
    {
        question: "18. What's the name of Toriel's ex-husband?",
        options: ["Sans", "Asriel", "Asgore", "Gaster"],
        answer: "Asgore"
    },
    {
        question: "19. Which character guids you through the Ruins in the beginning?",
        options: ["Flowey", "Toriel", "Asgore", "Napstablook"],
        answer: "Toriel"
    },
    {
        question: "20. What's the final area of the game in the true pacifist route?",
        options: ["New Home", "The CORE", "Waterfall", "The true lab"],
        answer: "The true lab"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Trivia Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();

  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Show the quiz section by default on page load
window.onload = function() {
    showSection('birthday-quiz');
};
