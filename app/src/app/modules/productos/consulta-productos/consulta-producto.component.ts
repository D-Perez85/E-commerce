import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductoService } from "../services/productos.service";
@Component({
  selector: "app-consulta-producto",
  templateUrl: "consulta-producto.component.html",
  styleUrls: ["consulta-producto.component.scss"],
})

export class ConsultarProductoComponent implements OnInit, OnDestroy {
  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.getProductos();
  }
  getProductos() {
    this.productoService.getProductos().subscribe(data => {
      //debugger;
    })
  }

  ngOnDestroy() {}
  
}