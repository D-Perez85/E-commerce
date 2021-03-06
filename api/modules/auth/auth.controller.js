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
const sha1Hash = require('sha1');
// import { AndesCache, CustomError, ObjectId } from '@andes/core';
// import { enviarMail, RedisWebSockets } from '../config.private';
// import { Organizacion } from '../core/tm/schemas/organizacion';
// import { APP_DOMAIN, userScheduler } from './../config.private';
// import { Profesional } from './../core/tm/schemas/profesional';
// import { MailOptions, renderHTML, sendMail } from './../utils/roboSender/sendEmail';
const authUsers_1 = require("./schemas/authUsers");
// export let AuthCache: AndesCache;
// if (RedisWebSockets.active) {
//     AuthCache = new AndesCache({ adapter: 'redis', port: RedisWebSockets.port, host: RedisWebSockets.host });
// } else {
//     AuthCache = new AndesCache({ adapter: 'memory' });
// }
/**
 * Genera los datos de sesion de un usuarios.
 * Son los que antes viajaban en el token.
 */
// export function createPayload(user, authOrg, prof) {
//     const nombre = (prof && prof.nombre) || user.nombre;
//     const apellido = (prof && prof.apellido) || user.apellido;
//     return {
//         usuario: {
//             id: String(user._id),
//             nombreCompleto: nombre + ' ' + apellido,
//             nombre,
//             apellido,
//             username: user.usuario,
//             documento: user.usuario
//         },
//         organizacion: {
//             _id: String(authOrg._id),
//             id: String(authOrg._id),
//             nombre: authOrg.nombre
//         },
//         profesional: prof && String(prof._id),
//         permisos: [...user.permisosGlobales, ...authOrg.permisos],
//         feature: { ...(user.configuracion || {}) }
//     };
// }
/**
 * Busca las collecciones necesarias para generar el payload de session.
 */
// export async function findTokenData(username: number, organizacion: ObjectId) {
//     const pAuth = AuthUsers.findOne({ usuario: username, 'organizaciones._id': organizacion });
//     const pProfesional = Profesional.findOne({ documento: String(username) }, { nombre: true, apellido: true });
//     const [auth, prof]: [any, any] = await Promise.all([pAuth, pProfesional]);
//     if (auth) {
//         const authOrganizacion = auth.organizaciones.find(item => String(item._id) === String(organizacion));
//         return {
//             usuario: auth,
//             organizacion: authOrganizacion,
//             profesional: prof
//         };
//     }
//     return null;
// }
/**
 * Genera el payload de session y lo cachea.
 */
// export async function generateTokenPayload(username, organizacion: ObjectId, account_id) {
//     const data = await findTokenData(username, organizacion);
//     if (data.usuario) {
//         const tokenPayload = createPayload(data.usuario, data.organizacion, data.profesional);
//         const token = Auth.generateUserToken2(username, organizacion, account_id);
//         await AuthCache.set(token, tokenPayload, 60 * 60 * 24);
//         return { token, payload: tokenPayload };
//     } else {
//         return null;
//     }
// }
/**
 * Recupera los datos extras del TOKEN. Utiliza la cache para r??pido acceso.
 */
// export async function getTokenPayload(token, userData) {
//     const payload = await AuthCache.get(token);
//     if (payload) {
//         return payload;
//     }
//     const data = await findTokenData(userData.usuario, userData.organizacion);
//     const tokenPayload = createPayload(data.usuario, data.organizacion, data.profesional);
//     return tokenPayload;
// }
/**
 * Recupera los datos necesarios de un Usuario.
 * User y Profesional
 */
// export async function findUser(username) {
//     const pAuth = AuthUsers.findOne({ usuario: username });
//     const pProfesional = Profesional.findOne({ documento: username }, { matriculas: true, especialidad: true });
//     const [auth, prof] = await Promise.all([pAuth, pProfesional]);
//     if (auth) {
//         return {
//             user: auth,
//             profesional: prof
//         };
//     }
//     return null;
// }
function updateUser(dni, password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield authUsers_1.AuthUsers.findOneAndUpdate({ usuario: dni }, { password, lastLogin: new Date() });
    });
}
exports.updateUser = updateUser;
// Funci??n interna que chequea si la cuenta mobile existe
// export const checkMobile = (profesionalId) => {
//     return new Promise((resolve, reject) => {
//         const authMobile = require('../modules/mobileApp/controller/AuthController');
//         authMobile.getAccountByProfesional(profesionalId).then((account) => {
//             if (!account) {
//                 Profesional.findById(profesionalId).then(prof => {
//                     if (!prof) {
//                         return reject();
//                     }
//                     authMobile.createUserFromProfesional(prof).then((account2) => {
//                         resolve(account2);
//                     }).catch(reject);
//                 });
//                 return;
//             }
//             resolve(account);
//         }).catch(() => {
//             reject();
//         });
//     });
// };
/**
 * Env??a un link para recuperar la contrase??a en caso qeu sea un usuario temporal con email (fuera de onelogin).
 * AuthUser
 */
