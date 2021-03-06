package com.example.integradormovil;


import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;


import android.os.Bundle;
import android.view.MenuItem;

import com.example.integradormovil.fragments.CuestionarioFragment;
import com.example.integradormovil.fragments.GlobalFragment;
import com.example.integradormovil.fragments.HomeFragment;
import com.example.integradormovil.fragments.PeruFragment;
import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends AppCompatActivity {

    BottomNavigationView btn_view;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btn_view=findViewById(R.id.bottom_view);


        btn_view.setOnNavigationItemSelectedListener(bottomNavMethod);
        getSupportFragmentManager().beginTransaction().replace(R.id.container,new HomeFragment()).commit();
    }



    private BottomNavigationView.OnNavigationItemSelectedListener bottomNavMethod=new
            BottomNavigationView.OnNavigationItemSelectedListener() {
               @Override
                public boolean onNavigationItemSelected(@NonNull MenuItem item) {

                   Fragment fragment=null;

                    switch (item.getItemId())
                    {
                        case R.id.inicio:
                            fragment=new HomeFragment();
                            break;
                        case R.id.peru:
                            fragment=new PeruFragment();
                            break;
                        case R.id.global:
                            fragment=new GlobalFragment();
                            break;
                        case R.id.cuestionario:
                            fragment=new CuestionarioFragment();
                            break;

                    }
                    getSupportFragmentManager().beginTransaction().replace(R.id.container,fragment).commit();
                    return true;
                }
            };
}
