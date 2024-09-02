package com.srishti.controller;

import com.srishti.models.Message;
import com.srishti.models.User;
import com.srishti.services.MessageService;
import com.srishti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/messages/chat/{chatid}")
    public Message createMessage(@RequestBody Message req, @RequestHeader ("Authorization") String jwt, @PathVariable Integer chatid) throws Exception {

        User user = userService.findUserByJwt(jwt);

        Message message = messageService.createMessage(user, chatid, req);

        return message;

    }

    @GetMapping("/api/messages/chat/{chatid}")
    public List<Message> findChatMessages(@RequestHeader ("Authorization") String jwt, @PathVariable Integer chatid) throws Exception {

        User user = userService.findUserByJwt(jwt);

        List<Message> messages = messageService.findChatMessages(chatid);

        return messages;

    }

}
