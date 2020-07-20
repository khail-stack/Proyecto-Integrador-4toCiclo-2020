package com.example.integradormovil.fragments;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.animation.AnimationUtils;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.Toast;
import android.widget.ViewAnimator;

import com.example.integradormovil.R;
import com.example.integradormovil.adapters.PaginaPreguntasAdapter;
import com.example.integradormovil.adapters.PreguntasAdapter;
import com.example.integradormovil.models.ContenidoPregunta;
import com.example.integradormovil.models.Cuestionario;
import com.example.integradormovil.models.CuestionarioResponse;
import com.example.integradormovil.models.Preguntas;
import com.example.integradormovil.services.ApiService;
import com.example.integradormovil.services.ApiServiceGenerator;
import com.example.integradormovil.util.LoginUtil;
import com.stepstone.stepper.StepperLayout;
import com.stepstone.stepper.VerificationError;

import java.util.ArrayList;
import java.util.Arrays;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class CuestionarioContentFragment extends Fragment {

    private static final String ID_CUESTIONARIO = "idCuestionario";

    private StepperLayout stepperLayout;


    private Button botonSiguiente;
    private Button botonCancelar;
    private Button botonAtras;
    private ArrayList<ContenidoPregunta> data;
    private int totalpages;

    private RecyclerView recyclerView;
    private RecyclerView recyclerView2;
    private RecyclerView recyclerView3;
    private RecyclerView recyclerView4;

    private PreguntasAdapter preguntasAdapter;
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
            Toast.makeText(getActivity(), "idCuestionario: " + idCuestionario, Toast.LENGTH_SHORT).show();
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

        obtenerTotalPages();

        stepperLayout = view.findViewById(R.id.stepperLayout);
        stepperLayout.setAdapter(
                new PaginaPreguntasAdapter(
                        getActivity().getSupportFragmentManager(), getActivity(), obtenerTotalPages() ));

        stepperLayout.setListener(new StepperLayout.StepperListener() {
            @Override
            public void onCompleted(View completeButton) {
                Toast.makeText(getActivity(), "onCompleted!", Toast.LENGTH_SHORT).show();
            }
            @Override
            public void onError(VerificationError verificationError) {
                Toast.makeText(getActivity(), "onError! -> " + verificationError.getErrorMessage(), Toast.LENGTH_SHORT).show();
            }
            @Override
            public void onStepSelected(int newStepPosition) {
                Toast.makeText(getActivity(), "onStepSelected! -> " + newStepPosition, Toast.LENGTH_SHORT).show();

                /*Fragment fragment = new PaginaPreguntasFragment().newInstance(newStepPosition);

                getActivity()
                        .getSupportFragmentManager()
                        .beginTransaction()
                        .replace(R.id.frlContainer, fragment)
                        .addToBackStack(null)
                        .commit();*/

            }
            @Override
            public void onReturn() {
                Toast.makeText(getActivity(), "onReturn!", Toast.LENGTH_SHORT).show();
            }
        });

        super.onViewCreated(view, savedInstanceState);
    }


    private int obtenerTotalPages() {
        String token = LoginUtil.getToken(getContext());
        int page = 0;

        ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
        Call<Preguntas> call = service.getPreguntas(page);
        call.enqueue(new Callback<Preguntas>() {
            @Override
            public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                if (response.isSuccessful()) {
                    Preguntas preguntas = response.body();
                    Log.d("Exito", "Contenido de preguntas" + preguntas);
                    totalpages = preguntas.getTotalPages();
                    Toast.makeText(getContext(), "Total de paginas: " + totalpages, Toast.LENGTH_SHORT).show();
                } else {
                }
            }
            @Override
            public void onFailure(Call<Preguntas> call, Throwable t) {
                Log.d("Error", t.getMessage());
            }
        });
        return totalpages;
    }

    //    private void cargarVistas(View view){
