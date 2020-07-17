package com.example.integradormovil.models;

public class Opciones {

    private Integer idopcion;
    private String opcion;

    public Integer getIdopcion() {
        return idopcion;
    }

    public void setIdopcion(Integer idopcion) {
        this.idopcion = idopcion;
    }

    public String getOpcion() {
        return opcion;
    }

    public void setOpcion(String opcion) {
        this.opcion = opcion;
    }

    @Override
    public String toString() {
        return "Opciones{" +
                "idopcion=" + idopcion +
                ", opcion='" + opcion + '\'' +
                '}';
    }
}
