package com.example.integradormovil.adapters;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;


import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.integradormovil.R;
import com.example.integradormovil.models.ContenidoPregunta;


import java.util.ArrayList;

public class PreguntasAdapter extends RecyclerView.Adapter<PreguntasAdapter.ViewHolder> {
    private ArrayList<ContenidoPregunta> content;

    public PreguntasAdapter(ArrayList<ContenidoPregunta> content){
        this.content = content;
    }

    /*public void setPreguntas(List<Preguntas> preguntas){
        this.preguntas = preguntas;
    }*/

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_preguntas,parent,false);
        ViewHolder viewHolder = new ViewHolder(itemView);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        holder.txtPreguntas.setText(content.get(position).getPregunta());
    }

    @Override
    public int getItemCount() {
        return content.size();
    }


    public class ViewHolder extends RecyclerView.ViewHolder {

        private TextView txtPreguntas;

        public ViewHolder(View item ){
            super(item);

            txtPreguntas = (TextView) item.findViewById(R.id.txtPreguntas);
        }

        /*public void bindMaterial(Preguntas preguntas) {
            String titulopreguntas = new String();

            for (int i=0 ; i<preguntas.getContent().size();i++){
                titulopreguntas = titulopreguntas + preguntas.getContent().get(i);
                if(!(i+1 == preguntas.getContent().size())){
                    titulopreguntas = titulopreguntas + " - ";
                }
            }


        }*/

    }






}
