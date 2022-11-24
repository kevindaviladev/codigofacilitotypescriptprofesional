import * as Utils from "./utils.module";
const myNumber = 10 * Utils.PI;

const myUser: Utils.User = { id: Utils.generateId().toString(), name: "Kevin" };

console.log({
  myNumber,
  myUser,
});
