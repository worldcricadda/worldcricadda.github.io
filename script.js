const API_KEY = "58dd7f25-a763-42fd-90ce-af5d1b0a3af7";

// 1. Live Date and Time Function
function updateClock() {
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();

// 2. Fetch Live Scores (Using typical Cricket API format)
async function fetchScores() {
    try {
        // Note: URL depends on the specific API provider (e.g., CricAPI, CricketData)
        const response = await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`);
        const data = await response.json();
        
        const container = document.getElementById('score-container');
        container.innerHTML = ""; // Clear loader

        if (data.data && data.data.length > 0) {
            data.data.slice(0, 4).forEach(match => {
                const card = `
                    <div class="score-card">
                        <h4>${match.name}</h4>
                        <p style="color: #f0a500;">${match.status}</p>
                        <p>Score: ${match.score ? match.score[0].r + "/" + match.score[0].w : 'TBA'}</p>
                    </div>
                `;
                container.innerHTML += card;
            });
        } else {
            container.innerHTML = "<p>No live matches currently.</p>";
        }
    } catch (error) {
        console.error("Error fetching scores:", error);
    }
}

// Initial fetch
fetchScores();
// Refresh scores every 2 minutes
setInterval(fetchScores, 120000);

// Newsletter logic
document.getElementById('news-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to WorldCricAdda!");
});
