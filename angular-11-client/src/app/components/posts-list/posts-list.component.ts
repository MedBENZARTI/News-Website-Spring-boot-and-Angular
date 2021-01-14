import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post.model';
import { PostService } from '../../services/post.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Comment } from 'src/app/models/Comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  public isCollapsed = true;
  userId = null;
  userName = null;

  posts?: Post[];
  currentPost?: Post;
  currentIndex = -1;
  owner = '';

  comments: Comment[] = [];
  newComment?: Comment;
  commentContent: string = '';

  constructor(
    private postService: PostService,
    private tokenStorageService: TokenStorageService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.retrievePosts();
    console.log(this.posts);
    this.userId = this.tokenStorageService.getUser().id;
    this.getComments();
  }

  onAddComment() {
    const com = {
      userid: this.tokenStorageService.getUser().id,
      username: this.tokenStorageService.getUser().username,
      postid: this.currentPost?.id,
      content: this.commentContent,
    };
    this.commentService.create(com).subscribe((data) => {
      const comment: Comment = {
        id: data.id,
        userid: data.userid,
        username: data.username,
        postid: data.postid,
        content: data.content,
      };
      this.comments.unshift(comment);
    });

    this.commentContent = '';
  }

  getComments() {
    this.commentService.getAll().subscribe((data) => {
      this.comments = data.reverse();
    });
  }

  getCommentsById(id: number) {
    let selected: Comment[] = [];
    this.comments.forEach((comment) => {
      if (comment.postid === id) {
        selected.unshift(comment);
      }
    });
    return selected;
  }

  onDeleteComment(id: any) {
    this.commentService.delete(id).subscribe(() => {
      this.comments = this.comments.filter((com) => com.id !== id);
    });
  }

  retrievePosts(): void {
    this.postService.getAll().subscribe(
      (data: Post[] | undefined) => {
        this.posts = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrievePosts();
    this.currentPost = undefined;
    this.currentIndex = -1;
  }

  setActivePost(post: Post, index: number): void {
    this.currentPost = post;
    this.currentIndex = index;
  }

  removeAllPosts(): void {
    this.postService.deleteAll().subscribe(
      (response: any) => {
        console.log(response);
        this.refreshList();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  searchOwner(): void {
    this.currentPost = undefined;
    this.currentIndex = -1;

    this.postService.findByOwner(this.owner).subscribe(
      (data: Post[] | undefined) => {
        this.posts = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
