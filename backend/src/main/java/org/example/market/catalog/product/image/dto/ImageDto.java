package org.example.market.catalog.product.image.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ImageDto {
    private UUID id;
    private String name;
    private String filePath;
}
