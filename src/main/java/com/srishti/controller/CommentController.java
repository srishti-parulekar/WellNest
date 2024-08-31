package com.srishti.controller;

import com.srishti.models.Comment;
import com.srishti.models.User;
import com.srishti.services.CommentService;
import com.srishti.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CommentController {
    @Autowired
    private CommentService commentService;
    @Autowired
    private UserService userService;

            @PostMapping("/api/comments/post/{postid}")
    public Comment createComment (@RequestBody Comment comment, @RequestHeader("Authorization") String jwt, @PathVariable("postid") Integer postid) throws Exception {
        User user = userService.findUserByJwt(jwt);
        Comment createdComment = commentService.createComment(comment, postid, user.getUserid());

        return createdComment;
    }

    @PutMapping("/api/comments/like/{commentid}")
    public Comment likeComment (@RequestHeader("Authorization") String jwt, @PathVariable("commentid") Integer commentid) throws Exception {
        User user = userService.findUserByJwt(jwt);
        Comment likedComment = commentService.likeComment(commentid, user.getUserid());

        return likedComment;
    }
}
