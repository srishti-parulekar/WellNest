package com.srishti.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.srishti.models.Post;
import com.srishti.models.User;
import com.srishti.response.ApiResponse;
import com.srishti.services.PostService;
import com.srishti.services.UserService;

@RestController
public class PostController {

	@Autowired
	PostService postService;

	@Autowired
	UserService userService;

	@PostMapping("/api/posts")
	public ResponseEntity<Post> createPost(@RequestBody Post post,@RequestHeader("Authorization") String jwt) throws Exception{
		User reqUser = userService.findUserByJwt(jwt);
		Post createdPost = postService.createNewPost(post, reqUser.getUserid());

		return new ResponseEntity<>(createdPost,HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/api/posts/{postid}")
	public ResponseEntity<ApiResponse> deletePost(@PathVariable Integer postid, @RequestHeader("Authorization") String jwt) throws Exception{
		User reqUser = userService.findUserByJwt(jwt);

		String message = postService.deletePost(postid, reqUser.getUserid());

		ApiResponse response = new ApiResponse(message,true);

		return new ResponseEntity<ApiResponse>(response,HttpStatus.OK);
	}


	@GetMapping("/api/posts/{postid}")
	public ResponseEntity<Post> findPostByIdHandler(@PathVariable Integer postid) throws Exception{

		Post post = postService.findPostByPostId(postid);

		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}


	@GetMapping("/api/posts/user/{userid}")
	public ResponseEntity<List<Post>> findUsersPost(@PathVariable Integer userid){

		List<Post> posts = postService.findPostByUserId(userid);

		return new ResponseEntity<List<Post>>(posts,HttpStatus.OK);
	}

	@GetMapping("/api/posts")
	public ResponseEntity<List<Post>> findAllPosts(){

		List<Post> posts = postService.findAllPosts();

		return new ResponseEntity<List<Post>>(posts,HttpStatus.OK);
	}


	@PutMapping("/api/posts/save/{postid}/user/{userid}")
	public ResponseEntity<Post> savePost(@PathVariable Integer postid, @PathVariable Integer userid) throws Exception{

		Post post = postService.savePost(postid,userid);

		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}


	@PutMapping("/api/posts/like/{postid}")
	public ResponseEntity<Post> likePost(@PathVariable Integer postid, @RequestHeader("Authorization") String jwt) throws Exception{
		User reqUser = userService.findUserByJwt(jwt);
		Post post = postService.likePost(postid,reqUser.getUserid());

		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}

}