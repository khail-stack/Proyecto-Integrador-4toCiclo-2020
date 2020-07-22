package com.example.integradormovil.fragments;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
//import androidx.fragment.app.FragmentTransaction;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
//import android.widget.Button;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.example.integradormovil.R;
import com.example.integradormovil.adapters.RespuestasAdapter;
import com.example.integradormovil.models.RespuestaCuestionario;
import com.example.integradormovil.models.response.RespuestaCuestionarioResponse;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.LoginUtil;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CuestionarioRespuestaFragment extends Fragment {

    private static final String ID_CUESTIONARIO = "idCuestionario";

    private int idCuestionario;
    private RecyclerView rcvRespuestas;
    private LinearLayout lnlContentRespueta;
    private LinearLayout lnlProgress;
    private Button mostrarResultados;


    public CuestionarioRespuestaFragment() {
        // Required empty public constructor
    }


    public static CuestionarioRespuestaFragment newInstance(int idCuestionario) {
        CuestionarioRespuestaFragment fragment = new CuestionarioRespuestaFragment();
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
        return inflater.inflate(R.layout.fragment_cuestionario_respuesta, container, false);
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {

        lnlContentRespueta = view.findViewById(R.id.lnlContentRespueta);
        lnlProgress = view.findViewById(R.id.lnlProgress);
        rcvRespuestas = (RecyclerView) view.findViewById(R.id.rcvRespuestas);
        rcvRespuestas.setLayoutManager(
                new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false));

        rcvRespuestas.setAdapter(new RespuestasAdapter());
        obtenerRespuestas();




       mostrarResultados = view.findViewById(R.id.mostrarResultados);
        mostrarResultados.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                FragmentTransaction fr = getFragmentManager().beginTransaction();
                fr.replace(R.id.container, ResultadosFragment.newInstance(idCuestionario));
                fr.commit();
            }
        });
        super.onViewCreated(view, savedInstanceState);
    }


    private void obtenerRespuestas() {
        ApiService service = ApiServiceGenerator
                .createService(
                        ApiService.class,
                        LoginUtil.getToken(getActivity()));

        Call<List<RespuestaCuestionario>> call = service.getRespuestas(idCuestionario);
        call.enqueue(new Callback<List<RespuestaCuestionario>> () {
            @Override
            public void onResponse(Call<List<RespuestaCuestionario>> call, Response<List<RespuestaCuestionario>> response) {
                if (response.isSuccessful()) {
                    List<RespuestaCuestionario> respuestaCuestionario = response.body();
                    Log.d("Exito", "Contenido de preguntas" + respuestaCuestionario);

                    RespuestasAdapter respuestasAdapter = (RespuestasAdapter) rcvRespuestas.getAdapter();
                    respuestasAdapter.setContentRespuesta(respuestaCuestionario);

                    lnlProgress.setVisibility(View.GONE);
                    lnlContentRespueta.setVisibility(View.VISIBLE);
                } else {
                    Toast.makeText(getActivity(), "Ocurrió un error", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<RespuestaCuestionario>> call, Throwable t) {
                Log.d("Error", t.getMessage());
            }
        });
    }
}
