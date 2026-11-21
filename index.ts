function echo<T>(input: T): T {
  return input;
}
const result1 = echo<string>("Hello TypeScript");
const result2 = echo<number>(100);
const result3 = echo<string[]>(["Phone", "Laptop", "Tablet"]);
const result4 = echo<{ name: string; age: number }>({
  name: "Nuur",
  age: 25
});

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);


//2. Generic Interface
interface ApiResult<T> {
  status: string;
  data: T;
}

const response1: ApiResult<string> = {
  status: "success",
  data: "Login successful"
};

console.log(response1);

const response2: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: {
    id: 101,
    name: "Nuur"
  }
};

console.log(response2.data.name);
console.log(response2.data.id);


//3. First Element Function
function first<T>(items: T[]): T  | undefined{
  return items[0];
}

const firstNumber = first([10, 20, 30, 40]);

console.log(firstNumber);


const firstName = first(["Ahmed", "Ali", "Mohamed"]);

console.log(firstName);

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Phone", price: 300 },
  { id: 3, name: "Tablet", price: 200 }
];

const firstProduct = first(products);

console.log(firstProduct.name);
console.log(firstProduct.price);