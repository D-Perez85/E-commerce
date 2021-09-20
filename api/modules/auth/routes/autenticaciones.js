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
module.exports = router;
//# sourceMappingURL=autenticaciones.js.map