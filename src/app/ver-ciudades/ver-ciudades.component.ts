import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-ver-ciudades',
  templateUrl: './ver-ciudades.component.html',
  styleUrls: ['./ver-ciudades.component.css']
})
export class VerCiudadesComponent implements OnInit {
  ciudades:any=[];

  constructor(private api:ServicioService) { }

  ngOnInit(): void {
    this.getCiudad()
  }
  
  getCiudad(){
    this.api.getCiudades().subscribe(data=>{
      this.ciudades=data;
      console.log(this.ciudades);
    }) 
  }

}
