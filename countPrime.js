function countPrimes(upperLimi) {
 let count = 0;
 for (let num = 2; num < upperLimit; num++) {
  let isPrime = true;
  for (let divisor = 2; divisor * divisor <= num; divisor++) {
   if (num % divisor === 0) {
    isPrime = false;
    break;
   }
  } 
  if (isPrime) {
   count++
  }
 }
 return count;
}
