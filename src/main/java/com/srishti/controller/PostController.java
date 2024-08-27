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
import org.springframework.web.bind.annotation.RestController;

import com.srishti.models.Post;
import com.srishti.response.ApiResponse;
import com.srishti.services.PostService;

@RestController
public class PostController {
	
	@Autowired
	PostService postService;
	
	
	@PostMapping("/posts/user/{userid}")
	public ResponseEntity<Post> createPost(@RequestBody Post post,@PathVariable Integer userid) throws Exception{
		
		Post createdPost = postService.createNewPost(post, userid);
		
		return new ResponseEntity<>(createdPost,HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/posts/{postid}/user/{userid}")
	public ResponseEntity<ApiResponse> deletePost(@PathVariable Integer postid, @PathVariable Integer userid) throws Exception{
		
		String message = postService.deletePost(postid, userid);
		
		ApiResponse response = new ApiResponse(message,true);
		
		return new ResponseEntity<ApiResponse>(response,HttpStatus.OK);
	}
	
	
	@GetMapping("/posts/{postid}")
	public ResponseEntity<Post> findPostByIdHandler(@PathVariable Integer postid) throws Exception{
		
		Post post = postService.findPostByPostId(postid);
		
		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}
	
	
	@GetMapping("/posts/user/{userid}")
	public ResponseEntity<List<Post>> findUsersPost(@PathVariable Integer userid){
		
		List<Post> posts = postService.findPostByUserId(userid);
		
		return new ResponseEntity<List<Post>>(posts,HttpStatus.OK);
	}
	
	@GetMapping("/posts")
	public ResponseEntity<List<Post>> findAllPosts(){
		
		List<Post> posts = postService.findAllPosts();
		
		return new ResponseEntity<List<Post>>(posts,HttpStatus.OK);
	}
	
	
	@PutMapping("/posts/save/{postid}/user/{userid}")
	public ResponseEntity<Post> savePost(@PathVariable Integer postid, @PathVariable Integer userid) throws Exception{
		
		Post post = postService.savePost(postid,userid);
		
		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}
	
	
	@PutMapping("/posts/like/{postid}/user/{userid}")
	public ResponseEntity<Post> likePost(@PathVariable Integer postid, @PathVariable Integer userid) throws Exception{
		
		Post post = postService.likePost(postid,userid);
		
		return new ResponseEntity<Post>(post,HttpStatus.ACCEPTED);
	}
	
}
