package com.srishti.controller;

import com.srishti.models.Chat;

import com.srishti.models.User;
import com.srishti.request.CreateChatRequest;
import com.srishti.services.ChatService;

import com.srishti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ChatController {

    @Autowired
    private ChatService chatService;

    @Autowired
    private UserService userService;

    @PostMapping("/api/chats")
    public Chat createChat(@RequestHeader("Authorization") String jwt,
                           @RequestBody CreateChatRequest request) throws Exception {

        User reqUser = userService.findUserByJwt(jwt);
        User user2 = userService.findUserById(request.getUserid());
        Chat chat = chatService.createChat(reqUser,user2);

        return chat;
    }

    @GetMapping("/api/chats")
    public List<Chat> findUsersChat(@RequestHeader("Authorization") String jwt) {
        System.out.println("Received request with JWT: " + jwt);
        User user = userService.findUserByJwt(jwt);
        List<Chat> chats = chatService.findUsersChat(user.getUserid());
        return chats;
    }


}
