//STEP 1
// let daysInMonth = function(month,year) {
//    return new Date(year, month, 0).getDate();
//   };

//   console.log(daysInMonth(4, 2020));


//STEP 2
// function monthName() {
//     let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     let chooseDate = prompt('Enter a date (mm/d/yyy)');
//     let d = new Date(chooseDate);
//     console.log(months[d.getMonth()]);
// }
// monthName();

//STEP 3
// function isWeekend () {
//     let enterDate = prompt('Enter a date (mm/dd/yyyy)');
//     let d = new Date(enterDate);
//     if(d.getDay() == 6 || d.getDay() == 0) {
//         console.log('This date falls on a weekend');
//     } else {
//     console.log('This date does not fall on a weekend');
//     };
// };

// isWeekend();

//STEP 4
// function getPrevDay() {
//     let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     let enterDate = prompt('Enter a date (mm/dd/yyyy)');
//     let d = new Date(enterDate);
//     let prevDay = days[d.getDay() -1]
//     console.log(prevDay);
// }
// getPrevDay();

//STEP 5
// function firstLetter() {
//     let d = new Date();
//     console.log(d.toString()[0]);
// };
// firstLetter();