// export async function setValidationTokenAndNotify(username) {
//     try {
//         const usuario = await AuthUsers.findOne({ usuario: username });
//         if (usuario && usuario.tipo === 'temporal' && usuario.email) {
//             usuario.validationToken = new mongoose.Types.ObjectId().toHexString();
//             usuario.audit(userScheduler);
//             await usuario.save();
//             const extras: any = {
//                 titulo: 'Recuperaci??n de contrase??a',
//                 usuario,
//                 url: `${APP_DOMAIN}/auth/resetPassword/${usuario.validationToken}`,
//             };
//             const htmlToSend = await renderHTML('emails/recover-password.html', extras);
//             const options: MailOptions = {
//                 from: enviarMail.auth.user,
//                 to: usuario.email.toString(),
//                 subject: 'Recuperaci??n de contrase??a',
//                 text: '',
//                 html: htmlToSend,
//                 attachments: null
//             };
//             await sendMail(options);
//             return usuario;
//         } else {
//             // El usuario no existe o es de gobierno => debe operar por onelogin
//             return null;
//         }
//     } catch (error) {
//         throw error;
//     }
// }
/**
 * Busca el usuario que corresponde con el validationToken y si lo encuentra permite el reset de la contrase??a.
 * AuthUser
 */
// export async function reset(token, password) {
//     try {
//         const usuario = await AuthUsers.findOne({ validationToken: token });
//         if (usuario) {
//             usuario.validationToken = null;
//             usuario.password = sha1Hash(password);
//             usuario.audit(userScheduler);
//             await usuario.save();
//             return usuario;
//         } else {
//             // No existe usuario con el token buscado
//             return null;
//         }
//     } catch (error) {
//         throw new CustomError(error, 500);
//     }
// }
// export async function updateUserPermisos(req) {
//     const user: any = await AuthUsers.findOne({ _id: req.params.usuario });
//     const permisos = getPermisosByType(req.body.tipoPermisos);
//     if (permisos && permisos.length) {
//         const organizacionPermisos = user.organizaciones;
//         if (organizacionPermisos && organizacionPermisos.length) {
//             permisos.forEach(e => {
//                 organizacionPermisos.forEach(op => {
//                     if (!op.permisos.find(e2 => e2 === e)) {
//                         op.permisos.push(e);
//                     }
//                 });
//             });
//         } else {
//             const organizacion = await Organizacion.findOne({ matriculacion: true });
//             user.organizaciones = [{
//                 _id: organizacion._id,
//                 nombre: organizacion.nombre,
//                 permisos
//             }];
//         }
//         Auth.audit(user, req);
//         return await user.save();
//     }
// }
// export async function createUser(data) {
//     const user = new AuthUsers();
//     user.usuario = data.documento;
//     user.documento = data.documento;
//     user.activo = true;
//     user.nombre = data.nombre;
//     user.apellido = data.apellido;
//     user.email = data.email;
//     user.authMethod = 'password';
//     user.tipo = 'temporal';
//     const organizacion = await Organizacion.findOne({matriculacion: true});
//     const permisos = getPermisosByType(data.tipoPermisos);
//     const organizaciones = [{
//         _id: organizacion._id,
//         nombre: organizacion.nombre,
//         activo: true,
//         permisos,
//         perfiles: []
//     }];
//     user.organizaciones = organizaciones;
//     user.audit(userScheduler);
//     return await user.save();
// }
// export async function getTemporyTokenCOVID(username) {
//     const organizacion = await Organizacion.findOne({matriculacion: true});
//     const permisos = getPermisosByType('inscripcionProfesionalesCovid19');
//     return Auth.generateUserTokenTemporaly(username, permisos, organizacion._id);
// }
// function getPermisosByType(tipoPermisos) {
//     let permisos;
//     if (tipoPermisos === 'certificadosCovid19') {
//         permisos = ['mpi:paciente:getbyId', 'rup:tipoPrestacion:604793e28566033a409007ea'];
//     } else if (tipoPermisos === 'inscripcionProfesionalesCovid19') {
//         permisos = ['usuarios:read', 'usuarios:write', 'matriculaciones:profesionales:putProfesional'];
//     }
//     return permisos;
// }
//# sourceMappingURL=auth.controller.js.map