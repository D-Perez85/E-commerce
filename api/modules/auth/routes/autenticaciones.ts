import * as express from "express";
import * as autenticacionesSchema from "../schemas/autenticaciones";
import { findUser} from '../autenticaciones.controller';
import { Auth } from '../autenticaciones.class';

const sha1Hash = require('sha1');
const router = express.Router();

router.post("/usuario", async (req, res) => {
  try {
    const newUser = req.body;
    const usuarios = new autenticacionesSchema.usuarios(newUser);
    const usuarioNuevo = await usuarios.save();
    console.log("User agregado", usuarioNuevo);
    return res.status(200).send({ status: "success", data: usuarioNuevo });
  } catch (err) {
    console.log("Error: ", err);
    return res.status(404).send({ status: "error", data: err });
  }
});

router.post('/login', async (req, res, next) => {
  // Función interna que genera token

  const login = async (user) => {
    res.json({ //Genera el token y devuelve un usuario hacia la app
        token: Auth.generateUserToken2(user.usuario)
    });
  };

  if (!req.body.usuario || !req.body.password) { //Verifica que el usuario haya ingresado algo, sino lo rebota
      return next(403);
  }

  try {
      const userResponse = await findUser(req.body.usuario); //El usuario que viene de la app lo busca en la bdd para ver si está registrado
        if (userResponse) { //Si el objeto es diferente a null
            const { user }: any = userResponse;
            const passwordSha1 = sha1Hash(req.body.password); //Encripta el password que viene de la app
            if (passwordSha1 === user.password) { //Si la clave que viene de la bdd y de la aplicacion son iguales entra
                 return login(user);
            }
        }
        return next(403);
    } catch (error) {
      return next(403);
  }
});

export = router;
