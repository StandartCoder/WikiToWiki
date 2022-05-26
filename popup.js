startButton.addEventListener("click", async () => {
    const gamePage = await fetch("game.html");
    const gameHtml = await gamePage.text();
    document.body.innerHTML = gameHtml;
});