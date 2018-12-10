//Displays the Background images for the Canvas 
class Flowerbacky {
    constructor(flowers, x, y, newx, newy) {
        this.flowers = flowers;
        this.x = x;
        this.y = y;
        this.newx = newx;
        this.newy = newy;
    }

    display() { //Places the background images

        image(this.flowers, this.x, this.y, this.newx, this.newy);
    }

}
