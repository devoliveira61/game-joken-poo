let jogadorEscolha = 0;
let jogadorPontuacao = 0;
let computadorEscolha = 0;
let computadorPontuacao = 0;
let ganhador = -1;

function jogar(escolha) {
  jogadorEscolha = escolha;

  computadorEscolha = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

  // 1 - Pedra
  // ) - Papel
  // 3 - Tesoura
  if (jogadorEscolha == 1 && computadorEscolha == 1) {
    ganhador = 0;
  } else if (jogadorEscolha == 1 && computadorEscolha == 2) {
    ganhador = 2;
  } else if (jogadorEscolha == 1 && computadorEscolha == 3) {
    ganhador = 1;
  } else if (jogadorEscolha == 2 && computadorEscolha == 1) {
    ganhador = 1;
  } else if (jogadorEscolha == 2 && computadorEscolha == 2) {
    ganhador = 0;
  } else if (jogadorEscolha == 2 && computadorEscolha == 3) {
    ganhador = 2;
  } else if (jogadorEscolha == 3 && computadorEscolha == 1) {
    ganhador = 2;
  } else if (jogadorEscolha == 3 && computadorEscolha == 2) {
    ganhador = 1;
  } else if (jogadorEscolha == 3 && computadorEscolha == 3) {
    ganhador = 0;
  }

  // Removendo as classes
  document.getElementById("jogador-escolha1").classList.remove("selecionado");
  document.getElementById("jogador-escolha2").classList.remove("selecionado");
  document.getElementById("jogador-escolha3").classList.remove("selecionado");
  document
    .getElementById("computador-escolha1")
    .classList.remove("selecionado");
  document
    .getElementById("computador-escolha2")
    .classList.remove("selecionado");
  document
    .getElementById("computador-escolha3")
    .classList.remove("selecionado");

  // Gerando resultado
  document
    .getElementById("jogador-escolha" + jogadorEscolha)
    .classList.add("selecionado");
  document
    .getElementById("computador-escolha" + computadorEscolha)
    .classList.add("selecionado");

  if (ganhador == 0) {
    document.getElementById("mensagens").innerHTML = "Empate";
  } else if (ganhador == 1) {
    document.getElementById("mensagens").innerHTML = "Daniel Ganhou";
    jogadorPontuacao++;
  } else if (ganhador == 2) {
    document.getElementById("mensagens").innerHTML =
      "Inteligencia Artificial Ganhou";
      computadorPontuacao++;
  }
  document.getElementById("jogador-pontos").innerHTML = jogadorPontuacao;
  document.getElementById("computador-pontos").innerHTML = computadorPontuacao;
}
