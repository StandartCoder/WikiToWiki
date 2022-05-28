const startButton = document.getElementById("startButton");

startButton.addEventListener("click", async () => {
  // const gamePage = await fetch("game.html");
  // const gameHtml = await gamePage.text();
  // document.body.innerHTML = gameHtml;
  window.location.href = "../game/game.html";
  chrome.action.setPopup({ popup: "../game/game.html" });
});

// function start() {
// alert("asd");
//   chrome.Action.setPopup({ popup: "../game/game.html" });
// }
