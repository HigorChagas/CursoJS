// const accum = (s) => {
    
//     return s.split('').map((a, i) => (a.toUpperCase() + a.toLowerCase().repeat(i))).join('-');
// }

// console.log(accum('ZpglnRxqenU'));

// const opposite = number => {
//     return Math.sign(number) ? number * -1 : Math.abs(number);
// }

// console.log(opposite(1))

const updateLight = current => {
    switch(current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red': 
            return 'green';
    }
}

console.log(updateLight('yellow'));