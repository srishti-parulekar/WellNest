package com.srishti.services;

import com.srishti.models.Comment;

public interface CommentService {
    public Comment createComment(Comment comment, Integer postid, Integer userid) throws Exception;

    public Comment likeComment(Integer commentid, Integer userid) throws Exception;

    public Comment findCommentById(Integer commentid, Integer userid) throws Exception;
}