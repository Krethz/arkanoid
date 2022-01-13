export class DrawBall{

    constructor(_ctx, _x, _y, _ballRadius, _color){
        this.ctx = _ctx;
        this.x = _x;
        this.y = _y;
        this.ballRadius = _ballRadius;
        this.color = _color;
    }

    printBall(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}