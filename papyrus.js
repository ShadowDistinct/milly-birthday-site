function checkCoolness() {
    let message = "";
    let unanswered = false;  // This flag will help check if there are unanswered questions

    // Helper function to check if an answer is selected
    function getAnswer(questionName) {
        const selected = document.querySelector(`input[name="${questionName}"]:checked`);
        if (!selected) {
            unanswered = true;  // Set the flag if a question is unanswered
            return null;
        }
        return selected.value;
    }

    // Get the answers, and check if any are unanswered
    const foodAnswer = getAnswer("food");
    const greetingAnswer = getAnswer("greeting");
    const colorAnswer = getAnswer("color");
    const accessoriesAnswer = getAnswer("accessories");
    const timeAnswer = getAnswer("time");
    const skeletonAnswer = getAnswer("skeleton");
    const catchphraseAnswer = getAnswer("catchphrase");
    const puzzleAnswer = getAnswer("puzzle");
    const pastimeAnswer = getAnswer("pastime");
    const celebrateAnswer = getAnswer("celebrate");

    // If there are unanswered questions, prompt the user to answer all
    if (unanswered) {
        document.getElementById('coolness-result').textContent = "PLEASE ANSWER ALL THE QUESTIONS TO FIND OUT IF YOU'RE COOL ENOUGH!";
        return;
    }

    // Responses for each question
    if (foodAnswer === "spaghetti") {
        message += "WOWIE! YOU CHOSE SPAGHETTI! THAT'S THE COOLEST FOOD! NYEH HEH HEH!!!\n";
    } else if (foodAnswer === "pizza") {
        message += "PIZZA IS COOL, BUT SPAGHETTI IS EVEN COOLER!\n";
    } else {
        message += "BROCCOLI?! THAT'S NOT COOL AT ALL!\n";
    }

    if (greetingAnswer === "handshake") {
        message += "A COOL HANDSHAKE! YOU'RE ON THE RIGHT TRACK TO BEING AWESOME!\n";
    } else if (greetingAnswer === "wave") {
        message += "A WAVE? PRETTY COOL, BUT COULD BE COOLER!\n";
    } else {
        message += "A GENTLE HUG... NOT QUITE COOL ENOUGH FOR THE GREAT PAPYRUS!\n";
    }

    if (colorAnswer === "red") {
        message += "RED, JUST LIKE MY SCARF! EXCELLENT CHOICE!\n";
    } else if (colorAnswer === "blue") {
        message += "BLUE, LIKE MY BATTLE BODY! VERY COOL!\n";
    } else {
        message += "GREEN? THAT'S... AN INTERESTING CHOICE.\n";
    }

    if (accessoriesAnswer === "scarf") {
        message += "A SCARF, JUST LIKE MINE! YOU'RE COOL ALREADY!\n";
    } else if (accessoriesAnswer === "glasses") {
        message += "SUNGLASSES! A CLASSIC COOL LOOK!\n";
    } else {
        message += "A FANCY HAT? NOT BAD, BUT NOT AS COOL AS A SCARF!\n";
    }

    if (timeAnswer === "cooking") {
        message += "COOKING SPAGHETTI? WOW, YOU'RE SO COOL!\n";
    } else if (timeAnswer === "puzzles") {
        message += "SOLVING PUZZLES? NOW THAT'S COOL!\n";
    } else {
        message += "EXERCISING? VERY COOL, YOU'RE GETTING STRONGER LIKE ME!\n";
    }

    if (skeletonAnswer === "Papyrus") {
        message += "OBVIOUSLY YOU KNOW WHO THE COOLEST IS: ME, PAPYRUS!\n";
    } else if (skeletonAnswer === "Sans") {
        message += "SANS?! WELL... HE IS MY BROTHER, SO I SUPPOSE HE'S COOL TOO!\n";
    } else {
        message += "OTHER SKELETONS? HOW CAN ANYONE BE COOLER THAN ME?!\n";
    }

    if (catchphraseAnswer === "NYEH") {
        message += "NYEH HEH HEH! A PERFECT CATCHPHRASE FOR SOMEONE AS COOL AS ME!\n";
    } else if (catchphraseAnswer === "Thegreat") {
        message += "I LOVE THAT! YOU'RE THE GREAT MILLY! JUST LIKE I'M THE GREAT PAPYRUS!\n";
    } else {
        message += "JUSTICE SHALL PREVAIL? WELL, THAT'S COOL TOO... I GUESS!\n";
    }

    if (puzzleAnswer === "thinking") {
        message += "YOU THINK AND USE YOUR SPAGHETTI NOODLE? WOW, JUST LIKE ME!\n";
    } else if (puzzleAnswer === "help") {
        message += "ASKING FOR HELP? WELL, EVEN I NEED HELP SOMETIMES!\n";
    } else {
        message += "JUST GUESS? HMM, THAT'S... UNORTHODOX, BUT I LIKE YOUR SPIRIT!\n";
    }

    if (pastimeAnswer === "royalguard") {
        message += "TRAINING TO JOIN THE ROYAL GUARD? YOU'RE ALREADY A TRUE COOL HERO!\n";
    } else if (pastimeAnswer === "game-with-sans") {
        message += "PLAYING GAMES WITH SANS? WELL, THAT'S FUN, BUT NOT AS COOL AS TRAINING!\n";
    } else {
        message += "HANGING OUT AND BEING AWESOME? YES! JUST LIKE ME!\n";
    }

    if (celebrateAnswer === "dance") {
        message += "DANCING AROUND AFTER A VICTORY? THAT'S EXACTLY WHAT I WOULD DO!\n";
    } else if (celebrateAnswer === "treat") {
        message += "TREATING YOURSELF TO SPAGHETTI? THAT'S THE BEST WAY TO CELEBRATE!\n";
    } else {
        message += "TAKING A NAP? WELL, I SUPPOSE YOU NEED REST AFTER BEING SO COOL!\n";
    }

    // Display the final message
    document.getElementById('coolness-result').textContent = message;
}
