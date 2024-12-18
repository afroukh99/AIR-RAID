import {Game} from "./classes/Game.js"

const canvas = document.getElementById("myCanvas");
/**
 * @type {CanvasRenderingContext2D}
 */
const ctx  = canvas.getContext("2d");

export const CANVAS_WIDTH = canvas.width = window.innerWidth;
export const CANVAS_HEIGHT = canvas.height = window.innerHeight;


canvas.style.backgroundImage = "url('./assets/images/back.png')";
canvas.style.backgroundSize = "cover";
canvas.style.backgroundRepeat = "no-repeat"; 


const game = new Game()
game.init(ctx)
    



