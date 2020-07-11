package com.example.integradormovil.fragments;

import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import com.example.integradormovil.MainActivity;
import com.example.integradormovil.R;
import com.example.integradormovil.activity.LoginActivity;

public class CuestionarioFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";
   // private Button btn_realizar_test;


    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public CuestionarioFragment() {
        // Required empty public constructor
    }

    // TODO: Rename and change types and number of parameters
    public static CuestionarioFragment newInstance(String param1, String param2) {
        CuestionarioFragment fragment = new CuestionarioFragment();
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
        View view = inflater.inflate(R.layout.fragment_cuestionario, container, false);

        return view;
        // btn_realizar_test = v.findViewById(R.id.btn_go_realizar_test);

        //return v;
    }





}
