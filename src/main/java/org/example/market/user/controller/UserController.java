package org.example.market.user.controller;

import lombok.AllArgsConstructor;
import org.example.market.user.dto.UserDto;
import org.example.market.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/registration")
    public ResponseEntity registrationUser(@RequestBody UserDto userDto) {
        userService.saveUser(userDto);

        return ResponseEntity.ok(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody UserDto userDto) {

        return ResponseEntity.ok(HttpStatus.ACCEPTED);
    }
}
