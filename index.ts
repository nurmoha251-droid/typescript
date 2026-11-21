//1. Define and Use an Interface

interface User {
  username: string;
  password: string;
}

function logins(user: User): void {
  console.log("Username:", user.username);
  console.log("Password:", user.password);
}

const user12: User = {
  username: "cali",
  password: "654321"
};

logins(user12);


//2. Use Optional Properties
interface User {
  username: string;
  password: string;
  email?: string; // Optional property
}

function login(user: User): void {
  console.log("Username:", user.username);
  console.log("Password:", user.password);

    console.log("Email:", user.email);
  
}

const user1: User = {
  username: "Nuur",
  password: "123456",
   email: "nuur@example.com"
};

const user2: User = {
  username: "Ahmed",
  password: "abcdef",

};

login(user1);
login(user2);