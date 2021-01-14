package com.bezkoder.springjwt.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "comments")
public class Comment {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "user_id")
  private Long userid;

  @Column(name = "user_name")
  private String username;

  @Column(name = "content")
  private String content;

  @Column(name = "post_id")
  private Long postid;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getUserid() {
    return userid;
  }

  public void setUserid(Long userid) {
    this.userid = userid;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public Comment() {
  }

  public Comment(Long userid, String username, String content, Long postid) {
    this.userid = userid;
    this.username = username;
    this.content = content;
    this.postid = postid;
  }

  public Long getPostid() {
    return postid;
  }

  public void setPostid(Long postid) {
    this.postid = postid;
  }
}