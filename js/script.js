 // Fun facts about bees
 const beeFacts = [
    "Bees communicate through dance, known as the 'waggle dance', to tell other bees where to find food.",
    "A beehive can contain up to 60,000 bees during peak season.",
    "Honey bees fly at a speed of around 15 miles per hour.",
    "Bees have five eyes - three small ones on top of the head and two large ones in front.",
    "Bees are essential pollinators, helping to pollinate many of the world's crops.",
    "The queen bee can lay up to 2,000 eggs per day during the summer months."
];

// Function to display a random fun fact about bees
function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * beeFacts.length);
    const fact = beeFacts[randomIndex];
    document.getElementById('funFacts').innerText = fact;
    document.getElementById('funFacts').style.display = 'block';
}

// Event listener to trigger display of fun fact when image is clicked
document.getElementById('beeImage').addEventListener('click', displayRandomFact);