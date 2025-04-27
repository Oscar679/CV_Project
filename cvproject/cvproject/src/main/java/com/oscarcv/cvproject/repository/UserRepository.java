package com.oscarcv.cvproject.repository;

import com.oscarcv.cvproject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "SELECT * FROM `USER`", nativeQuery = true)
    List<User> findAllUsers();
}
