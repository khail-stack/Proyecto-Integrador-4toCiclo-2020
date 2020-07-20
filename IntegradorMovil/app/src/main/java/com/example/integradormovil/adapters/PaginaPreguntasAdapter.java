package com.example.integradormovil.adapters;

import android.content.Context;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;

import com.example.integradormovil.fragments.PaginaPreguntasFragment;
import com.stepstone.stepper.Step;
import com.stepstone.stepper.adapter.AbstractFragmentStepAdapter;

public class PaginaPreguntasAdapter extends AbstractFragmentStepAdapter {

    private int totalPages;

    public PaginaPreguntasAdapter(@NonNull FragmentManager fm, @NonNull Context context, int totalPages) {
        super(fm, context);
        this.totalPages = totalPages;
    }

    @Override
    public Step createStep(int position) {
        final PaginaPreguntasFragment step = new PaginaPreguntasFragment();
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


