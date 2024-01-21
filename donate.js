// Dummy data for NGO listings
const ngoData = [
    { name: "NGO One", cause: "Education", location: "City A" },
    { name: "NGO Two", cause: "Healthcare", location: "City B" },
    // Add more NGOs as needed
];

// Function to display NGO listings
function displayNGOs() {
    const ngoListSection = document.getElementById("ngo-list");
    
    ngoData.forEach(ngo => {
        const ngoCard = document.createElement("div");
        ngoCard.classList.add("ngo-card");
        ngoCard.innerHTML = `<h3>${ngo.name}</h3><p>Cause: ${ngo.cause}</p><p>Location: ${ngo.location}</p>`;
        ngoListSection.appendChild(ngoCard);
    });
}

// Function to make a donation
function makeDonation() {
    const donationType = document.getElementById("donation-type").value;
    const amount = document.getElementById("amount").value;

    // Implement donation logic based on donationType and amount
    // For simplicity, just log the donation details for now
    console.log(`Donation Type: ${donationType}, Amount: ${amount}`);
}

// Display NGOs when the page loads
window.onload = displayNGOs;
