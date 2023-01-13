package com.chat.chatspring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chat.chatspring.model.Usuario;
import com.chat.chatspring.repository.UsuarioRepository;

@Service
public class UsuarioService {
    
    @Autowired
    UsuarioRepository UsuarioRepository;

    public Iterable<Usuario> findAll(){
        return UsuarioRepository.findAll();
    }
    public Optional<Usuario> findByIdentificadorUsuario(String ident){
        return UsuarioRepository.findByIdentificadorusuario(ident);
    }
    public Optional<Usuario> findById(Integer id){
        return UsuarioRepository.findById(id);
    }
    public void saveUsuario(Usuario Usuario){
        UsuarioRepository.save(Usuario);
    }
    public void deleteUsuarioById(Integer id){
        UsuarioRepository.deleteById(id);
    }
}
