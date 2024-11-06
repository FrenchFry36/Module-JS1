const isProperFraction = require("./is-proper-fraction"); // Import the function
test("test the proper fraction", () => {
  expect(isProperFraction("1/2")).toBe(true);
  expect(isProperFraction("2/2")).toBe(false);
}); //.test.js
