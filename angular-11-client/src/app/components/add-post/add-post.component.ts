import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category.model';
import { Post } from 'src/app/models/Post.model';
import { CategoryService } from 'src/app/services/category.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  newCateg?: string = '';
  categories?: Category[];
  post: Post = {
    title: '',
    owner: '',
    ownerId: '',
    category: '',
    content: '',
  };

  constructor(
    private postService: PostService,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.retrieveCategories();
    console.log(this.categories);
  }

  retrieveCategories(): void {
    this.categoryService.getAll().subscribe(
      (data: Category[]) => {
        this.categories = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onAddCategory(): void {
    const addedCateg = {
      categoryName: this.newCateg?.toUpperCase(),
    };
    this.categoryService.create(addedCateg).subscribe(() => {
      this.retrieveCategories();
      this.newCateg = '';
    });
  }

  savePost(): void {
    const data = {
      title: this.post.title,
      owner: this.tokenStorageService.getUser().username,
      ownerId: this.tokenStorageService.getUser().id,
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
