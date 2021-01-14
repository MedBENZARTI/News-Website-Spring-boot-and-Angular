package com.bezkoder.springjwt.repository;

import java.util.List;

import com.bezkoder.springjwt.models.Post;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
	List<Post> findByOwnerContaining(String owner);
}
