package com.chat.chatspring.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chat.chatspring.model.Sala;
import com.chat.chatspring.repository.SalaRepository;

@Service
public class SalaService {
    
    @Autowired
    SalaRepository salaRepository;

    public Iterable<Sala> findAll(){
        return salaRepository.findAll();
    }
    public Sala findByCodigoSala(String codigo){
        return salaRepository.findByCodigosala(codigo);
    }
    public Optional<Sala> findById(Integer id){
        return salaRepository.findById(id);
    }
    public void saveSala(Sala sala){
         salaRepository.save(sala);
    }
    public void deleteSalaById(Integer id){
        salaRepository.deleteById(id);
    }
}
