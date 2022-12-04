// Case 1
// interface Pet {
//   name: string;
// }

// class Dog {
//   name: string;
// }

// let pet: Pet;
// // OK, because of structural typing
// pet = new Dog();

// Case 2
// interface Pet {
//   name: string;
// }
// let pet: Pet;
// // dog's inferred type is { name: string; owner: string; }
// let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
// pet = dog;
// console.log(pet);

// Case 3
// interface Pet {
//   name: string;
// }
// let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
// function greet(pet: Pet) {
//   console.log("Hello, " + pet.name);
// }
// greet(dog); // OK

//Case 4
// enum Status {
//   Ready,
//   Waiting,
// }
// enum Color {
//   Red,
//   Blue,
//   Green,
// }
// let stat = Status.Ready;
// stat = Color.Green; // Error

//Case 5
// class Animal {
//   feet: number;
//   constructor(name: string, numFeet: number) {}
// }
// class Size {
//   feet: number;
//   constructor(numFeet: number) {}
// }
// let a: Animal;
// let s: Size;
// a = s; // OK
// s = a; // OK

//Case 6

// interface Empty<T> {}
// let x: Empty<number>;
// let y: Empty<string>;
// x = y; // OK, because y matches structure of x


// //Case 7
// interface NotEmpty<T> {
//   data: T;
// }
// let x: NotEmpty<number>; // { data: number }
// let y: NotEmpty<string>; // { data: string }
// x = y; // Error, because x and y are not compatible