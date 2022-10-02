class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
    getArea(){
        let area = this.length*this.breadth;
        return area;
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side);
    }
}

let obj = new Square(5);
console.log((obj.getArea()));