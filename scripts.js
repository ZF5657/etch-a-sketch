const mainContainer = document.querySelector('.main-container');
mainContainer.stlye = ('display: flex; flex-wrap: wrap; justify-content: center; align-items: center;');

const headerContainer = document.querySelector('.header');
mainContainer.appendChild(headerContainer);
headerContainer.style = ('margin-top: 20px')


const headerP = document.createElement("p");
headerContainer.appendChild(headerP);
headerP.textContent = 'Choose how many squares you would like in your canvas (10 = 10x10 to maximum 100 = 100x100)';
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


const canvasContainer = document.querySelector('.canvas-container');
canvasContainer.style = ('height: 600px; width: 600px; display: grid; border: 1px solid black; margin-top: 20px;');
mainContainer.appendChild(canvasContainer);


const footerContainer = document.querySelector('.footer');
mainContainer.appendChild(footerContainer);

const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.setAttribute('class', 'btn btn-warning')
resetButton.style = ('margin-top: 20px; padding: 3px');
footerContainer.appendChild(resetButton);

/*for(i=0; i<3; i++) {
    const div = document.createElement('div');
    div.style = ('display: flex', 'flex: 1 1 auto', 'border: 1px solid black');
    div.setAttribute =('class', 'canvas');
    mainContainer.appendChild(div);
    }

let sketchPad = (div) => {
    div = document.createElement("div")
    div.setAttribute()
    mainContainer.appendChild
}*/



