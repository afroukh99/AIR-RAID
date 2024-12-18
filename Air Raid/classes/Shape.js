
export class Shape {

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @param {string} sprite 
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

     /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        const sprite = new Image()
        sprite.src = this.sprite
        if (!sprite) {
            console.error("Sprite is not defined");
            return;
        }

        if (sprite.complete) {
            ctx.drawImage(
                sprite,
                this.xPosition,
                this.yPosition,
                this.width,
                this.height
            );
        } else {
            sprite.onload = () => {
                ctx.drawImage(
                    sprite,
                    this.xPosition,
                    this.yPosition,
                    this.width,
                    this.height
                );
            };
        }
    }


}