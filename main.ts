export const mainFunction = (input: string | null): number => {
  if (!input) {
    throw new Error("No input");
  }
  const stack: number[] = new Array();
  const arrayInput = input.split(" ");

  arrayInput.forEach((element) => {
    if (isNaN(Number(element))) {
      stack.push(operation(stack, element));
    } else {
      stack.push(Number(element));
    }
  });

  return stack.pop() ?? 0;
};

export const operation = (stack: number[], operator: string): number => {
  const simpleOperators = ["+", "-", "*", "/"];
  if (simpleOperators.includes(operator)) {
    const n1 = stack.pop();
    const n2 = stack.pop();
    if (n1 !== undefined && n2 !== undefined) {
      return simpleOperations(n2, n1, operator);
    } else {
      throw Error("Invalid input, please provide 2 numbers before the operation");
    }
  } else {
    return complexOperations(stack, operator);
  }
};

export const complexOperations = (stack: number[], operator: string): number => {
  switch (operator) {
    case "sqrt":
      const number = stack.pop();
      if (number) {
        return Math.sqrt(number);
      } else {
        throw Error("Invalid input, please provide a number before the operation");
      }
    case "max":
      return Math.max(...stack);
    default:
      throw Error(`Unknown operator: ${operator}`);
  }
};

export const simpleOperations = (n1: number, n2: number, operator: string): number => {
  switch (operator) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "/":
      return n1 / n2;
    case "*":
      return n1 * n2;
    default:
      throw Error(`Unknown operator: ${operator}`);
  }
};

export class CustomNumber1Error extends Error {
  constructor(m: string) {
    super(m);
    Object.setPrototypeOf(this, CustomNumber1Error.prototype);
  }
}
