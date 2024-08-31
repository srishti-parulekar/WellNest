package com.srishti.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer userid; 
	// @Column(name="my_name")
	private String firstName;
	private String lastName;
	private String email;
	private String password; 
	private String gender;
	
	private List<Integer> followers = new ArrayList<>();
	private List<Integer> followings = new ArrayList<>();
	
	@ManyToMany 
	private List<Post> savedPosts = new ArrayList<>();
	
	public User() {
		
	}

	public List<Post> getSavedPosts() {
		return savedPosts;
	}


	public void setSavedPosts(List<Post> savedPosts) {
		this.savedPosts = savedPosts;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public List<Integer> getFollowers() {
		return followers;
	}


	public void setFollowers(List<Integer> followers) {
		this.followers = followers;
	}


	public List<Integer> getFollowings() {
		return followings;
	}


	public void setFollowings(List<Integer> followings) {
		this.followings = followings;
	}


	public void setUserid(Integer userid) {
		this.userid = userid;
	}


	public User(Integer userid, String firstName, String lastName, String email, String password, String gender,
			List<Integer> followers, List<Integer> followings, List<Post> savedPosts) {
		super();
		this.userid = userid;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.followers = followers;
		this.followings = followings;
		this.savedPosts = savedPosts;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
