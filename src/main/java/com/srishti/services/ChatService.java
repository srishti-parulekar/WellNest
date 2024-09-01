package com.srishti.services;

import com.srishti.models.Chat;
import com.srishti.models.User;

import java.util.List;

public interface ChatService {
    public Chat createChat(User reqUser, User user2);
    public Chat findChatById(Integer chatid) throws Exception;
    public List<Chat> findUsersChat(Integer userid);

}
