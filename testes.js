// const makeServerRequest = new Promise((resolve, reject) => {
//     let responseFromServer = false;

//     if(responseFromServer) {
//         resolve('We got the data');
//     } else {
//         reject('Data not received');
//     }
// });

// makeServerRequest.then(result => {
//     console.log(result);
// });

// makeServerRequest.catch(error => {
//     console.log(error);
// });

// let string = 'Hi, my name is Higor Nascimento das Chagas';
// let myRegex = /higor/i;
// let result = myRegex.test(string);
// console.log(result);

// function makeNegative(num) {
//     const negative = num > 0 ? num * -1 : 0;

//   }

//   makeNegative();

// function basicOp(operation, value1, value2)
// {
//   const result = eval(value1 + operation + value2)
//   console.log(result);
// }

// basicOp('*', 5, 2);

// function betterThanAverage(classPoints, yourPoints) {
//   const arrayTotal = classPoints.push(yourPoints);
  
//   const total = classPoints.reduce((acumulador, valor) => {
//     return acumulador += valor;
//   }, 0);

//   console.log(arrayTotal);
//   const media = total / arrayTotal
//   console.log(yourPoints > media ? true : false);

// }

// betterThanAverage([2, 5], 62);

// function fakeBin(x) {
//   const array = x.split('');
//   let binary;

//   for(let elements of array) {
//     binary = elements < 5 ? '0' : '1';
//     stringList = binary.toString();
//     console.log('45385593107843568');
//   }

// }

// fakeBin('45385593107843568');

function check(a, x) {
  if(a.includes(x)) {
    console.log(true);
  } else {
    console.log(false)
  }
}
check([66, 101], 66);


