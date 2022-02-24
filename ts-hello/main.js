// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', false];
// const ColorRed = 0;
// const ColorGreen =1;
// const ColorBlue =2;
// enum Color { Red=0, Green=1, Blue=2, Purple = 3};
// let backgroundColor = Color.Red;
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// let log = function(message) {
//     console.log(message);
// }
// let doLog = () => {
//     console.log();
// }
// interface Point {
//     x: number, 
//     y: number
// }
// // let drawPoint = (point: {x: number, y: number}) => { // inline anotation
//     let drawPoint = (point: Point) => {
// }
// drawPoint({
//     x: 1,
//     y: 2
// })
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
