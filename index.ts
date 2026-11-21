//Add Types to a Function
//Original JavaScript
// function fullName(first, last) {
//   return first + " " + last;
// }

// TypeScript Version
function fullName(first: string, last: string): string {
  return first + " " + last;
}
const name = fullName("nuur", "maxamud");
console.log(name);

//2. Optional and Default Parameters
function registerUser(
  username: string,
  isAdmin?: boolean
): void {
  console.log("Username:", username);
  console.log("Admin:", isAdmin);
}

registerUser("Nuur");


//Your requested function:
function registerUser(
  username: string,
  isAdmin: boolean = false,
  language: string = "en"
): void {

  console.log("Username:", username);
  console.log("Admin:", isAdmin);
  console.log("Language:", language);

}

registerUser("Nuur");
registerUser("Ahmed", true);
registerUser("Ali", false, "so");



//3. Create a Safe Rest Function

function average(...scores: number[]): number {

  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);

  return total / scores.length;

}

console.log(average(80, 90, 70));
console.log(average(85, 90, 75, 95));
console.log(average(60, 70, 80, 90, 100));