package com.chat.chatspring.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

import com.chat.chatspring.model.Mensaje;
public class MsjController {
     /* WEBSOCKET*/
     @MessageMapping("/hello")
     @SendTo("/topic/greetings")
     public Mensaje mensaje(Mensaje message) throws Exception {
         Thread.sleep(1000); // simulated delay
         return message;
     }
     /* WEBSOCKET*/
}
