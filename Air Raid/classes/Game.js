import { Plane } from "./Plane.js";
import { Enemy } from "./Enemy.js";
import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../index.js";

export class Game {
    constructor() {
        this.plane = null;
        /** @type {Array<Enemy>} */ this.enemies = [];
        this.bullets = [];
        this.score = 0;
        this.gameOver = false;
        this.lifes = 3;
        this.lastEnemySpawnTime = 0; 
        this.enemySpawnInterval = 2500; // Spawn enemie
    }

    /**
     * Initialize the game.
     * @param {CanvasRenderingContext2D} ctx 
     */
    init(ctx) {
        if (this.gameOver || this.lifes === 0) {
            console.error("Game cannot start. Either it's over or no lives are left.");
            return;
        }

        const planeSpriteSrc = "./assets/images/plane1.png";
        this.plane = new Plane(0, CANVAS_HEIGHT - 100, 100, 80, planeSpriteSrc, 20); // Position plane at the bottom
        this.loop(ctx); // Start the game loop
        this.plane.move(ctx)
        this.plane.shoot(ctx)
    }

    /**
     * Spawn an enemy at regular intervals.
     * @param {number} currentTime 
     */
    generateEnemy(currentTime) {
        if (currentTime - this.lastEnemySpawnTime > this.enemySpawnInterval) {
            const enemySpriteSrc = "./assets/images/plane1.png";
            const enemy = new Enemy(
                Math.random() * (CANVAS_WIDTH - 50), // Random X position
                0, // Start at the top
                60, 
                60, 
                enemySpriteSrc,
                Math.random() * 2 + 1 // Random speed
            );
            this.enemies.push(enemy);
            this.lastEnemySpawnTime = currentTime;
        }
    }

    spawnEnemy () {
        this.enemies.forEach((enemy , index )=> {
            if (enemy.yPosition > CANVAS_HEIGHT) {
                this.enemies.splice(index ,1)
            }
            enemy.yPosition += enemy.speed;
        });
    }

    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    draw (ctx) {
        ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
        if (this.plane) {
            this.plane.draw(ctx)
        }
        this.enemies.forEach((enemy ,idx)=> {
            enemy.draw(ctx)
        })
    }



    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    loop (ctx) {
        const loopCallBack = (currentTime) => {
            if (this.gameOver || this.lifes == 0) {
                return
            }
            this.draw(ctx)
            this.generateEnemy(currentTime)
            this.spawnEnemy(ctx)
            requestAnimationFrame(loopCallBack)
        }
        requestAnimationFrame(loopCallBack)
    }




}
