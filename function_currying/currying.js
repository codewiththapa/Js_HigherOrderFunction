/* currying function + H.o.f + closure + Lexical environment  :   They  are corelated to each others in Javascript Functional programming....
Things to learn and connected with each other during "FUNCTION CURRYING "  are  
1. Currying / Partial application in j.s / Higher order function / closure / bind () /this

Q...What is partial application in javascript and how it is related with currying  ? 


Partial application refers to the process of taking a function with multiple arguments and "pre-applying" (or "partially applying") some of those arguments to create a new function with fewer arguments.

In JavaScript, it can be done manually using bind() or by returning a new function that closes over the pre-supplied arguments..       */

function add(a, b, c) {
  return a + b + c;
}

// Partially apply 'a' and 'b'
const addPartially = add.bind(null, 2, 3);

// Now you only need to provide the last argument 'c'
console.log(addPartially(5));  // Outputs: 10


/*  Another way to achieve this without using bind():    */

function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
let  addPartiallyAgain = add(2)(3);
console.log(addPartiallyAgain(5));  // Outputs: 10

