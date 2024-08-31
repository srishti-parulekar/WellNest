package com.srishti.controller;

import java.util.List;
//import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;

import com.srishti.models.User;
import com.srishti.repository.UserRepository;
import com.srishti.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserService userService;
	
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		
		User savedUser = userService.registeredUser(user);
		
		return savedUser;

	}

	@GetMapping("/api/users")
	public List<User> getUsers() {
		
		List<User> users = userRepository.findAll();
		return users;
		
	}

	@GetMapping("/api/users/{userid}")
	public User getUsersById(@PathVariable Integer userid) throws Exception{
		User user = userService.findUserById(userid);
		return user;

	}

	@PutMapping("/api/users")
	public User updateUser(@RequestHeader("Authorization") String jwt, @RequestBody User user) throws Exception {
		User reqUser = userService.findUserByJwt(jwt);

		User updatedUser = userService.updateUser(user,reqUser.getUserid());

		return updatedUser;

	}

	@PutMapping("/api/users/follow/{userid2}")
	public User followUserHandler(@RequestHeader("Authorization") String jwt, @PathVariable Integer userid2) throws Exception {

		User reqUser = userService.findUserByJwt(jwt);

		User user = userService.followUser(reqUser.getUserid(), userid2);
		return user;
	}
	
	@GetMapping("/api/users/search")
	public List<User> searchUser(@RequestParam("query") String query){

		List<User> users = userService.searchUser(query);

		return users;
	}

	@GetMapping("/api/users/profile")
	public User getUserFromToken(@RequestHeader("Authorization") String jwt) {

		User user = userService.findUserByJwt(jwt);

		user.setPassword(null);

		return user;
	}
}
