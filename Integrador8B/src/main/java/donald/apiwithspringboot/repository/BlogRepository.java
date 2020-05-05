package donald.apiwithspringboot.repository;
//BlogRepository para trabajar con la base de datos MySQL a través de JPA para la tabla de blog:
import donald.apiwithspringboot.model.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog,Integer> {

    // custom query to search to blog post by title or content
    List<Blog> findByTitleContainingOrContentContaining(String text, String textAgain);

}
