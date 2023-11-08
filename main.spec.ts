import { mainFunction, simpleOperations, complexOperations, operation, CustomNumber1Error } from "./main";
import { expect, test, describe } from "@jest/globals";

describe("testing plus operation", () => {
  test("3+2 string should result in 5", () => {
    expect(simpleOperations(3, 2, "+")).toBe(5);
  });
});

describe("testing minus operation", () => {
  test("3-2 string should result in 1", () => {
    expect(simpleOperations(3, 2, "-")).toBe(1);
  });
});

describe("testing minus operation with negative result", () => {
  test("2-3 string should result in 1", () => {
    expect(simpleOperations(2, 3, "-")).toBe(-1);
  });
});

describe("testing max operation", () => {
  test("max of 1,2,3 should result in 3", () => {
    expect(complexOperations([1,2,3], "max")).toBe(3);
  });
});

describe("testing sqrt operation", () => {
  test("9 sqrt should result in 3", () => {
    expect(complexOperations([9], "sqrt")).toBe(3);
  });
});

describe("testing sqrt limits", () => {
  test("sqrt alone should throw", () => {
    expect(() => mainFunction("sqrt")).toThrow(new CustomNumber1Error("No number1"));
  });
});
