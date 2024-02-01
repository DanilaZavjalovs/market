package org.example.market.catalog.product.mapper;

import lombok.RequiredArgsConstructor;
import org.example.market.catalog.category.repository.CategoryRepository;
import org.example.market.catalog.product.dto.ProductDto;
import org.example.market.catalog.product.dto.ProductRequest;
import org.example.market.catalog.product.entity.ProductEntity;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ProductMapper {
    private final CategoryRepository categoryRepository;


    public ProductDto EntityToDto(ProductEntity entity) {
        ProductDto dto = new ProductDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setCategoryId(entity.getCategoryId());
        dto.setPrice(entity.getPrice());
        dto.setDescription(entity.getDescription());

        return dto;
    }

    public ProductEntity RequestToEntity(ProductRequest request) {
        ProductEntity entity = new ProductEntity();
        entity.setName(request.getName());
        entity.setCategoryId(categoryRepository.findById(request.getCategoryId()).orElseThrow());
        entity.setPrice(request.getPrice());
        entity.setDescription(request.getDescription());

        return entity;
    }

}
