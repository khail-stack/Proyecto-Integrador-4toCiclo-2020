package com.example.integradormovil.fragments;

import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;

import com.example.integradormovil.R;
import com.example.integradormovil.adapters.PaginaPreguntasAdapter;
import com.example.integradormovil.interfaces.ICheckAnswer;
import com.example.integradormovil.models.Preguntas;
import com.example.integradormovil.models.Respuesta;
import com.example.integradormovil.models.RespuestaResponse;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.LoginUtil;
import com.stepstone.stepper.StepperLayout;
import com.stepstone.stepper.VerificationError;

import java.net.ProxySelector;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.Predicate;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CuestionarioContentFragment extends Fragment implements ICheckAnswer {

    private static final String ID_CUESTIONARIO = "idCuestionario";

    private LinearLayout lnlStepper;
    private StepperLayout stepperLayout;
    private int idCuestionario;
    private List<Respuesta> respuestas;
    private ProxySelector CollectionUtils;


    public CuestionarioContentFragment() {
        // Required empty public constructor

        this.respuestas = new ArrayList<>();

    }

    public static CuestionarioContentFragment newInstance(int idCuestionario) {
        CuestionarioContentFragment fragment = new CuestionarioContentFragment();
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
        View view = inflater.inflate(R.layout.fragment_cuestionario_content, container, false);
        return view;
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {


        // Instanciamos las vistas del cuestionario xd


        // Instanciamos las vistas
        //stepperLayout = view.findViewById(R.id.stepperLayout);
        lnlStepper = view.findViewById(R.id.lnlStepper);
        stepperLayout = view.findViewById(R.id.stepperLayout);





        // Listener para controlar cuando se completen los steps
        stepperLayout.setListener(new StepperLayout.StepperListener() {
            @Override
            public void onCompleted(View completeButton) {


                int userId = LoginUtil.getUserId(getActivity());




                ApiService service = ApiServiceGenerator.createService(ApiService.class);

                Call<RespuestaResponse> call = service.sendRespuestas(respuestas);
                call.enqueue(new Callback<RespuestaResponse>() {
                    @Override
                    public void onResponse(Call<RespuestaResponse> call, Response<RespuestaResponse> response) {
                        try {
                            if (response.isSuccessful()) {
                                RespuestaResponse responseMessage = response.body();
                            } else {
                                Log.e("Oh no", "onError: " + response.errorBody().toString());
                            }
                        } catch (Exception e) {
                            Log.e("Oh no", "onError: " + e.getMessage());
                            Toast.makeText(getActivity(), "Ocurrió un error", Toast.LENGTH_LONG).show();
                        }
                    }
                    @Override
                    public void onFailure(Call<RespuestaResponse> call, Throwable t) {
                        Log.e("Error", "onError: " + t.getMessage());
                        Toast.makeText(getActivity(), "Ocurrió un error", Toast.LENGTH_LONG).show();
                    }
                });
            }
            @Override
            public void onError(VerificationError verificationError) {

            }
            @Override
            public void onStepSelected(int newStepPosition) {

            }
            @Override
            public void onReturn() {

            }
        });

        // Se invoca al servicio para obtener la cantidad de páginas
        final int PAGINA_INICIAL = 0;

        ApiService service = ApiServiceGenerator
                .createService(
                        ApiService.class,
                        LoginUtil.getToken(getContext()));

        Call<Preguntas> call = service.getPreguntas(PAGINA_INICIAL);
        call.enqueue(new Callback<Preguntas>() {
            @Override
            public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                if (response.isSuccessful()) {
                    stepperLayout.setAdapter(
                            cualquiera(response));

                    // Ocultamos el progress y mostramos el stepper
                    lnlStepper.setVisibility(View.GONE);
                    stepperLayout.setVisibility(View.VISIBLE);
                } else {
                    Toast.makeText(getActivity(), "Ocurrió un error", Toast.LENGTH_SHORT).show();
                }
            }
            @Override
            public void onFailure(Call<Preguntas> call, Throwable t) {
                Log.d("Error", t.getMessage());
            }
        });
        super.onViewCreated(view, savedInstanceState);
    }

    private PaginaPreguntasAdapter cualquiera (Response<Preguntas> response) {
        return new PaginaPreguntasAdapter(
                getActivity().getSupportFragmentManager(),
                getActivity(),
                response.body().getTotalPages(), this);
    }

    @Override
    public void onCheckAnswer(final int idpregunta, int idopcion) {

        boolean estaRegistrado = false;

        int userId = LoginUtil.getUserId(getContext());

        for (Respuesta respuesta : respuestas) {
            if (respuesta.getIdpregunta().equals(idpregunta)){
                estaRegistrado = true;
                /*respuestas.remove(respuesta);
                respuestas.add(new Respuesta(userId,idCuestionario, idpregunta, idopcion));*/
                respuesta.setIdopcion(idopcion);
            }
        }
        if (!estaRegistrado){
            respuestas.add(new Respuesta(idpregunta, idCuestionario, userId, idopcion ));
        }
    }
}

