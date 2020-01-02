// VAR, LET, CONST
// global and function scope
// var tester = "hey hi";

//     function newFunction() {
//         var hello = "hello";
//     }
//     console.log(hello); // error: hello is not defined
//     console.log(tester); // "hey hi"

// problem with var (global scope)
// var greeter = "hey hi";
// var times = 4;

// if (times > 3) {
//     var greeter = "say Hello instead"; 
//     console.log(greeter); // "say Hello instead"
// }

// console.log(greeter) //"say Hello instead"

// why let is preferred over var (block scoped)
// let times = 4;
// let scope ='global'
// if (times > 3) {
//      let scope = "block";
//      console.log(scope);//"block"
//  }
// console.log(scope) // "global"

// re-declaration of variables having same scope not allowed(var and let)
// let greeting = "say Hi";
// let greeting = "say Hello instead";//error: Identifier 'greeting' has already been declared

// const cannot be updated or re-declared
// const greeting = "say Hi";
// greeting = "say Hello instead";//error : Assignment to constant variable.  
// const greeting = "say Hi";
// const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared


// HOISTING
// hoisting using var does not show error (is initialized)
// console.log (greeter); //undefined
// var greeter;

// hoisting using let does shows reference error (is not initialized)
// console.log (greeter); //undefined
// let greeter;

// hoisting of functions
// console.log(Sum(5, 5)); // 10
// function Sum(val1, val2)
// {
//     return val1 + val2;
// }
// functions are hoisted before variables


// STRICT MODE
// no error although not declared already (c# and java shows error but not in js)
// mystring = "without strict mode" // global scoped
// console.log(mystring);

// shows error
// "use strict";
// mystring = "strict mode" // global scoped
// console.log(mystring);

// deleting variables, function, duplicating parameter name, the word arguments cannot be declared as variable, deleting an undeletable property is not allowed
