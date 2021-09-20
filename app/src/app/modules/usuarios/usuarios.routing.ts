import { Routes } from '@angular/router';

import { CrearUsuarioComponent } from '../usuarios/crear-usuario/crear-usuario.component';



export const UsuariosRoutes: Routes = [
  {
    path: 'crear-usuario',
    children: [{
      path: 'crearUsuario',
      component: CrearUsuarioComponent,
      data: { title: '', breadcrumb: 'USUARIO' }
    }]
  }
];