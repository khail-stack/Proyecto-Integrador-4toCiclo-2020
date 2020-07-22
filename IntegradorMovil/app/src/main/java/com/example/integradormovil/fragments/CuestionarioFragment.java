package com.example.integradormovil.fragments;

import android.content.Intent;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.Toast;

import com.example.integradormovil.MainActivity;
import com.example.integradormovil.R;
import com.example.integradormovil.activity.LoginActivity;
import com.example.integradormovil.models.Cuestionario;
import com.example.integradormovil.models.CuestionarioResponse;
import com.example.integradormovil.models.User;
import com.example.integradormovil.models.response.LoginResponse;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.CuestionarioUtil;
import com.example.integradormovil.util.LoginUtil;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CuestionarioFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER

    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";
    private Button btn_goRealizarTest;


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

        btn_goRealizarTest = (Button) view.findViewById(R.id.btn_goRealizarTest);

        crearFormularioYgoFragmentContent();


        return view;
    }

    private void crearFormularioYgoFragmentContent(){
        btn_goRealizarTest.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v)
            {
                String token = LoginUtil.getToken(getContext());
                Cuestionario cuestionario = new Cuestionario();

                ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
                Call<CuestionarioResponse> call = service.createCuestionario(cuestionario);
                call.enqueue(new Callback<CuestionarioResponse>() {
                    @Override
                    public void onResponse(Call<CuestionarioResponse> call, Response<CuestionarioResponse> response) {
                        if (response.isSuccessful()) {
                            Log.d("Exito", response.body().toString());

                            int cuestionarioId = response.body().getIdcuestionario();

                            FragmentTransaction fr = getFragmentManager().beginTransaction();
                            fr.replace(R.id.container, CuestionarioContentFragment.newInstance(cuestionarioId));
                            fr.commit();

                        } else {

                        }
                    }
                    @Override
                    public void onFailure(Call<CuestionarioResponse> call, Throwable t) {
                        Log.d("Error", t.getMessage());
                    }
                });
                //Toast.makeText(getActivity().getApplicationContext(), "He pulsado el boton", Toast.LENGTH_SHORT).show();


                //int userId = LoginUtil.getUserId(getContext());
                //String token = LoginUtil.getToken(getContext());

                //ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
                //Call<User> call = service.getUser(userId);
                //call.enqueue(new Callback<User>() {
                //   @Override
                //   public void onResponse(Call<User> call, Response<User> response) {
                //      Log.d(TAG, response.body().toString());
                //   }
                //   @Override
                //   public void onFailure(Call<User> call, Throwable t) {
                //                //   }
                //                //});


            }
        });
    }
}
