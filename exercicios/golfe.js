/* 
No jogo de golfe, cada buraco tem um par, significando o número médio de strokes que se espera que golfista faça a fim de derrubar a bola no buraco para completar a jogada. Dependendo da distância acima ou abaixo de par que seu número de strokes estiver, há diferentes apelidos.

Sua função receberá os argumentos par e strokes. Retorne a string correta de acordo com esta tabela que lista os strokes em ordem de prioridade; superior (mais alta) para o final (mais baixo):

*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if(strokes === 1) {
    console.log('Hole-in-one!');
    return
  } else if(strokes <= par - 2) {
    console.log('Eagle');
    return
  } else if(strokes === par - 1) {
    console.log('Birdie');
    return
  } else if(strokes === par) {
    console.log('Par');
    return
  } else if(strokes === par + 1) {
    console.log('Bogey');
    return
  } else if(strokes === par + 2) {
    console.log('Double Bogey');
    return
  } else {
    return "Go Home!";
  }

  
  // Altere apenas o código acima desta linha
}

golfScore(4, 3);