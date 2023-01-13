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

import com.chat.chatspring.model.Sala;
import com.chat.chatspring.repository.SalaRepository;
import com.chat.chatspring.service.SalaService;
@RestController
@RequestMapping(path="/sala/")
//modificar para que solo se pueda ingresar desde una url
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class SalaController {
    @Autowired
    SalaService SalaService;
    @Autowired
    SalaRepository sr;
    @GetMapping("codigosala/{codigo}")
    public Sala findByCondigoSala(@PathVariable String codigo){
        return SalaService.findByCodigoSala(codigo);
    }
    @GetMapping("all")
    public List<Sala> findAll(){
        return (List<Sala>) SalaService.findAll();
    }
    @PostMapping("new")
    public void saveSala(@RequestBody Sala sala){
        System.out.println(sala.getCodigosala());
        /* this.SalaService.saveSala(sala); */
        sr.save(sala);
    }
    @DeleteMapping("delete/{id}")
    public void deleteSalaById(@PathVariable Integer id){
        this.SalaService.deleteSalaById(id);
    }



}
