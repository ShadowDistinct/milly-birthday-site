function getAdvice() {
    // Array of possible advice responses
    const advice = [
        "Ah, young one, patience is a virtue. Trust in yourself, and you will find the way.",
        "Sometimes, the greatest strength comes from kindness. Be gentle with others, and yourself.",
        "Even the most difficult path can be walked if you take it one step at a time.",
        "Remember, no matter what, you are worthy of love and happiness.",
        "Challenges make us stronger. Face them with determination, and you will grow.",
        "No matter how dark the day seems, the sun will rise again. Be patient, and you will see the light.",
        "In times of doubt, remember that even the greatest leaders make mistakes. Learn, and grow stronger from them.",
        "It is not weakness to show kindness, young one. True strength lies in understanding and compassion.",
        "Every decision shapes who we are, but it is never too late to change our path.",
        "A single act of kindness can change the world. Start with the people around you.",
        "Even in moments of great loss, we find hope. Hold onto that, and it will guide you forward.",
        "Do not be afraid to seek help from those who care for you. We are stronger together.",
        "Like a flower in bloom, you too will grow and flourish, even after the harshest winters.",
        "True wisdom comes not from always being right, but from learning when we are wrong.",
        "Take pride in how far you've come, and have faith in how far you can go.",
        "In every heart, there is the capacity for both kindness and strength. Use both wisely.",
        "The road to peace is not always easy, but it is always worth walking.",
        "Sometimes, letting go of what we cannot change is the bravest choice of all.",
        "Never underestimate the power of hope. Even in the darkest times, it can light your way.",
        "A good leader knows when to listen, when to speak, and when to act with compassion.",
        "Cherish your friendships, for they are the threads that weave joy into the fabric of life.",
        "Even the smallest act can have the greatest impact. Never doubt your ability to inspire change.",
        "In moments of doubt, trust your instincts. They will guide you true.",
        "Remember, it's okay to be vulnerable. Strength often lies in our openness to others.",
        "The greatest journeys often begin with a single step. Do not fear to take it.",
        "Embrace your uniqueness. It is what makes you special and valuable.",
        "A heart full of gratitude can transform even the bleakest of days.",
        "Failure is not the end, but a stepping stone to success. Learn, and rise again.",
        "Surround yourself with positivity, and watch how it nurtures your spirit.",
        "The love you give to others will always come back to you, often in unexpected ways."
    ];    
    // Randomly select one piece of advice
    const randomAdvice = advice[Math.floor(Math.random() * advice.length)];

    // Display the advice
    document.getElementById("advice-response").innerHTML = `"${randomAdvice}" - Asgore`;
}
