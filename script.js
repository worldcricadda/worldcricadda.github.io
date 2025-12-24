// 🏏 WorldCricAdda — Live Matches from CricketData.org

const apiKey = "58dd7f25-a763-42fd-90ce-af5d1b0a3af7";  // ✅ your real key
const apiURL = `https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`;

// If you are using CricketData.org endpoint directly, you can try this instead:
// const apiURL = `https://api.cricketdata.org/v1/currentMatches?apikey=${apiKey}`;

async function fetchLiveMatches() {
  const liveContainer = document.querySelector("#live .bg-light");
  liveContainer.innerHTML = `<p class="loading">Fetching live scores...</p>`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    // check response validity
    if (!data || !data.data || data.data.length === 0) {
      liveContainer.innerHTML = `<p>No live matches currently 🏏</p>`;
      return;
    }

    // create HTML for multiple matches
    let html = "";
    data.data.slice(0, 5).forEach((match) => {
      const teams = match.teams || [];
      const score1 = match.score?.[0] || {};
      const score2 = match.score?.[1] || {};

      html += `
        <div class="border rounded p-3 mb-3 bg-white text-start">
          <h5>${match.name || `${teams[0]} vs ${teams[1]}`}</h5>
          <p><strong>${teams[0]}:</strong> ${score1.r || 0}/${score1.w || 0} (${score1.o || 0} ov)</p>
          <p><strong>${teams[1]}:</strong> ${score2.r || 0}/${score2.w || 0} (${score2.o || 0} ov)</p>
          <p><strong>Status:</strong> ${match.status || "In Progress"}</p>
        </div>
      `;
    });

    liveContainer.innerHTML = html;
  } catch (error) {
    console.error("❌ Error fetching CricketData API:", error);
    liveContainer.innerHTML = `<p>⚠️ Unable to fetch live data. Please check your internet or API key.</p>`;
  }
}

// ⏱ Auto refresh every 1 minute
fetchLiveMatches();
setInterval(fetchLiveMatches, 60000);
