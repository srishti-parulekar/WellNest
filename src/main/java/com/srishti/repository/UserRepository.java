package com.srishti.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.srishti.models.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	public User findByEmail(String email);
	
	//java persistence language query. operates on entity models instead of db directly. 
	@Query("select u from User u where u.firstName LIKE %:query% OR u.lastName LIKE %:query% OR u.email LIKE %:query%")
	public List<User> searchUser(@Param("query")String query);
	
	
}
