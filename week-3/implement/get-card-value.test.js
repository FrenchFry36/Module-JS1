const getCardValue = require("./get-card-value"); // Import the function
test("test the card value", () => {
  expect(getCardValue("J")).toBe(10);
  expect(getCardValue("A")).toBe(11);
}); //.test.js
