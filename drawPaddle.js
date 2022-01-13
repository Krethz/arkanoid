export class DrawPaddle{
    constructor(_ctx, _canvas, _paddleX, _paddleWidth, _paddleHeight, _color){
        this.ctx = _ctx;
        this.canvas = _canvas;
        this.paddleX = _paddleX;
        this.paddleWidth = _paddleWidth;
        this.paddleHeight = _paddleHeight;
        this.color = _color;
    }

    printPaddle(){
        this.ctx.beginPath();
        this.ctx.rect(this.paddleX, this.canvas.height - this.paddleHeight, this.paddleWidth, this.paddleHeight);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    
}