import * as mongoose from "mongoose";
const bcrypt = require("bcrypt");

export const AutenticacionSchema = new mongoose.Schema({
    usuario: {type: String, required: true},
    nombreUsuario: { type: String, required: true, lowercase: true },
    apellidoUsuario: { type: String, required: true, lowercase: true },
    dni: Number,
    password: {type: String, required: true}
});
AutenticacionSchema.pre("save", function (next) {
    let user: any = this;
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

export let usuarios = mongoose.model("Autenticacion", AutenticacionSchema, "usuarios");


