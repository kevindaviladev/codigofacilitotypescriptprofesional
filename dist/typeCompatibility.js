// interface Pet {
//   name: string;
// }
var pet;
// dog's inferred type is { name: string; owner: string; }
var dog = { name: "Lassie", owner: "Rudd Weatherwax" };
pet = dog;
console.log(pet);
