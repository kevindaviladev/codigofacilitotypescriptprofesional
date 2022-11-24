let age: string = "20";
let agmonths: number = 20;
let isSenior: boolean = true;
let person: Object = {};

let fruits: Object[] = [{}, { name: "manzana" }];

let response: any = "Holaa";
response = 20;
response = true;
// response = ["Hola", 123];

function saludar(): void {
  console.log("Hola");
}

let response2: unknown;
response2 = true;
if (response2) {
}

let response3 = null;
let response4 = undefined;

//Combinación de tipos
type ResponseTypeService = number | undefined;

let response5: ResponseTypeService;

let responseProducts: ResponseTypeService;
let responsePartners: ResponseTypeService;
responsePartners?.toString().concat("");

//Type ASSERTION
let message: any = "";
let messageUppercase = <string>message;
messageUppercase.toUpperCase();

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
