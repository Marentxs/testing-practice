import sum from "./sum.js";
import capitalize from "./capitalize.js";
import reverseString from "./reverseString.js";

test("capitalize hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("reverse hello", () => {
  expect(reverseString("hello")).toBe("olleh");
});
