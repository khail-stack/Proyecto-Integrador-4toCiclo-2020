package com.example.integradormovil.models;

import java.util.List;

public class ContenidoPregunta {

    private Integer idpregunta;
    private String pregunta;
    private String valor;
    private List<Opciones> opciones = null;

    public Integer getIdpregunta() {
        return idpregunta;
    }

    public void setIdpregunta(Integer idpregunta) {
        this.idpregunta = idpregunta;
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    public List<Opciones> getOpciones() {
        return opciones;
    }

    public void setOpciones(List<Opciones> opciones) {
        this.opciones = opciones;
    }

    @Override
    public String toString() {
        return "ContenidoPregunta{" +
                "idpregunta=" + idpregunta +
                ", pregunta='" + pregunta + '\'' +
                ", valor='" + valor + '\'' +
                ", opciones=" + opciones +
                '}';
    }
}
