// The below will allow for input to select colors:

let colorSelectedInput = document.querySelector('#color')
let radiusSelectedInput = document.querySelector('#range')

let colorSelected = colorSelectedInput.value
let radiusSelected = radiusSelectedInput.value


    let button = document.querySelector('#button')
    button.addEventListener('click', function(){
    //  TODO add code here that allows the user to begin drawing (following the code) *if* they have selected
    //  both a color and a pen size. (if selected-size < 0 || selected-color not chosen
    //  OR have a default value, that allows the user to draw in black and a basic radius (black and size = 5)
})
    let canvas = document.querySelector('#canvas')
    let context = canvas.getContext('2d')

    // Keep track of whether the mouse button has been pressed down or not.
    // Think of this as whether the user is drawing or not, is their brush on the canvas?
    let mousedown = false

    canvas.addEventListener('mousedown', function() {
    mousedown = true
})

    canvas.addEventListener('mouseup', function() {
    mousedown = false
})

    // If mouse leaves the canvas then stop drawing
    canvas.addEventListener('mouseout', function() {
    mousedown = false
})

    canvas.addEventListener('mousemove', function() {

    // If the mouse button is not pressed down, do not draw.
    if (!mousedown) { return }

    // event is a built-in variable, contains the event that triggered this function
    // get the x, y location of the event
    let x = event.offsetX
    let y = event.offsetY   //offsetX, offsetY, may not work in older browsers

    //Draw a filled rectangle centered under the mouse click
    //x, y is the top left corner, so shift up and left by 5 to center it under the mouse.
    // let size = 10 //size of the circle

    context.beginPath() //this makes sure each new click isn't connected to the last click/drag.
    context.strokeStyle = colorSelected //will be the color of the drawing

    //change the size of the circle radius to user input:

    let size = radiusSelected
    context.arc(x-(size/2), y-(size/2), size, 0, 2*Math.PI)
    //^^(x-axis from top left, y-axis from top left, radius, startAngle, endAngle (2*Math.PI = whole circle).)
    context.fill() //fills in the circle, from: https://github.com/claraj/week5-examples/blob/master/canvas/circles.html
    context.stroke()

})


