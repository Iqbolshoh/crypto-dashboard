const btc = document.getElementById("btc");
const eth = document.getElementById("eth");
const mood = document.getElementById("mood");

// fake live data
function updateData() {
  let btcPrice = (60000 + Math.random() * 5000).toFixed(2);
  let ethPrice = (3000 + Math.random() * 300).toFixed(2);

  btc.innerText = "$" + btcPrice;
  eth.innerText = "$" + ethPrice;

  // mood logic
  if (btcPrice > 62000) {
    mood.innerText = "🔥 Bullish";
    mood.style.color = "#22c55e";
  } else if (btcPrice < 58000) {
    mood.innerText = "⚠️ Bearish";
    mood.style.color = "#ef4444";
  } else {
    mood.innerText = "😐 Neutral";
    mood.style.color = "#fbbf24";
  }
}

setInterval(updateData, 2000);
updateData();