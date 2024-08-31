package com.srishti.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srishti.config.JwtProvider;
import com.srishti.models.User;
import com.srishti.repository.UserRepository;
import com.srishti.response.AuthResponse;
import com.srishti.services.UserService;

@RestController
@RequestMapping("/auth")
public class AuthController {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/signup")
	public AuthResponse createUser(@RequestBody User user) throws Exception {
		
		
		User isExist = userRepository.findByEmail(user.getEmail());
		
		if(isExist!=null) {
			throw new Exception("This email ID is already associated with a current user.");
		}
		
		User newUser = new User();
		
		newUser.setEmail(user.getEmail());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPassword(passwordEncoder.encode(user.getPassword()));
		
		User savedUser = userRepository.save(newUser);
		
		Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
		
		String token = JwtProvider.generateToken(authentication);
		
		System.out.println("Generated JWT: " + token); // Debugging line to log the generated token

		
		AuthResponse response = new AuthResponse(token,"Registered Successfully!");
		
		return response;

	}
}
