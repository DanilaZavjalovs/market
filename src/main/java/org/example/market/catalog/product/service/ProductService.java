package org.example.market.catalog.product.service;

import lombok.RequiredArgsConstructor;
import org.example.market.catalog.category.entity.CategoryEntity;
import org.example.market.catalog.category.repository.CategoryRepository;
import org.example.market.catalog.product.dto.ProductDto;
import org.example.market.catalog.product.dto.ProductRequest;
import org.example.market.catalog.product.mapper.ProductMapper;
import org.example.market.catalog.product.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;
    private final CategoryRepository categoryRepository;

    public List<ProductDto> getProductsByCategory(UUID categoryId) {
        CategoryEntity entity = categoryRepository.findById(categoryId)
                .orElseThrow();


        List<ProductDto> list = productRepository.findAllByCategoryId(entity)
                .stream().map(productMapper::EntityToDto).toList();

        return list;
    }

    public void saveProduct(ProductRequest request) {
        productRepository.save(productMapper.RequestToEntity(request));
    }
}
