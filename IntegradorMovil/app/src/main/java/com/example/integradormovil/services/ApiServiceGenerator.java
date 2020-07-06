package com.example.integradormovil.services;

import android.text.TextUtils;

import okhttp3.Credentials;
import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ApiServiceGenerator {

    private static OkHttpClient.Builder httpClient = new OkHttpClient.Builder();

    private static Retrofit.Builder builder = new Retrofit.Builder()
            .baseUrl(ApiService.API_BASE_URL)
            .addConverterFactory(GsonConverterFactory.create());

    private static Retrofit retrofit;

    private ApiServiceGenerator() {
    }

    // Método para llamar servicios SIN autenticación
    public static <S> S createService(Class<S> serviceClass) {
        if (retrofit == null) {
            HttpLoggingInterceptor logging = new HttpLoggingInterceptor();
            logging.setLevel(HttpLoggingInterceptor.Level.BODY);
            httpClient.addInterceptor(logging);

            retrofit = builder.client(httpClient.build()).build();
        }
        return retrofit.create(serviceClass);
    }

    // Método para llamar servicios CON autenticación
    public static <S> S createService(
            Class<S> serviceClass, final String authToken) {
        if (!TextUtils.isEmpty(authToken)) {
            AuthenticationInterceptor interceptor =
                    new AuthenticationInterceptor(authToken);

            if (!httpClient.interceptors().contains(interceptor)) {
                httpClient.addInterceptor(interceptor);
            }

            HttpLoggingInterceptor logging = new HttpLoggingInterceptor();
            logging.setLevel(HttpLoggingInterceptor.Level.BODY);

            if (!httpClient.interceptors().contains(logging)) {
                httpClient.addInterceptor(logging);
            }
            builder.client(httpClient.build());
            retrofit = builder.build();
        }
        return retrofit.create(serviceClass);
    }

    public static <S> S createService(
            Class<S> serviceClass, String username, String password) {
        if (!TextUtils.isEmpty(username)
                && !TextUtils.isEmpty(password)) {
            String authToken = Credentials.basic(username, password);
            return createService(serviceClass, authToken);
        }
        return createService(serviceClass, null);
    }
}
