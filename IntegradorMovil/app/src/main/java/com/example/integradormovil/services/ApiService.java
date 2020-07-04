package com.example.integradormovil.services;

import com.example.integradormovil.models.ResponseMessage;


import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;

public interface ApiService {

    String API_BASE_URL = "http://192.168.1.8:8081/";

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
}
