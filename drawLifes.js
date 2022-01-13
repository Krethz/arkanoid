export class DrawLifes{
    constructor(_ctx, _canvas, _lives){
        this.ctx = _ctx;
        this.lives = _lives;
        this.canvas = _canvas;
    }

    printLifes(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Lifes: " + this.lives, this.canvas.width - 65, 20);
    }
}