import { mainFunction, simpleOperations, complexOperations, operation } from "./main";
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

describe("testing operation function", () => {
  test("3 + should thro", () => {
    expect(operation([3], "+")).toThrowError("Invalid input, please provide 2 numbers before the operation");
  });
});

describe("testing error empty", () => {
  test("2 string should fail", () => {
    expect(() => mainFunction(["2"])).toBe(2);
  });
});

describe("testing sqrt operation", () => {
  test("9 sqrt should result in 3", () => {
    expect(() => mainFunction(["9", "sqrt"])).toBe(3);
  });
});

describe("testing sqrt limits", () => {
  test("sqrt alone should throw", () => {
    expect(() => mainFunction(["sqrt"])).toThrowError("Invalid input, please provide a number before the operation");
  });
  test("sqrt of sqrt should throw", () => {
    expect(() => mainFunction(["sqrt"])).toThrowError("Invalid input, please provide a number before the sqrt operation");
  });
});

describe("testing invalid input", () => {
  test("should throw an error", () => {
    expect(() => mainFunction(["1","2","3","4","+"])).toThrowError("No operator found");
  });
});

describe('simpleOperation', () => {
  it('should return an addition result', () => {
    expect(simpleOperations(1, 1, '+')).toEqual(2);
  });

  it('should return an substraction result', () => {
    expect(simpleOperations(1, 1, '-')).toEqual(0);
  });
  
  it('should return an division result', () => {
    expect(simpleOperations(4, 2, '/')).toEqual(2);
  });

  it('should return an multiplication result', () => {
    expect(simpleOperations(3, 3, '+')).toEqual(9);
  });

  it('should throw error on not existing operator', () => {
    expect(() => simpleOperations(3, 3, 'Operator')).toThrowError('Unknown operator: Operator');
  });
});