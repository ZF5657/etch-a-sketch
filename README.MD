Etch-a-Sketch --- Odin Project

The purpose of this porject was to create a web-version of an Etch-a-Sketch while relying on JavaScript to manipulate the DOM by creating, changing, and styling elements.


The project works by filling in a specific box within a pre-determined grid whenever the mouse hovers over it. The amount of squares within the grid can be changed from 2x2 to 100x100 by the numerical input box and then clicking the 'Submit' button. By default, the color is black, however a random color button or an earaser button can be slected. The random color button, of course, randomizes the color every time the mouse hovers over a square. The eraser button colors the squares back to white whenever the mouse hovers over them. 

This project consisted of 3 languages (HTML and CSS are not programming languages): HTML, CSS, and JavaScript.



Challenges:

1. One of the biggest challenges I initially faced was how to effectively create a grid that could evenly create teh boxes. I initially created a regular loop with a certain percentage of length and width but that did not work with a greater number of suqares. I eventually searched for solutions to the problem and found gridTemplateRows and Columns.

2. The other major challenge I ran into was creating the reset button. I had the logic correct, however after many hours and different attemps at resolving the problem, I had to request help from Stack Overflow. The problem was simply the way I created the grid. When creating the div element with gridDiv, "gridDiv.createElement('div.canvas')", I used the HTML shorthand "div.canvas" to create the div and div class. This created a problem with my reset function because I was calling 'div'. I resolved wht solution by creating a div element with gridDiv and the adding those divs to a class on a second line. Lastly, I made the reset function simply call on 'div.canvas' instead.



Lessons:

1. One of the biggest lessons in this project was learning how DOM manipulation works and how styling and elements interact, especially when there are other functions that change them. 

2. I learned how best to create grids and how an element-creating loop interacts with another function and how best to call on those elements in the function.

3. I learned an easy and simple way of creating the on-click event listeners with buttons by simply adding the onclick command into the HTML document to call the function. I have only ever added event listeners in JavaScript.


This project has been extremely useful in expanding my knowledge and skillset.