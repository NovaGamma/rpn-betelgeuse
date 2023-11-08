import { mainFunction, operation } from "./main";

describe('testing plus operation', () => {
  test('3+2 string should result in 5', () => {
    expect(operation(3, 2, '+')).toBe(5);
  });
});

describe('testing minus operation', () => {
    test('3-2 string should result in 1', () => {
      expect(operation(3, 2, '-')).toBe(1);
    });
  });

  describe('testing minus operation with negative result', () => {
    test('3-2 string should result in 1', () => {
      expect(operation(2, 3, '-')).toBe(-1);
    });
  });

describe('testing error empty', () => {
  test('2 string should fail', () => {
    expect(mainFunction("2")).toBe("jsp a voir apres");
  });
});

describe('testing sqrt operation', () => {
  test('9 sqrt should result in 3', () => {
      expect(mainFunction("9 sqrt")).toBe(3);
  });
});


