"use strict";
let car = 'subaru';
// Test 1: Equality comparision (True)
console.log("Is car == 'subaru' ? I predict True.");
console.log(car == 'subaru'); // True
// Test 2: Equality comparision (True)
console.log("Is car === 'subaru' ? I predict True.");
console.log(car === 'subaru'); // True
// Test 3: Inequality comparision (False)
console.log("Is car != 'subaru' ? I predict False.");
console.log(car != 'subaru'); // False
// Test 4: Strict Inequality comparision (False)
console.log("Is car !== 'subaru' ? I predict False.");
console.log(car !== 'subaru'); // False
// Test 5: Less than comparision (False)
console.log("Is car < 'subaru' ? I predict False.");
console.log(car < 'subaru'); // False
// Test 6: Greater than comparision (False)
console.log("Is car > 'subaru' ? I predict False.");
console.log(car > 'subaru'); // False
// Test 7: Less than or Equal comparision (True)
console.log("Is car <= 'subaru' ? I predict True.");
console.log(car <= 'subaru'); // True
// Test 8: Greater than or Equal comparision (True)
console.log("Is car >= 'subaru' ? I predict True.");
console.log(car >= 'subaru'); // True
// Test 9: Cheacking truthness(True)
console.log("Is car? I predict True.");
console.log(car); // True (non-empty string is truthy)
// Test 10: Cheacking Falsiness (False)
console.log("Is !car? I predict False.");
console.log(!car); // False (negation of a truthy value)
