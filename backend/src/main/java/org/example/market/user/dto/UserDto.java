package org.example.market.user.dto;

import lombok.Data;
import org.example.market.user.entity.Role;

import java.util.UUID;

@Data
public class UserDto {
    private UUID id;
    private String username;
    private String password;
    private String email;
    private Role role;
}
