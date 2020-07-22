package com.example.integradormovil.services;

import com.example.integradormovil.models.ContenidoPregunta;
import com.example.integradormovil.models.Cuestionario;
import com.example.integradormovil.models.CuestionarioResponse;
import com.example.integradormovil.models.Preguntas;
import com.example.integradormovil.models.ResponseMessage;
import com.example.integradormovil.models.Respuesta;
import com.example.integradormovil.models.RespuestaCuestionario;
import com.example.integradormovil.models.RespuestaResponse;
import com.example.integradormovil.models.ResultadoCuestionario;
import com.example.integradormovil.models.User;
import com.example.integradormovil.models.response.LoginResponse;
import com.example.integradormovil.models.response.RespuestaCuestionarioResponse;


import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;
import retrofit2.http.Url;

public interface ApiService {

    //String API_BASE_URL = "https://juntos-contra-covid-spring.herokuapp.com/";

    String API_BASE_URL = "https://3c02ca9d9f28.ngrok.io/";

    @FormUrlEncoded
    @POST("v1/users/android/register")
    Call<ResponseMessage> createUser(@Field("email") String email,
                                     @Field("username") String username,
                                     @Field("password") String password,
                                     @Field("nombre") String nombre,
                                     @Field("apellido") String apellido,
                                     @Field("edad") String edad,
                                     @Field("dni") String dni,
                                     @Field("sexo") String sexo,
                                     @Field("telefono") String telefono);

    @POST("v1/users/register")
    Call<ResponseMessage> register(@Body User user);

    @POST("v1/users/login")
    Call<LoginResponse> login(@Body User user);

    @GET("v1/users/usuario/{userId}")
    Call<User> getUser(@Path("userId") int userId);

    @POST("v1/resources/cuestionario")
    Call<CuestionarioResponse> createCuestionario(@Body Cuestionario cuestionario);

    @GET("v1/resources/preguntas/{page}")
    Call<Preguntas> getPreguntas(@Path("page") int page );

    @DELETE("v1/resources/cuestionario/{idCuestionario}")
    Call<CuestionarioResponse> deleteCuestionario(@Path("idCuestionario") int idCuestionario);

    @POST("v1/resources/respuesta")
    Call<RespuestaResponse> sendRespuestas(@Body List<Respuesta> respuesta);

    @GET("v1/resources/respuestas/{idCuestionario}")
    Call<List<RespuestaCuestionario>> getRespuestas (@Path("idCuestionario") int idCuestionario);

    @GET("v1/resources/respuesta/resultado/{idCuestionario}")
    Call<ResultadoCuestionario> getResultados (@Path("idCuestionario") int idCuestionario);

}

