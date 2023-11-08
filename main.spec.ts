import mainFunction from "./main";
import {expect, jest, test} from '@jest/globals';

describe('testing plus operation', () => {
    test('3 2 + string should result in 5', () => {
      expect(mainFunction("3 2 +")).toBe(5);
    });
  });

  describe('testing error empty', () => {
    test('2 string should fail', () => {
      expect(mainFunction("2")).toBe("jsp a voir apres");
    });
  });

describe('testing sqrt operation', () => {
    test('9 sqrt should result in 3', () => {
        expect(mainFunction("9")).toBe(3);
    });
});


