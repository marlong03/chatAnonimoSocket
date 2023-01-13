package com.chat.chatspring.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chat.chatspring.model.Sala;
@Repository
public interface SalaRepository extends CrudRepository<Sala,Integer> {
    public Sala findByCodigosala(String codigosala);
   /*  @Query("insert into sala values(2,'hola31')")
    @Autowired 
    public Sala save(Sala sala); */
}
