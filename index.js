
// // // //Console log is written
// // // console.log('Hello from js')


// // // //window




// // // //Multi Line Comment

// // // /**
// // //  * 
// // //  * 
// // //  * 
// // //  * 
// // //  * 
// // //  * 
// // //  * 
// // //  */

// // // // Alert Box

// // // // alert('Form is submitted successfully')

// // // // alert('Error Occured. Please Try again Later')

// // // // Confirm Box

// // // // confirm('Do you want to leave or stay on the page?')
// // // // console.log(confirm('Do you agree with Terms and Conditions ?'))

// // // // Prompt
// // // // prompt('Sample data','default value')
// // // // console.log(prompt('Enter your age'))

// // // // ctrl K+C   cmd K+C Comment

// // // // Uncomment ctrl K+U cmd K+U


// // // //Variables

// // // // var let const

// // // // var a = 10; // Terminator

// // // // var name = 'Kartik';

// // // // let b = 20;

// // // // console.log(b)

// // // // b = 35;

// // // // console.log(a);

// // // // console.log(b);





// // // // const fname = 'Kartik'   // constant

// // // // fname = 'Rahul'

// // // // console.log(name)


// // // // const

// // // // DataType



// // // // let a = 10;

// // // // a = 'Kartik'

// // // // console.log(a);


// // // // const fname = 'Kartik';

// // // // // fname = 10;

// // // // console.log(fname)


// // // // DataType

// // // let name = 'Kartik'; // String

// // // let id = 10; // Number

// // // let isStudent = false; // Boolean

// // // let isEmployed = undefined; // undefined

// // // let sname = null; // Object

// // // console.log(typeof name);
// // // console.log(typeof id);
// // // console.log(typeof isStudent);
// // // console.log(typeof isEmployed);

// // // console.log('Type of sname',typeof sname);

// // // // let p = {key : value}
// // // let person = {
// // //     id: '1',
// // //     fname:'Rahul',
// // //     sname : 'Singh',
// // //     college : 'Christ',
// // //     address : 'St1 area colony city ',
// // //     address : {
// // //         firstline : 'streetname',
// // //         secondline : 'Area',
// // //         state: 'MH'
// // //     },
// // //     phone: 8982,
// // //     isEmployed : false
// // // };  // JSON  --> JavaScript Object Notation


// // // console.log(person)


// // // console.log('Type of Person',typeof person);



// // // let today = new Date();

// // // console.log(today)

// // // console.log('type of today ' + typeof today)


// // // COnfirm Box
// // // let selectedValue = confirm('Do you want to leave or stay on the page?');

// // console.log(selectedValue);

// // // console.log(confirm('Do you agree with Terms and Conditions ?'))

// // // Conditional Statements

// // // if , if else , if else if else if -- ladder  , switch , Nested if , Ternary operator

// // // if(selectedValue) {
// // //     console.log('User selected OK');
// // // }



// // console.log('After if');


// // if(selectedValue){
// //     console.log('User Selected OK')
// // }
// // else {
// // console.log('User selected cancel');
// // }



// // let a = 5; // Number 

// // if( a === '5' ){
// // console.log('It contains 5' );
// // }
// // else{
// //     console.log('It doesnt contain 5')
// // }

// // == checks the value
// // === checks the value and the type both

// // let marks = 55;

// // if(marks >= 90){
// // console.log('Grade : A')
// // }
// // else if (marks >= 80){
// //     console.log('Grade is B');
// // }
// // else if(marks >= 60) {
// //     console.log('Grade is C')
// // }
// // else {
// //     console.log('Grade is D');
// // }


// // switch
// // let day = 6;
// // switch(day){

// //     case 1:
// //         console.log('Monday')
// //         break;
// //     case 2:
// //         console.log('Tuesday')
// //         break;
        
// //     case 3:
// //         console.log('Wednesday')
// //         break;
       
// //     default:
// //         console.log('Some other day')        
// // }


// // Nested if 

// // let user = 'user1'
// // let pwd = 'pwd';

// // let isAuthorized = false;

// // if(pwd === 'pwd'){
    
// //     if(isAuthorized){
// //         console.log('Welcome User',user)
// //         if(false){

// //         }
// //         else {
// //             if(true){

// //             }else {

// //             }
// //         }
// //     }
// //     else {
// //         console.log('You are not Authorized to access this page');
// //     }
// // }
// // else {
// //     console.log('Incorrect Password');
// // }

// // Ternary Operator

// let a = 5;

// // if(a ===5 ){
// //     console.log('It contains 5')
// // }
// // else {
// //     console.log('It doesnt contain 5');
// // }

// // (a === 5 ) ? console.log('It contians 5')  : (a==6) ? console.log('it contains 6' ) 
// // : console.log('it doesnt contains 5 and 6');


// // AND and OR Operator 

// let user = 'user1'
// let pwd = 'pwd';

// let isAuthorized = true;


// if(pwd === 'pwd' && isAuthorized){
//     console.log('Welcome User AND OPERATOR',user)
// }


// // AND --> 

// // T T --> T
// // F T --> F
// // T F --> F
// // F F --> F

// if(pwd ==='pwd1' || isAuthorized ){
//     console.log('Welcome user OR OPERATOR ' + user)
// }


// // OR 

// // T T --> T
// // F T --> T
// // T F --> T
// // F F --> F


// Arrays in JS

let a = 10;
let b = 20;
let c = 30;

let name ='Kartik';

let arr = [10,20,30,40,50,'Kartik',true];

// console.log(arr);

// console.log(arr[4]);

arr[2] = 'Some value';

// console.log(arr);


let size = arr.length;

// console.log(size);

let index = arr.indexOf('Kartik');

// console.log(index);

// Stack-- First in Last out

//Queues -- First in First Out


// arr.push(100);

// console.log(arr)

// arr.pop();

// console.log(arr);

// arr.unshift(100); // Add Element add the first index

// console.log(arr);

// arr.shift();    

// console.log(arr);


// let arr1 = [];

// arr1[0] = 'Apple';
// arr1[1] = 'Orange';

// console.log(arr1);

// let num = new Array(1,2,3,4,5);
// console.log(num)


let fruits = ['Apple','Banana','Orange','Kiwi'];

fruits.splice(1,1,'Watermelon');
console.log(fruits);

let data = [
    {name:'Kartik',id:1,address:'Pune'},
    {name:'Rahul',id:2,address:'Bangalore'},
    {name:'Shubham',id:3,address:'Mumbai'}
]

console.log(data);













