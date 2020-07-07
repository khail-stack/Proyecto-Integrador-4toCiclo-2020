package com.example.integradormovil.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.integradormovil.MainActivity;
import com.example.integradormovil.R;
import com.example.integradormovil.models.User;
import com.example.integradormovil.models.response.LoginResponse;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.Constants;
import com.example.integradormovil.util.LoginUtil;

import java.io.IOException;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity extends AppCompatActivity {

    private final String TAG = LoginActivity.this.getClass().getSimpleName();

    private EditText edtUser;
    private EditText edtPass;
    private Button btnLogin;
    private TextView btnGoRegister;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        edtUser = findViewById(R.id.inputUsername);
        edtPass = findViewById(R.id.input_password);
        btnLogin = findViewById(R.id.btn_login);
        btnGoRegister = findViewById(R.id.btn_goRegister);

        edtUser.setText("pguerrero");
        edtPass.setText("123456");

        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String username = edtUser.getText().toString();
                String password = edtPass.getText().toString();

                User user = new User();
                user.setUsername(username);
                user.setPassword(password);

                ApiService service = ApiServiceGenerator.createService(ApiService.class);
                Call<LoginResponse> call = service.login(user);
                call.enqueue(new Callback<LoginResponse>() {
                    @Override
                    public void onResponse(Call<LoginResponse> call, Response<LoginResponse> response) {
                        if (response.isSuccessful()) {
                            Log.d(TAG, response.body().toString());

                            int userId = response.body().getId();
                            String token = String.format(
                                    "%s %s",
                                    response.body().getTokenType(),
                                    response.body().getAccessToken());

                            LoginUtil.saveLogin(getContext(), userId, token);

                            Toast.makeText(getContext(), "El login es exitoso", Toast.LENGTH_SHORT).show();
                        } else {
                            // error response, no access to resource?
                        }
                    }
                    @Override
                    public void onFailure(Call<LoginResponse> call, Throwable t) {
                        Log.d("Error", t.getMessage());
                    }
                });
            }
        });

        btnGoRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /*Intent intent = new Intent(LoginActivity.this, RegisterActivity.class);
                startActivity(intent);*/
                int userId = LoginUtil.getUserId(getContext());
                String token = LoginUtil.getToken(getContext());

                ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
                Call<User> call = service.getUser(userId);
                call.enqueue(new Callback<User>() {
                    @Override
                    public void onResponse(Call<User> call, Response<User> response) {
                        Log.d(TAG, response.body().toString());
                    }
                    @Override
                    public void onFailure(Call<User> call, Throwable t) {
                    }
                });
            }
        });
    }

    private Context getContext() {
        return LoginActivity.this;
    }
}
