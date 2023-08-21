/*document.addEventListener("DOMContentLoaded", function (){
    createGrid(32);
});*/

const mainContainer = document.querySelector('.main-container');
mainContainer.stlye = ('display: flex; flex-wrap: wrap; justify-content: center; align-items: center;');

const headerContainer = document.querySelector('.header');
mainContainer.appendChild(headerContainer);
headerContainer.style = ('margin-top: 20px')


const headerP = document.createElement("p");
headerContainer.appendChild(headerP);
headerP.textContent = 'Choose how many squares you would like in your canvas (1 = 1x1 to maximum 100 = 100x100)';
headerP.style = ('margin-bottom: 10px');


const gridInput = document.createElement("input");
gridInput.setAttribute('type', 'text');
gridInput.style = ('width: 35px; margin-right: 20px');
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
footerContainer.style = ('display: flex; justify-content: space-between; margin-top: 20px')
mainContainer.appendChild(footerContainer);


const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.setAttribute('class', 'btn btn-dark')
clearButton.style = ('padding: 3px');
footerContainer.appendChild(clearButton);


const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.setAttribute('class', 'btn btn-warning')
resetButton.style = ('padding: 3px');
footerContainer.appendChild(resetButton);


const randomColorButton = document.createElement('button');
randomColorButton.textContent = 'Random Color';
randomColorButton.setAttribute('class', 'btn btn-primary')
randomColorButton.style = ('padding: 3px;');
footerContainer.appendChild(randomColorButton);


/*const createGrid = (num) => {
    canvasContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    canvasContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`

    let numDivs = num * num;

    for(let i = 0; i < numDivs; i++) {
        let gridDiv = document.createElement('div');
        canvasContainer.insertAdjacentElement("beforeend", div);

    };
}*/


const createGrid = (num) => {
    canvasContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    canvasContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`

    let numDivs = num * num;

    for(let i = 0; i < numDivs; i++) {
        let gridDiv = document.createElement('div');
        canvasContainer.appendChild(gridDiv);

    };
}


createGrid(32);


