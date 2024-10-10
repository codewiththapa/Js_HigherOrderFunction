/*  NOTE: Functions are First-Class-Citizens in javascript..why...? because of the following reasons..... H.O.F are central to functional programming, allowing for more abstract,flexible and reuseable code..

functions or methods()... which take or accepts functions as an argumnet or return a function as a result is called higher order functions... array() methods ..eg: map() , filter() , reduce() are h.o.f .. higher order functions are built-in functions..
 
 callback func. vs H.O.F :  functions which pass as an argument to another functions called callback Func..   The func. which accepts other functions as an arguments called H.O.F..
 Thus,we can say H.O.F and callback are corelated..      */

//
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}
const double = createMultiplier(2);  // Returns a function that doubles a number
console.log(double(5));  // Output: 10


//

function returnSomething (y){
   return function(){
       return y*y
   }
}
console.log(returnSomething(12)())

//
 function x(cb,a,b){
  return cb(a,b)
 }
 function y(c,d){
    return d*c
 }
console.log (x(y,10,12))


//H.O.F : METHOD 1:  Here we have return function from function as a result...
function hell1(){
  return function(){
    return ("welcome to hell1")
   }
}
console.log(hell1()())


//Method:2...Returning function from function...

function hell2(){
  return function(){
    return (" welcome to hell2")
   }
};

const result = hell2();
console.log(result);       // here output will be : it will return inner func. f(){}
const finalResult = result()
console.log(finalResult);   // now real output: welcome to hell2

//

function add(x,y){
  return x+y;
};
function sub(x,y){
  return x-y
};
function operation(a,b,fn){
  console.log(fn(a,b))
};

operation(10,10,add);  //output:20
operation(30,20,sub);  //output:10

// H.O.F : inner function return from outer function..
//method:1:
function outer1(){

  function inner1(){
   console.log('inner1 function')
  };
  return inner1;
};

outer1()();

//method:2
function outer2(){

  function inner2(){
   console.log(' second method inner2 function')
  };
  return inner2;
};

let hof = outer2();
hof();


/************          ********** */

//Traditonal way of writing code: Down below we will use the various method to define same code ...

const numbers = [2,3,4,5];

const doSquare = function (){
   const results = [];
  for(let v of numbers){
     results.push(v*v);
  };
  return results;
};

console.log(doSquare())   // output: 4,9,16,25

//
const doCube = function (){
   const results = [];
  for(let v of numbers){
     results.push(v*v*v);
  };
  return results;
};

console.log(doCube());

//
const doSquareRoot = function (){
   const results = [];
  for(let v of numbers){
     results.push(Math.sqrt(v));
  };
  return results;
};

console.log(doSquareRoot());

// Transforming traditional way of writing code into modular H.O.F code

const num = [2,3,4,5];

const square = (v) => v*v;
const cube = (v) => v*v*v;
const squareRoot = (v) => Math.sqrt(v);

const calculateHof = function (fxn){
   const results = [];
  for(let v of num){
     results.push(fxn(v));
  };
  return results;
};

console.log(calculateHof(square));
console.log(calculateHof(cube));
const rsult = calculateHof(squareRoot);
console.log(rsult)


/************          ********** */

//constructor function..

function Employee (name,age,designation){
  this.n= name;
  this.a = age;
  this.d = designation;
};

const employees = [
  new Employee('suman',29,'fullstack'),
  new Employee('thapa',30,'devops'),
  new Employee('magar',40,'cybersecurity')
  ];

// Traditional way ..
function filterByAge(emps,age){
  let results = []
  for(let i=0;i<emps.length;i++){
     if(emps[i].a == age){
     results.push(emps[i])
    }
 }
 return results;
};
console.log(filterByAge(employees,30));


function filterByDepartment (emps,designation){
  let results = []
  for(let i=0;i<emps.length;i++){
     if(emps[i].d == designation){
     results.push(emps[i])
    }
 }
 return results;
};
console.log(filterByDepartment(employees,'fullstack'))

//same traditional way ..now by using HIGHER ORDER FUNCTIONS for concise code..

const filterByAge = (emps) =>(emps.a === 40 ? true : false);
const filterByDepartment = (emps) =>(emps.d === 'fullstack' ? true : false);

function filter(emps,fxn){     //filter function is a H.O.F..
  let results = []
  for(let i=0;i<emps.length;i++){
     if(fxn(emps[i])){
     results.push(emps[i])
    }
 }
 return results;
};
console.log(filter(employees,filterByAge))
console.log(filter(employees,filterByDepartment))


/**********   ******************** */













