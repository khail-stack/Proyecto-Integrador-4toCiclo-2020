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

    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    private int mParam1;
    private int mParam2;

    private TextView txtPrueba;
    private ArrayList<ContenidoPregunta> data;
    private int totalpages;
    private RecyclerView recyclerViewPreguntas;
    private PreguntasAdapter preguntasAdapter;

    public PaginaPreguntasFragment() {
        // Required empty public constructor
    }

    public PaginaPreguntasFragment newInstance(int param1,int param2) {
        PaginaPreguntasFragment fragment = new PaginaPreguntasFragment();
        Bundle args = new Bundle();
        args.putInt(ARG_PARAM1, param1);
        args.putInt(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getInt(ARG_PARAM1);
            mParam2 = getArguments().getInt(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_pagina_preguntas, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        txtPrueba = view.findViewById(R.id.txtPrueba);

        txtPrueba.setText("Yo soy la página " + mParam1);

        cargarVistas(view);

        super.onViewCreated(view, savedInstanceState);
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

    private void cargarVistas(View view){
            recyclerViewPreguntas = (RecyclerView) view.findViewById(R.id.recyclerViewPreguntas);
            recyclerViewPreguntas.setLayoutManager(
                new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false));
       obtenerPreguntas();
    }



    private void obtenerPreguntas() {

        String token = LoginUtil.getToken(getContext());
        int page = mParam1;

        ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
        Call<Preguntas> call = service.getPreguntas(page);
        call.enqueue(new Callback<Preguntas>() {
            @Override
            public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                if (response.isSuccessful()) {

                    Preguntas preguntas = response.body();
                    Log.d("Exito", "Contenido de preguntas" + preguntas);

                    data = new ArrayList<>(Arrays.asList(preguntas.getContent()));

                    totalpages = preguntas.getTotalPages();

                    preguntasAdapter = new PreguntasAdapter(data);

                    recyclerViewPreguntas.setAdapter(preguntasAdapter);

                    Toast.makeText(getContext(), "Se obtuvo la lista correctamente", Toast.LENGTH_SHORT).show();
                } else {

                }
            }

            @Override
            public void onFailure(Call<Preguntas> call, Throwable t) {
                Log.d("Error", t.getMessage());
            }
        });
    }
}