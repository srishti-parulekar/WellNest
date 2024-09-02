package com.srishti.services;

import com.srishti.models.Chat;
import com.srishti.models.Message;
import com.srishti.models.User;
import com.srishti.repository.ChatRepository;
import com.srishti.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class MessageServiceImplementation implements MessageService{

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private ChatService chatService;

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public Message createMessage(User user, Integer chatid, Message req) throws Exception {

        Chat chat = chatService.findChatById(chatid);

        Message message = new Message();

        message.setChat(chat);
        message.setContent(req.getContent());
        message.setImage(req.getImage());
        message.setUser(user);
        message.setTimestamp(LocalDateTime.now());

        Message savedMessage = messageRepository.save(message);

        chat.getMessage().add(savedMessage);
        chatRepository.save(chat);

        return savedMessage;
    }

    @Override
    public List<Message> findChatMessages(Integer chatid) throws Exception {

        Chat chat = chatService.findChatById(chatid);

        return messageRepository.findByChat_Chatid(chatid);
    }
}
