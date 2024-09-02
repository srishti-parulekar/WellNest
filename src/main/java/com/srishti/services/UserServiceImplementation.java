package com.srishti.services;

import java.util.List;
import java.util.Optional;

import com.srishti.exceptions.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srishti.config.JwtProvider;
import com.srishti.models.User;
import com.srishti.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService{

	@Autowired
	UserRepository userRepository;



	@Override
	public User registeredUser(User user) {

		User newUser = new User();

		newUser.setEmail(user.getEmail());
		newUser.setFirstName(user.getFirstName());
		newUser.setLastName(user.getLastName());
		newUser.setPassword(user.getPassword());
		newUser.setUserid(user.getUserid());

		User savedUser = userRepository.save(newUser);

		return savedUser;
	}

	@Override
	public User findUserById(Integer userid) throws UserException {
		Optional<User> user = userRepository.findById(userid);

		if(user.isPresent()) {
			return user.get();
		}
		throw new UserException("user with the given id doesnt exist: " + userid);

	}

	@Override
	public User findUserByEmail(String email) {

		User user = userRepository.findByEmail(email);
		return user;

	}

	@Override
	public User followUser(Integer reqUserId, Integer userid2) throws UserException {
		User reqUser = findUserById(reqUserId);

		User user2 = findUserById(userid2);
		if(user2.getFollowers().contains(reqUserId)) {
			user2.getFollowers().remove((Object)reqUserId);
			reqUser.getFollowings().remove((Object)userid2);
		}
		else {
			user2.getFollowers().add(reqUserId);
			reqUser.getFollowings().add(userid2);
		}

		userRepository.save(reqUser);
		userRepository.save(user2);

		return reqUser;
	}

	@Override
	public User updateUser(User user, Integer userid) throws UserException {
		Optional<User> user1 = userRepository.findById(userid);

		if(user1.isEmpty()) {
			throw new UserException("user with the given id doesnt exist: " + userid);
		}

		User oldUser = user1.get();

		if(user.getFirstName()!=null) {
			oldUser.setFirstName(user.getFirstName());
		}

		if(user.getLastName()!=null) {
			oldUser.setLastName(user.getLastName());
		}

		if(user.getEmail()!=null) {
			oldUser.setEmail(user.getEmail());
		}

		if(user.getGender()!=null) {
			oldUser.setGender(user.getGender());
		}

		User updatedUser = userRepository.save(oldUser);

		return updatedUser;
	}

	@Override
	public List<User> searchUser(String query) {

		return userRepository.searchUser(query);
	}

	@Override
	public User findUserByJwt(String jwt) {

		if (jwt.startsWith("Bearer ")) {
			jwt = jwt.substring(7).trim();
		}

		String email = JwtProvider.getEmailFromJwtToken(jwt);

		User user = userRepository.findByEmail(email);

		return user;
	}

}