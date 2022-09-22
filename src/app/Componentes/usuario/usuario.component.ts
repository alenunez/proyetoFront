import { ServicioService } from './../../servicio.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelos/Usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuarios:any=[];
  usuario:Usuario = new Usuario();


  constructor(private api:ServicioService) {
    
   }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.api.getUsuarios().subscribe(data=>{
      this.usuarios=data;
      console.log(this.usuarios);
    }) 
  }
  verUsuario(parametro:any){
    this.usuario=parametro
    console.log(this.usuario.nombres)
    this.api.disparador.emit({data:this.usuario})
    sessionStorage.setItem('userID',JSON.stringify( this.usuario.id))
    //this.api.setProductosWishList(this.producto.idproducto,this.producto);
  }
  eliminar(parametro:any):void{
    this.usuario=parametro
    console.log(this.usuario.nombres)
    this.api.disparador.emit({data:this.usuario})
    sessionStorage.setItem('userID',JSON.stringify( this.usuario.id))

    this.api.eliminarUsuario().subscribe();
    console.log("Usuario eliminado")
    alert("Usuario eliminado exitosamente.");
    location.href=""
  }

}
