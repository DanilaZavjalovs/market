package org.example.market.user.mapper;

import org.example.market.user.dto.UserDto;
import org.example.market.user.entity.UserEntity;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserEntity DtoToEntity(UserDto userDto) {
        UserEntity entity = new UserEntity();

        entity.setId(userDto.getId());
        entity.setUsername(userDto.getUsername());
        entity.setEmail(userDto.getEmail());
        entity.setPassword(userDto.getPassword());
        entity.setRole(userDto.getRole());

        return entity;
    }

}
