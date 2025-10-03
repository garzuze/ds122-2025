function gerarNumeroMagico() {
	return Math.floor(Math.random() * 100);
}
let numeroMagico = gerarNumeroMagico();
let tentativas = 0;
const botao = document.getElementById("botao");
console.log(numeroMagico);

botao.addEventListener("click", () => {
	tentativas++;
	const numeroInput = document.getElementById("numero");
	const numeroUsuario = Number(numeroInput.value);
	if (numeroUsuario > numeroMagico) {
		alert("vishhhh o numero eh menor kkkkk");
	} else if (numeroUsuario < numeroMagico) {
		alert("o numero eh maior mano slk kkkkkkk");
	} else {
		alert("acertou mano  kkkkk vc eh foda");
		if (confirm("quer jogar essa bagaca dnv? kkkk")) {
			numeroMagico = gerarNumeroMagico();
			console.log(numeroMagico);
		} else {
			alert("toma no zoio entao mano sai fora da	ui");
		}
	}
});
