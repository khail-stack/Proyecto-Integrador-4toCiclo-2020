package com.example.integradormovil.fragments;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.integradormovil.R;
import com.example.integradormovil.adapters.PaginaPreguntasAdapter;
import com.example.integradormovil.models.Preguntas;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.LoginUtil;
import com.stepstone.stepper.StepperLayout;
import com.stepstone.stepper.VerificationError;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CuestionarioContentFragment extends Fragment {

    private static final String ID_CUESTIONARIO = "idCuestionario";

    private LinearLayout lnlStepper;
    private StepperLayout stepperLayout;
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

        // Instanciamos las vistas
        lnlStepper = view.findViewById(R.id.lnlStepper);
        stepperLayout = view.findViewById(R.id.stepperLayout);

        // Listener para controlar cuando se completen los steps
        stepperLayout.setListener(new StepperLayout.StepperListener() {
            @Override
            public void onCompleted(View completeButton) {

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

