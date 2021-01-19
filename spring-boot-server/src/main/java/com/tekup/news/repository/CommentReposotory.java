package com.tekup.news.repository;

import java.util.List;

import com.tekup.news.models.Comment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentReposotory extends JpaRepository<Comment, Long> {

    List<Comment> findByPostid(Long postid);

}