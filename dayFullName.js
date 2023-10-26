//Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let shortDay = "mon", longDay;

switch(shortDay) {
  case "Sun":
  case "sun":  
    longDay = "Sunday";
    break;

  case "Mon":
  case "mon":  
    longDay = "Monday";
    break;

  case "Tue":
  case "tue":
    longDay = "Tuesday";
    break; 

  case "Wed":
  case "wed":
    longDay = "Wednesday";
    break;

  case "Thu":
  case "thu":
    longDay = "Thursday";
    break;

  case "Fri":
  case "fri":
    longDay = "Friday";
    break;  

  case "Sat":
  case "sat":
    longDay = "Saturday";
    break;  

  default :
    longDay = "Invalid Day";
}

console.log("ShortDaY You Enter : "+shortDay)
console.log("LongDay : "+longDay)