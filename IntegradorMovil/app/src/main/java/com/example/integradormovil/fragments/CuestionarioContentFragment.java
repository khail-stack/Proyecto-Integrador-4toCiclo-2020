package com.example.integradormovil.fragments;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.integradormovil.R;
import com.example.integradormovil.adapters.PaginaPreguntasAdapter;
import com.example.integradormovil.models.Preguntas;
import com.example.integradormovil.models.Respuesta;
import com.example.integradormovil.models.RespuestaResponse;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.LoginUtil;
import com.stepstone.stepper.StepperLayout;
import com.stepstone.stepper.VerificationError;

import java.util.Collections;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CuestionarioContentFragment extends Fragment {

    private static final String ID_CUESTIONARIO = "idCuestionario";

    private LinearLayout lnlStepper;
    private StepperLayout stepperLayout;
    /*private EditText idPregunta;
    private RadioGroup radioGroup;
    private RadioButton radioSi;
    private RadioButton radioNo;*/
    private int idCuestionario;

    public CuestionarioContentFragment() {
        // Required empty public constructor
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


        stepperLayout = view.findViewById(R.id.stepperLayout);
/*
        stepperLayout.setAdapter(
                new PaginaPreguntasAdapter(
                        getActivity().getSupportFragmentManager(), getActivity(), obtenerTotalPages() ));
*/

        // Instanciamos las vistas
        lnlStepper = view.findViewById(R.id.lnlStepper);
        stepperLayout = view.findViewById(R.id.stepperLayout);

        // Instanciamos las vistas del cuestionario xd
        //idPregunta = view.findViewById(R.id.idPregunta);
       /* radioGroupCuestionario = view.findViewById(R.id.radioGroupCuestionario);
        radioGroupCuestionario.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup radioGroup, int i) {
                // find which radio button is selected
                if(i == R.id.radioSi) {
                    Toast.makeText(getActivity(), "Elegiste Sí",
                            Toast.LENGTH_SHORT).show();
                } else if(i == R.id.radioNo) {
                    Toast.makeText(getActivity(), "Elegiste No",
                            Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(getActivity(), "Estas Cagado :v",
                            Toast.LENGTH_SHORT).show();
                }
            }
        });

        radioSi = view.findViewById(R.id.radioSi);
        radioNo = view.findViewById(R.id.radioNo);*/


        // Listener para controlar cuando se completen los steps
        stepperLayout.setListener(new StepperLayout.StepperListener() {
            @Override
            public void onCompleted(View completeButton) {

                /*int idOpcion = 0;

                if (radioGroupCuestionario.getCheckedRadioButtonId() == radioSi.getId()) {
                    idOpcion = 1;
                } else if (radioGroupCuestionario.getCheckedRadioButtonId() == radioNo.getId()) {
                    idOpcion = 2;
                }
                Log.e("Oh no", "A ver : " + idOpcion);
                System.out.println(idOpcion);*/
                int userId = LoginUtil.getUserId(getActivity());

                Respuesta rpta = new Respuesta();

                rpta.setIdcuestionario(idCuestionario);
                //rpta.setIdpregunta(Integer.parseInt(idPregunta.getText().toString()));
                //rpta.setIdopcion(idOpcion);
                rpta.setIdusuario(userId);


                ApiService service = ApiServiceGenerator.createService(ApiService.class);

                Call<RespuestaResponse> call = service.sendRespuestas(Collections.singletonList(rpta));
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
                            new PaginaPreguntasAdapter(
                                    getActivity().getSupportFragmentManager(),
                                    getActivity(),
                                    response.body().getTotalPages()));

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

}

