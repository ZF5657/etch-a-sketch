let color = "black";

//Waits for everything to load, then creates default grid size
document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
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


const eraseButton = document.getElementsByClassName('.btn btn-secondary');


const resetButton = document.getElementsByClassName('.btn btn-warning');


const randomColorButton = document.getElementsByClassName('.btn btn-primary');




//Grid size creation funcion that creates divs in a defined size from a loop and appends it into the grid/canvas container
const createGrid = (num) => {
    canvasContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    canvasContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`

    let numDivs = num * num;

    for(let i = 0; i < numDivs; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('canvas');
        canvasContainer.appendChild(gridDiv);
        gridDiv.addEventListener('mouseover', () => {
            //event listener that changes background color depending on which button is selected
            if(color == "random") {
                let randomR = Math.floor(Math.random() * 256)
                let randomG = Math.floor(Math.random() * 256)
                let randomB = Math.floor(Math.random() * 256)
                gridDiv.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            }
            else if(color == "white") {
                gridDiv.style.backgroundColor = 'white';
            }
            else {
               gridDiv.style.backgroundColor = 'black';
            }
        })
        canvasContainer.insertAdjacentElement('beforeend', gridDiv)
    };
};


const colorize = (colorChoice) => {
    color = colorChoice;
}


//Input button to change the grid size based on the input box
inputButton.addEventListener('click', () => {
    let gridSize = createGrid(gridInput.value);
    createGrid(gridSize);
});


const reset = () => {
    let squares = document.querySelectorAll('div.canvas')
    squares.forEach((div) => div.style.backgroundColor = 'white')
};

