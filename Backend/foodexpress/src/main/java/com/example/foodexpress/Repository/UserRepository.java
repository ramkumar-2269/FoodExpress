package com.example.foodexpress.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.foodexpress.Entity.User;

public interface UserRepository extends JpaRepository<User,Long> {



}
