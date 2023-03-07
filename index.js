function fibonacciSequence(num) {
  let a = 0;
  let b = 1;
  let fib = [];
  fib.push(a);
  fib.push(b);
  while (b <= num) {
    let c = a + b;
    a = b;
    b = c;
    fib.push(c);
  }
  if (fib.includes(num)) {
    return `${num} pertence à sequência de Fibonacci.`;
  } else {
    return `${num} não pertence à sequência de Fibonacci.`;
  }
}

function main() {
  const number = parseInt(document.getElementById('numero').value);
  const result = document.getElementById('resultado');
  result.textContent = fibonacciSequence(number);
}
