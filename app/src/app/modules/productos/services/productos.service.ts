import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductoService {
  private productoUrl = "http://localhost:3002/api/modules/productos"; //VA HASTA LA RUTA DEL MODULO, SE CONCANTENA EL RESTO

  constructor(private http: HttpClient) {}
  
  guardarProducto(producto: any) {
    return this.http.post(this.productoUrl + "/producto", producto);
  }

  getProductos() {
    return this.http.get(this.productoUrl + "/productos");
  }

  editarProducto(idProducto, producto) {
    return this.http.put(
      this.productoUrl + "/producto/" + idProducto,
      producto
    );
  }

  borrarProducto(idProducto, producto) {
    return this.http.delete(
      this.productoUrl + "/producto/" + idProducto,
      producto
    );
  }

}
