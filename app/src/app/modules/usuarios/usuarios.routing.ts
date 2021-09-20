import { Routes } from '@angular/router';

import { CrearUsuarioComponent } from '../usuarios/crear-usuario/crear-usuario.component';
import { ConsultarUsuarioComponent } from './consulta-usuarios/consulta-usuario.component';


export const UsuariosRoutes: Routes = [
  {
    path: 'crear-usuario',
    children: [{
      path: 'crearUsuario',
      component: CrearUsuarioComponent,
      data: { title: '', breadcrumb: 'USUARIO' }
    }]
  },
  {
    path: 'consulta-usuarios',
    children: [{
      path: 'consultarUsuario',
      component: ConsultarUsuarioComponent,
      data: { title: '', breadcrumb: 'USUARIO' }
    }]
  }
];