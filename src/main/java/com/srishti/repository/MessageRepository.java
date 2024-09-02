package com.srishti.repository;

import com.srishti.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {

    List<Message> findByChat_Chatid(Integer chatid);

}