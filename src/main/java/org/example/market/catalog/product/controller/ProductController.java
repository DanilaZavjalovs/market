package org.example.market.catalog.product.controller;

import lombok.RequiredArgsConstructor;
import org.example.market.catalog.product.dto.ProductDto;
import org.example.market.catalog.product.dto.ProductRequest;
import org.example.market.catalog.product.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @GetMapping("{categoryName}")
    public ResponseEntity<List<ProductDto>> getProductsByCategory(@PathVariable String categoryName) {
        return ResponseEntity.ok(productService.getProductsByCategory(categoryName));
    }

    @PostMapping
    public ResponseEntity saveProduct(@RequestBody ProductRequest request) {
        productService.saveProduct(request);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}
