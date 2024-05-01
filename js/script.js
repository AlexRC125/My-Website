// Fun facts about bees
const beeFacts = [
    "Total solar eclipses happen somewhere on Earth about once every 18 months, but any given location will only experience one about once every 400 years on average.",
    "The longest total solar eclipse of the 21st century occurred on July 22, 2009, lasting a maximum of 6 minutes and 39 seconds.",
    "Ancient civilizations often interpreted solar eclipses as supernatural events or omens, leading to various myths and legends about their causes.",
    "During a total solar eclipse, the temperature can drop by as much as 20°F (11°C) as the moon blocks the sun's rays.",
    "The diamond ring effect is a phenomenon that occurs just before and after totality when a single bright spot of sunlight appears to sparkle like a diamond on the edge of the moon.",
    "Solar eclipses helped confirm Albert Einstein's theory of general relativity in 1919 when observations during a total solar eclipse showed that starlight bent around the sun as predicted by his equations."
];

// Function to display a random fun fact about bees
function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * beeFacts.length);
    const fact = beeFacts[randomIndex];
    document.getElementById('funFacts').innerText = fact;
    document.getElementById('funFacts').style.display = 'block';
}

// Event listener to trigger display of fun fact when image is clicked
document.getElementById('sunFact').addEventListener('click', displayRandomFact);