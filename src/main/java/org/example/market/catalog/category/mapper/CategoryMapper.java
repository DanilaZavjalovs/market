package org.example.market.catalog.category.mapper;

import org.example.market.catalog.category.dto.CategoryDto;
import org.example.market.catalog.category.entity.CategoryEntity;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

    public CategoryDto EntityToDto(CategoryEntity entity) {
        CategoryDto dto = new CategoryDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());

        return dto;
    }

    public CategoryEntity DtoToEntity(CategoryDto dto) {
        CategoryEntity entity = new CategoryEntity();
        entity.setId(dto.getId());
        entity.setName(dto.getName());

        return entity;
    }
}
