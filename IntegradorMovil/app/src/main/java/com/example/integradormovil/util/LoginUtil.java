package com.example.integradormovil.util;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

public class LoginUtil {

    private final static String TAG = LoginUtil.class.getSimpleName();

    public static boolean saveLogin(Context context, int userId, String token) {
        try {
            SharedPreferences sharedPref = context.getSharedPreferences(
                    Constants.LOGIN,
                    Context.MODE_PRIVATE);

            SharedPreferences.Editor editor = sharedPref.edit();
            editor.putInt(Constants.USER_ID, userId);
            editor.putString(Constants.TOKEN, token);
            editor.commit();

            return true;
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
            return false;
        }
    }

    public static int getUserId(Context context) {
        try {
            SharedPreferences sharedPref = context.getSharedPreferences(
                    Constants.LOGIN,
                    Context.MODE_PRIVATE);

            return sharedPref.getInt(Constants.USER_ID, 0);
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
            return 0;
        }
    }

    public static String getToken(Context context) {
        try {
            SharedPreferences sharedPref = context.getSharedPreferences(
                    Constants.LOGIN,
                    Context.MODE_PRIVATE);

            return sharedPref.getString(Constants.TOKEN, null);
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
            return null;
        }
    }

}
