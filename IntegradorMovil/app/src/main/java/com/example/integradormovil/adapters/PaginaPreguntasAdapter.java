package com.example.integradormovil.adapters;

import android.content.Context;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;

import com.example.integradormovil.fragments.PaginaPreguntasFragment;
import com.example.integradormovil.interfaces.ICheckAnswer;
import com.stepstone.stepper.Step;
import com.stepstone.stepper.adapter.AbstractFragmentStepAdapter;

public class PaginaPreguntasAdapter extends AbstractFragmentStepAdapter {

    private static final String CURRENT_STEP_POSITION_KEY = "param1";
    private int pages;

    private int totalPages;

    private ICheckAnswer iCheckAnswer = null;


    public PaginaPreguntasAdapter(@NonNull FragmentManager fm, @NonNull Context context, int totalPages, ICheckAnswer iCheckAnswer) {
        super(fm, context);

        this.pages = totalPages;

        this.totalPages = totalPages;

        this.iCheckAnswer = iCheckAnswer;

        System.out.println("Error prueba 1: "   + iCheckAnswer);

    }

    @Override
    public Step createStep(int position) {
        final PaginaPreguntasFragment step = new PaginaPreguntasFragment(iCheckAnswer);
        Bundle bundle = new Bundle();
        bundle.putInt(PaginaPreguntasFragment.CURRENT_STEP_POSITION, position);
        step.setArguments(bundle);
        return step;
}

    @Override
    public int getCount() {
        return totalPages;
    }

}


