document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("scoreBox");

  // DEMO DATA (replace with real API later)
  const demoData = [
    { match: "India vs Australia", score: "185/4 (18.2 overs)" },
    { match: "England vs South Africa", score: "142/6 (17.0 overs)" }
  ];

  let html = "";
  demoData.forEach(m => {
    html += `<p><strong>${m.match}</strong><br>${m.score}</p>`;
  });

  box.innerHTML = html;
});
