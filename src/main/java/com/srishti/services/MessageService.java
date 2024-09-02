package com.srishti.services;

import com.srishti.models.Chat;
import com.srishti.models.Message;
import com.srishti.models.User;

import java.util.List;

public interface MessageService {

    public Message createMessage(User user, Integer chatid, Message req) throws Exception;

    public List<Message> findChatMessages(Integer chatid) throws Exception;
}
