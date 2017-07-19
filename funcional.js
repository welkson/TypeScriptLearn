var calcular = function (fn, x, y) {
    return fn(x, y);
};
var soma = function (x, y) { return x + y; };
var mult = function (x, y) { return x * y; };
console.log(calcular(soma, 5, 3)); //8
console.log(calcular(mult, 2, 7)); //14
