// Stored Username and Password
let storedUsername = "balGovind";
let storedPassword = "12345678";

// Login Username and Password

let username = "balGovind";
let password = "12345678";

if (storedUsername == username) {
    if (storedPassword == password) {
      console.log("User can login");
    } else {
      console.log("pssword is incorrect, User can not login")
    }
} else {
  console.log("username is incorrect, User can not login")
}