"use strict";
var DatabaseEntity;
(function (DatabaseEntity) {
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    DatabaseEntity.User = User;
    DatabaseEntity.myUser = new User("Kevin");
    //   console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
