package org.example.market.catalog.product.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.example.market.catalog.category.entity.CategoryEntity;
import org.example.market.catalog.product.image.entity.ImageEntity;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "product")
@Data
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID id;

    private String name;
    private int price;
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity categoryId;
}
