export class DrawScore {
    constructor(_ctx, _score){
        this.ctx = _ctx;
        this.score = _score;
    }

    printScore(){
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: " + this.score, 8, 20);
    } 
}