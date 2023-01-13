import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mensaje } from '../models/Mensaje';
@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  url = 'http://localhost:3000/' 
    constructor(private http:HttpClient) { }

  getMensajes():Observable<any>{
    return this.http.get( this.url +"mensaje/all")
  }
  getMensajesByIdSala(id:number){
    return this.http.get(this.url +"mensaje/mensajessala/" + id)
  }
  postMensaje(data:Mensaje){  
    this.http.post(this.url +"mensaje/new",data).subscribe()
  }

}
