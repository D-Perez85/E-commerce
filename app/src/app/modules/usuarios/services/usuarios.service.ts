import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsuarioService {
  private usuarioUrl = "http://localhost:3002/api/modules/usuarios"; //VA HASTA LA RUTA DEL MODULO, SE CONCANTENA EL RESTO

  constructor(private http: HttpClient) {}

  guardarUsuario(usuario: any) {
    debugger
    return this.http.post(this.usuarioUrl + "/usuario", usuario);
  }

  getUsuarios() {
    return this.http.get(this.usuarioUrl + "/usuarios");
  }

  editarUsuario(idUsuario, usuario) {
    return this.http.put(this.usuarioUrl + "/usuario/" + idUsuario, usuario);
  }

  borrarUsuario(idUsuario, usuario) {
    return this.http.delete(this.usuarioUrl + "/usuario/" + idUsuario, usuario);
  }
}
