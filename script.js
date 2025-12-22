// CricScoreLive JavaScript File

console.log("CricScoreLive website loaded successfully");

// Demo live score (testing purpose)
document.addEventListener("DOMContentLoaded", function () {
  const liveSection = document.querySelector("section");
  
  if (liveSection) {
    const demoScore = document.createElement("p");
    demoScore.innerHTML = "🏏 India vs Australia<br>Score: 185/4 (18.2 overs)";
    demoScore.style.fontWeight = "bold";
    liveSection.appendChild(demoScore);
  }
});
