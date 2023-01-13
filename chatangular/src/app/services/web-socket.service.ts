import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io'
@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends Socket {
  @Output() outEven = new EventEmitter();
  constructor(private cookieService:CookieService) { 
    super({
      url:'http://localhost:3000',
      options:{
        query:{
          codigoChat:cookieService.get('codigoChat')
        }
      }
    })
    this.listen()

  }
  listen = () => {
    this.ioSocket.on('message', res => this.outEven.emit(res));   
  }
  emitEvent = (payload = {}) => {
    this.ioSocket.emit('message', payload)
  }
}
