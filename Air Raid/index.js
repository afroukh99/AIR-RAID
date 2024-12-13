import {Game} from "./classes/Game.js"

const canvas = document.getElementById("myCanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx  = canvas.getContext("2d");

export const CANVAS_WIDTH = canvas.width = window.innerWidth;
export const CANVAS_HEIGHT = canvas.height = window.innerHeight;





const game = new Game()
game.init(ctx)
    



