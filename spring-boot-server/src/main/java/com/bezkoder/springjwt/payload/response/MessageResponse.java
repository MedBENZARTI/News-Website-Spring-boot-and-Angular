package com.bezkoder.springjwt.payload.response;

import com.bezkoder.springjwt.models.User;

public class MessageResponse {
	private String message;
	private User user;

	public MessageResponse(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public MessageResponse(String message, User user) {
		this.message = message;
		this.user = user;
	}
}
