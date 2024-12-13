import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../index.js";
import { Shape } from "./Shape.js";

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
        if (!this.sprite) {
            console.error("Sprite is not defined for the plane.");
            return;
        }

        if (this.sprite.complete) {
            ctx.drawImage(
                this.sprite,
                this.xPosition,
                this.yPosition,
                this.width,
                this.height
            );
        } else {
            this.sprite.onload = () => {
                ctx.drawImage(
                    this.sprite,
                    this.xPosition,
                    this.yPosition,
                    this.width,
                    this.height
                );
            };
        }
    }

    /**
     *
     *
     *
     * @param {CanvasRenderingContext2D} ctx
     */
    move(ctx) {
        document.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowLeft":
                    this.xPosition -= this.speed;
                    if (this.xPosition < 0) this.xPosition = 0;
                    break;
                case "ArrowRight":
                    this.xPosition += this.speed;
                    if (this.xPosition > CANVAS_WIDTH - this.width)
                        this.xPosition = CANVAS_WIDTH - this.width;
                    break;
            }

            ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            this.draw(ctx);
        });
    }
}
