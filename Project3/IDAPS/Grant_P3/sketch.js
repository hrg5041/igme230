/* Henry Grant 
April 30th 2018 
IGME - 102 
Professor Harris
*/

/* In the sketch point the user is able to change the tint color of the background images using thier mouse and be able to change the daisy image using the word FLOWER.

THE THEME IS FLOWERS GALORE 
Focusing on the vagueness and beauty of flowers in the canvas*/
// ------------------- PROJECT 3 --------------------//

"use strict";
// 
let word = {
    flowertext: null,
    daisy: null,
    sliderval: null,
    beautytext: null

};


let flowers = {
    radio: null,
    backy_1: null,
    backy_2: null,
    flowery_1: null,
    flowery_2: null

};


let buttons = {
    blackbutton: null,
    redbutton: null,
    bluebutton: null,
    whitebutton: null
};




function preload() {

    word.flowertext = loadStrings('text/word.txt');
    flowers.backy_1 = loadImage('../images/flower_1.jpg');
    flowers.backy_2 = loadImage('../images/flower_3.jpg');
    word.daisy = loadImage('../images/daisy.png');

}

function setup() {
    //Load Canvas
    createCanvas(1000, 500);
    successCallback();

    //Load Font Amatic from downloaded Google Fonts
    loadFont('font/Amatic.ttf', drawText);
    successCallback();

    //Create a radio with 2 options on the background images
    flowers.radio = createRadio();
    flowers.radio.option('Option #1', 1);
    flowers.radio.option('Option #2', 2);
    flowers.radio.style('width');
    flowers.radio.position(0, height);
    textAlign(CENTER);
    successCallback();

    //Flower object Class 
    flowers.flowery_1 = new Flowerbacky(flowers.backy_1, 0, 0, 1000, 500);
    flowers.flowery_2 = new Flowerbacky(flowers.backy_2, 0, 0, 1000, 500);
    successCallback();

    //Establish the presence of the Buttons on the top of the menu
    noStroke();
    fill(0);
    buttons.blackbutton = new Buttons(360, "black"); //Black
    buttons.redbutton = new Buttons(430, "red"); //Red  
    buttons.bluebutton = new Buttons(500, "blue"); //Blue
    buttons.whitebutton = new Buttons(570, "white"); //White
    successCallback();

    //Slider to help change the image of the daisy in the middle
    word.sliderval = createSlider(150, 255, 100);
    word.sliderval.position(width - 150);
    successCallback();

}

function draw() {

    //Chooses between two background images 
    //Establishes the first image as the default image 
    var val = flowers.radio.value();
    if (val == 1) {
        pixelDensity(2);
        flowers.flowery_1.display();
    } else if (val == 2) {
        pixelDensity(2);
        flowers.flowery_2.display();

    } else {
        pixelDensity(2);
        flowers.flowery_1.display();
    }





    // Button Box
    fill(169, 100, 178, 100); //Purple
    rect(340, 20, 300, 50, 20);

    //If the button is touched it activates the tint 
    buttons.blackbutton.touch(100, 100, 100, 100); //Black
    buttons.redbutton.touch(153, 6, 41, 200); //Red
    buttons.bluebutton.touch(6, 134, 178, 200); //Black
    buttons.whitebutton.touch(255, 255, 255, 50); //White

    //Displays the button rectangle
    buttons.blackbutton.display();
    buttons.redbutton.display();
    buttons.bluebutton.display();
    buttons.whitebutton.display();


    // Pixel of the Daisy Image
    //Arrays influenced by the amount of pixels within the images that I am extracting from 
    //I am taking the picture of a stenciled daisy and placing it into the middle of the screen to promote a sense of contrast between the tints
    var sliderval = word.sliderval.value(); //Changes the value 
    word.daisy.loadPixels(); //Load the pixels of the Daisy 
    if (word.daisy.pixels.length > 50) {
        let scale = width / sliderval;
        let hscale = floor(100 / scale);
        for (let y = 0; y < word.daisy.height; y += hscale) {
            for (let x = 0; x < word.daisy.width; x += hscale) {
                let pixelsIndex = 4 * (x + y * word.daisy.width); //Pixels are influenced by the color distribution within the image pixels
                let r = word.daisy.pixels[pixelsIndex]; // red
                let g = word.daisy.pixels[1 + pixelsIndex]; //green
                let b = word.daisy.pixels[2 + pixelsIndex]; //blue
                fill(r, g, b);
                var ind = floor(random(word.length));
                text(word.flowertext[ind], x + 340, y + 100); // Text of flowers is being used
            }
        }
    }


}

function drawText(font) { //Callback function for text
    textAlign(CENTER);
    textFont(font);
    textSize(15);


}

function successCallback(success) {
    console.log("Code is running");
}
