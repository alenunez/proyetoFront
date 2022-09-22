import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  @Output() disparador: EventEmitter<any> = new EventEmitter();


  constructor(private http: HttpClient) {     
  }
    createUsuario(usuario: any) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/personas/guardar", usuario, httpOptions);
  }
  
  createCiudad(usuario: any) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/ciudades/guardar", usuario, httpOptions);
  }
  updateUsuario(usuario: any) {
    var httpOptions = {
      headers: new HttpHeaders({ 
        'Content-type': 'application/json'
      })
    }
    return this.http.put<any>("http://localhost:8080/usuario/actualizar/", usuario, httpOptions);
  }

  getUsuarios() {
    return this.http.get(`http://localhost:8080/personas/`)
  }
  getCiudades() {
    return this.http.get(`http://localhost:8080/ciudades`)
  }
  getUsuario() {
    return this.http.get(`http://localhost:8080/usuario/buscar/` + sessionStorage.getItem("userID"))
  }
  eliminarUsuario(): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:8080/personas/delete/` + sessionStorage.getItem("userID"))
  }

}
