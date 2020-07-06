package com.example.integradormovil.models.response;

import java.util.List;

public class LoginResponse {

    private int id;
    private String username;
    private String email;
    private List<String> roles;
    private String accessToken;
    private String tokenType;

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public List<String> getRoles() {
        return roles;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", roles=" + roles +
                ", accessToken='" + accessToken + '\'' +
                ", tokenType='" + tokenType + '\'' +
                '}';
    }
}
