// let Sentence = "I am a comma seprated sentence";
// let words = Sentence.split("")
// console.log(words2) ['I', 'Am','a','comma','seprated','sentence']

// let words2 = Sentence.split("a")
// console.log (words2);
// //length
// console.log(Sentence.length());
// // occurance of "r" is given text 
// let str="tu meri me tera me tera tu meri";
// let ch = "r";
// let count= str.split(ch).length - 1;
// console.log("Occurrence of r is:",count);

// callback function: we can pass a function as an argument inside another function

// call back function
// function sample (callback){
//     console.log("sample");
//     callback()
// }

// function demo(){
//     console.log("demo")
// }
// sample(demo)

// arrow function : we can pass a arrow function to a variable and treating that variable as function.

// 2. it does not need any return statement

// function demo(){
//      return"demo3"
// }
// console.log(demo3())

// const demo2=()=>console.log("demo");
// console.log(demo2())


// first class function

// 1. we can treat a variable as a function
// 2. we can pass a function as a argument inside another function 
// 3. we can return a function from a function 

function test(){
     return function test2(){
        console.log("test2");
        return function test3(){
            console.log("test3")
        }
     }
}
test()()()
// let value = test()
//  let value2= value()
//  value2()


// 4. higher order function 
// map , filter , reduce 

// 6.  anonymous function 
// settimeout (())=>{

// }1000

// 7. self invoking function (IIFE) 
// to obtain data privacy and to call a function immediately after function scope

function classset(){
    console.log("classset");

}
let a= 10
// function midterm(){
classset()

midterm()

let test5 = function(){
      return "sample5"
}()
console.log(test5)