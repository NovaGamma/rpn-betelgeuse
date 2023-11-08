import { mainFunction, simpleOperations, complexOperations, operation } from "./main";
import { expect, test, describe } from "@jest/globals";

describe("testing error empty", () => {
  test("2 string should fail", () => {
    expect(() => mainFunction(["2"])).toBe(2);
  });
});

describe("testing invalid input", () => {
  test("should throw an error", () => {
    expect(() => mainFunction(["1","2","3","4","+"])).toThrowError("Invalid input: 4 numbers provided, 2 expected");
  });
});

describe('simpleOperation', () => {
  it('should return an addition result', () => {
    expect(simpleOperations(1, 1, '+')).toEqual(2);
  });

  it('should return a substraction result', () => {
    expect(simpleOperations(1, 1, '-')).toEqual(0);
  });
  
  it('should return a division result', () => {
    expect(simpleOperations(4, 2, '/')).toEqual(2);
  });

  it('should return a division by 0 result', () => {
    expect(simpleOperations(4, 0, '/')).toThrowError('Division by 0 is impossible');
  });

  it('should return a multiplication result', () => {
    expect(simpleOperations(3, 3, '*')).toEqual(9);
  });
  it('should return a multiplication by 0 result', () => {
    expect(simpleOperations(3, 0, '*')).toEqual(0);
  });

  it('should return a substraction with negative result', () => {
    expect(simpleOperations(2, 3, '-')).toEqual(-1);
  });

  it('should throw error on not existing operator', () => {
    expect(() => simpleOperations(3, 3, 'Operator')).toThrowError('Unknown operator: Operator');
  });

  test("3 + should throw", () => {
    expect(operation([3], "+")).toThrowError("Invalid input, please provide 2 numbers before the operation");
  });
});

describe('complexOperation', () => {
  it('should calculate the square root', () => {
    expect(complexOperations([9], "sqrt")).toBe(3);
  });
  
  it('should get the minimum of an array', () => {
    expect(complexOperations([0, 1, 2, 3, 4, 5], 'min')).toEqual(0);
  });

  it('should get the maximum of an array', () => {
    expect(complexOperations([0, 1, 2, 3, 4, 5], 'max')).toEqual(5);
  });

  it('sqrt alone should throw', () => {
    expect(() => complexOperations([],"sqrt")).toThrowError("Invalid input, please provide a number before the sqrt operation");
  });
  it('sqrt of sqrt should throw', () => {
    expect(() => mainFunction(['sqrt','sqrt'])).toThrowError("Invalid input, please provide a number before the sqrt operation");
  });
});