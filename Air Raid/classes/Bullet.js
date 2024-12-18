import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../index.js";
import { Shape } from "./Shape.js";



export class Bullet extends Shape {

  constructor(x, y, width, height,sprite, speed) {
    super(x, y, width, height,sprite, speed);
  }


  /**
    *
    * @param {CanvasRenderingContext2D} ctx
    */
  fire(ctx) {
    const sprite = new Image()
    sprite.src = this.sprite
    if (!sprite) {
      console.error("Sprite is not defined for the plane.");
      return;
  }
    if (sprite.complete) {
      ctx.clearRect(this.xPosition,this.yPosition , CANVAS_WIDTH , 20)
      ctx.drawImage(sprite,this.xPosition, this.yPosition, this.width, this.height);
      this.yPosition -= this.speed;
      if (this.yPosition + this.height * 2  < 0) {
        return;
      }
    }else {
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

    requestAnimationFrame(() => this.fire(ctx));
  }


}