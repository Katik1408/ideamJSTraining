
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


// let fruits = ['Apple','Banana','Orange','Kiwi'];

// fruits.splice(1,1,'Watermelon');
// console.log(fruits);

// let data = [
//     {name:'Kartik',id:1,address:'Pune'},
//     {name:'Rahul',id:2,address:'Bangalore'},
//     {name:'Shubham',id:3,address:'Mumbai'}
// ]

//console.log(data);

// Loops
/**
 * 1. while
 * 2. Do While
 * 3. for Loop
 * 4. for in Loop
 * 5. for of Loop
 * 6. forEach Loop
 */

// 1. while Loop

/**
 * 
 *  initialize a variable
 * while(<condition>){
 * 
 * Inc/Dec
 * }
 */

// let i = 6;

// while(i<5){
//     console.log('value of i is ' , i);
//     i++;
// }

// 2. Do while loop

/**
 * 
 * initialize a var
 * 
 * do {
 * Inc/Dec
 * }while(<condition>)
 * 
 */

// let i = 6;

// do {
//     console.log('value of i using do while is ' , i)
//     i++;
// }while(i<5);

// 3. for Loop

/**
 * 
 * for (init;condition;inc/dec){
 * 
 * }
 * 
 */

// i = i - 1;

// debugger;
// for(let i = 10; i > 0 ; i--){
//     console.log('value of i is ', i );
// }





// let person = { name:'Kartik', age: 30, city:'Pune'}
// let person2 = {};


// for in loop
/**
 * 
 * 
 * for (let key in object){
 * 
 * }
 * 
 */


// for (let key in person ){
//     console.log('key is ', key + ' value is ' , person[key]);
// }

// 5. for of Loop


// let fruits = ['Apple','Orange','Banana','WaterMelon'];


// /**
//  * 
//  * for (let value of Arrrayofitems){
//  * 
//  * }
//  * 
//  * 
//  */

// for(let fruit in fruits){
//     console.log('index is ', fruit + ' value is ', fruits[fruit]);
// }// Not recommended


// for (let value of fruits){
//     console.log(value);
// } // Recommended



// let data = [
//     {name:'Kartik',id:1,address:'Pune'},
//     {name:'Rahul',id:2,address:'Bangalore'},
//     {name:'Shubham',id:3,address:'Mumbai'}
// ]


// for(let person of data){
//     console.log(person.name, person.address);
// }


// 6. forEach Loop

// let fruits = ['Apple','Orange','Banana','WaterMelon'];

// fruits.forEach(s => {
//     console.log(s)
// })



// Functions
/**
 * 
 * 
 *  One Function should do one specific.It should not do more than one task which is assigned to it
 */

// 2 Types of Functions
/**
 * 
 * Inbuilt / Predefined Functions
 * 
 * User Defined Functions
 */

// How to create a fn
/**
 *  () ---> parenthesis
 *  function nameOfFunction(arguments){
 * 
 * 
 * 
 * 
 * }
 * 
 * 
 * nameOfFunction(parameters)
 * 
 * 
 */


// function add(){
//     console.log('Addition Function');
// }

// add();


function substract(a,b){
    let c = a-b;
    console.log(c);
}

// substract(10,5);

//Camel Casing getDataFromDatabase() JS , Java , python
//Pascal Casing GetDataFromDatabase C#

function getDataFromDatabase(){

}


// function add(a,b){

//     let c = a + b;

//     let subs = a - b;

//     console.log(subs);
//     return c;
// }

// let d = add(10,5);

// console.log(d);


// Arrow Function  --> ES6


function add(a,b){
    let c = a + b;
    return c;
}




// let add = (a,b) =>  a + b 

let value = add(5,6);

// console.log(value)

// CallBack

// function show(value){
// console.log(value);
// }


// function call(somefn){
    
//     somefn(name);
// }

// function exec(){
//     call(show('Kartik'))
// }

// debugger;
// exec();

function proccessData(data){
    console.log('processing data....', data);
    return data;
}

function showData(data){
console.log('Showing data... ', data);
}

function getData(){
    return [
            {name:'Kartik',id:1,address:'Pune'},
            {name:'Rahul',id:2,address:'Bangalore'},
            {name:'Shubham',id:3,address:'Mumbai'}
        ];
}

function feature(callback){
    console.log('Inside the feature function')
    callback();
}

// Anonymous Function
 //() => console.log();
debugger;

feature( ()=>{
    let processed = proccessData(getData());
    showData(processed);
} )

