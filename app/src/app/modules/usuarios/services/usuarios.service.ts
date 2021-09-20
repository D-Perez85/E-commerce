import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsuarioService {
  private usuarioUrl = "http://localhost:3002/api/modules/usuarios"; //VA HASTA LA RUTA DEL MODULO, SE CONCANTENA EL RESTO

  constructor(private http: HttpClient) {}


  
}
