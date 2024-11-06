const getAngleType = require("./get-angle-type"); // Import the function

test("test the angle type", () => {
  expect(getAngleType(40)).toBe("Acute angle");
  expect(getAngleType(95)).toBe("Obtuse angle");
});
