package com.example.integradormovil.adapters;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;

import com.example.integradormovil.fragments.PaginaPreguntasFragment;
import com.example.integradormovil.models.Preguntas;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.LoginUtil;
import com.stepstone.stepper.Step;
import com.stepstone.stepper.adapter.AbstractFragmentStepAdapter;

import java.util.ArrayList;
import java.util.Arrays;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PaginaPreguntasAdapter extends AbstractFragmentStepAdapter {

    private static final String CURRENT_STEP_POSITION_KEY = "param1";
    private int pages;

    public PaginaPreguntasAdapter(@NonNull FragmentManager fm, @NonNull Context context, int totalpages) {
        super(fm, context);
        this.pages = totalpages;
    }

    @Override
    public Step createStep(int position) {
        final PaginaPreguntasFragment step = new PaginaPreguntasFragment();
        Bundle b = new Bundle();
        b.putInt(CURRENT_STEP_POSITION_KEY, position);
        step.setArguments(b);
        return step;
}

    @Override
    public int getCount() {
        return 5;
    }




}


