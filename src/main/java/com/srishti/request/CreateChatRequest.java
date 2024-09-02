package com.srishti.request;

public class CreateChatRequest {

    private Integer userid;

    CreateChatRequest(){

    }

    CreateChatRequest(Integer userid) {

    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }
}