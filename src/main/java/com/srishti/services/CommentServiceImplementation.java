package com.srishti.services;

import com.srishti.models.Comment;
import com.srishti.models.Post;
import com.srishti.models.User;
import com.srishti.repository.CommentRepository;
import com.srishti.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
@Service
public class CommentServiceImplementation implements CommentService{
    @Autowired
    private PostService postService;
    @Autowired
    private UserService userService;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private PostRepository postRepository;

    @Override
    public Comment createComment(Comment comment, Integer postid, Integer userid) throws Exception {

        User user = userService.findUserById(userid);
        Post post = postService.findPostByPostId(postid);

        comment.setUser(user);
        comment.setCreatedAt(LocalDateTime.now());

        Comment savedComment = commentRepository.save(comment);

        post.getComments().add(savedComment);
        postRepository.save(post);
        return savedComment;
    }

    @Override
    public Comment likeComment(Integer commentid, Integer userid) throws Exception{

        Comment comment = findCommentById(commentid,userid);

        User user = userService.findUserById(userid);

        if(!comment.getLiked().contains(user)){
            comment.getLiked().add(user);
        }
        else{
            comment.getLiked().remove(user);
        }
        return commentRepository.save(comment);

    }

    @Override
    public Comment findCommentById(Integer commentid, Integer userid) throws Exception {

        Optional<Comment> opt = commentRepository.findById(commentid);

        if(opt.isEmpty()){
            throw new Exception("Comment doesn't exist");
        }
        return opt.get();
    }
}
