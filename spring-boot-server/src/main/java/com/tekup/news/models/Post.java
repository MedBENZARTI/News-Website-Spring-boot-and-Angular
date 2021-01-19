package com.tekup.news.models;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "posts")
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;

  @Column(name = "title")
  private String title;

  @Column(name = "owner")
  private String owner;

  @Column(name = "ownerid")
  private int ownerId;

  @Column(name = "category")
  private String category;

  @Column(name = "content")
  private String content;

  public Post() {

  }

  public Post(String title, int ownerid, String owner, String category, String content) {
    this.title = title;
    this.owner = owner;
    this.ownerId = ownerid;
    this.category = category;
    this.content = content;
  }

  public long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getOwner() {
    return owner;
  }

  public void setOwner(String owner) {
    this.owner = owner;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public int getOwnerId() {
    return ownerId;
  }

  public void setOwnerId(int ownerId) {
    this.ownerId = ownerId;
  }

  @Override
  public String toString() {
    return "Post [category=" + category + ", content=" + content + ", id=" + id + ", owner=" + owner + ", ownerId="
        + ownerId + ", title=" + title + "]";
  }

}
