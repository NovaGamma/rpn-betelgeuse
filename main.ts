export const mainFunction = (input: string | null): number => {
  if (!input) {
    throw new Error("No input");
  }
  const stack = new Array();
  const arrayInput = input.split(" ");
  for (const element of arrayInput) {
    if (isNaN(Number(element))) {
      let result;
      let number1;
      let number2;
      if (element == "sqrt") {
        number1 = stack.pop();
      } else {
        number1 = stack.pop();
        number2 = stack.pop();
      }

      if (!number1) {
        throw new Error("No number1");
      }

      result = operation(number1, number2, element);
      stack.push(result);
    } else {
      stack.push(Number(element));
    }
  }
  return stack.pop();
};

export const operation = (number1: number, number2: number | null, operator: string): number => {
  switch (operator) {
    case "+":
      return number1 + (number2 ?? 0);
    case "-":
      return number1 - (number2 ?? 0);
    case "/":
      return number1 / (number2 ?? 0);
    case "*":
      return number1 * (number2 ?? 0);
    case "sqrt":
      return Math.sqrt(number1);
    default:
      console.error("Operation not allowed");
      return 1;
  }
};
