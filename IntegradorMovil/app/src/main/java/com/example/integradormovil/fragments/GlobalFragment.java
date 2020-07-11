package com.example.integradormovil.fragments;

import android.app.DownloadManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.integradormovil.R;
import com.squareup.picasso.Picasso;
import org.eazegraph.lib.charts.PieChart;
import org.eazegraph.lib.models.PieModel;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class GlobalFragment extends Fragment {

    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    private TextView infectadosGlobales, muertosGlobales, recuperadosGlobales;
    private TextView paisBrazil, infectadosBrazil, muertosBrazil, recuperadosBrazil;
    private TextView paisChile, infectadosChile, muertosChile, recuperadosChile;
    private TextView paisArgentina, infectadosArgentina, muertosArgentina, recuperadosArgentina;
    private TextView paisColombia, infectadosColombia, muertosColombia, recuperadosColombia;
    private TextView paisVenezuela, infectadosVenezuela, muertosVenezuela, recuperadosVenezuela;
    private ImageView imagenBrazil, imagenChile, imagenArgentina, imagenColombia, imagenVenezuela;
    private PieChart piechart;



    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public GlobalFragment() {
        // Required empty public constructor
    }

    // TODO: Rename and change types and number of parameters
    public static GlobalFragment newInstance(String param1, String param2) {
        GlobalFragment fragment = new GlobalFragment();
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
        View view = inflater.inflate(R.layout.fragment_global, container, false);

        infectadosGlobales = (TextView) view.findViewById(R.id.infectadosGlobales);
        muertosGlobales = (TextView) view.findViewById(R.id.muertosGlobales);
        recuperadosGlobales = (TextView) view.findViewById(R.id.recuperadosGlobales);
        paisBrazil = (TextView) view.findViewById(R.id.paisBrazil);
        infectadosBrazil = (TextView) view.findViewById(R.id.infectadosBrazil);
        muertosBrazil = (TextView) view.findViewById(R.id.muertosBrazil);
        recuperadosBrazil = (TextView) view.findViewById(R.id.recuperadosBrazil);
        paisChile = (TextView) view.findViewById(R.id.paisChile);
        infectadosChile = (TextView) view.findViewById(R.id.infectadosChile);
        muertosChile = (TextView) view.findViewById(R.id.muertosChile);
        recuperadosChile = (TextView) view.findViewById(R.id.recuperadosChile);
        paisArgentina = (TextView) view.findViewById(R.id.paisArgentina);
        infectadosArgentina = (TextView) view.findViewById(R.id.infectadosArgentina);
        muertosArgentina = (TextView) view.findViewById(R.id.muertosArgentina);
        recuperadosArgentina = (TextView) view.findViewById(R.id.recuperadosArgentina);
        paisColombia = (TextView) view.findViewById(R.id.paisColombia);
        infectadosColombia = (TextView) view.findViewById(R.id.infectadosColombia);
        muertosColombia = (TextView) view.findViewById(R.id.muertosColombia);
        recuperadosColombia = (TextView) view.findViewById(R.id.recuperadosColombia);
        paisVenezuela = (TextView) view.findViewById(R.id.paisVenezuela);
        infectadosVenezuela = (TextView) view.findViewById(R.id.infectadosVenezuela);
        muertosVenezuela = (TextView) view.findViewById(R.id.muertosVenezuela);
        recuperadosVenezuela = (TextView) view.findViewById(R.id.recuperadosVenezuela);
        imagenBrazil = (ImageView) view.findViewById(R.id.imagenBrazil);
        imagenChile = (ImageView) view.findViewById(R.id.imagenChile);
        imagenArgentina = (ImageView) view.findViewById(R.id.imagenArgentina);
        imagenColombia = (ImageView) view.findViewById(R.id.imagenColombia);
        imagenVenezuela = (ImageView) view.findViewById(R.id.imagenVenezuela);
        piechart = (PieChart) view.findViewById(R.id.piechart);

        datosGlobales();

        datosBrazil();
        datosChile();
        datosArgentina();
        datosColombia();
        datosVenezuela();



        return view;
    }

    private void datosGlobales() {
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url="https://corona.lmao.ninja/v3/covid-19/all";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    infectadosGlobales.setText(jsonObject.getString("cases"));
                    muertosGlobales.setText(jsonObject.getString("deaths"));
                    recuperadosGlobales.setText(jsonObject.getString("recovered"));

                    piechart.addPieSlice(new PieModel("Infectados",Integer.parseInt(infectadosGlobales.getText().toString()), Color.parseColor("#FFA726")));
                    piechart.addPieSlice(new PieModel("Muertos",Integer.parseInt(muertosGlobales.getText().toString()), Color.parseColor("#EF5350")));
                    piechart.addPieSlice(new PieModel("Recuperados",Integer.parseInt(recuperadosGlobales.getText().toString()), Color.parseColor("#66BB6A")));
                    piechart.startAnimation();

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(getActivity().getApplicationContext(), "Datos no encontrados", Toast.LENGTH_SHORT).show();
            }
        });

        queue.add(stringRequest);
    }

    private  void datosBrazil() {
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url="https://corona.lmao.ninja/v3/covid-19/countries/brazil";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    paisBrazil.setText(jsonObject.getString("country"));
                    infectadosBrazil.setText(jsonObject.getString("cases"));
                    muertosBrazil.setText(jsonObject.getString("deaths"));
                    recuperadosBrazil.setText(jsonObject.getString("recovered"));

                    JSONObject object = jsonObject.getJSONObject("countryInfo");
                    String flagUrl = object.getString("flag");
                    Picasso.with(getContext()).load(flagUrl).into(imagenBrazil);

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(getActivity().getApplicationContext(), "Datos no encontrados", Toast.LENGTH_SHORT).show();
            }
        });

        queue.add(stringRequest);

    }

    private void datosChile() {
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url="https://corona.lmao.ninja/v3/covid-19/countries/chile";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    paisChile.setText(jsonObject.getString("country"));
                    infectadosChile.setText(jsonObject.getString("cases"));
                    muertosChile.setText(jsonObject.getString("deaths"));
                    recuperadosChile.setText(jsonObject.getString("recovered"));

                    JSONObject object = jsonObject.getJSONObject("countryInfo");
                    String flagUrl = object.getString("flag");
                    Picasso.with(getContext()).load(flagUrl).into(imagenChile);



                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(getActivity().getApplicationContext(), "Datos no encontrados", Toast.LENGTH_SHORT).show();
            }
        });

        queue.add(stringRequest);

    }

    private void datosArgentina() {
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url="https://corona.lmao.ninja/v3/covid-19/countries/argentina";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    paisArgentina.setText(jsonObject.getString("country"));
                    infectadosArgentina.setText(jsonObject.getString("cases"));
                    muertosArgentina.setText(jsonObject.getString("deaths"));
                    recuperadosArgentina.setText(jsonObject.getString("recovered"));

                    JSONObject object = jsonObject.getJSONObject("countryInfo");
                    String flagUrl = object.getString("flag");
                    Picasso.with(getContext()).load(flagUrl).into(imagenArgentina);

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(getActivity().getApplicationContext(), "Datos no encontrados", Toast.LENGTH_SHORT).show();
            }
        });

        queue.add(stringRequest);

    }

    private void datosColombia(){
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url="https://corona.lmao.ninja/v3/covid-19/countries/colombia";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    paisColombia.setText(jsonObject.getString("country"));
                    infectadosColombia.setText(jsonObject.getString("cases"));
                    muertosColombia.setText(jsonObject.getString("deaths"));
                    recuperadosColombia.setText(jsonObject.getString("recovered"));

                    JSONObject object = jsonObject.getJSONObject("countryInfo");
                    String flagUrl = object.getString("flag");
                    Picasso.with(getContext()).load(flagUrl).into(imagenColombia);



                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(getActivity().getApplicationContext(), "Datos no encontrados", Toast.LENGTH_SHORT).show();
            }
        });

        queue.add(stringRequest);

    }

    private void datosVenezuela(){
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url="https://corona.lmao.ninja/v3/covid-19/countries/venezuela";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    paisVenezuela.setText(jsonObject.getString("country"));
                    infectadosVenezuela.setText(jsonObject.getString("cases"));
                    muertosVenezuela.setText(jsonObject.getString("deaths"));
                    recuperadosVenezuela.setText(jsonObject.getString("recovered"));

                    JSONObject object = jsonObject.getJSONObject("countryInfo");
                    String flagUrl = object.getString("flag");
                    Picasso.with(getContext()).load(flagUrl).into(imagenVenezuela);

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Toast.makeText(getActivity().getApplicationContext(), "Datos no encontrados", Toast.LENGTH_SHORT).show();
            }
        });

        queue.add(stringRequest);

    }




}
