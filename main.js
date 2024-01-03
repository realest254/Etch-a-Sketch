const wdth = window.innerWidth;
const hght = window.innerHeight;
let pixels = 16;

console.log(wdth);
console.log(hght);


const container = document.querySelector(".container");
container.style.width = `${wdth}px`;
container.style.height = `${hght}px`

function createGrid (){
    container.innerHTML = '';
    for(let i = 1; i<= ((wdth/pixels) * (hght/pixels)); i++){
        const square = document.createElement('div');
        square.setAttribute('style',`height :${pixels}px;width:${pixels}px`);
        square.classList.add("square");
        container.appendChild(square);
    };
}

createGrid();
hoverColor();

const button = document.querySelector('button');
button.addEventListener('click',()=>{
    pixels = +prompt('Enter number of pixels less than 100: ',16);
    if (pixels <= 100) {
        createGrid();
        hoverColor();
    }else {
        pixels = +prompt('Enter number of pixels less than 100: ',16);
        createGrid();
        hoverColor();
    }
});


function hoverColor (){
    const squares = document.querySelectorAll('.square');
    squares.forEach(function(sqr) {
        sqr.addEventListener('mouseover', () => {
            sqr.style.backgroundColor = 'black';
        });
    });
};