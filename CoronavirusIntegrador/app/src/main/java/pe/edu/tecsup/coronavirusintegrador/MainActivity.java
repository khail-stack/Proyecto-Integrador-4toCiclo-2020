package pe.edu.tecsup.coronavirusintegrador;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private EditText DNI;
    private EditText contrasena;
    private Button login;
    private Button registrandote;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        DNI = findViewById(R.id.DNI);
        contrasena = findViewById(R.id.contrasena);
        login = findViewById(R.id.ingresar);
        registrandote = findViewById(R.id.registrandote);
        registrandote.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this, RegisterActivity.class);
                startActivity(intent);
            }
        });
        login.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                String usuario = DNI.getText().toString();
                String contra = contrasena.getText().toString();
                if (usuario.equals("12345678") && contra.equals("tecsup"))
                {
                    Intent intent = new Intent(MainActivity.this, PaginaPrincipal.class);
                    startActivity(intent);
                } else{
                    Toast.makeText(MainActivity.this,"Usuario no registrador",Toast.LENGTH_SHORT).show();
                }

            }

        });
    }
}
