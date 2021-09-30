"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUser = void 0;
const autenticaciones_1 = require("./schemas/autenticaciones");
const sha1Hash = require('sha1');
/**
 * Recupera los datos necesarios de un Usuario.
 */
function findUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const userAuth = autenticaciones_1.usuarios.findOne({ usuario: username }); //Se fija si el usuario existe en la bdd
        console.log();
        if (userAuth) {
            return {
                user: userAuth
            };
        }
        return null;
    });
}
exports.findUser = findUser;
//# sourceMappingURL=autenticaciones.controller.js.map