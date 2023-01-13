package com.chat.chatspring.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "mensaje")
public class Mensaje {
    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    private int idmensaje;
    private String datamensaje;
    @ManyToOne
    @JoinColumn(name ="fksalamensaje" ,updatable=false , insertable=false)
    private Sala sala;
    @ManyToOne
    @JoinColumn(name ="fkusuariomensaje" ,updatable=false , insertable=false)
    private Usuario usuario;

    public Mensaje() {
    }
    public Mensaje(int idmensaje, String datamensaje, Sala sala, Usuario usuario) {
        this.idmensaje = idmensaje;
        this.datamensaje = datamensaje;
        this.sala = sala;
        this.usuario = usuario;
    }
    public int getIdmensaje() {
        return idmensaje;
    }
    public void setIdmensaje(int idmensaje) {
        this.idmensaje = idmensaje;
    }
    public String getDatamensaje() {
        return datamensaje;
    }
    public void setDatamensaje(String datamensaje) {
        this.datamensaje = datamensaje;
    }
    public Sala getsala() {
        return sala;
    }
    public void setsala(Sala sala) {
        this.sala = sala;
    }
    public Usuario getusuario() {
        return usuario;
    }
    public void setusuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
