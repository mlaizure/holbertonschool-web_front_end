const countPrimeNumbers = () => {
  let counter = 0;
  for (let i = 2; i <= 100; ++i) {
    let isPrime = true;
    for (let j = 2; j <= 100; ++j) {
      if (i % j === 0 && i !== j) {
	isPrime = false;
	break;
      }
    }
    if (isPrime) {
      counter++;
    }
  }
  return counter;
};
const c0 = performance.now();
setTimeout(() => {
  for (let i = 0; i < 100; ++i) {
    countPrimeNumbers();
  }
}, 0);
const c1 = performance.now();
console.log('Execution time of calculating prime numbers 100 times was ' +
	    (c1 - c0) + ' milliseconds.');
