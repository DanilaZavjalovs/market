package org.example.market.catalog.category.service;

import lombok.RequiredArgsConstructor;
import org.example.market.catalog.category.dto.CategoryDto;
import org.example.market.catalog.category.mapper.CategoryMapper;
import org.example.market.catalog.category.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    public List<CategoryDto> getCategories() {
        return categoryRepository.findAll().stream()
                .map(categoryMapper::EntityToDto).toList();
    }

    public void saveCategory(CategoryDto dto) {
        categoryRepository.save(categoryMapper.EntityToDto(dto));
    }
}
