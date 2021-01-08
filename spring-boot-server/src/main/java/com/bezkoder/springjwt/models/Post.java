package com.bezkoder.springjwt.models;

import javax.persistence.*;

@Entity
@Table(name = "posts")
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "title")
	private String title;

	@Column(name = "owner")
	private String owner;

	@Column(name = "category")
	private String category;

	@Column(name = "content")
	private String content;

	public Post() {

	}

	public Post(String title, String owner, String category, String content) {
		this.title = title;
		this.owner = owner;
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

	@Override
	public String toString() {
		return "Post [category=" + category + ", content=" + content + ", id=" + id + ", owner=" + owner + ", title="
				+ title + "]";
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

}
