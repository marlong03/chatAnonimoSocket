package com.chat.chatspring.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chat.chatspring.model.Mensaje;
@Repository
public interface MensajeRepository extends CrudRepository<Mensaje,Integer> {
   /*  public List<Mensaje> findAllByFksalamensaje(Integer id); */
}
