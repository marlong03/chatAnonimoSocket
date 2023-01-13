import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:3000/' 

  constructor(private http:HttpClient) { }
  getUsuarios(){
    return this.http.get(this.url+"usuario/all")
  }
  getUsuarioByIdentificador(identificador:string){
    return this.http.get(this.url+"usuario/identificador/"+ identificador)
  }
  postUsuario(data:any){
    this.http.post("http://localhost:3000/usuario/new",data).subscribe((res:any)=>{
      console.log(res);
      /* console.log(data); */
    })
  }
}
