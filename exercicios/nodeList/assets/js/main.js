const container = document.querySelector('.container');
const paragrafos = container.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for(let p of paragrafos) {
    p.style.background = backgroundColorBody;
    p.style.color = 'white';
}