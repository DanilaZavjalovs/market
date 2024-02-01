package org.example.market.catalog.product.dto;

import lombok.Data;
import org.example.market.catalog.category.entity.CategoryEntity;
import java.util.UUID;

@Data
public class ProductDto {
    private UUID id;
    private String name;
    private String description;
    private int price;
    private CategoryEntity categoryId;
}
