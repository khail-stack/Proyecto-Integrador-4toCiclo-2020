package com.example.integradormovil.fragments;

import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.ViewAnimator;

import com.example.integradormovil.R;

public class CuestionarioContentFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";
    private ViewAnimator viewAnimatorCuestionarioContent;
    private Button botonSiguiente;
    private Button botonCancelar;
    private Button botonAtras;

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public CuestionarioContentFragment() {
        // Required empty public constructor
    }

    // TODO: Rename and change types and number of parameters
    public static CuestionarioContentFragment newInstance(String param1, String param2) {
        CuestionarioContentFragment fragment = new CuestionarioContentFragment();
        Bundle args = new Bundle();
        args.putString(ARG_PARAM1, param1);
        args.putString(ARG_PARAM2, param2);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            mParam1 = getArguments().getString(ARG_PARAM1);
            mParam2 = getArguments().getString(ARG_PARAM2);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_cuestionario_content, container, false);

        viewAnimatorCuestionarioContent = (ViewAnimator) view.findViewById(R.id.viewAnimatorCuestionarioContent);
        botonSiguiente = (Button) view.findViewById(R.id.botonSiguiente);
        botonCancelar = (Button) view.findViewById(R.id.botonCancelar);

        viewAnimatorCuestionarioContent.setInAnimation(AnimationUtils.loadAnimation(getActivity().getApplicationContext(), android.R.anim.slide_in_left));
        viewAnimatorCuestionarioContent.setOutAnimation(AnimationUtils.loadAnimation(getActivity().getApplicationContext(), android.R.anim.slide_out_right));

        siguiente();
        atras();

        return view;
    }

    private void cancelar () {

    }

    private void siguiente(){
            viewAnimatorCuestionarioContent.showNext();
    }

    private void atras(){
        if (viewAnimatorCuestionarioContent.getCurrentView().getId() != R.id.cuestionarioUno) {
            viewAnimatorCuestionarioContent.showPrevious();
        }
    }
}

