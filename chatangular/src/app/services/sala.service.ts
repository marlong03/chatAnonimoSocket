import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sala } from '../models/Sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  url = 'http://localhost:3000/' 
  
  constructor(private http:HttpClient) { }

  getSalas(){
    return this.http.get(this.url +"sala/all")
  }
  getSalaByCodigo(codigosala:string){
    return this.http.get(this.url +"sala/codigosala/" + codigosala)
  }
  postSala(data:Sala){
    this.http.post(this.url +"sala/new",data).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
