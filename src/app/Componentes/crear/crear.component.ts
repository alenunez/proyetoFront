import { ServicioService } from './../../servicio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  usuario:any ={};
  ciudades:any=[];
  array=[];


  constructor(private api:ServicioService) { }

  ngOnInit(): void {
    this.getCiudad
    this.array=this.ciudades;
  }
  crearUsuario(){
    let formulario:any = document.getElementById("crear");
    let formularioValido:boolean = formulario.reportValidity();
    if( formularioValido){
      this.api.createUsuario(this.usuario).subscribe(
        data => this.confirmar(data)
      )
    }
  }
  confirmar(resultado:any){
    if(resultado){
      alert("Usuario creado exitosamente.");
      this.usuario={};
    }
    else{
      alert("Error al crear el usuario");
  
    }
  }
  getCiudad(){
    this.api.getCiudades().subscribe(data=>{
      this.ciudades=data;
      console.log(this.ciudades);
    }) 
  }

}
