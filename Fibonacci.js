// Fibonacchi
function fibonacchi(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacchi(3));
console.log(fibonacchi(5));
console.log(fibonacchi(7));

//Big O = O(n)
