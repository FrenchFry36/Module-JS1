// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

const isPrime = (num) => {
  if (num >= 1) {
    let index = 2;
    while (index <= Math.sqrt(num)) {
      if (num % index === 0) {
        return false;
      } else {
        index++;
        return true;
      }
    }
  }
  return false;
};

console.log(isPrime(0));
test("is prime test", () => {
  expect(isPrime(12423)).toBe(true);
});
