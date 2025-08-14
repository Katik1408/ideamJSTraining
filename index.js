
// //Console log is written
// console.log('Hello from js')


// //window




// //Multi Line Comment

// /**
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  * 
//  */

// // Alert Box

// // alert('Form is submitted successfully')

// // alert('Error Occured. Please Try again Later')

// // Confirm Box

// // confirm('Do you want to leave or stay on the page?')
// // console.log(confirm('Do you agree with Terms and Conditions ?'))

// // Prompt
// // prompt('Sample data','default value')
// // console.log(prompt('Enter your age'))

// // ctrl K+C   cmd K+C Comment

// // Uncomment ctrl K+U cmd K+U


// //Variables

// // var let const

// // var a = 10; // Terminator

// // var name = 'Kartik';

// // let b = 20;

// // console.log(b)

// // b = 35;

// // console.log(a);

// // console.log(b);





// // const fname = 'Kartik'   // constant

// // fname = 'Rahul'

// // console.log(name)


// // const

// // DataType



// // let a = 10;

// // a = 'Kartik'

// // console.log(a);


// // const fname = 'Kartik';

// // // fname = 10;

// // console.log(fname)


// // DataType

// let name = 'Kartik'; // String

// let id = 10; // Number

// let isStudent = false; // Boolean

// let isEmployed = undefined; // undefined

// let sname = null; // Object

// console.log(typeof name);
// console.log(typeof id);
// console.log(typeof isStudent);
// console.log(typeof isEmployed);

// console.log('Type of sname',typeof sname);

// // let p = {key : value}
// let person = {
//     id: '1',
//     fname:'Rahul',
//     sname : 'Singh',
//     college : 'Christ',
//     address : 'St1 area colony city ',
//     address : {
//         firstline : 'streetname',
//         secondline : 'Area',
//         state: 'MH'
//     },
//     phone: 8982,
//     isEmployed : false
// };  // JSON  --> JavaScript Object Notation


// console.log(person)


// console.log('Type of Person',typeof person);



// let today = new Date();

// console.log(today)

// console.log('type of today ' + typeof today)


// COnfirm Box
let selectedValue = confirm('Do you want to leave or stay on the page?');

console.log(selectedValue);

// console.log(confirm('Do you agree with Terms and Conditions ?'))

// Conditional Statements

// if , if else , if else if else if -- ladder  , switch

// if(selectedValue) {
//     console.log('User selected OK');
// }



console.log('After if');


if(selectedValue){
    console.log('User Selected OK')
}
else {
console.log('User selected cancel');
}
