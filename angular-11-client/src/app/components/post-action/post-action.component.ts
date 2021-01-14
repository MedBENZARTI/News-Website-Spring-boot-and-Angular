import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post.model';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category.model';

@Component({
  selector: 'app-post-action',
  templateUrl: './post-action.component.html',
  styleUrls: ['./post-action.component.css'],
})
export class PostActionComponent implements OnInit {
  categories: Category[] = [];
  currentPost: Post = {
    title: '',
    owner: '',
    ownerId: '',
    category: '',
    content: '',
  };
  message = '';

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getPost(this.route.snapshot.params.id);
    this.retrieveCategories();
  }

  retrieveCategories(): any {
    this.categoryService.getAll().subscribe(
      (data: Category[]) => {
        this.categories = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getPost(id: string): void {
    this.postService.get(id).subscribe(
      (data: Post) => {
        this.currentPost = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // updatePublished(status: boolean): void {
  //   const data = {
  //     title: this.currentPost.title,
  //     description: this.currentPost.description,
  //     published: status,
  //   };

  //   this.message = '';

  //   this.postService.update(this.currentPost.id, data).subscribe(
  //     (response) => {
  //       this.currentPost.published = status;
  //       console.log(response);
  //       this.message = response.message
  //         ? response.message
  //         : 'This post was updated successfully!';
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  updatePost(): void {
    this.message = '';

    this.postService.update(this.currentPost.id, this.currentPost).subscribe(
      (response: { message: string }) => {
        console.log(response);
        this.message = response.message
          ? response.message
          : 'This post was updated successfully!';
        this.router.navigate(['/posts']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deletePost(): void {
    this.postService.delete(this.currentPost.id).subscribe(
      () => {
        this.router.navigate(['/posts']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
