package com.example.integradormovil.fragments;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.example.integradormovil.R;
import com.stepstone.stepper.Step;
import com.stepstone.stepper.VerificationError;

public class PaginaPreguntasFragment extends Fragment implements Step {

    private static final String ARG_PARAM1 = "param1";

    private int mParam1;
//    private String mParam2;

    private TextView txtPrueba;

    public PaginaPreguntasFragment() {
        // Required empty public constructor
    }

    public PaginaPreguntasFragment newInstance(int param1/*String param2*/) {
        PaginaPreguntasFragment fragment = new PaginaPreguntasFragment();
        Bundle args = new Bundle();
        args.putInt(ARG_PARAM1, param1);
        //args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getInt(ARG_PARAM1);
            //mParam2 = getArguments().getString(ARG_PARAM2);
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
}