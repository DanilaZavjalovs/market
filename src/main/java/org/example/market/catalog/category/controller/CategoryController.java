package org.example.market.catalog.category.controller;

import lombok.RequiredArgsConstructor;
import org.example.market.catalog.category.dto.CategoryDto;
import org.example.market.catalog.category.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/category")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping("/all")
    public ResponseEntity<List<CategoryDto>> getAllCategories() {
        return ResponseEntity.ok(categoryService.getCategories());
    }

    @PostMapping("/create")
    public ResponseEntity createCategory(@RequestBody CategoryDto categoryDto) {
        categoryService.saveCategory(categoryDto);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}
