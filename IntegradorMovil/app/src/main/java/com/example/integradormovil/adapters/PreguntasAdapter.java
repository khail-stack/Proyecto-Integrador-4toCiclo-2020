package com.example.integradormovil.adapters;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;


import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.integradormovil.R;
import com.example.integradormovil.interfaces.ICheckAnswer;
import com.example.integradormovil.models.ContenidoPregunta;

import java.util.List;

public class  PreguntasAdapter extends RecyclerView.Adapter<PreguntasAdapter.ViewHolder> {

    private List<ContenidoPregunta> content;
    private ICheckAnswer icheckAnswer = null;

    public PreguntasAdapter(List<ContenidoPregunta> content, ICheckAnswer icheckAnswer){
        this.content = content;
        this.icheckAnswer = icheckAnswer;
        //System.out.println("Prueba asa  " +icheckAnswer);
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_preguntas,parent,false);
        ViewHolder viewHolder = new ViewHolder(itemView);
        return viewHolder;
    }


    @Override
    public int getItemCount() {
        return content.size();
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        holder.txtPreguntas.setText(content.get(position).getPregunta());
        holder.idPregunta.setText(Integer.toString(content.get(position).getIdpregunta()));
        holder.setPreguntaId(content.get(position).getIdpregunta());
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        private TextView txtPreguntas;
        private EditText idPregunta;
        private RadioGroup radioGroup;
        private int preguntaId = 0;

        public ViewHolder(final View item ){
            super(item);

            txtPreguntas = (TextView) item.findViewById(R.id.txtPreguntas);
            idPregunta = (EditText) item.findViewById(R.id.idPregunta);

            radioGroup = (RadioGroup) item.findViewById(R.id.radioGroup);
            radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
                @Override
                public void onCheckedChanged(RadioGroup radioGroup, int checkedId) {
                    // find which radio button is selected
                    if(checkedId == R.id.rdbSi) {
                        Toast.makeText(item.getContext(), "Elegiste Sí",
                                Toast.LENGTH_SHORT).show();
                        icheckAnswer.onCheckAnswer(preguntaId, 1);
                    } else if(checkedId == R.id.rdbNo) {
                        Toast.makeText(item.getContext(), "Elegiste No",
                                Toast.LENGTH_SHORT).show();
                        icheckAnswer.onCheckAnswer(preguntaId, 2);
                    } else {
                        Log.d("Mal", "checked id: " + checkedId);
                    }
                }
            });
        }

        public void setPreguntaId (int preguntaId ){
            this.preguntaId = preguntaId;
        }
    }



}