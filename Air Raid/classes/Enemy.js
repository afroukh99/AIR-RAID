import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../index.js";
import { Shape } from "./Shape.js"

export class Enemy extends Shape {
  constructor(x, y, width, height, sprite, speed) {
    super(x, y, width, height, sprite, speed);
  }

  /**
   * 
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    super.draw(ctx)
  }






}