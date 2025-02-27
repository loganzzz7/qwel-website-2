// move jake
const moveJake = document.getElementById("moveJake");
var count = 0;
const form = "<a href=\"https://forms.gle/nknQQvWBLdUcNTvXA\" target=\"_blank\">form</a>"
moveJake.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (window.innerWidth - 112) + 56);
    const j = Math.floor(Math.random() * (window.innerHeight - 112) + 56);
    moveJake.style.left = i + 'px';
    moveJake.style.top = j + 'px';
    count += 1;

    // msg update lol
    const boredMsg = document.querySelector(".qwelTxt");
    const coolButton = document.querySelector(".coolButton");
    if (count > 0 && count <= 1) {
        boredMsg.innerHTML = "I know I did this before so I won't waste ur time again. Catch him one more time and he'll stop jakeing it.";
        boredMsg.style.fontSize = "medium";
    } else if (count > 1) {
        boredMsg.innerHTML = "No more jakeing. Now click the cool new button.";
        moveJake.style.display = "none";
        coolButton.style.display = "block";
        boredMsg.style.fontSize = "medium";
    }
});