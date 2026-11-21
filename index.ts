
//1: Declare Variables with Explicit Types
//Solution
let productName: string = "Laptop";
let price: number = 500;
let discountAvailable: boolean = true;

//assigning wrong values
//  productName = 123; 
//  price = "500"; 
//  discountAvailable = "true";

 //Corrected version
 productName = "Desktop";
 price = 300;
 discountAvailable = false;

 //2: Convert JavaScript to TypeScript
//  function getDiscount(price, discount) {
//   return price - price * discount;
// }

//TypeScript solution
function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}
console.log(getDiscount(100, 0.2));

// 3: Dangerous any
// function printLength(x: any) {
//   console.log(x.length);
// }

// printLength("Hello");
// printLength(123);

function printLength(x: unknown): void {

  if (typeof x === "string" || Array.isArray(x)) {
    console.log(x.length);
  } else {
    console.log("Error: Value has no length property");
  }

}

printLength("Hello");
printLength(123);