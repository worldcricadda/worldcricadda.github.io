// 🕒 Date & Time
function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" });
  document.getElementById("datetime").textContent = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// 📰 Dummy News Data
const newsData = [
  { title: "Rohit Sharma hits century!", detail: "Rohit leads India to victory with 120 runs.", link: "#" },
  { title: "Bumrah dominates again", detail: "Jasprit Bumrah’s spell changes the game.", link: "#" },
  { title: "Top 5 IPL Performers 2025", detail: "A look at who ruled the tournament.", link: "#" }
];

function loadNews() {
  const container = document.getElementById("dynamicNews");
  container.innerHTML = "";
  newsData.forEach(news => {
    container.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.detail}</p>
            <a href="${news.link}" class="btn btn-outline-danger btn-sm">Read More</a>
          </div>
        </div>
      </div>`;
  });
}
loadNews();

// 💬 Feedback Form Alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("🎉 Thank you for your feedback & subscription!");
    form.reset();
  });
});
