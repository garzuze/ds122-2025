const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

increment.addEventListener("click", () => {
	counter.innerText = Number(counter.innerText) + 1;
});

decrement.addEventListener("click", () => {
	if (counter.innerText !== "0") {
        counter.innerText = Number(counter.innerText) - 1;
    }
    

});
