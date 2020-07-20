package com.example.integradormovil.fragments;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.example.integradormovil.R;
import com.example.integradormovil.adapters.PreguntasAdapter;
import com.example.integradormovil.models.ContenidoPregunta;
import com.example.integradormovil.models.Preguntas;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.LoginUtil;
import com.stepstone.stepper.Step;
import com.stepstone.stepper.VerificationError;

import java.util.ArrayList;
import java.util.Arrays;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PaginaPreguntasFragment extends Fragment implements Step {

    public static final String CURRENT_STEP_POSITION = "position";

    // Vistas
    private RecyclerView rcvPreguntas;
    private TextView txtPrueba;
    private RadioGroup radioGroup;
    private RadioButton rdSi;
    private RadioButton rdNo;

    // Variables
    private int position;
    private ArrayList<ContenidoPregunta> data;

    public PaginaPreguntasFragment() {
        // Required empty public constructor
    }

    public PaginaPreguntasFragment newInstance(int position) {
        PaginaPreguntasFragment fragment = new PaginaPreguntasFragment();
        Bundle args = new Bundle();
        args.putInt(CURRENT_STEP_POSITION, position);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            position = getArguments().getInt(CURRENT_STEP_POSITION);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view =  inflater.inflate(R.layout.fragment_pagina_preguntas, container, false);

        /*radioGroupSalPorfa = view.findViewById(R.id.radioGroupSalPorfa);
        radioGroupSalPorfa.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup radioGroup, int i) {
                // find which radio button is selected
                if(i == R.id.radioSi) {
                    Toast.makeText(getActivity(), "Elegiste Sí",
                            Toast.LENGTH_SHORT).show();
                } else if(i == R.id.radioNo) {
                    Toast.makeText(getActivity(), "Elegiste No",
                            Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(getActivity(), "Estas Cagado :v",
                            Toast.LENGTH_SHORT).show();
                }
            }
        });

        rdSi = view.findViewById(R.id.radioSi);
        rdNo = view.findViewById(R.id.radioNo);
*/
        return view;
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        // Instanciamos las vistas
        rcvPreguntas = (RecyclerView) view.findViewById(R.id.rcvPreguntas);
        rcvPreguntas.setLayoutManager(
                new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false));
/*

        radioGroup = (RadioGroup) view.findViewById(R.id.radioGroup);

        radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener()
        {
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                // checkedId is the RadioButton selected

                switch(checkedId) {
                    case R.id.radioSi:
                        Toast.makeText(getActivity(), "Marco sí", Toast.LENGTH_SHORT).show();
                    case R.id.radioNo:
                        Toast.makeText(getActivity(), "Marco No", Toast.LENGTH_SHORT).show();
                }
            }
        });
*/


        obtenerPreguntas();

        super.onViewCreated(view, savedInstanceState);
    }

    private void obtenerPreguntas() {
        ApiService service = ApiServiceGenerator
                .createService(
                        ApiService.class,
                        LoginUtil.getToken(getActivity()));

        Call<Preguntas> call = service.getPreguntas(position);
        call.enqueue(new Callback<Preguntas>() {
            @Override
            public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                if (response.isSuccessful()) {
                    Preguntas preguntas = response.body();
                    Log.d("Exito", "Contenido de preguntas" + preguntas);

                    PreguntasAdapter preguntasAdapter = new PreguntasAdapter(preguntas.getContent());
                    rcvPreguntas.setAdapter(preguntasAdapter);
                } else {
                    Toast.makeText(getActivity(), "Ocurrió un error", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<Preguntas> call, Throwable t) {
                Log.d("Error", t.getMessage());
            }
        });
    }



    @Nullable
    @Override
    public VerificationError verifyStep() {
        return null;
    }

    @Override
    public void onSelected() {

    }

    @Override
    public void onError(@NonNull VerificationError error) {

    }
}