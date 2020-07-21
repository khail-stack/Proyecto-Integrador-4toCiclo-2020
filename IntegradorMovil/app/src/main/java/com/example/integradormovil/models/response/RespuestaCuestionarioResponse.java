package com.example.integradormovil.models.response;

public class RespuestaCuestionarioResponse {

    private Integer id;
    private Pregunta pregunta;
    private Opcion opcion;

    public class Pregunta {
        private int idpregunta;
        private String pregunta;
        private String valor;
    }

    public class Opcion {
        private int idopcion;
        private String opcion;
    }

}
