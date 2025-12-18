let isRealWorld = true;

const gameScreen = document.getElementById("game-screen");
const dimensionText = document.getElementById("dimension-text");
const description = document.getElementById("description");
const switchBtn = document.getElementById("switch-btn");

switchBtn.addEventListener("click", () => {
    if (isRealWorld) {
        // Switch to Upside Down
        gameScreen.classList.remove("real-world");
        gameScreen.classList.add("upside-down");

        dimensionText.innerText = "UPSIDE DOWN";
        description.innerText = "The world is darker… reality feels broken.";

        isRealWorld = false;
    } else {
        // Switch to Real World
        gameScreen.classList.remove("upside-down");
        gameScreen.classList.add("real-world");

        dimensionText.innerText = "REAL WORLD";
        description.innerText = "Everything looks normal… for now.";

        isRealWorld = true;
    }
});
