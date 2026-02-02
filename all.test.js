import sum from "./sum.js";
import capitalize from "./capitalize.js";
import reverseString from "./reverseString.js";
import calculator from "./calculator.js";

test("capitalize hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("reverse hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("adds 6 + 4 to equal 10", () => {
  expect(calculator.sum(6, 4)).toBe(10);
});

test("substract 6 - 4 to equal 2", () => {
  expect(calculator.substract(6, 4)).toBe(2);
});

test("multiply 6 * 4 to equal 24", () => {
  expect(calculator.multiply(6, 4)).toBe(24);
});

test("divide 6 / 4 to equal 1.5", () => {
  expect(calculator.divide(6, 4)).toBe(1.5);
});
