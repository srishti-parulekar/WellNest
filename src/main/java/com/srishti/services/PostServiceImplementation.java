package com.srishti.services;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srishti.models.Post;
import com.srishti.models.User;
import com.srishti.repository.PostRepository;
import com.srishti.repository.UserRepository;

@Service
public class PostServiceImplementation implements PostService{

	@Autowired
	PostRepository postRepository;
	
	@Autowired
	UserService userService;
	
	@Autowired 
	UserRepository userRepository;
	
	@Override
	public Post createNewPost(Post post, Integer userid) throws Exception {
		
		
		User user = userService.findUserById(userid);
		
		Post newPost = new Post();
		
		newPost.setCaption(post.getCaption());
		
		newPost.setImage(post.getImage());
		
		newPost.setCreatedAt(LocalDateTime.now());
		
		newPost.setVideo(post.getVideo());
		
		newPost.setUser(user);
		
		return postRepository.save(newPost);
	}

	@Override
	public String deletePost(Integer postid, Integer userid) throws Exception {
		
		Post post = findPostByPostId(postid);
		
		//User user = userService.findUserById(userid);
		
		//should not be able to delete someone else s post; 
		if(post.getUser().getUserid()!=userid) {
			
			throw new Exception ("you cannot delete someone else's post. ");
			
		}
		
		postRepository.delete(post);
		
		return "post deleted successfully!";
		
	}

	@Override
	public List<Post> findPostByUserId(Integer userid) {
		
		return postRepository.findPostByUserId(userid);
		
	}

	@Override
	public Post findPostByPostId(Integer postid) throws Exception {
		
		Optional<Post> post = postRepository.findById(postid);
		
		if(post.isEmpty()) {
			throw new Exception ("post doesnt exist! post with id: " + postid);
		}
		
		return post.get();
	}

	@Override
	public List<Post> findAllPosts() {
		return postRepository.findAll();
	}

	@Override
	public Post savePost(Integer postid, Integer userid) throws Exception {
		Post post = findPostByPostId(postid);
		
		User user = userService.findUserById(userid);
		
		if(user.getSavedPosts().contains(post)) {
			user.getSavedPosts().remove(post);
		}
		
		else {
			user.getSavedPosts().add(post);
		}
		
		userRepository.save(user);
		
		return post;
		
	}

	@Override
	public Post likePost(Integer postid, Integer userid) throws Exception {
		Post post = findPostByPostId(postid);
		
		User user = userService.findUserById(userid);
		
		if(post.getLiked().contains(user)) {
			post.getLiked().remove(user);
		}
		
		else {
			post.getLiked().add(user);
		}
		
		return postRepository.save(post);
		
	}

}
