// ---------------------------
// WorldCricAdda JavaScript
// ---------------------------

// 🕒 Display Current Date and Time on the Live Score Section
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
  });
  document.getElementById("datetime").textContent = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 📰 Load Dummy News Data (You can replace it later with API)
const newsData = [
  {
    title: "Rohit Sharma hits blistering 120!",
    detail: "Rohit Sharma smashes 120(74) against Australia in Mumbai.",
    link: "#",
  },
  {
    title: "India to host Champions Trophy 2025",
    detail: "The tournament returns to India after 8 years.",
    link: "#",
  },
  {
    title: "Bumrah named ICC Bowler of the Year",
    detail: "Jasprit Bumrah wins ICC award for the best bowler 2025.",
    link: "#",
  },
];

function loadNews() {
  const container = document.getElementById("dynamicNews");
  container.innerHTML = "";
  newsData.forEach((news) => {
    const card = `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.detail}</p>
            <a href="${news.link}" class="btn btn-outline-danger btn-sm">Read More</a>
          </div>
        </div>
      </div>`;
    container.innerHTML += card;
  });
}
loadNews();

// 📬 Newsletter Form Submit Alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("🎉 Thank you for your feedback & subscription!");
    form.reset();
  });
});

// 🏏 Optional: Example Live Score Fetch from a Free API (Dummy)
async function fetchLiveScore() {
  try {
    // Example placeholder API (replace later with real cricket API)
    const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=YOUR_API_KEY");
    const data = await response.json();
    console.log("Live Score Data:", data);
    // Display logic (you can customize)
  } catch (error) {
    console.log("Error fetching live score:", error);
  }
}

// fetchLiveScore(); // Uncomment after getting API key
