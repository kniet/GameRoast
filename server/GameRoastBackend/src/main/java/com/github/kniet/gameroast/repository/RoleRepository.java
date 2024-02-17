package com.github.kniet.gameroast.repository;

import com.github.kniet.gameroast.model.ERole;
import com.github.kniet.gameroast.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);
}
