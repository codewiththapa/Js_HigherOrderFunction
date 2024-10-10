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

/* Function currying   : you can pass one argument at a time .. 
FUNCTION CURRYING helps us to create ....HIGHER OREDER FUNCTION..

Currying is a specific form of partial application. It transforms a function that takes multiple arguments into a series of functions, each taking one argument at a time. The difference with partial application is that currying always breaks down a function into one argument at a time, whereas partial application can fix multiple arguments at once. */


function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

// Currying in action
const multiplyBy2 = multiply(2);
const multiplyBy2Then3 = multiplyBy2(3);
console.log(multiplyBy2Then3(4));  // Outputs: 24

//
function minus(a){
  return function(b){
    return function (c){
        return a-b-c
     }
  }
};
const  x = minus(12)    //passing single argument at a one time 
const y = x(2)
console.log( y(2))

//
function sendAutoEmail (subject){
  return function (to){
   return function (body){
    console.log(`${subject}${to} ${body}`)
   }
  } 
}
const step1 = sendAutoEmail('sumanthapa2021@gmail.com')
  const step2 = step1('conformation');
  step2  ('Hey Mr.suman there is something for you')

/* NOTES : "FUNCTION CURRYING "  AND   "PARTIAL APPLICATION " 
concepts are tools for making code more modular, readable, and reusable, especially when dealing with higher-order functions or callback chains in JavaScript.    */



/*   Normal javascript functions ...example..  Down below is a normal func. because here we are passing arguments (10,12,13,14) to parameter (a,b,c,d) in function call at once .
Therefore this is a normal function means we can pass many arguments we want   */

function hello (a,b,c,d){   
  return a+b+c ;
}
console.log(hello(10,12,13,14));   //here func. with multiple arguments..

/*       What Does "Pre-applying" or "Partially Applying" Mean?

The idea behind partial application is that instead of giving all the arguments to the function at once, you can give some of the arguments now, and it will return a new function that waits for the remaining arguments later.  

Normal function: Takes multiple arguments.
Partial application: Fixes (pre-applies) some arguments and returns a new function that waits for the rest.                     Check example DOWN below */

function add(a, b, c) {
return a + b + c;
}

// We create a new function by "pre-applying" some arguments.
const addPartial = add.bind(null, 2, 3); // pre-apply 2 and 3 to a and b

/*      add(2, 3, c) is the original function call.
By calling add.bind(null, 2, 3), you are partially applying the arguments 2 and 3. Now, a = 2 and b = 3 are fixed, but the function is not complete yet. It’s waiting for c (the last argument).
At this point, addPartially is a new function that only takes one argument (c), because the first two arguments (a and b) are already pre-applied.     

Now, you just need to call addPartially with the remaining argument c:    */
console.log(addPartial(5));  // Outputs: 10


/*  What happens here:
When you call addPartially(5), the function already knows that a = 2 and b = 3.
It just adds the remaining argument c = 5.
So it calculates 2 + 3 + 5 = 10.            */


/*    Think of partial application like ordering pizza with some toppings. Imagine a function orderPizza that takes 3 steps:
Choose the crust
Choose the sauce
Choose the toppings
You can pre-select the crust and sauce but leave the toppings to be decided later:  */

function orderPizza(crust, sauce, toppings) {
  return `Pizza with ${crust} crust, ${sauce}, and ${toppings} toppings.`;
}

// Pre-select crust and sauce (partial application)
const pizzaBase = orderPizza.bind(null, "thin", "tomato");

// Later, just add toppings
console.log(pizzaBase("cheese and pepperoni"));
// Outputs: Pizza with thin crust, tomato, and cheese and pepperoni toppings.

/*  Here, the crust and sauce are pre-applied, but the pizza isn’t complete until you add the toppings later.  
Summary
Original function: Takes multiple arguments.
Partial application: Pre-fills some of those arguments and returns a new function that waits for the remaining arguments.
It’s like splitting the process into steps: you handle some of the work now, and finish it later.     */


//  what is bind()  how it is corelated with partial application in js and how it works ?

function add(a, b, c) {
  return a + b + c;
}

// Partially apply 'a' and 'b'
const addPartlly = add.bind(null, 2, 3);

// Now call the partially applied function with the remaining argument
console.log(addPartlly(4));  // Outputs: 9

/*
const addPartlly = add.bind(null, 2, 3);    

why null is passed as argument in bind () method in this given code ?  

Understanding bind()
In JavaScript, the bind() method is used to create a new function with a specific this value and some arguments pre-filled. The syntax looks like this:   */

function.bind(thisArg, arg1, arg2, ...);

/*  The first argument (thisArg) is the value of this inside the new function.
The remaining arguments (arg1, arg2, ...) are pre-applied to the function.  */


/*  null is passed as the first argument because the add() function doesn't use this, so we don't care about the this value.
In JavaScript, if the function doesn't rely on this, you can pass null or undefined as the first argument to bind().

Here’s why:

thisArg (first argument) is only important if the function is a method on an object and uses the this keyword. Since add() is a regular function and does not depend on this, we can safely pass null.

If add() were a method inside an object and used this, we would pass an object reference instead of null. But in this case, it's not necessary.   */

const addPartially = add.bind(null, 2, 3);

 /* null: It tells the function, "I don't care about this".
2, 3: These values are pre-applied to add(), meaning a = 2 and b = 3 are fixed.
The new function (addPartially) is created, which takes only one argument now (the remaining c).    

So this line is basically saying:

"Ignore the this context (null), and fix the first two arguments (2 and 3)."
Now addPartially is a function that only requires the third argument (c).  */


function add(a, b, c) {
  return a + b + c;
}

// Partially apply 'a' and 'b'
const addPartially = add.bind(null, 2, 3);

// Now call the partially applied function with the remaining argument
console.log(addPartially(4));  // Outputs: 9

/* Original function: add(2, 3, 4) adds all three numbers.
Partially applied: addPartially(4) already knows a = 2 and b = 3, so it just adds the remaining argument c = 4.   

When to Pass null?
You pass null as the first argument to bind() when:
The function doesn't use this.
You just want to pre-apply arguments, but this is irrelevant.      


Alternative Methods for Partial Application:  using "closure"
While bind() is useful for partial application, it's not the only way to implement it. Here's another way, using closures (which is another common technique)   */

function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

const addPartially = add(2)(3);  // Pre-apply 'a' and 'b'
console.log(addPartially(4));  // Outputs: 9


/*   In this example, we're using closures to achieve the same result as bind(). This shows that partial application is the concept, and bind() is just one tool to achieve it.

Summary of Their Relationship
Partial application is the concept of pre-applying some arguments to a function.
bind() is a built-in JavaScript method that can be used to implement partial application.

They are correlated because bind() is one common way to achieve partial application in JavaScript, but it’s not the only method (closures can also be used).    */






