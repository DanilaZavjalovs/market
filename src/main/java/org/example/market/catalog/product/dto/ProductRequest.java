package org.example.market.catalog.product.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ProductRequest {
    private String name;
    private UUID categoryId;
}
