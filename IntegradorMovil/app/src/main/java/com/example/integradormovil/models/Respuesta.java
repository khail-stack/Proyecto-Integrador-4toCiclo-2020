package com.example.integradormovil.models;

public class Respuesta {

    private Integer idcuestionario;
    private Integer idpregunta;
    private Integer idopcion;
    private Integer idusuario;

    public Respuesta( Integer idpregunta,Integer idcuestionario, Integer idusuario, Integer idopcion) {
        this.idpregunta = idpregunta;
        this.idcuestionario = idcuestionario;
        this.idusuario = idusuario;
        this.idopcion = idopcion;

    }

    public Integer getIdcuestionario() {
        return idcuestionario;
    }

    public void setIdcuestionario(Integer idcuestionario) {
        this.idcuestionario = idcuestionario;
    }

    public Integer getIdpregunta() {
        return idpregunta;
    }

    public void setIdpregunta(Integer idpregunta) {
        this.idpregunta = idpregunta;
    }

    public Integer getIdopcion() {
        return idopcion;
    }

    public void setIdopcion(Integer idopcion) {
        this.idopcion = idopcion;
    }

    public Integer getIdusuario() {
        return idusuario;
    }

    public void setIdusuario(Integer idusuario) {
        this.idusuario = idusuario;
    }

    @Override
    public String toString() {
        return "RespuestaResponse{" +
                "idcuestionario=" + idcuestionario +
                ", idpregunta=" + idpregunta +
                ", idopcion=" + idopcion +
                ", idusuario=" + idusuario +
                '}';
    }

}
