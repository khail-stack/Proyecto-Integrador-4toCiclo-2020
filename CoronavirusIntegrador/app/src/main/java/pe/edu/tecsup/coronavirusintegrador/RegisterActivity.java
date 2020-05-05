package pe.edu.tecsup.coronavirusintegrador;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioGroup;

public class RegisterActivity extends AppCompatActivity {

    private EditText Nombre,apellido,DNI,telefono,contrasena;
    private RadioGroup radioGroup;
    private Button btnRegistrar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);
        Nombre = findViewById(R.id.nombre);
        apellido = findViewById(R.id.apellido);
        DNI = findViewById(R.id.DNI);
        telefono = findViewById(R.id.telefono);
        contrasena = findViewById(R.id.contrasena);
        radioGroup =findViewById(R.id.radiogp);
        btnRegistrar = findViewById(R.id.btnRegistrar);

        btnRegistrar.setOnClickListener(new OnClickListener(){

            @Override
            public void onClick(View view) {
                Intent intent = new Intent(RegisterActivity.this, PaginaPrincipal.class);
                startActivity(intent);
            }
        });
    }
}
