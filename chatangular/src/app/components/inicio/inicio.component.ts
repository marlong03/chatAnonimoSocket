import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaService } from '../../services/sala.service';
import { Sala } from 'src/app/models/Sala';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/Usuario';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router,
              private salaService:SalaService,
              private usuarioService:UsuarioService,
              private cookieService:CookieService) { }


  direccionarUrl(donde:string){
    this.router.navigate([donde])
  }
  generarLetra(){
    let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    let numero:any = (Math.random()*15).toFixed(0);
    return letras[numero];
  }
  crearAlfanumerico(leng:number){
    let coolor = "";
    for(var i=0;i<leng;i++){
      coolor = coolor + this.generarLetra() ;
    }
    return coolor;
  }
  /* --------------------------------- */
  salas:Sala[] = []
  obtenerSalas(){
    this.salaService.getSalas().subscribe((salasTraidas:any)=>{
      this.salas = salasTraidas 
    })
  }
  salaIntroducida = ""
  entrarAUnaSala(){
    let salaExistente = this.salas.filter((s)=>{
      return s.codigosala.toLowerCase() == this.salaIntroducida.toLowerCase()
    })
    console.log(salaExistente);
    if(salaExistente.length == 0){
      alert("lo sentimos esta sala no existe")
    }else if(salaExistente.length == 1){
      
      this.crearUsuario(this.salaIntroducida)
      let codigoSala = JSON.parse(this.cookieService.get('salachat'))[0].codigosala
      setTimeout(() => {
        this.direccionarUrl('sala/'+codigoSala) 
      }, 3000);
    }else{
      alert("tuvimos problemas para ingresar a esta sala")
    }
  }
  /* encontrarSalaPorCodigo(){
    this.salaService.getSalaByCodigo(this.salaIntroducida).subscribe((sala:any)=>{
      console.log(sala.idsala);
         this.idSala = sala.idsala
    })
  } */
  consultarUsuario(){
    let identificadorUsuario = JSON.parse(this.cookieService.get('usuariochat')) 
    this.usuarioService.getUsuarioByIdentificador(identificadorUsuario.identificadorusuario).subscribe((usuario:any)=>{
      console.log("usuario:", usuario);
      
    })
  }
  crearUsuario(codigoS){
    this.cookieService.delete("usuariochat")

    let idSala = 0
    let identificador:string = this.crearAlfanumerico(12)

    this.salaService.getSalaByCodigo(codigoS).subscribe((sala:any)=>{
      let usuariochat:Usuario= {
        idusuario:0,
        identificadorusuario:identificador,
        fkusuariosala:sala[0].idsala
        //spring sala.idsala
      }   
      console.log(usuariochat);
      this.usuarioService.postUsuario(usuariochat)
      /* localStorage.setItem("usuariochat",JSON.stringify(usuariochat)) */
    this.cookieService.set("usuariochat",JSON.stringify(usuariochat))

    })
  }
  crearSala(){
    this.cookieService.deleteAll()
    this.cookieService.delete('salachat')
    this.cookieService.delete('usuariochat')

    let data = {
      idsala:0,
      codigosala:this.crearAlfanumerico(6).toLowerCase()
    }
    try{
      this.salaService.postSala(data)
      setTimeout(() => {
        this.crearUsuario(data.codigosala)
        this.salaService.getSalaByCodigo(data.codigosala).subscribe((res)=>{
          this.cookieService.set('salachat',JSON.stringify(res[0]))
        })
        setTimeout(() => {
          this.direccionarUrl('sala/'+data.codigosala) 
        }, 1000);
      }, 1000);
     
      /* new Promise((resolve,reject)=>{
        if(data.codigosala.length < 1){
          reject('error')
        }
        resolve(this.salaService.postSala(data))
      }).then((res)=>{
        this.salaService.getSalaByCodigo(data.codigosala).subscribe((res)=>{
          this.cookieService.set('salachat',JSON.stringify(res[0]))
        })
        this.crearUsuario()
        setTimeout(() => {
          this.direccionarUrl('sala/'+data.) 
        }, 1000);
      })
      .catch(err=>{
        console.log(err);
      }) */
  }catch(err){
    alert("no pudimos crear la sala")
  }
  }
  ngOnInit(): void {
    this.obtenerSalas()

    
  }

}
