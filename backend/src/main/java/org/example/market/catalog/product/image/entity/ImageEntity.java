package org.example.market.catalog.product.image.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.example.market.catalog.product.entity.ProductEntity;

import java.util.UUID;

@Entity
@Table(name = "image")
@Data
public class ImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID id;
    private String name;
    private String filePath;

    @ManyToOne
    @JoinColumn(name = "productId")
    private ProductEntity product;
}
