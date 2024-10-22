let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const palpites = document.querySelector('.palpites');
    const ultimoResultado = document.querySelector('.ultimoResultado');
    const baixoOuAlto = document.querySelector('.baixoOuAlto');
    const envioPalpite = document.querySelector('.envioPalpite');
    const campoPalpite = document.querySelector('.campoPalpite');
    let contagemPalpites = 1;
    let botaoReiniciar;

function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if(contagemPalpites === 1) {
        palpites.textContent = "Palpite anteriores: ";
    }

    palpites.textContent += palpiteUsuario + " ";

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabéns! Você acertou!";
        ultimoResultado.style.backgroundColor = "grenn";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    }   else if (contagemPalpites === 10) {
        ultimoResultado.textContent = "FIM DE JOGO!!!";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } else {
        ultimoResultado.textContent = "Errado";
        ultimoResultado.style.backgroundColor = "red";
        if (palpiteUsuario) < numeroAleatorio {
            baixoOuAlto.textContent = "O último palpite foi muito baixo";
        } else if (palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent = "O últiom palpite foi muito alto";
        }
    }
    
    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();


    envioPalpite.addEventListener('click', verificarPalpite);

    function finalizarJogo();
        campoPalpite.disable = true;
        envioPalpite.disable = true;
        botaoReiniciar = document.createElement('button');
        document.body.appendChild(botaoReiniciar);
        botaoReiniciar.addEventListener('click', reiniciarJogo);
}


function reiniciarJogo() {
    contagemPalpites = 1;
    const paragrafoReiniciar = document.querySelectorAll('.paragrafosResultado p');
    for (const paragrafoReiniciar of paragrafosReiniciar) {
        paragrafoReiniciar.textContent = "";
    }

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disable = false;
    envioPalpite.disable = false;
    campoPalpite.value = "";
    campoPalpite.focus();
    ultimoResultado.style.backgroundColor = "white";
    numeroAleatorio = Math.floor(math.random() * 100) +1
}

