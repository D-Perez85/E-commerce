import { UsuarioSchema } from 'modules/usuarios/schemas/usuarios';
import * as mongoose from 'mongoose';
import { usuarios } from './schemas/autenticaciones';

const sha1Hash = require('sha1');

/**
 * Recupera los datos necesarios de un Usuario.
 */

export async function findUser(username) {
    const userAuth = usuarios.findOne({ usuario: username }); //Se fija si el usuario existe en la bdd
    console.log();
    if (userAuth) {
        return {
            user: userAuth
        };
    }
    return null;
}