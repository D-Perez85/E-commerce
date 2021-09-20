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
const usuariosSchema = require("../schemas/usuarios");
const router = express.Router();
router.get("/usuarios", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let usuarios = yield usuariosSchema.usuarios.find();
        console.log("Usuarios registrados!!!", usuarios);
        return res.status(200).send({ status: "success", data: usuarios });
    }
    catch (err) {
        console.log("Error: ", err);
        return res.status(404).send({ status: "error", data: err });
    }
}));
module.exports = router;
//# sourceMappingURL=usuarios.js.map