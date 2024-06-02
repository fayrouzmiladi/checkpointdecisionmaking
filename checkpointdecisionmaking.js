function LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
     return true;
   } else {
      return false;
    }
  }
  
  console.log(LeapYear(2000));
  
  function Ticket(age) {
    if (age <= 12) {
      return 10;
   } else if (age >= 13 && age <= 17) {
      return 15;
    } else {
     return 20;
   }
  }
  console.log(Ticket(17));