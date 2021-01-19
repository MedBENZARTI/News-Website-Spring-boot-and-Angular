package com.tekup.news.repository;

import java.util.List;

import com.tekup.news.models.Post;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
	List<Post> findByOwnerContaining(String owner);
}
