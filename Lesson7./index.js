// 1. Вывести в консоль числа от 1 до n, где n - это произвольное целое число большее 1.

function numberOutput(n) {
    return (n > 1) ? n.toString() + numberOutput(n - 1) : 1;
    }
    console.log(numberOutput(9));
    
    //2. Вывести в консоль простые числа от 1 до n.
    
    function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
    return false;
    }
    }
    return num > 1;
    }
    
    function getPrimes(num) {
    const primes = [];
    
    for (let i = 2; i <=num; i++) {
    if (isPrime(i)) {
    primes.push(i);
    }
    }
    
    return primes;
    }
    
    console.log(getPrimes(120));
    
    // 3. Вывести в консоль числа кратные k, в диапазоне от 1 до n. => in home (for)
    
    var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 27, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50 ];
    
    for (var i = 0; i <= 20 ; i++) {
    if(numbers[i] % 3 === 0){
    console.log (numbers[i]);
    }
    }
    
    // task 2. Return the Missing Element
    // https://www.codewars.com/kata/reviews/52995cff9ce954dc50000a86/groups/52ab43d9a7fd03a445000be0
    
    // task 3. Add property to every object in array
    // https://www.codewars.com/kata/reviews/54e8cae858b1db0d2a000148/groups/54e9410192ad56c41e0001b3
    
    // task 4. Find Your Villain Name
    // https://www.codewars.com/kata/reviews/536c36d47fc09aeb04000006/groups/536c52e62f4036f33f0001b5
    
    // task 5. Take a Ten Minute Walk
    // https://www.codewars.com/kata/reviews/54da539c98b8a2ad7600022a/groups/54db48f003e88a647c0003e9
    
    