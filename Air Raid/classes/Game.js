import { Plane } from "./Plane.js";

export class Game {
    constructor () {
        this.plane = null;
        this.enemies = [];
        this.bullets = [];
        this.score = 0;
        this.gameOver = false
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    init (ctx){
        const sprite = new Image()
        sprite.src ="./assets/images/plane1.png"
        this.plane = new Plane(20,20,80,80,sprite,20);
        this.plane.draw(ctx)
        this.plane.move(ctx)
    }
}
