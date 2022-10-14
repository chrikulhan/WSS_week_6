//Goal is to draw the image in the canvas:
//6b. confirm pages are connected together:
// alert ('is this working?')
//an alert appears, so yes, it is working.

//7. Get reference to the canvas:
let canvas = document.querySelector('#canvas')
//8. create a context:
let context = canvas.getContext('2d')
//9. need make a reference to the input: to create a place where the user will type:
let input = document.querySelector('#image-text')
//10. disable the input until the image is loaded:
input.disabled = true
//11.draw the image:
let image = new Image()
//12.set the src properties:
image.src = 'fall_scene.jpg'

//14. add extra step to give the computer time to load the image
// by adding an event listener to look for "load" which happens when an image is loaded,
//and then the image will be drawn:
image.addEventListener('load', function() {
//13. draw the image in the context (with 'image' variable and starting
// at the top left (0,0):
    context.drawImage(image, 0, 0)
//    15. add input that allows someone to type in the input box:
    input.disabled = false //this enables the above disable. now the image is loaded, so the
//    rest of the code can run.
} )
//16. Add an event listener so when typing the box happens, typing on the picture happens:
input.addEventListener('input', function(){
    //17.within an eventlistener, the keyword "this" means the thing that made the event (here input).
    let text = this.value
    //20. When re-typing, the font will just write over the existing font, so it's unreadable:
    //20a. in order to clear the text , we need to redraw the image:
    context.drawImage(image, 0, 0)
    //18. draw the text on the picture:
    //19. change the default text color:
    context.fillStyle = 'burgundy'
    //21. Set the font size:
    context.font = ('40px Courier')
    //18a. start by drawing fill text:
    context.fillText(text, 100, 400) //starts at the top of the image
})
//You can right click on the image and save both the text and the image together. It will
//save in the folder in your editor (here Webstorm).



