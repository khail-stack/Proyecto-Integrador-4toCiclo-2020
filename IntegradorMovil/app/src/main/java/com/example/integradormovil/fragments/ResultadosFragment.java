package com.example.integradormovil.fragments;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.example.integradormovil.R;
import com.example.integradormovil.models.ResultadoCuestionario;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.LoginUtil;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ResultadosFragment extends Fragment {
    // TODO: Rename parameter arguments, choose names that match
    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER

    private static final String ID_CUESTIONARIO = "idCuestionario";

    private int idCuestionario;
    private TextView txtResultado;
    private TextView txtMensaje;
    private Button btn_terminar_cuestionario;


    public ResultadosFragment() {
        // Required empty public constructor
    }


    // TODO: Rename and change types and number of parameters
    public static ResultadosFragment newInstance(int idCuestionario) {
        ResultadosFragment fragment = new ResultadosFragment();
        Bundle args = new Bundle();
        args.putInt(ID_CUESTIONARIO, idCuestionario);
        fragment.setArguments(args);
        return fragment;
    }

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if (getArguments() != null) {
            idCuestionario = getArguments().getInt(ID_CUESTIONARIO);
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_resultados, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        txtResultado = view.findViewById(R.id.txtResultado);
        txtMensaje = view.findViewById(R.id.txtMensaje);
        btn_terminar_cuestionario = view.findViewById(R.id.btn_terminar_cuestionario);
        btn_terminar_cuestionario.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                FragmentTransaction fr = getFragmentManager().beginTransaction();
                fr.replace(R.id.container, new HomeFragment());
                fr.commit();
            }
        });
        obtenerResultados();
        super.onViewCreated(view, savedInstanceState);
    }



    private void obtenerResultados() {
        ApiService service = ApiServiceGenerator
                .createService(
                        ApiService.class,
                        LoginUtil.getToken(getActivity()));

        Call<ResultadoCuestionario> call = service.getResultados(idCuestionario);
        call.enqueue(new Callback<ResultadoCuestionario>() {
            @Override
            public void onResponse(Call<ResultadoCuestionario> call, Response<ResultadoCuestionario> response) {
                if (response.isSuccessful()) {
                    ResultadoCuestionario resultadoCuestionario = response.body();
                    Log.d("Exito", "Contenido de preguntas" + resultadoCuestionario);

                    txtResultado.setText(resultadoCuestionario.getResultado().getResultado());
                    txtMensaje.setText(resultadoCuestionario.getResultado().getMensaje());

                } else {
                    Toast.makeText(getActivity(), "Ocurrió un error", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<ResultadoCuestionario> call, Throwable t) {
                Log.d("Error", t.getMessage());
            }
        });
    }
}
