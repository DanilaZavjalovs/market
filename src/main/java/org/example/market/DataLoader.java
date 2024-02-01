package org.example.market;

import lombok.RequiredArgsConstructor;
import org.example.market.catalog.category.dto.CategoryDto;
import org.example.market.catalog.category.service.CategoryService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final CategoryService categoryService;

    @Override
    public void run(String... args) throws Exception {
        //for (CategoryDto dto: dtoList()) {
        //    categoryService.saveCategory(dto);
        //}
    }

    private List<CategoryDto> dtoList() {
        List<CategoryDto> dtos = new ArrayList<>();

        CategoryDto dto1 = new CategoryDto();
        dto1.setName("Clothing");
        CategoryDto dto2 = new CategoryDto();
        dto2.setName("Footwear");
        CategoryDto dto3 = new CategoryDto();
        dto3.setName("Electronics");
        CategoryDto dto4 = new CategoryDto();
        dto4.setName("Home Essentials");
        CategoryDto dto5 = new CategoryDto();
        dto5.setName("Beauty & Wellness");
        CategoryDto dto6 = new CategoryDto();
        dto6.setName("Sports & Outdoors");

        dtos.add(dto1);
        dtos.add(dto2);
        dtos.add(dto3);
        dtos.add(dto4);
        dtos.add(dto5);
        dtos.add(dto6);

        return dtos;
    }
}
