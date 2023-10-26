// Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

const presentYear = 2023;

let yourDateOfYear= 2008;

let yourDob = presentYear - yourDateOfYear;

if (yourDob >= 13 && yourDob <= 19 ) {
  console.log("Teenage");
} else if (yourDob >= 20 && yourDob <= 29) {
  console.log("Twenties");
} else {
  console.log("not in range");
}
