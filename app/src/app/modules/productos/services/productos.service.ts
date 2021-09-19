import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductoService {
  private productoUrl = "http://localhost:3002/api/modules/productos"; //VA HASTA LA RUTA DEL MODULO, SE CONCANTENA EL RESTO

  constructor(private http: HttpClient) {}



}
