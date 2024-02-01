package org.example.market.catalog.product.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.market.catalog.category.entity.CategoryEntity;
import org.example.market.catalog.product.image.entity.ImageEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "product")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id", nullable = false)
    private UUID id;

    private String name;
    private int price;
    private String description;

    @OneToMany(mappedBy = "productId", cascade = CascadeType.ALL)
    private List<ImageEntity> imageEntity = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity categoryId;

    public void addImage(ImageEntity entity) {
        imageEntity.add(entity);
    }
}
