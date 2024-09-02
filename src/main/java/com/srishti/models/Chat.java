package com.srishti.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity


public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer chatid;

    private String chatName;

    private String chatImage;

    @ManyToMany
    private List<User> users = new ArrayList<>();

    @OneToMany(mappedBy = "chat")
    private List<Message> message = new ArrayList<>();

    private LocalDateTime timestamp;

    public Chat(){

    }

    public Chat(Integer chatid, String chatName, String chatImage, List<User> users, List<Message> message, LocalDateTime timestamp) {
        this.chatid = chatid;
        this.chatName = chatName;
        this.chatImage = chatImage;
        this.users = users;
        this.message = message;
        this.timestamp = timestamp;
    }

    public Integer getChatid() {
        return chatid;
    }

    public void setChatid(Integer chatid) {
        this.chatid = chatid;
    }

    public String getChatName() {
        return chatName;
    }

    public void setChatName(String chatName) {
        this.chatName = chatName;
    }

    public String getChatImage() {
        return chatImage;
    }

    public void setChatImage(String chatImage) {
        this.chatImage = chatImage;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public List<Message> getMessage() {
        return message;
    }

    public void setMessage(List<Message> message) {
        this.message = message;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
