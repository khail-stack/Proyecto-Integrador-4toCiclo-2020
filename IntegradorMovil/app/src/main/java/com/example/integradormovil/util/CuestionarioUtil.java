package com.example.integradormovil.util;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import com.example.integradormovil.models.Cuestionario;

public class CuestionarioUtil {

    private final static String TAG = CuestionarioUtil.class.getSimpleName();

    public static boolean saveCuestionario(Context context, int cuestionarioId) {
        try {
            SharedPreferences sharedPref = context.getSharedPreferences(
                    Constants.CUESTIONARIO,
                    Context.MODE_PRIVATE);

            SharedPreferences.Editor editor = sharedPref.edit();
            editor.putInt(Constants.CUESTIONARIO_ID, cuestionarioId);
            editor.commit();
            return true;
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
            return false;
        }
    }

    public static int getCuestionarioId(Context context) {
        try {
            SharedPreferences sharedPref = context.getSharedPreferences(
                    Constants.CUESTIONARIO,
                    Context.MODE_PRIVATE);

            return sharedPref.getInt(Constants.CUESTIONARIO_ID, 0);
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
            return 0;
        }
    }

}
