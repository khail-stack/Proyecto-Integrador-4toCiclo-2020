package donald.apiwithspringboot.repository;
//UserInfoRepository para trabajar con la base de datos MySQL a través de JPA para la tabla user_info
import donald.apiwithspringboot.model.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo,Integer> {

    Boolean existsByUsername(String username);
    UserInfo findByUsername(String username);


}
