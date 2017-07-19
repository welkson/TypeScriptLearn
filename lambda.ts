let numbers = [1, 2, 3, 4, 5, 6, 7, 8]

//sintaxe com function
console.log(numbers.filter(function(x) { return x % 2 == 0; }));

//sintaxe reduzida (sem function - uso de arrow functions do ES6 =>)
console.log(numbers.filter(x => x % 2 == 0))