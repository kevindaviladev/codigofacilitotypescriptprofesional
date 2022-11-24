"use strict";
exports.__esModule = true;
var Utils = require("./utils.module");
var myNumber = 10 * Utils.PI;
var myUser = { id: Utils.generateId().toString(), name: "Kevin" };
console.log({
    myNumber: myNumber,
    myUser: myUser
});
