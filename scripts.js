const mainContainer = document.querySelector('#mainContainer');
const divContainer = document.querySelector('#divContainer');

divContainer.style.border = "none";
divContainer.style = "margin-top: 50px";
divContainer.style = "margin-bottom: 1px";


const gridButton = document.createElement('button');
mainContainer.insertBefore(gridButton, divContainer);
gridButton.style = "margin-top: 20px";
gridButton.style = "margin-bottom: 10px";
gridButton.style.height = "50px";
gridButton.style.width = "100px";


//creates div boxes within divContainer
for(i=0; i<256; i++) {
const div = document.createElement('div');
div.style = "flex: 1 1 6%";
div.style.height = "60px";
div.style.border = "1px solid black";
divContainer.appendChild(div);
}