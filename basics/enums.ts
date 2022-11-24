enum Users {
  NormalUser = "normal",
  PayedUser = "payed",
  AdminUser = 5,
  MegaUser = "mega",
}

const myUser = Users.AdminUser;

if (myUser === Users.AdminUser) {
  console.log(myUser);
}
