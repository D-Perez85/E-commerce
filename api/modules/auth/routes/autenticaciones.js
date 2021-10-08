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
const express = require("express");
const autenticacionesSchema = require("../schemas/autenticaciones");
const autenticaciones_controller_1 = require("../autenticaciones.controller");
const autenticaciones_class_1 = require("../autenticaciones.class");
const sha1Hash = require('sha1');
const router = express.Router();
router.post("/usuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = req.body;
        const usuarios = new autenticacionesSchema.usuarios(newUser);
        const usuarioNuevo = yield usuarios.save();
        console.log("User agregado", usuarioNuevo);
        return res.status(200).send({ status: "success", data: usuarioNuevo });
    }
    catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "error", data: err });
    }
}));
router.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Función interna que genera token
    const login = (user) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Entra al login: ", user);
        res.json({
            //Genera el token y devuelve un usuario hacia la app
            token: autenticaciones_class_1.Auth.generateUserToken2(user.usuario),
        });
    });
    console.log("Usuario posta validando: ", req.body);
    if (!req.body.usuario || !req.body.password) {
        //Verifica que el usuario haya ingresado algo, sino lo rebota
        return next(403);
    }
    try {
        console.log("Usuario posta: ", req.body.usuario);
        //El usuario que viene de la app lo busca en la bdd para ver si está registrado
        const userResponse = yield (0, autenticaciones_controller_1.findUser)(req.body.usuario);
        if (userResponse) {
            //Si el objeto es diferente a null
            const { user } = userResponse;
            console.log("Usuario encontrado: ", user);
            const passwordSha1 = req.body.password;
            // const passwordSha1 = sha1Hash(req.body.password); //Encripta el password que viene de la app
            if (passwordSha1 === user.password) {
                //Si la clave que viene de la bdd y de la aplicacion son iguales entra
                return login(user);
            }
        }
        return next(403);
    }
    catch (error) {
        console.log("Error: ", error);
        return next(403);
    }
}));
module.exports = router;
//# sourceMappingURL=autenticaciones.js.map