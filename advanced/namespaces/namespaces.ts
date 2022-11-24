namespace DatabaseEntity {
  export class User {
    constructor(public name: string) {}
  }

  export const myUser = new User("Kevin");
//   console.log(myUser);
}
