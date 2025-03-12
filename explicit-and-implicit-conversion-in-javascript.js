/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//"5" - 2 results in implicit type conversion
letresult = Number("5") - 2; // Explicitly convert "5" to a number
console.log("The result is: " + result); // Fix ensures "5" is treated as a number
// "false" is a non empty string which results in a truthy execution 
let isValid = Boolean(false); // Fix: uses actual false instead of string
if (isValid) {
    console.log("This is valid!");
}
//string causes concatenation issue resulting in "255"
let age = "25";
let totalAge = Number(age) + 5; // Fix: converted age to a number 
console.log("Total Age: " + totalAge);

// implicit type conversion example
let number1 = "10";
let number2 = 5;
let result = number1 * number2;
console.log("Imlicit conversion result:", result);

//explicit type conversion example
let isHappy = false;
let mood = String(isHappy);
console.log(mood);
console.log(typeof mood);

// Edge Case
let nullValue = null;
let convertedNull = Number(nullValue);
console.log("Explicit conversion of null:");