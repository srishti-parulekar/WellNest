package com.srishti.services;

import java.util.List;

import com.srishti.exceptions.UserException;
import com.srishti.models.User;

public interface UserService {
	public User registeredUser(User user);
	
	public User findUserById(Integer userid) throws UserException;
	
	public User findUserByEmail(String email);
	
	public User followUser(Integer userid1, Integer userid2) throws UserException;
	
	public User updateUser(User user, Integer userid) throws UserException;
	
	public List<User> searchUser(String query);

	public User findUserByJwt(String jwt);
}

