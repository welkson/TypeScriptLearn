let calcular = function(fn, x, y) {
    return fn(x, y);
};

const soma = (x, y) => x + y;
const mult = (x, y) => x * y;

console.log(calcular(soma, 5, 3));  //8
console.log(calcular(mult, 2, 7));  //14