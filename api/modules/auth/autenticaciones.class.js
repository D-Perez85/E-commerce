"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const configPrivate = require("./../../config.private");
class Auth {
    static initialize(app) {
        // Configura passport para que utilice JWT
        passport.use(new passportJWT.Strategy({
            secretOrKey: configPrivate.auth.jwtKey,
            jwtFromRequest: passportJWT.ExtractJwt.fromExtractors([
                passportJWT.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
                passportJWT.ExtractJwt.fromUrlQueryParameter('token')
            ])
        }, (jwt_payload, done) => {
            done(null, jwt_payload);
        }));
        // Inicializa passport
        app.use(passport.initialize());
    }
    /**
     * Version dos del token. Con menos datos.
     * Solo posee el username y la organización.
     */
    static generateUserToken2(username, account_id = null) {
        // Crea el token con los datos de sesión
        const token = {
            id: mongoose.Types.ObjectId(),
            usuario: username,
            account_id,
            type: 'user-token-2'
        };
        return jwt.sign(token, configPrivate.auth.jwtKey, { expiresIn: this.expiresIn });
    }
}
exports.Auth = Auth;
Auth.expiresIn = 60 * 60 * 24 * 10; /* 10 días */
Auth.expiresInTemporaly = 60 * 5;
//# sourceMappingURL=autenticaciones.class.js.map