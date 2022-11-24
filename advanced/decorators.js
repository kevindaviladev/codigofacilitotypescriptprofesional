"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRepository = exports.UserService = void 0;
//Clase
function Service(target) {
    console.log("Dentro");
    target.prototype.baseUrl = "api.codigofacilito.com/v1";
    target.prototype.logger = function () {
        //Log to API
    };
}
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService = __decorate([
        Service
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//Metodo
//Propiedades
//Getters
var myService = new UserService();
console.log(myService);
// 1. Decoradores de clase.
function Repository() {
    return function (target) {
        target.prototype.users = [];
        target.prototype.create = function (entity) {
            target.prototype.users.push(entity);
        };
    };
}
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository = __decorate([
        Repository()
    ], UserRepository);
    return UserRepository;
}());
exports.UserRepository = UserRepository;
var user = new UserRepository();
console.log(user);
