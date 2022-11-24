//Clase
function Service(target: Function) {
  console.log("Dentro");

  target.prototype.baseUrl = "api.codigofacilito.com/v1";

  target.prototype.logger = function () {
    //Log to API
  };
}
@Service
export class UserService {
  //
}
//Metodo
//Propiedades
//Getters

const myService = new UserService();
console.log(myService);

// 1. Decoradores de clase.
function Repository() {
    return function (target: Function) {
      target.prototype.users = [];
  
      target.prototype.create = function (entity: object) {
        target.prototype.users.push(entity);
      };
    };
  }
  
  export interface UserRepository {
    users: any[];
    create(entity: object): void;
  }
  
  @Repository()
  export class UserRepository {
    // ...
  }
  
  const user = new UserRepository();
  console.log(user);
  