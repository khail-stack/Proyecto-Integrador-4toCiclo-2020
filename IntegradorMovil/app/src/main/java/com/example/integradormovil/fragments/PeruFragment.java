package com.example.integradormovil.fragments;

import android.graphics.Color;
import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.example.integradormovil.R;

import org.eazegraph.lib.charts.BarChart;
import org.eazegraph.lib.charts.PieChart;
import org.eazegraph.lib.models.BarModel;
import org.eazegraph.lib.models.PieModel;
import org.json.JSONException;
import org.json.JSONObject;


public class PeruFragment extends Fragment {

    // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
    private static final String ARG_PARAM1 = "param1";
    private static final String ARG_PARAM2 = "param2";

    private TextView infectadosPeru, muertosPeru, recuperadosPeru, activosPeru, criticosPeru;
    private BarChart barrasPeru;
    private PieChart piechartPeru;

    // TODO: Rename and change types of parameters
    private String mParam1;
    private String mParam2;

    public PeruFragment() {
        // Required empty public constructor
    }

    // TODO: Rename and change types and number of parameters
    public static PeruFragment newInstance(String param1, String param2) {
        PeruFragment fragment = new PeruFragment();
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
        View view = inflater.inflate(R.layout.fragment_peru, container, false);
        infectadosPeru = (TextView) view.findViewById(R.id.infectadosPeru);
        muertosPeru = (TextView) view.findViewById(R.id.muertosPeru);
        recuperadosPeru = (TextView) view.findViewById(R.id.recuperadosPeru);
        activosPeru = (TextView) view.findViewById(R.id.activosPeru);
        criticosPeru = (TextView) view.findViewById(R.id.criticosPeru);
        barrasPeru = (BarChart) view.findViewById(R.id.barrasPeru);
        piechartPeru = (PieChart) view.findViewById(R.id.piechartPeru);



        datosPeru();

        return view;
    }


    private void datosPeru() {
        RequestQueue queue = Volley.newRequestQueue(getActivity().getApplicationContext());
        String url="https://corona.lmao.ninja/v3/covid-19/countries/peru";
        StringRequest stringRequest = new StringRequest(Request.Method.GET, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {
                try {
                    JSONObject jsonObject = new JSONObject(response);
                    infectadosPeru.setText(jsonObject.getString("cases"));
                    muertosPeru.setText(jsonObject.getString("deaths"));
                    recuperadosPeru.setText(jsonObject.getString("recovered"));
                    activosPeru.setText(jsonObject.getString("active"));
                    criticosPeru.setText(jsonObject.getString("critical"));

                    barrasPeru.addBar(new BarModel("Críticos",Integer.parseInt(criticosPeru.getText().toString()), Color.parseColor("#FF5722")));
                    barrasPeru.addBar(new BarModel("Muertos",Integer.parseInt(muertosPeru.getText().toString()), Color.parseColor("#EF5350")));
                    barrasPeru.addBar(new BarModel("Activos",Integer.parseInt(activosPeru.getText().toString()), Color.parseColor("#078EE0")));
                    barrasPeru.addBar(new BarModel("Recuperados",Integer.parseInt(recuperadosPeru.getText().toString()), Color.parseColor("#66BB6A")));
                    barrasPeru.addBar(new BarModel("Infectados",Integer.parseInt(infectadosPeru.getText().toString()), Color.parseColor("#FFA726")));
                    barrasPeru.startAnimation();

                    piechartPeru.addPieSlice(new PieModel("Muertos",Integer.parseInt(muertosPeru.getText().toString()), Color.parseColor("#EF5350")));
                    piechartPeru.addPieSlice(new PieModel("Activos",Integer.parseInt(activosPeru.getText().toString()), Color.parseColor("#078EE0")));
                    piechartPeru.addPieSlice(new PieModel("Críticos",Integer.parseInt(criticosPeru.getText().toString()), Color.parseColor("#673AB7")));
                    piechartPeru.startAnimation();

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