//        recyclerView = (RecyclerView) view.findViewById(R.id.recyclerView);
//        recyclerView.setLayoutManager(
//                new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false));
//        obtenerPreguntas();
//    }
//
//    private void cargarSeguntaVista(View view){
//        recyclerView2 = (RecyclerView) view.findViewById(R.id.recyclerView2);
//        recyclerView2.setLayoutManager(
//                new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false));
//        siguientePagina();
//        //siguientePagina2();
//    }
//
//    private void cargarTerceraVista(View view){
//        recyclerView3 = (RecyclerView) view.findViewById(R.id.recyclerView3);
//        recyclerView3.setLayoutManager(
//                new LinearLayoutManager(getActivity(), LinearLayoutManager.VERTICAL, false));
//        siguientePaginaDos();
//    }




    private void obtenerPreguntas() {

        String token = LoginUtil.getToken(getContext());
        int page = 0;

        ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
        Call<Preguntas> call = service.getPreguntas(page);
        call.enqueue(new Callback<Preguntas>() {
            @Override
            public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                if (response.isSuccessful()) {

                    /*Preguntas preguntas = response.body();
                    Log.d("Exito", "Contenido de preguntas" + preguntas);

                    data = new ArrayList<>(Arrays.asList(preguntas.getContent()));

                    totalpages = preguntas.getTotalPages();

                    preguntasAdapter = new PreguntasAdapter(data);

                    recyclerView.setAdapter(preguntasAdapter);

                    Toast.makeText(getContext(), "Se obtuvo la lista correctamente", Toast.LENGTH_SHORT).show();*/
                } else {

                }
            }

            @Override
            public void onFailure(Call<Preguntas> call, Throwable t) {
                Log.d("Error", t.getMessage());

            }

        });
    }





    private void siguientePagina(){

            botonSiguiente.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {

                    String token = LoginUtil.getToken(getContext());
                    int page = 1;

                    ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
                    Call<Preguntas> call = service.getPreguntas(page);
                    call.enqueue(new Callback<Preguntas>() {
                        @Override
                        public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                            if (response.isSuccessful()) {

                                Preguntas preguntas = response.body();
                                Log.d("Exito", "Contenido de preguntas" + preguntas);

                                data = new ArrayList<>(Arrays.asList(preguntas.getContent()));

                                totalpages = preguntas.getTotalPages();

                                preguntasAdapter = new PreguntasAdapter(data);

                                recyclerView2.setAdapter(preguntasAdapter);

                                Toast.makeText(getContext(), "Se obtuvo la lista correctamente Pagina: 2", Toast.LENGTH_SHORT).show();


                            } else {

                            }
                        }

                        @Override
                        public void onFailure(Call<Preguntas> call, Throwable t) {
                            Log.d("Error", t.getMessage());

                        }

                    });

                }
            });
        }


    private void siguientePaginaDos(){
        botonSiguiente.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String token = LoginUtil.getToken(getContext());
                int page = 2;

                ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
                Call<Preguntas> call = service.getPreguntas(page);
                call.enqueue(new Callback<Preguntas>() {
                    @Override
                    public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                        if (response.isSuccessful()) {

                            Preguntas preguntas = response.body();
                            Log.d("Exito", "Contenido de preguntas" + preguntas);

                            data = new ArrayList<>(Arrays.asList(preguntas.getContent()));

                            totalpages = preguntas.getTotalPages();

                            preguntasAdapter = new PreguntasAdapter(data);

                            recyclerView3.setAdapter(preguntasAdapter);

                            Toast.makeText(getContext(), "Se obtuvo la lista correctamente Pagina: 3", Toast.LENGTH_SHORT).show();

                        } else {

                        }
                    }

                    @Override
                    public void onFailure(Call<Preguntas> call, Throwable t) {
                        Log.d("Error", t.getMessage());

                    }

                });

            }
        });
    }





    /*private void botonPrueba(){
        botonSiguiente.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //if( viewAnimatorCuestionarioContent.getCurrentView().getId() == R.id.cuestionarioDos){
                    mostrarDatosPaginaDos();
                    mostrarDatosPaginaTres();
                    mostrarDatosPaginaCuatro();
                    viewAnimatorCuestionarioContent.showNext();
                //}
            }
        });
    }*/

    private void mostrarDatosPaginaDos(){
        String token = LoginUtil.getToken(getContext());
        int page = 1;

        ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
        Call<Preguntas> call = service.getPreguntas(page);
        call.enqueue(new Callback<Preguntas>() {
            @Override
            public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                if (response.isSuccessful()) {

                    Preguntas preguntas = response.body();
                    Log.d("Exito", "Contenido de preguntas" + preguntas);

                    data = new ArrayList<>(Arrays.asList(preguntas.getContent()));

                    totalpages = preguntas.getTotalPages();

                    preguntasAdapter = new PreguntasAdapter(data);

                    recyclerView2.setAdapter(preguntasAdapter);

                    Toast.makeText(getContext(), "Se obtuvo la lista correctamente", Toast.LENGTH_SHORT).show();
                } else {

                }
            }

            @Override
            public void onFailure(Call<Preguntas> call, Throwable t) {
                Log.d("Error", t.getMessage());

            }

        });
    }

    private void mostrarDatosPaginaTres(){
        String token = LoginUtil.getToken(getContext());
        int page = 2;

        ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
        Call<Preguntas> call = service.getPreguntas(page);
        call.enqueue(new Callback<Preguntas>() {
            @Override
            public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                if (response.isSuccessful()) {

                    Preguntas preguntas = response.body();
                    Log.d("Exito", "Contenido de preguntas" + preguntas);

                    data = new ArrayList<>(Arrays.asList(preguntas.getContent()));

                    totalpages = preguntas.getTotalPages();

                    preguntasAdapter = new PreguntasAdapter(data);

                    recyclerView3.setAdapter(preguntasAdapter);

                    Toast.makeText(getContext(), "Se obtuvo la lista correctamente", Toast.LENGTH_SHORT).show();
                } else {

                }
            }

            @Override
            public void onFailure(Call<Preguntas> call, Throwable t) {
                Log.d("Error", t.getMessage());

            }

        });
    }



    private void mostrarDatosPaginaCuatro(){
        String token = LoginUtil.getToken(getContext());
        int page = 3;

        ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
        Call<Preguntas> call = service.getPreguntas(page);
        call.enqueue(new Callback<Preguntas>() {
            @Override
            public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                if (response.isSuccessful()) {

                    Preguntas preguntas = response.body();
                    Log.d("Exito", "Contenido de preguntas" + preguntas);

                    data = new ArrayList<>(Arrays.asList(preguntas.getContent()));

                    totalpages = preguntas.getTotalPages();

                    preguntasAdapter = new PreguntasAdapter(data);

                    recyclerView4.setAdapter(preguntasAdapter);

                    Toast.makeText(getContext(), "Se obtuvo la lista correctamente", Toast.LENGTH_SHORT).show();
                } else {

                }
            }

            @Override
            public void onFailure(Call<Preguntas> call, Throwable t) {
                Log.d("Error", t.getMessage());
            }
        });
    }


       /* if ( viewAnimatorCuestionarioContent.getCurrentView().getId() == R.id.cuestionarioDos ){
            botonSiguiente.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {

                    String token = LoginUtil.getToken(getContext());
                    int page = 2;

                    ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
                    Call<Preguntas> call = service.getPreguntas(page);
                    call.enqueue(new Callback<Preguntas>() {
                        @Override
                        public void onResponse(Call<Preguntas> call, Response<Preguntas> response) {
                            if (response.isSuccessful()) {

                                Preguntas preguntas = response.body();
                                Log.d("Exito", "Contenido de preguntas" + preguntas);

                                data = new ArrayList<>(Arrays.asList(preguntas.getContent()));

                                totalpages = preguntas.getTotalPages();

                                preguntasAdapter = new PreguntasAdapter(data);

                                recyclerView3.setAdapter(preguntasAdapter);

                                Toast.makeText(getContext(), "Se obtuvo la lista correctamente pagina 3", Toast.LENGTH_SHORT).show();

                                viewAnimatorCuestionarioContent.showNext();

                            } else {

                            }
                        }

                        @Override
                        public void onFailure(Call<Preguntas> call, Throwable t) {
                            Log.d("Error", t.getMessage());

                        }

                    });

                }
            });
        }*/

    /*private void cancelar () {
        botonCancelar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String token = LoginUtil.getToken(getContext());
                ApiService service = ApiServiceGenerator.createService(ApiService.class, token);
                Call<CuestionarioResponse> call = service.deleteCuestionario(idCuestionario);
                call.enqueue(new Callback<CuestionarioResponse>() {
                    @Override
                    public void onResponse(Call<CuestionarioResponse> call, Response<CuestionarioResponse> response) {
                        if (response.isSuccessful()) {
                            Log.d("Exito", response.body().toString());
                            Toast.makeText(getContext(), "El cuestionario se elimino correctamente", Toast.LENGTH_SHORT).show();
                        } else {

                        }
                    }
                    @Override
                    public void onFailure(Call<CuestionarioResponse> call, Throwable t) {
                        Log.d("Error", t.getMessage());
                    }
                });
                FragmentTransaction fr = getFragmentManager().beginTransaction();
                fr.replace(R.id.container, new CuestionarioFragment());
                fr.commit();
            }
        });
    }*/
}

