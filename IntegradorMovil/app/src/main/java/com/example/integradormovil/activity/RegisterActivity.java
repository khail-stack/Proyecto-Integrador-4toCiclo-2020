package com.example.integradormovil.activity;

import android.os.Bundle;
import android.os.StrictMode;
import android.util.Log;
import android.view.View;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import android.widget.ViewAnimator;

import androidx.appcompat.app.AppCompatActivity;

import com.example.integradormovil.R;
import com.example.integradormovil.models.ResponseMessage;
import com.example.integradormovil.models.User;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class RegisterActivity extends AppCompatActivity {

    String[] descriptionData = {"Paso 1", "Paso 2", "Paso 3"};

    private static final String TAG = RegisterActivity.class.getSimpleName();

    private ViewAnimator viewAnimator;
    private EditText txtEmail;
    private EditText txtUsuario;
    private EditText txtPassword;
    private EditText txtNombres;
    private EditText txtApellidos;
    private EditText txtEdad;
    private EditText txtDni;
    private EditText txtSexo;
    private EditText txtCelular;

    private Button btnNext;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        StrictMode.VmPolicy.Builder builder = new StrictMode.VmPolicy.Builder();
        StrictMode.setVmPolicy(builder.build());
        viewAnimator = findViewById(R.id.viewAnimator);
        txtEmail = findViewById(R.id.input_email_register);
        txtUsuario = findViewById(R.id.input_username_register);
        txtPassword = findViewById(R.id.input_password_register);
        txtNombres = findViewById(R.id.input_name_register);
        txtApellidos = findViewById(R.id.input_apellido_register);
        txtEdad = findViewById(R.id.input_edad_register);
        txtDni = findViewById(R.id.input_dni_register);
        txtSexo = findViewById(R.id.input_sexo_register);
        txtCelular = findViewById(R.id.input_numero_register);

        btnNext = findViewById(R.id.btnNext);

        // Texto fijos para pruebas
        txtNombres.setText("José Paolo");
        txtApellidos.setText("Guerrero Gonzales");
        txtSexo.setText("Masculino");
        txtEdad.setText("35");
        txtDni.setText("11223344");
        txtCelular.setText("999666333");
        txtEmail.setText("pguerrero@fpf.pe");
        txtUsuario.setText("pguerrero");
        txtPassword.setText("123456");

        viewAnimator.setInAnimation(AnimationUtils.loadAnimation(getApplicationContext(), android.R.anim.slide_in_left));
        viewAnimator.setOutAnimation(AnimationUtils.loadAnimation(getApplicationContext(), android.R.anim.slide_out_right));
    }

    public void next(View view) {

        String nombre = txtNombres.getText().toString();
        String apellido = txtApellidos.getText().toString();
        String sexo = txtSexo.getText().toString();

        if (!nombre.equals("") && !apellido.equals("") && !sexo.equals("")) {
            viewAnimator.showNext();
        }

        if (viewAnimator.getCurrentView().getId() == R.id.three) {
            btnNext.setText("Registrarse");
            btnNext.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    // Ensamblar el objeto usuario
                    User user = new User();
                    user.setNombre(txtNombres.getText().toString());
                    user.setApellido(txtApellidos.getText().toString());
                    user.setSexo(txtSexo.getText().toString());
                    user.setEdad(Integer.parseInt(txtEdad.getText().toString()));
                    user.setDni(Integer.parseInt(txtDni.getText().toString()));
                    user.setTelefono(Integer.parseInt(txtCelular.getText().toString()));
                    user.setEmail(txtEmail.getText().toString());
                    user.setUsername(txtUsuario.getText().toString());
                    user.setPassword(txtPassword.getText().toString());

                    Log.d(TAG, user.toString());
                    ApiService service = ApiServiceGenerator.createService(ApiService.class);

                    Call<ResponseMessage> call = service.register(user);
                    call.enqueue(new Callback<ResponseMessage>() {
                        @Override
                        public void onResponse(Call<ResponseMessage> call, Response<ResponseMessage> response) {
                            try {
                                Log.d(TAG, "HTTP status code: " + response.code());
                                if (response.isSuccessful()) {
                                    ResponseMessage responseMessage = response.body();
                                    Log.d(TAG, "responseMessage: " + responseMessage);
                                    Toast.makeText(RegisterActivity.this, responseMessage.getMessage(), Toast.LENGTH_LONG).show();
                                    finish();
                                } else {
                                    Log.e(TAG, "onError: " + response.errorBody().toString());
                                    Toast.makeText(RegisterActivity.this, "Ocurrió un error", Toast.LENGTH_LONG).show();
                                }
                            } catch (Exception e) {
                                Log.e(TAG, "onError: " + e.getMessage());
                                Toast.makeText(RegisterActivity.this, "Ocurrió un error", Toast.LENGTH_LONG).show();
                            }
                        }
                        @Override
                        public void onFailure(Call<ResponseMessage> call, Throwable t) {
                            Log.e(TAG, "onError: " + t.getMessage());
                            Toast.makeText(RegisterActivity.this, "Ocurrió un error", Toast.LENGTH_LONG).show();
                        }
                    });

                    /*Call<ResponseMessage> call = null;
                    call = service.createUser(email, username, password, nombre, apellido, edad, dni, sexo, telefono);
                    call.enqueue(new Callback<ResponseMessage>() {
                        @Override
                        public void onResponse(Call<ResponseMessage> call, Response<ResponseMessage> response) {
                            try {
                                int statusCode = response.code();
                                Log.d(TAG, "HTTP status code: " + statusCode);

                                if (response.isSuccessful()) {
                                    ResponseMessage responseMessage = response.body();
                                    Log.d(TAG, "responseMessage: " + responseMessage);
                                    Toast.makeText(RegisterActivity.this, responseMessage.getMessage(), Toast.LENGTH_LONG).show();
                                    finish();
                                } else {
                                    Log.e(TAG, "onError: " + response.errorBody().string());
                                    throw new Exception("Error en el servicio");
                                }
                            } catch (Throwable t) {
                                try {
                                    Log.e(TAG, "onThrowable: " + t.toString(), t);
                                    Toast.makeText(RegisterActivity.this, t.getMessage(), Toast.LENGTH_LONG).show();
                                } catch (Throwable x) {

                                }
                            }
                        }
                        @Override
                        public void onFailure(Call<ResponseMessage> call, Throwable t) {
                            Log.e(TAG, "onFailure: " + t.toString());
                            Toast.makeText(RegisterActivity.this, t.getMessage(), Toast.LENGTH_LONG).show();
                        }
                    });*/
                }
            });
        } else {
            btnNext.setText("Siguiente");
        }
    }

    public void previous(View view) {
        if (viewAnimator.getCurrentView().getId() != R.id.one) {
            viewAnimator.showPrevious();
        }
    }
}
