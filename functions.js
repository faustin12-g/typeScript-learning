function myFunc(name, country, age) {
    if (country === void 0) { country = 'Rwanda'; }
    return "Name:".concat(name, ", from: ").concat(country, " ").concat(age ? 'Age:' : '', " ").concat(age);
}
console.log(myFunc('Faustin', undefined, 90));
function func1(a, b, callback) {
    return callback(a, b);
}
function add(a, b) {
    return a + b;
}
console.log(add(4, 3));
function sumUp() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) { return a + b; }, 0);
}
console.log('Their sum:', sumUp(1, 2, 3, 4, 5, 6, 7, 8, 9));
