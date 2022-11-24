type Person = {
  name: string;
  age: number;
};

interface Employee extends Person {
  charge: string;
}

const newEmployee: Employee = {
  name: "",
  age: 40,
  charge: "",
};

//Union types

type User = {
  id: string;
};

type Admin = User & Employee;

type ServiceResponseToken = string | null | undefined | number;
type UserTypes = "admin" | "superUser" | 0;

// const myUser: UserTypes = 5;

interface Developer {
  name: string;
  stack: string[];
}

interface Developer {
  phone: string;
}

// const me: Developer = {
//   // phone
// };

