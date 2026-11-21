enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer"
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}
console.log("superadmin:", canEdit(UserRole.SuperAdmin));
console.log("moderator:", canEdit(UserRole.Moderator));
console.log("viewer:", canEdit(UserRole.Viewer));


//2. Type Assertion with as
// const button = document.querySelector("button");
// button.disabled = true;



const button = document.querySelector("button") as HTMLButtonElement | null;


if (button) {
  button.disabled = true;
}