package org.example.market.catalog.product.image.service;

import lombok.RequiredArgsConstructor;
import org.example.market.catalog.product.entity.ProductEntity;
import org.example.market.catalog.product.image.entity.ImageEntity;
import org.example.market.catalog.product.image.repository.ImageRepository;
import org.example.market.catalog.product.repository.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {

    private final ImageRepository imageRepository;
    private final ProductRepository productRepository;

    private final String FOLDER_PATH = "C:/Users/user/IdeaProjects/market/src/main/resources/image/";

    public void uploadImage(MultipartFile file, UUID productId) throws IOException {
        ProductEntity productEntity = productRepository.findById(productId).orElseThrow();

        ImageEntity imageEntity = new ImageEntity();
        imageEntity.setName(file.getOriginalFilename());
        imageEntity.setFilePath(FOLDER_PATH + file.getOriginalFilename());
        imageEntity.setProductId(productEntity);

        productEntity.addImage(imageEntity);

        imageRepository.save(imageEntity);

        file.transferTo(new File(FOLDER_PATH + file.getOriginalFilename()));
    }

    public byte[] downloadImage(String fileName) throws IOException {
        ImageEntity entity = imageRepository.findByName(fileName).orElseThrow();

        byte[] image = Files.readAllBytes(new File(entity.getFilePath()).toPath());

        return image;
    }

    public void saveImage(ImageEntity entity) {
        imageRepository.save(entity);
    }
}
