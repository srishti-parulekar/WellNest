package com.srishti.response;

public class ApiResponse {
	public ApiResponse() {
		// TODO Auto-generated constructor stub
	}
	
	public ApiResponse(String messageString, boolean status) {
		super();
		this.messageString = messageString;
		this.status = status;
	}

	private String messageString;
	private boolean status;
	public String getMessageString() {
		return messageString;
	}
	public void setMessageString(String messageString) {
		this.messageString = messageString;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	} 
	
}
