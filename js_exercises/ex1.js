const button = document.getElementById("name");

button.addEventListener("click", () => {
	const textInput = document.getElementById("name");
	const userText = textInput.value;
	if (
		userText.trim().length === 0
	) {
		alert("mano voce precisa digitar o negocio kkkkkkkkkk");
	} else {
		alert(`${userText} que nome feio mano kkkkkkkkkkkkkkkkk`);
	}
});
