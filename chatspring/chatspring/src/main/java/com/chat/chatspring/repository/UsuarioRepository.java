package com.chat.chatspring.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chat.chatspring.model.Usuario;
@Repository
public interface UsuarioRepository extends CrudRepository<Usuario,Integer> {
    public Optional<Usuario> findByIdentificadorusuario(String identificador);
}

