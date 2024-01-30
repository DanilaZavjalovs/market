package org.example.market.catalog.product.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.example.market.catalog.category.entity.CategoryEntity;

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

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity categoryId;
}
