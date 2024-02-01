package org.example.market.user.service;

import lombok.AllArgsConstructor;
import org.example.market.user.dto.UserDto;
import org.example.market.user.entity.Role;
import org.example.market.user.mapper.UserMapper;
import org.example.market.user.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;


    public void saveUser(UserDto userDto) {
        userDto.setRole(Role.User);

        userRepository.save(
                userMapper.DtoToEntity(userDto));
    }
}
