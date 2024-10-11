const feedbackMessages = {
    1: {
        'Flying': 'Sans says: "flying? hope you don\'t get lost in the clouds, kid."',
        'Invisibility': 'Sans says: "invisibility? sneaky. just don\'t spook me, okay?"',
        'Super Strength': 'Sans says: "super strength, huh? guess you can lift more than just my spirits."'
    },
    2: {
        'Las Vegas': 'Sans says: "las vegas? better roll some good luck, pal."',
        'Paris': 'Sans says: "paris, huh? fancy. don\'t forget to grab a croissant for me!"',
        'Tokyo': 'Sans says: "tokyo? sounds like a pretty cool place. watch out for giant monsters!"'
    },
    3: {
        'Cookie': 'Sans says: "cookies, huh? i prefer mine with extra laziness."',
        'Cake': 'Sans says: "cake? that\'s a piece of... well, you get it."',
        'Ice Cream': 'Sans says: "ice cream? chill choice, buddy."'
    },
    4: {
        'Dog': 'Sans says: "dog? sounds like a loyal friend. just don\'t let it steal the spotlight from the annoying one."',
        'Cat': 'Sans says: "cat, huh? you must like your naps too."',
        'Bird': 'Sans says: "bird? you aiming to fly away like that superpower?"'
    },
    5: {
        'Avenger': 'Sans says: "avengers, huh? just remember... no snapping."',
        'Harry-potter': 'Sans says: "harry potter? lemme guess... you\'re a wizard now, milly."',
        'FNAF': 'Sans says: "FNAF? yikes. just don\'t get jump scared, okay?"'
    },
    6: {
        'FNAF': 'Sans says: "FNAF again, huh? i guess you like living on the edge."',
        'Undertale': 'Sans says: "undertale? good taste, kiddo."',
        'None': 'Sans says: "none of these? guess you\'re in a different game."'
    },
    7: {
        'Asgore': 'Sans says: "asgore, huh? big choice. hopefully, no tridents involved."',
        'Temmie': 'Sans says: "temmie? don\'t forget to... temmie flakes."',
        'AnnoyingDog': 'Sans says: "the annoying dog? that little rascal... good luck keeping your stuff safe."'
    },
    8: {
        'Freddy': 'Sans says: "freddy, huh? just don\'t let him sneak up behind ya."',
        'Chica': 'Sans says: "chica, huh? better keep an eye on the pizza."',
        'Bonnie': 'Sans says: "bonnie? you sure you want that guitar solo?"'
    },
    9: {
        'Yes': 'Maja says: "glad you like the website, milly! hope you\'re having a blast."',
        'No': 'Maja says: "ouch, that hurts... but no hard feelings."',
        'Idk': 'Maja says: "eh, fair enough. still got time to change your mind!"'
    },
    10: {
        'Pacifist': 'Sans says: "pacifist? yeah, sounds like a good time to me."',
        'Genocide': 'Sans says: "genocide? yikes... be careful, buddy."',
        'Neutral': 'Sans says: "neutral, huh? keeping it safe and sound, huh?"'
    }
};

function showFeedback(questionNumber, answer) {
    const feedbackDiv = document.getElementById(`feedback-q${questionNumber}`);
    feedbackDiv.innerHTML = feedbackMessages[questionNumber][answer];
}

function submitQuiz() {
    document.getElementById("quiz-questions").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("quiz-feedback").innerHTML = 'Sans says: "congrats, milly! hope you enjoyed the quiz."';
}

function resetQuiz() {
    document.getElementById("quiz-questions").style.display = "block";
    document.getElementById("quiz-result").style.display = "none";
}