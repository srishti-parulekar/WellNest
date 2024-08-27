package com.srishti.services;

import java.util.List;

import com.srishti.models.Post;

public interface PostService {

	Post createNewPost(Post post, Integer userid) throws Exception;
	
	String deletePost(Integer postid, Integer userid) throws Exception;
	
	List<Post> findPostByUserId(Integer userid);
	
	Post findPostByPostId(Integer postid) throws Exception;
	
	List<Post> findAllPosts();
	
	Post savePost(Integer postid, Integer userid) throws Exception;
	
	Post likePost(Integer postid, Integer userid) throws Exception;
}
