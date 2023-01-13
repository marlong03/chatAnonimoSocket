package com.chat.chatspring.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    private int idusuario;
    private String identificadorusuario;
    @ManyToOne
    @JoinColumn(name="fkusuariosala", insertable=false, updatable=false)
    private Sala salaa;

    @OneToMany(mappedBy = "usuario")
    private List<Mensaje> mensajes;

    public Usuario() {
    }
    public Usuario(int idusuario, String identificadorusuario,
                   Sala sala) {
        this.idusuario = idusuario;
        this.identificadorusuario = identificadorusuario;
        this.salaa = sala;
    }
    public int getIdusuario() {
        return idusuario;
    }
    public void setIdusuario(int idusuario) {
        this.idusuario = idusuario;
    }
    public String getIdentificadorusuario() {
        return identificadorusuario;
    }
    public void setIdentificadorusuario(String identificadorusuario) {
        this.identificadorusuario = identificadorusuario;
    }

    public Sala getsala() {
        return salaa;
    }
    public void setsala(Sala sala) {
        this.salaa = sala;
    }
}
