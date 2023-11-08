export const mainFunction = (input: string[]): number => {
  const stack: number[] = new Array();

  input.forEach((element) => {
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
    if (stack.length !== 2) {
      throw Error(`Invalid input: ${stack.length} numbers provided, 2 expected`);
    }

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
      if (stack.length !== 1) {
        throw Error("Invalid input, please provide only one number before the sqrt operation");
      }
      const number = stack.pop();
      if (number) {
        return Math.sqrt(number);
      } else {
        throw Error("Invalid input, please provide a number before the sqrt operation");
      }
    case "max":
      return Math.max(...stack);
    case "min":
      return Math.min(...stack);
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
      if(n2 === 0) {
        throw Error('Division by 0 is impossible')
      }
      return n1 / n2;
    case "*":
      return n1 * n2;
    default:
      throw Error(`Unknown operator: ${operator}`);
  }
};
