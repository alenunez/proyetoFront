import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { CrearComponent } from './Componentes/crear/crear.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CrearCiudadComponent } from './crear-ciudad/crear-ciudad.component';
import { VerCiudadesComponent } from './ver-ciudades/ver-ciudades.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsuarioComponent,
    CrearComponent,
    CrearCiudadComponent,
    VerCiudadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
