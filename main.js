let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const palpites = document.querySelector('.palpites');
    const ultimoResultado = document.querySelector('.ultimoResultado');
    const baixoOuAlto = document.querySelector('.baixoOuAlto');
    const envioPalpite = document.querySelector('.envioPalpite');
    const campoPalpite = document.querySelector('.campoPalpite');
    let contagemPalpites = 1;
    let botaoReiniciar;

function verificarPalpite() {
    const palpiteDoUsuario = Number(campoPalpite.value);
    if(contagemPalpites === 1) {
        palpites.textContent = "Palpite anteriores: ";
    }

    palpites.textContent += palpiteDoUsuario + " ";

    if (palpiteDoUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você acertou!";
        ultimoResultado.style.backgroundColor = "grenn";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    }
