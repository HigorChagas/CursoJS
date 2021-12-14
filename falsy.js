// Os valores abaixo são considerados falsy em JavaScript
console.log('Listar os 7 valores falsy: ');
0 ? console.log('truthy') : console.log('falsy'); // zero é falsy
0n ? console.log('truthy') : console.log('falsy') // zero BigInt é falsy
null ? console.log('truthy') : console.log('falsy') // nulo é falsy
undefined ? console.log('truthy') : console.log('falsy') // indefinido é falsy
false ? console.log('truthy') : console.log('falsy') // false é falsy
NaN ? console.log('truthy') : console.log('falsy') // Not a Number é falsy
"" ? console.log('truthy') : console.log('falsy') // string vazia é falsy