var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Kevin");
    //   console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
/// <reference path="namespaces.ts" />
var myOtherUser = new DatabaseEntity.User("Código Facilito!!");
console.log(myOtherUser);
