// strings, numbers and booleans are immutable
// var name = 'Bill';
// var full_name = name.concat(' Gates');
// console.log(name);
// console.log(full_name);


// mutable
// var arr = [1];
// var new_arr = arr;
// new_arr.push(2);
// console.log(arr);
// console.log(new_arr);

// immutable
// let a = ['foo', 'bar'];
// let b = a;
// a.push('baz')
// console.log(b); // ['foo', 'bar', 'baz']
// console.log(a === b) // true

// mutable
// let a = 1;
// let b = a;
// a++;
// console.log(a) //2
// console.log(b) //1
// console.log(a === b) //false

// object.freeze
// const obj = {
//     prop: 42
//   };
//   Object.freeze(obj);
//   obj.prop = 33;
//   // Throws an error in strict mode
//   console.log(obj.prop);
//   // expected output: 42  

// for/in
// var person = {fname:"John", lname:"Doe", age:25};
// var text = "";
// var x;
// for (x in person) {
//     console.log(x)
// }

// for/of
// var cars = ['BMW', 'Volvo', 'Mini'];
// for (let x of cars) {
//   console.log(x);
// }

// for loop
// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var text = "";
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// traditional function
// console.log(square(4));
// function square(number) {
//     return number * number;
//   }
// console.log(square(3));

// arrow function
// let square = (number) => {
//     return number * number;
// }

// console.log(square(3));