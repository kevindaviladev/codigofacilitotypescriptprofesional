var Users;
(function (Users) {
    Users["NormalUser"] = "normal";
    Users["PayedUser"] = "payed";
    Users[Users["AdminUser"] = 5] = "AdminUser";
    Users["MegaUser"] = "mega";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
if (myUser === Users.AdminUser) {
}
console.log(myUser);
