export class DrawBricks{
    constructor(_ctx, _bricks, _brickRowCount, _brickColumnCount, _brickWidth, _brickHeight, _brickPadding, _brickOffsetTop, _brickOffsetLeft, _color){
        this.ctx = _ctx;
        this.bricks = _bricks;
        this.brickRowCount = _brickRowCount;
        this.brickColumnCount = _brickColumnCount;
        this.brickWidth = _brickWidth;
        this.brickHeight = _brickHeight;
        this.brickPadding = _brickPadding;
        this.brickOffsetTopricks = _brickOffsetTop;
        this.brickOffsetLeft = _brickOffsetLeft;
        this.color = _color;    
    }
    
    printBricks(){
        this.ctx.beginPath();
        this.ctx.rect(brickX, brickY, this.brickWidth, this.brickHeight);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}