function getHexaNumb() {
    return Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const color = button.dataset.color;
        document.body.style.backgroundColor = color;
    })
})

const randomButton = document.getElementById("random");
randomButton.addEventListener("click", () => {
    const color = getHexaNumb();
    document.body.style.backgroundColor = `#${color}`;
})
