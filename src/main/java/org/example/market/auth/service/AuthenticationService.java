package org.example.market.auth.service;

import lombok.RequiredArgsConstructor;
import org.example.market.auth.dto.AuthenticationRequest;
import org.example.market.auth.dto.AuthenticationResponse;
import org.example.market.auth.dto.RegisterRequest;
import org.example.market.security.jwt.service.JwtService;
import org.example.market.user.entity.Role;
import org.example.market.user.entity.UserEntity;
import org.example.market.user.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request) {
        UserEntity entity = new UserEntity();
        entity.setUsername(request.getUsername());
        entity.setPassword(encoder.encode(request.getPassword()));
        entity.setEmail(request.getEmail());
        entity.setRole(Role.User);

        repository.save(entity);

        String jwtToken = jwtService.generateToken(entity);

        return AuthenticationResponse.builder()
                .jwtToken(jwtToken)
                .build();
    }


    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );

        UserEntity entity = repository.findByUsername(request.getUsername())
                .orElseThrow();

        String jwtToken = jwtService.generateToken(entity);

        return AuthenticationResponse.builder()
                .jwtToken(jwtToken)
                .build();
    }
}
