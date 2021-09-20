import { Routes } from '@angular/router';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ConsultarProductoComponent } from './consulta-productos/consulta-producto.component';
export const ProductosRoutes: Routes = [
  {
    path: 'crear-producto',
    children: [{
      path: 'crearProducto',
      component: CrearProductoComponent,
      data: { title: '', breadcrumb: 'PRODUCTO' }
    }]
  }, 
  {
    path: 'consulta-productos',
    children: [{
      path: 'consultarProducto',
      component: ConsultarProductoComponent,
      data: { title: '', breadcrumb: 'PRODUCTO' }
    }]
  }
];