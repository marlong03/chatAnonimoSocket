package com.chat.chatspring.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "sala")
public class Sala {
    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    @Column(name="idsala")
    private int idsala;
    @Column(name="codigosala")
    private String codigosala;

    @OneToMany(mappedBy = "salaa")
    private List<Usuario> usuarios;

    @OneToMany(mappedBy = "sala")
    private List<Mensaje> mensajes;
    public Sala() {
    }
    public Sala(int idsala, String codigosala) {
        this.idsala = idsala;
        this.codigosala = codigosala;
    }
    public int getIdsala() {
        return idsala;
    }
    public void setIdsala(int idsala) {
        this.idsala = idsala;
    }
    public String getCodigosala() {
        return codigosala;
    }
    public void setCodigosala(String codigosala) {
        this.codigosala = codigosala;
    }
}
