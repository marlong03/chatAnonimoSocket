package com.chat.chatspring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chat.chatspring.model.Usuario;
import com.chat.chatspring.service.UsuarioService;
@RestController
@RequestMapping(path="/usuario/")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController {
    @Autowired
    UsuarioService UsuarioService;
    @GetMapping("identificador/{ident}")
    public Optional<Usuario> findByIdentificadorUsuario(@PathVariable String ident){
        return UsuarioService.findByIdentificadorUsuario(ident);
    }
    @GetMapping("all")
    public List<Usuario> findAll(){
        return (List<Usuario>) UsuarioService.findAll();
    }
    @PostMapping("new")
    public void saveUsuario(@RequestBody Usuario Usuario){
        UsuarioService.saveUsuario(Usuario);
    }
    @DeleteMapping("delete/{id}")
    public void deleteUsuarioById(@PathVariable Integer id){
        UsuarioService.deleteUsuarioById(id);
    }



}
