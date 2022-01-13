export class Rectangle{
    constructor(_width, _height, _color){
        console.log("the rectangle is being created")

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    getArea(){
        return this.width * this.height;
    }

    printDescription(){
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
    }
}