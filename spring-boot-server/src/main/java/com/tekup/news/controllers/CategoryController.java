package com.tekup.news.controllers;

import java.util.ArrayList;
import java.util.List;

import com.tekup.news.models.Category;
import com.tekup.news.repository.CategoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CategoryController {
  @Autowired
  CategoryRepository categoryRepository;

  @GetMapping("categories")
  public ResponseEntity<List<Category>> getAllCategories() {
    try {
      List<Category> categories = new ArrayList<Category>();

      categoryRepository.findAll().forEach(categories::add);

      if (categories.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(categories, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PostMapping("/categories")
  public ResponseEntity<Category> createCategory(@RequestBody Category newCategory) {
    try {
      Category _cat = categoryRepository.save(new Category(newCategory.getCategoryName()));
      // System.out.println(_cat);
      return new ResponseEntity<>(_cat, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}