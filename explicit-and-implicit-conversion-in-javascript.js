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


// Original Code: let result = "5" - 2;
let result = Number("5") - 2; 
console.log("The result is: " + result); 
// The subtraction operator (-) in JavaScript can trigger implicit type conversion.
// To avoid confusion, use Number() to convert "5" into a numeric value.

// Original Code: let isValid = Boolean("false");
let isValid = "false" === "true"; 
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!");
}
// Boolean("false") evaluates to true because any non-empty string is truthy in JavaScript.
// To handle this correctly, compare the string value explicitly to its expected condition.

// Original Code: let totalAge = age + 5;
let age = "25";
let totalAge = Number(age) + 5; // Convert "25" (string) to a number explicitly
console.log("Total Age: " + totalAge); // Output: "Total Age: 30"
// Using the `+` operator between a string ("25") and a number (5) triggers concatenation.
// Converting "25" to a number with Number() ensures correct arithmetic.

// Implicit Type Conversion 
let implicitNull = null + 5; // JavaScript converts null to 0
console.log("Before Implicit Conversion:", typeof null, "(Value: null)"); // object
console.log("After Implicit Conversion:", typeof implicitNull, "(Value:", implicitNull, ")"); // number (5)

// Explicit Type Conversion 
let explicitNull = String(null); // Explicitly converting null to a string
console.log("Before Explicit Conversion:", typeof null, "(Value: null)"); // object
console.log("After Explicit Conversion:", typeof explicitNull, "(Value:", explicitNull, ")"); // string ("null")
