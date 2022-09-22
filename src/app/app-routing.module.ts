import { VerCiudadesComponent } from './ver-ciudades/ver-ciudades.component';
import { CrearCiudadComponent } from './crear-ciudad/crear-ciudad.component';
import { CrearComponent } from './Componentes/crear/crear.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'Usuario',
    component: UsuarioComponent
  },{
    path:"Crear",
    component:CrearComponent
  }
  ,{
    path:"CrearCiudad",
    component:CrearCiudadComponent
  }
  ,{
    path:"VerCiudades",
    component:VerCiudadesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
