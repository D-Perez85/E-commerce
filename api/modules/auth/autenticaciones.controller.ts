import { UsuarioSchema } from 'modules/usuarios/schemas/usuarios';
import * as mongoose from 'mongoose';
import  * as userSchema from './schemas/autenticaciones';

const sha1Hash = require('sha1');

/**
 * Recupera los datos necesarios de un Usuario.
   Se fija si el usuario existe en la bdd
 */

export async function findUser(username) {
    const userAuth = await userSchema.usuarios.findOne({ usuario: username }); 
    console.log("User desde auth: ", userAuth);
    if (userAuth) {
        return {
            user: userAuth
        };
    }
    return null;
}