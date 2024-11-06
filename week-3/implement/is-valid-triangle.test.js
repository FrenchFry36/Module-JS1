const isValidTriangle = require("./is-valid-triangle"); // Import the function
test("test the triangle validation", () => {
  expect(isValidTriangle(3, 3, 3)).toBe(true);
  expect(isValidTriangle(1, 2, 4)).toBe(false);
}); //.test.js
