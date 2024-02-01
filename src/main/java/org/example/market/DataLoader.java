package org.example.market;

import lombok.RequiredArgsConstructor;
import org.example.market.catalog.category.dto.CategoryDto;
import org.example.market.catalog.category.mapper.CategoryMapper;
import org.example.market.catalog.category.service.CategoryService;
import org.example.market.catalog.product.dto.ProductDto;
import org.example.market.catalog.product.service.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final CategoryService categoryService;
    private final ProductService productService;
    private final CategoryMapper categoryMapper;

    @Override
    public void run(String... args) throws Exception {
        //for (CategoryDto dto: dtoList()) {
        //    categoryService.saveCategory(dto);
        //}

        //for (ProductDto dto: productDtos()) {
        //    productService.saveProduct(dto);
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

    private List<ProductDto> productDtos() {
        List<ProductDto> productDtos = new ArrayList<>();

        List<CategoryDto> categoryDtos = dtoList();

        ProductDto dto1 = new ProductDto();
        dto1.setName("Stylish T-Shirt");
        dto1.setDescription("Comfortable cotton t-shirt with a trendy design.");
        dto1.setPrice(25);
        dto1.setCategoryId(categoryMapper.DtoToEntity(categoryDtos.get(0)));

        ProductDto dto2 = new ProductDto();
        dto2.setName("Running Shoes");
        dto2.setDescription("High-performance running shoes with cushioned soles.");
        dto2.setPrice(60);
        dto2.setCategoryId(categoryMapper.DtoToEntity(categoryDtos.get(1)));

        ProductDto dto3 = new ProductDto();
        dto3.setName("Smartphone");
        dto3.setDescription("Latest model with advanced features and high-resolution camera.");
        dto3.setPrice(500);
        dto3.setCategoryId(categoryMapper.DtoToEntity(categoryDtos.get(2)));

        ProductDto dto4 = new ProductDto();
        dto4.setName("Bamboo Bed Sheets");
        dto4.setDescription("Luxurious and eco-friendly bamboo sheets for a comfortable sleep.");
        dto4.setPrice(80);
        dto4.setCategoryId(categoryMapper.DtoToEntity(categoryDtos.get(3)));

        ProductDto dto5 = new ProductDto();
        dto5.setName("Skincare Set");
        dto5.setDescription("Complete skincare set with cleanser, toner, and moisturizer.");
        dto5.setPrice(50);
        dto5.setCategoryId(categoryMapper.DtoToEntity(categoryDtos.get(4)));

        ProductDto dto6 = new ProductDto();
        dto6.setName("Hiking Backpack");
        dto6.setDescription("Durable backpack with multiple compartments for hiking and outdoor activities.");
        dto6.setPrice(70);
        dto6.setCategoryId(categoryMapper.DtoToEntity(categoryDtos.get(5)));

        productDtos.add(dto1);
        productDtos.add(dto2);
        productDtos.add(dto3);
        productDtos.add(dto4);
        productDtos.add(dto5);
        productDtos.add(dto6);

        return productDtos;
    }
}
