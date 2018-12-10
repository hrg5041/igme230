//Buttons that apply tints to the project
class Buttons {
    constructor(x, color) {
        this.x = x;
        this.y = 30;
        this.width = 50;
        this.height = 30;
        this.rounded = 10;
        this.color = color;

    }
    //Places the objects 
    display() { //Displays the buttons
        fill(this.color);
        rect(this.x, this.y, this.width, this.height, this.rounded);
    }
    //Touch is only activated within the colored boxes
    touch(red, blue, green, alpha) {

        if ((dist(mouseX, mouseY, this.x + this.width, this.y + this.height) < 50) && mouseIsPressed == true) {
            updatePixels();
            tint(red, blue, green, alpha); //RGB and alpha values in TINT
        }
    }
}
