const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//const multiplyByTwo = (number) => {
//  return number * 2;
//}

function multiplyByTwo(number = 1) {
    return {
        multiply: 2,
        operator: 'x',
        original: number,
        value: number * 2,
    };
}
const multiplesOfTwo = numbers.map(multiplyByTwo);

console.log(multiplesOfTwo[1])

console.table(multiplesOfTwo);
const includesTwo = numbers.includes(20);
const lastItem = numbers.pop();

numbers.forEach((number) => {
    console.log(number ** number);
});
console.log({ includesTwo, lastItem, number: numbers });