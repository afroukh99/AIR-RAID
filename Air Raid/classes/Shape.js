
export class Shape {

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @param {HTMLImageElement | string} sprite 
     * @param {Number} speed 
     */

    constructor(x,y,width,height,sprite,speed) {
        this.xPosition  = x;
        this.yPosition = y
        this.width = width
        this.height = height
        this.sprite = sprite
        this.speed = speed
    }

    move () {

    }

}