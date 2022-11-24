type Person = {
  name: string;
  code: string | number;
  description?: string;
};

const newPerson: Person = {
  code: "H",
  name: " Kevin",
};

type ServiceResponse = string | null | number | undefined;

type UserCharges = "admin" | "normal" | "superUser";
let response: ServiceResponse;

const myUserType: UserCharges = "superUser";
