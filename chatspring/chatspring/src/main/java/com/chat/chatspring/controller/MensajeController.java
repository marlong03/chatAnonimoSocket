package com.chat.chatspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chat.chatspring.model.Mensaje;
import com.chat.chatspring.service.MensajeService;
@RestController
@RequestMapping(path="/mensaje/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MensajeController {
    @Autowired
    MensajeService MensajeService;
   

   

    @GetMapping("all")
    List<Mensaje> findAll(){
        return (List<Mensaje>) MensajeService.findAll();
    }
    @GetMapping("mensajessala/{id}")
    List<Mensaje> findAllByMensajes(@PathVariable Integer id){
        return (List<Mensaje>) MensajeService.findAllByFksalamensaje(id);
    }
    @PostMapping("new")
    void saveMensaje(@RequestBody Mensaje Mensaje){
        MensajeService.saveMensaje(Mensaje);
    }
    @DeleteMapping("delete/{id}")
    void deleteMensajeById(@PathVariable Integer id){
        MensajeService.deleteMensajeById(id);
    }



}
