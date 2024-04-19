// • Tests for equality with strings: 
console.log("Equality test with string: ", "Apple" === "Apple");
// • Test for inequality with strings:
console.log("Inequality test with string: ", ("Apple" as string) != "Orange");

// • Tests using the lower case function:
console.log("Lowercase function test: ", "HELLO".toLowerCase() === "hello");

// • Numerical tests involving equality:
console.log("Equality test with numbers: ", 26 === 26);
// •Numerical test involving inequlity:
console.log("Inequality test with numbers: ", 26 != 26);

//• Greater than test:
console.log("Greater than test: ", 10 > 5);
// •Less than test:
console.log("Less than test: ", 10 < 5);

//• Greater than or equal to:
console.log("Greater than or equal to test: ", 10 >= 10);
//• Less than or equal to:
console.log("Less than or equal to test: ", 10 <= 5);

// • Tests using "and" operator:
console.log("And operator test: ", 5 === 5 && 10 > 5);
console.log("And operator test: ", 6 != 6 && 5 > 10);

// •Tests using "or" operator:
console.log("Or operator test: ", 5 === 5 || 5 > 10) ;
console.log("Or operator test: ", 6 != 6 || 5 > 10);


//• Test whether an item is in a array:
let fruits : string[] = ['Banana', 'Strawberry', 'Watermelon'];
console.log('Test "Banana" is in a array: ', fruits.includes("Banana"));
console.log('Test "Guava" is in a array: ', fruits.includes("Guava"));

//• Test whether an item is not in a array
console.log('Test "Apple" is not in a array: ', !fruits.includes("Apple"));
console.log('Test "Strawberry" is not in a array: ', !fruits.includes("Strawberry"));