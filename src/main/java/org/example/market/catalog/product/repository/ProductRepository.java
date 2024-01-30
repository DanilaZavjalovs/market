package org.example.market.catalog.product.repository;

import org.example.market.catalog.category.entity.CategoryEntity;
import org.example.market.catalog.product.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, UUID> {

    List<ProductEntity> findAllByCategoryId(CategoryEntity categoryId);
}
