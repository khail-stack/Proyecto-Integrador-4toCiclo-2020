package com.example.integradormovil.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.StrictMode;
import android.util.Log;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import android.widget.ViewAnimator;

import com.example.integradormovil.R;
import com.example.integradormovil.models.ResponseMessage;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.kofigyan.stateprogressbar.StateProgressBar;

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
        viewAnimator=(ViewAnimator)findViewById(R.id.viewAnimator);
        txtEmail=(EditText)findViewById(R.id.input_email_register);
        txtUsuario=(EditText)findViewById(R.id.input_username_register);
        txtPassword=(EditText)findViewById(R.id.input_password_register);
        txtNombres=(EditText)findViewById(R.id.input_name_register);
        txtApellidos=(EditText)findViewById(R.id.input_apellido_register);
        txtEdad=(EditText)findViewById(R.id.input_edad_register);
        txtDni=(EditText)findViewById(R.id.input_dni_register);
        txtSexo=(EditText)findViewById(R.id.input_sexo_register);
        txtCelular=(EditText)findViewById(R.id.input_numero_register);

        btnNext=(Button)findViewById(R.id.btnNext);

        viewAnimator.setInAnimation(AnimationUtils.loadAnimation(getApplicationContext(),android.R.anim.slide_in_left));
        viewAnimator.setOutAnimation(AnimationUtils.loadAnimation(getApplicationContext(),android.R.anim.slide_out_right));
    }

    public void next(View view){
        String nombre = txtNombres.getText().toString();
        String apellido = txtApellidos.getText().toString();
        String sexo = txtSexo.getText().toString();
        if (!nombre.equals("") && !apellido.equals("") && !sexo.equals("")) {
            viewAnimator.showNext();
        }
        if (viewAnimator.getCurrentView().getId()==R.id.three) {
            btnNext.setText("Registrarse");
            btnNext.setOnClickListener(new View.OnClickListener() {

                    String email = txtEmail.getText().toString();
                    String username = txtUsuario.getText().toString();
                    String password = txtPassword.getText().toString();
                    String nombre = txtNombres.getText().toString();
                    String apellido = txtApellidos.getText().toString();
                    String edad = txtEdad.getText().toString();
                    String dni = txtDni.getText().toString();
                    String sexo = txtSexo.getText().toString();
                    String telefono = txtCelular.getText().toString();

                @Override
                public void onClick(View view) {

                    System.out.println(nombre+apellido+sexo+edad+dni+telefono+username+password+email);

                    ApiService service = ApiServiceGenerator.createService(ApiService.class);

                    Call<ResponseMessage> call = null;


                    call = service.createUser(email, username, password,nombre, apellido, edad, dni,sexo, telefono);

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

                    });
                }
            });

        }else {
            btnNext.setText("Siguiente");
        }
    }

    public void previous(View view){
        if (viewAnimator.getCurrentView().getId()!=R.id.one) {
            viewAnimator.showPrevious();
        }
    }
}
