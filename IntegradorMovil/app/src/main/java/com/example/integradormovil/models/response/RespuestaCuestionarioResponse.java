package com.example.integradormovil.models.response;

public class RespuestaCuestionarioResponse {

    private Integer idCuestionario;
    private Pregunta pregunta;
    private Opcion opcion;


    public class Pregunta {
        private int idpregunta;
        private String pregunta;
        private String valor;

        public int getIdpregunta() {
            return idpregunta;
        }

        public void setIdpregunta(int idpregunta) {
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
    }

    public class Opcion {

        private int idopcion;
        private String opcion;

       public int getIdopcion() {
            return idopcion;
        }

        public void setIdopcion(int idopcion) {
            this.idopcion = idopcion;
        }

        public String getOpcion() {
            return opcion;
        }

        public void setOpcion(String opcion) {
            this.opcion = opcion;
        }
    }
}
