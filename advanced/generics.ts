interface MyInterface<T> {
  field: T;
}

class MyClass<T> {
  field: T;

  constructor(field: T) {
    this.field = field;
  }
}

function getData<T>(id: string): Promise<T> | void {}

//Example with classes
interface UserResponse {
  id: number;
  name: string;
}

class HttpResponse<T> {
  data: T;
  status: number;
  code: number;

  constructor(data: T, status: number, code: number) {
    this.data = data;
    this.status = status;
    this.code = code;
  }
}

const fetchUser = (): UserResponse => {
  return {
    id: 1,
    name: "Kevin",
  };
};

const myUser = fetchUser();
const res = new HttpResponse(myUser, 200, 1);
console.log(res);

class CRUD<T> {
  private items: T[];
  constructor(items: T[]) {
    this.items = items;
  }

  addItem(item: T) {
    this.items.push(item);
  }

  removeLastItem() {
    this.items.pop();
  }

  printItems(): T[] {
    return this.items;
  }
}

const users: UserResponse[] = [
  { id: 1, name: "Kevin" },
  { id: 2, name: "Codigo" },
  { id: 3, name: "Facilito" },
];

const userCRUD: CRUD<UserResponse> = new CRUD(users);
userCRUD.addItem({ id: 4, name: "Typescript" });
console.log(userCRUD.printItems());
