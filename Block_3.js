// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
    function sumOfElems() {
        let sum = 0;
        for (let i = 1; i <= 99; i++) {
            if (i % 2 === 0) {
                sum = sum + i;
            }
        }
        return sum
    }
    console.log(sumOfElems())

    function countOfElems() {
        let quantity = 0;
        for (let i = 1; i <= 99; i++) {
            if (i % 2 === 0) {
                quantity++
            }
        }
        return quantity
    }
    console.log(countOfElems())

// Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
let i = 0;
function isSimpleNum(i) {
    if(i % i === 0 && i % 1 === 0){
        return true
    } else {
        return false
    }
}
console.log(isSimpleNum(24))

// Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function FindSqrt(num) {
    let i = 1;
    while(i * i <= num){
        i++;
    }
    return i - 1 ;
}
console.log(FindSqrt(81))

function BinSearchSqrt(num){
    let result = num;
    while(result * result > num){
        result /=2;
        while(result * result < num){
            result++;
        }
    }
    return result;
}
console.log(BinSearchSqrt(9))

//Вычислить факториал числа n. n! = 1*2*…*n-1*n
function getFactorial(num){
    let result = 1;
    if(num > 1){
        for(let i = 2; i <= num; i++){
            result *= i;
        }
    }
    return result;
}
console.log(getFactorial(60))

// Посчитать сумму цифр заданного числа
function sumOfNumInNumber(i) {
    let sumNum = 0;
    if(i < 10) {
        sumNum = i;
    } else if(i < 100) {
        sumNum = (i / 10) + (i % 10);
    } else if(i < 1000) {
        sumNum = (i / 100) +((i % 100) / 10) + (i % 10);
    } else if(i < 10000){
        sumNum = (i / 1000) + (((i % 1000) / 100) / 10) + (i % 10);
    }
return sumNum
}
console.log(sumOfNumInNumber(555))

// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321.
function reversNum(n) {
    if (n < 1) return n;
    let lastPosition = n % 10;
    let rest = (n - lastPosition) / 10;
    console.log(lastPosition);
    reversNum(rest);
}
 console.log(reversNum(123))

