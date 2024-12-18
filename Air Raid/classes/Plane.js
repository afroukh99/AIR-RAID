import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../index.js";
import { Bullet } from "./Bullet.js";
import { Shape } from "./Shape.js";

let arrowClicked = false
export class Plane extends Shape {

    constructor(x, y, width, height, sprite, speed) {
        super(x, y, width, height, sprite, speed);
        this.xPosition = (CANVAS_WIDTH / 2) - (this.width / 2);
        this.yPosition = CANVAS_HEIGHT - this.height * 2;
    }



    /**
     * Draw the plane on the canvas.
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        super.draw(ctx)
    }


    /**
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    move(ctx) {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    arrowClicked = true
                    this.xPosition -= this.speed;
                    if (this.xPosition < 0) this.xPosition = 0
                    break;
                case "ArrowRight":
                    arrowClicked = true
                    this.xPosition += this.speed;
                    if (this.xPosition > CANVAS_WIDTH - this.width)
                        this.xPosition = CANVAS_WIDTH - this.width;
                    break;
            }

            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.draw(ctx);
        });
    }
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    shoot(ctx) {
        document.addEventListener("keydown", e => {
            if (e.key === " ") {
                const bulletImgSrc = "./assets/images/bullet.png"  
                const bullet = new Bullet((this.xPosition + (this.width / 2)), this.yPosition - 20, 20, 15,bulletImgSrc, 5)
                bullet.fire(ctx)
            }
        })
    }


}
