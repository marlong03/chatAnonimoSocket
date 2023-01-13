import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
/* import * as Stomp from 'stompjs'; */
import { Mensaje } from 'src/app/models/Mensaje';
import { MensajeService } from 'src/app/services/mensaje.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  codigoChat:string
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private usuarioService:UsuarioService,
    private mensajeService:MensajeService,
    private socketService:WebSocketService,
    public cookieService:CookieService
  ){ 
    this.codigoChat = route.snapshot.paramMap.get('codigoChat')
    cookieService.set('codigoChat',this.codigoChat)
    
    this.socketService.outEven.subscribe((res)=>{
      new Promise((resolve,reject)=>{
        resolve(this.enviarMensaje(false))
      }).then(()=>{
        this.llenarMensajes()
      }).catch(()=>{
        alert("no se lleno")
      })
    })
  }

  ngOnInit(): void {
    this.getSalaDates()
    this.setearUsuarioLocalStorage()
    this.llenarMensajes()
  }

  bajarScroll(){
    let chat = document.getElementById('chat')
    let maxScrollDown = chat.scrollHeight;
    setTimeout(() => {
      chat.scroll(0,chat.scrollHeight)
    }, 0);
  }

  sala:any
  getSalaDates(){
    let salaDates =  JSON.parse(this.cookieService.get('salachat')) 
    this.sala = salaDates[0];
  }

  usuarioSet:any = JSON.parse(this.cookieService.get('usuariochat'));
  usuario:any
  setearUsuarioLocalStorage(){
      if(this.usuarioSet.identificadorusuario != undefined){
        this.usuarioService.getUsuarioByIdentificador(this.usuarioSet.identificadorusuario).subscribe((u:any)=>{
          this.usuario = u[0]
            this.cookieService.set("usuariochat",JSON.stringify(u[0]));
        })
      }else{
        console.log("el usuario no se encontro");
      }
  }

  listaMensajes = []
  llenarMensajes(){
    this.listaMensajes = []
    this.mensajeService.getMensajesByIdSala(this.sala.idsala).subscribe((mensajes:any)=>{
      for(let m of mensajes){
        this.listaMensajes.push(m)
      }
      this.bajarScroll()
    })
  }

  mensajeEnviar = ""
  enviarMensaje(emit:boolean = true){
    let mensaje:Mensaje = {
      idmensaje:0,
      datamensaje:this.mensajeEnviar,
      fksalamensaje:this.sala.idsala,
      fkusuariomensaje:this.usuario.idusuario,
    }
    if(emit && this.mensajeEnviar != ""){
      this.mensajeService.postMensaje(mensaje)
      this.socketService.emitEvent({mensaje})
      this.mensajeEnviar = ""
    }
  }

  enviarConEnter(e:any){
    if(e.keyCode == 13){
      this.enviarMensaje()
    }
  }
  
  direccionarUrl(donde:string){
    this.router.navigate([donde])
  }
}
