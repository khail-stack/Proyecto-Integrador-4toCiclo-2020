package com.example.integradormovil.adapters;


import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.integradormovil.R;
import com.example.integradormovil.models.RespuestaCuestionario;


import java.util.ArrayList;
import java.util.List;

public class RespuestasAdapter extends RecyclerView.Adapter<RespuestasAdapter.ViewHolder>  {

    private List<RespuestaCuestionario> contentRespuesta;

    public RespuestasAdapter(){
        this.contentRespuesta = new ArrayList<>();
    }

    public void setContentRespuesta(List<RespuestaCuestionario> contentRespuesta){
        this.contentRespuesta = contentRespuesta;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_respuestas,parent,false);
        ViewHolder viewHolder = new ViewHolder(itemView);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        holder.txtPregunta.setText(contentRespuesta.get(position).getPregunta().getPregunta());
        holder.txtOpcion.setText(contentRespuesta.get(position).getOpcion().getOpcion());
    }

    @Override
    public int getItemCount() {
        return contentRespuesta.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        private TextView txtPregunta;
        private TextView txtOpcion;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            txtPregunta = (TextView) itemView.findViewById(R.id.txtPregunta);
            txtOpcion = (TextView) itemView.findViewById(R.id.txtOpcion);
        }
    }



}

