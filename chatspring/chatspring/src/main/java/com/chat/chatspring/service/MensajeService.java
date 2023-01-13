package com.chat.chatspring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chat.chatspring.model.Mensaje;
import com.chat.chatspring.repository.MensajeRepository;

@Service
public class MensajeService {
    
    @Autowired
    MensajeRepository MensajeRepository;

    public Iterable<Mensaje> findAll(){
        return MensajeRepository.findAll();
    }
    public List<Mensaje> findAllByFksalamensaje(Integer id){
        return MensajeRepository.findAllByFksalamensaje(id);
    }
    public Optional<Mensaje> findById(Integer id){
        return MensajeRepository.findById(id);
    }
    public void saveMensaje(Mensaje Mensaje){
        MensajeRepository.save(Mensaje);
    }
    public void deleteMensajeById(Integer id){
        MensajeRepository.deleteById(id);
    }
}
