package org.example.market.catalog.product.image.controller;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.example.market.catalog.product.dto.ProductDto;
import org.example.market.catalog.product.image.service.ImageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/product/image")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class ImageController {

    private final ImageService imageService;

    @PostMapping("{productId}")
    public void saveProductImage(@RequestParam("image") @NonNull MultipartFile image, @PathVariable UUID productId) throws IOException {
        imageService.uploadImage(image, productId);
    }

    @GetMapping("{imageName}")
    public ResponseEntity<?> getImage(@PathVariable String imageName) throws IOException {
        byte[] image = imageService.downloadImage(imageName);

        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(image);
    }
}
