"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = exports.AutenticacionSchema = void 0;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
exports.AutenticacionSchema = new mongoose.Schema({
    usuario: { type: String, required: true },
    nombreUsuario: { type: String, required: true, lowercase: true },
    apellidoUsuario: { type: String, required: true, lowercase: true },
    dni: Number,
    password: { type: String, required: true }
});
exports.AutenticacionSchema.pre("save", function (next) {
    let user = this;
    const SALT_FACTOR = 12;
    if (!user.isModified("password")) {
        return next();
    }
    //we generate the salt using 12 rounds and then use that salt with the received password string to generate our hash
    bcrypt
        .genSalt(SALT_FACTOR)
        .then((salt) => {
        return bcrypt.hash(user.password, salt);
    })
        .then((hash) => {
        user.password = hash;
        next();
    })
        .catch((err) => next(err));
});
exports.usuarios = mongoose.model("Autenticacion", exports.AutenticacionSchema, "usuarios");
//# sourceMappingURL=autenticaciones.js.map