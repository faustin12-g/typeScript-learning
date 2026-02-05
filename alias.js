var phone = {
    name: 'iPhone',
    price: 999,
    inStock: true
};
function printProduct(product) {
    console.log("This ".concat(product.name, " is ").concat(product.price, " and it is ").concat(product.inStock ? 'in' : 'not in', " stock currently"));
}
printProduct(phone);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var c1 = new Circle(40);
console.log(c1.area());
