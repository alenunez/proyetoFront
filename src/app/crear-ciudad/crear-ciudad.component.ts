import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../Modelos/Ciudad';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit {
  usuarios:any=[];
  ciudad:Ciudad = new Ciudad();
  constructor(private api:ServicioService) { }

  ngOnInit(): void {
  }
  
  crearUsuario(){
    let formulario:any = document.getElementById("crear");
    let formularioValido:boolean = formulario.reportValidity();
    if( formularioValido){
      this.api.createCiudad(this.ciudad).subscribe(
        data => this.confirmar(data)
      )
    }
  }
  confirmar(resultado:any){
    if(resultado){
      alert("Ciudad creada exitosamente.");
    }
    else{
      alert("Error al crear la ciudad");
  
    }
  }

}
