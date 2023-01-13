import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ChatComponent } from './components/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
const routes:Routes=[
{
  path:"",
  component:InicioComponent
},
{
  path:"sala/:codigoChat",
  component:ChatComponent
},
]
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
