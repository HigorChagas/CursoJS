// Altere apenas o código abaixo desta linha
function countdown(n){
  if (n < 1) {
    return []
  } else {
    const countArray = countdown(n - 1);
    countArray.push(n);
    return countArray;
  }
  return;
}

console.log(countdown(5));
// Altere apenas o código acima desta linha