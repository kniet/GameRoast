package com.github.kniet.gameroast.controller;

import com.github.kniet.gameroast.model.ERole;
import com.github.kniet.gameroast.model.Role;
import com.github.kniet.gameroast.model.User;
import com.github.kniet.gameroast.payload.request.AuthRequest;
import com.github.kniet.gameroast.payload.response.AuthResponse;
import com.github.kniet.gameroast.repository.RoleRepository;
import com.github.kniet.gameroast.repository.UserRepository;
import com.github.kniet.gameroast.security.jwt.JwtUtils;
import com.github.kniet.gameroast.security.service.UserDetailsImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @GetMapping("/signin")
    public ResponseEntity<?> authenticate(@Valid @RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        ResponseCookie responseCookie = jwtUtils.generateJwtCookie(userDetails);
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, responseCookie.toString())
                .body(new AuthResponse(userDetails.getId(),
                                            userDetails.getUsername(),
                                            roles));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody AuthRequest authRequest) {

        if (userRepository.existsByUsername(authRequest.getUsername())) {
            return ResponseEntity.badRequest().body("Error: Username is already taken!");
        }

        User user = new User(authRequest.getUsername(), encoder.encode(authRequest.getPassword()));
        Set<Role> roles = new HashSet<>();
        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                .orElseThrow();
        roles.add(userRole);
        user.setRoles(roles);
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/signout")
    public ResponseEntity<?> logout() {
        ResponseCookie responseCookie = jwtUtils.getCleanJwtCookie();
        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, responseCookie.toString())
                .body("User signed out successfully!");
    }
}
