package com.example.integradormovil.services;

import com.example.integradormovil.models.ResponseMessage;
import com.example.integradormovil.models.User;
import com.example.integradormovil.models.response.LoginResponse;


import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface ApiService {

    String API_BASE_URL = "https://juntos-contra-covid-spring.herokuapp.com/";

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

}

//Marcocsx
//khailmipastor
