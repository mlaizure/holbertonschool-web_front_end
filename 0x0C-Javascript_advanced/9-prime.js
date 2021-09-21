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
countPrimeNumbers();
const c1 = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (c1 - c0) +
	    ' milliseconds.');
