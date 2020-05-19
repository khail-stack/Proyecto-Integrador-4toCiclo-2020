package donald.apiwithspringboot.controller;
//UserInfoController para crear API crear un nuevo usuario e insertarlo en la base de datos con contraseña está codificada con BCryptPasswordEncoder

import donald.apiwithspringboot.exceptions.ValidationException;
import donald.apiwithspringboot.model.UserInfo;
import donald.apiwithspringboot.repository.UserInfoRepository;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.security.NoSuchAlgorithmException;
import java.util.Map;

@CrossOrigin(origins = "*")
@Tag(name = "UserInfo", description = "API for userinfo")
@RestController
public class UserInfoController {


    final
    private UserInfoRepository userInfoRepository;

//    private HashData hashData = new HashData();

    public UserInfoController(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }


    @Operation(summary = "Create a new user", description = "Create a new user with username , fullname and password", tags = { "userinfo" })
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "successful operation",
                    content = @Content(schema = @Schema(implementation = UserInfo.class))) })
    @PostMapping("/user")
    public Boolean create(@RequestBody Map<String, String> body) throws NoSuchAlgorithmException {
    	
        String username = body.get("username");
        if (userInfoRepository.existsByUsername(username)){

            throw new ValidationException("El usuario ya existe");

        }

        String password = body.get("password");
        String encodedPassword = new BCryptPasswordEncoder().encode(password);
//        String hashedPassword = hashData.get_SHA_512_SecurePassword(password);
        String nombre = body.get("nombre");
        String apellido = body.get("apellido");
        String edad = body.get("edad");
        String dni = body.get("dni");
        String sexo= body.get("sexo");
        String telefono = body.get("telefono");
        String tipo=body.get("tipo");
        
        userInfoRepository.save(new UserInfo(username, encodedPassword, nombre,apellido,edad,dni,sexo,telefono,tipo));
        return true;
    }
    
}


