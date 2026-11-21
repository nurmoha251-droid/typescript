//1- Typed Arrays
// Array of strings
let names: string[] = ["Ahmed", "Ali", "Mohamed"];

// Array of numbers
let grades: number[] = [85, 90, 75, 95];

// Array of booleans
let status: boolean[] = [true, false, true];
console.log(names);
console.log(grades);
console.log(status);
// try pushing wrong types
// let names: string[] = ["Ahmed", "Ali"];

// names.push("Hassan"); // Correct
// names.push(100);      // Error

// let grades: number[] = [80, 90];

// grades.push(95);      // Correct
// grades.push("Good");  // Error

// let status: boolean[] = [true, false];

// status.push(true);    // Correct
// status.push("Yes");   // Error

//2. Convert JavaScript to TypeScript
// let products = ["Phone", "Laptop", 99];

//solution


let products: string[] = ["Phone", "Laptop"];

products.push("Tablet");  // Correct
products.push("Desktop"); // Correct

products.push(99);        // Error
products.push(true);      // Error
console.log(products );
//3. Use Tuples for Fixed Values
let location: [string, number, number];

location = ["Hargeisa", 9.5624, 44.0770];

console.log(location);