//STEP 1
// let date = new Date(year=new Date().getFullYear(), month=new Date().getMonth() + 1, day=0);
// console.log(`The days in the current month is ${date.getDate()}`);

//STEP 2
// let date = new Date();
// let month;
// switch (date.getMonth()) {
//     case 0:
//         month = "January";
//         break;
//     case 1:
//         month = "February";
//         break;
//     case 2:
//         month = "March";
//         break;
//     case 3:
//         month = "April";
//         break;
//     case 4:
//         month = "May";
//         break;
//     case 5:
//         month = "June";
//         break;
//     case 6:
//         month = "July";
//         break;
//     case 7:
//         month = "August";
//         break;
//     case 8:
//         month = "September";
//         break;
//     case 9:
//         month = "October";
//         break;
//     case 10:
//         month = "November";
//         break;
//     case 11:
//         month = "December";
//         break;                                                                                                   
// }
// console.log(`The current month is ${month}.`);


//STEP 3
// let date = new Date();
// console.log(`The current day is a week${(date.getDay() == 0 || date.getDate() == 6)? "end" : "day"}.`);

//STEP 4
// let date = new Date();
// let weekdays = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// console.log(`The previous day is ${weekdays[date.getDay()]}`);

//STEP 5
// let date = new Date();
// switch (date.getDay()) {
//     case 0:
//         console.log("S");
//         break;
//     case 1:
//         console.log("M");
//         break;
//     case 2:
//         console.log("T");
//         break;
//     case 3:
//         console.log("W");
//         break;
//     case 4:
//         console.log("T");
//         break;
//     case 5:
//         console.log("F");
//         break;
//     case 6:
//         console.log("S");
//         break;
// }