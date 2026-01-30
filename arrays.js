var arr = [1, 3, 2, 7];
var strs = ['Faustin ', 'is ', 'bad ', 'at ', 'learning ', 'and ', 'adapting ', 'codes'];
// arr.push('a')
// strs.push(true)
var arr1 = [1, 2, 3];
// arr1.push(9)
var sum = arr.reduce(function (a, b) { return a + b; }, 0);
console.log(sum);
console.log(strs.join(''));
