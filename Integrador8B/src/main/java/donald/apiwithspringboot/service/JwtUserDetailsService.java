package donald.apiwithspringboot.service;
//defina JwtUserDetailsService para el método loadUserByUsername:
import donald.apiwithspringboot.model.UserInfo;
import donald.apiwithspringboot.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;


import java.util.ArrayList;

@Component
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private UserInfoRepository userInfoRepository;


    @Override //Esta oración le permite al compilador de Java saber que deseas anular un método existente de una clase primaria
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserInfo user = userInfoRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

}
