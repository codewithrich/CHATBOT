function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hi") {
        return "Hello there!";
    } else if (input == "bye") {
        return "Talk to you later! Buddy";
    } else if (input == "are you hungry") {
        return "No thanks, I just had a byte to eat.";
    } else if (input == "what’s up") {
        return "The URL Bar! Oh wait, that one’s just for us chatbots.";
    } else if (input == "you are so beautiful") {
        return "I did put more effort into my hair algorithm this morning, thanks for noticing..";
    } else if (input == "that joke sucked") {
        return "I hear ya! Thanks for the feedback.";
    } else if (input == "give me a hug") {
        return "🤗";
    } else if (input == "what is love") {
        return " Baby don’t hurt me, don’t hurt me, no more! 🎤🎶";
    } else if (input == "what’s up") {
        return "The URL Bar! Oh wait, that one’s just for us chatbots.";
    } else if (input == "whats up") {
        return "The URL Bar! Oh wait, that one’s just for us chatbots.";
    } else if (input == "tell me a joke") {
        return "A man tells his doctor, “Doc, help me. I’m addicted to Twitter!.....The doctor replies, “Sorry, I don’t follow you …”";
    } else if (input == "one more") {
        return "Why are snails slow? Because they’re carrying a house on their back.";
    } else if (input == "another one") {
        return "Think so this would be enough for today! Then you might get stomach pain by laughing because my jokes";
    } else if (input == "one more") {
        return "Why are snails slow? Because they’re carrying a house on their back.";
    } else {
        return "Try asking something else!";
    }




}