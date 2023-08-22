//Waits for everything to load, then creates default grid size and adds input button function for changing grid size
document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
    inputButton.addEventListener('click', () => {
        let gridSize = createGrid(gridInput.value);
        createGrid(gridSize);
    });
});

const mainContainer = document.querySelector('.main-container');
mainContainer.stlye = ('display: flex; flex-wrap: wrap; justify-content: center; align-items: center;');

const headerContainer = document.querySelector('.header');
mainContainer.appendChild(headerContainer);
headerContainer.style = ('margin-top: 20px')


const headerP = document.createElement("p");
headerContainer.appendChild(headerP);
headerP.textContent = 'Choose how many squares you would like in your canvas (2 = 2x2 to maximum 100 = 100x100)';
headerP.style = ('margin-bottom: 10px');


const gridInput = document.createElement("input");
gridInput.setAttribute('type', 'number');
gridInput.setAttribute('max', '100');
gridInput.setAttribute('min', '2');
gridInput.style = ('width: 50px; margin-right: 20px');
headerContainer.appendChild(gridInput);


const inputButton = document.createElement("button");
inputButton.textContent = 'Submit';
inputButton.setAttribute('class', 'btn btn-info');
inputButton.style = ('padding: 3px');
headerContainer.appendChild(inputButton);


let canvasContainer = document.querySelector('.canvas-container');
canvasContainer.style = ('height: 600px; width: 600px; display: grid; border: 1px solid black; margin-top: 20px;');

mainContainer.appendChild(canvasContainer);


const footerContainer = document.querySelector('.footer');
footerContainer.style = ('display: flex; justify-content: center; margin-top: 20px')
mainContainer.appendChild(footerContainer);


const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Grid';
clearButton.setAttribute('class', 'btn btn-dark')
clearButton.style = ('padding: 3px; margin-right: 100px');
footerContainer.appendChild(clearButton);


const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Grid';
resetButton.setAttribute('class', 'btn btn-warning')
resetButton.style = ('padding: 3px; margin-right: 100px');
footerContainer.appendChild(resetButton);


const randomColorButton = document.createElement('button');
randomColorButton.textContent = 'Random Color';
randomColorButton.setAttribute('class', 'btn btn-primary')
randomColorButton.style = ('padding: 3px; margin-right: 80px');
footerContainer.appendChild(randomColorButton);


//Grid size creation funcion that creates divs in a defined size from a loop and appends it into the grid/canvas container
const createGrid = (num) => {
    canvasContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    canvasContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`

    let numDivs = num * num;

    for(let i = 0; i < numDivs; i++) {
        let gridDiv = document.createElement('div');
        canvasContainer.appendChild(gridDiv);
        gridDiv.addEventListener('mouseover', () => {
            gridDiv.style = ('background: black')
        });
    };
};


