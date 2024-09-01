package com.srishti.repository;
import com.srishti.models.Chat;
import com.srishti.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat,Integer> {
    @Query("SELECT c FROM Chat c JOIN c.users u WHERE u.id = :userid")
    List<Chat> findByUserId(@Param("userid") Integer userid);

    @Query("select c from Chat c where :user Member of c.users And :reqUser Member of c.users")
    public Chat findChatByUsersId(@Param("user")User user, @Param("reqUser") User reqUser);


}
