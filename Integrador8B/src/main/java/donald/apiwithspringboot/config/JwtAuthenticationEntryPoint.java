package donald.apiwithspringboot.config;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.Serializable;
//JwtAuthenticationEntryPoint para lanzar mensajes no autorizados si la credencial del usuario no es correcta
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint, Serializable {

    private static final long serialVersionUID = -7858869558953243875L;//Dice a nuestro proyecto en que version se encuentra en estos momentos

    
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,

                         AuthenticationException authException) throws IOException {

        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
       //HTTP 401 para lanzar mensajes no autorizados si la credencial del usuario no es correcta
    }

}
