import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Post.model';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  post: Post = {
    title: '',
    owner: '',
    category: '',
    content: '',
  };

  constructor(
    private postService: PostService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {}

  savePost(): void {
    const data = {
      title: this.post.title,
      owner: this.tokenStorageService.getUser().id,
      category: this.post.category,
      content: this.post.content,
    };

    this.postService.create(data).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }

  newPost(): void {
    this.post = {
      title: '',
      owner: '',
      category: '',
      content: '',
    };
  }
}
