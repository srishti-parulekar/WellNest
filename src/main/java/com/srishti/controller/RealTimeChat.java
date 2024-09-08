package com.srishti.controller;


import com.srishti.models.Message;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;

public class RealTimeChat {
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/chat/{groupid}")
    public Message sendToUser(@Payload Message message, @DestinationVariable String groupid){
        return null;

    }
}
