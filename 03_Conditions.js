/** @format */

function performAction(action, num1, num2) {
  // here we accept an action as a string and two numbers as parameters
  switch (action) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) {
        throw new Error("Cannot divide by zero");
      }
      return num1 / num2;
    default:
      throw new Error("Unknown action: " + action);
  }
}
// Example usage:
performAction("add", 5, 3); // Returns 8 here we pass the action as a string and the numbers as parameters
performAction("subtract", 5, 3); // Returns 2
performAction("multiply", 5, 3); // Returns 15
performAction("divide", 5, 3); // Returns 1.666666666

switch (performAction("add", 5, 3)) {
  case 8:
    console.log("Addition result is 8");
    break;
  case 2:
    console.log("Subtraction result is 2");
    break;
  case 15:
    console.log("Multiplication result is 15");
    break;
  case 1.666666666:
    console.log("Division result is 1.666666666");
    break;
  default:
    console.log("Unknown result");
}

function CheckTruthyFalsy(value) {
  if (value) {
    console.log(value + " is truthy");
  } else {
    console.log(value + " is falsy");
  }
}
CheckTruthyFalsy(1); // 1 is truthy
CheckTruthyFalsy(0); // 0 is falsy
CheckTruthyFalsy(""); //  is falsy
CheckTruthyFalsy("Hello"); // Hello is truthy
CheckTruthyFalsy(null); // null is falsy
CheckTruthyFalsy(undefined); // undefined is falsy
CheckTruthyFalsy(NaN); // NaN is falsy
CheckTruthyFalsy([]); //  is truthy (empty array is truthy)
CheckTruthyFalsy([1, 2, 3]); // 1,2,3
// is truthy (non-empty array is truthy)
CheckTruthyFalsy({}); // [object Object] is truthy (empty object is truthy
CheckTruthyFalsy({ key: "value" }); // [object Object] is truthy (non-empty object is truthy)
CheckTruthyFalsy(function () {}); // function () {} is truthy (function is truthy)
CheckTruthyFalsy(() => {}); // () => {} is truthy (arrow function is truthy)
CheckTruthyFalsy(true); // true is truthy
CheckTruthyFalsy(false); // false is falsy
CheckTruthyFalsy(Symbol("symbol")); // Symbol(symbol) is truthy (symbol is truthy)
CheckTruthyFalsy(BigInt(123)); // 123n is truthy (BigInt is truthy)
CheckTruthyFalsy(new Date()); // [object Date] is truthy (Date object
