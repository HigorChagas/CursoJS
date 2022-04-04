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

let string = 'Hi, my name is Higor Nascimento das Chagas';
let myRegex = /higor/i;
let result = myRegex.test(string);
console.log(result);