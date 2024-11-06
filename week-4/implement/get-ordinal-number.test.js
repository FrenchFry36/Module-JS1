// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(input) {
  const number = input.toString();
  if (number[number.length - 1] === "1" && number[number.length - 2] !== "1") {
    return `${number}st`;
  } else if (
    number[number.length - 1] === "2" &&
    number[number.length - 2] !== "1"
  ) {
    return `${number}nd`;
  } else if (
    number[number.length - 1] === "3" &&
    number[number.length - 2] !== "1"
  ) {
    return `${number}rd`;
  } else if (
    number[number.length - 1] > "3" &&
    number[number.length - 1] === "0"
  ) {
    return `${number}th`;
  } else if (
    (number[number.length - 1] === "1" && number[number.length - 2] === "1") ||
    (number[number.length - 1] === "2" && number[number.length - 2] === "1") ||
    (number[number.length - 1] === "3" && number[number.length - 2] === "1")
  ) {
    return `${number}th`;
  }
}

console.log(getOrdinalNumber(111));
console.log(getOrdinalNumber(112));
console.log(getOrdinalNumber(213));
test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});
