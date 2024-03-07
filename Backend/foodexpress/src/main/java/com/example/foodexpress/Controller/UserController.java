package com.example.foodexpress.Controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodexpress.Entity.User;
import com.example.foodexpress.Repository.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@RequestBody User user){
        String email = user.getEmail();
        Optional<User> userOptional = userRepository.findByEmail(email);
        if(!userOptional.isPresent()){
            userRepository.save(user);
            return ResponseEntity.ok(user.getId());
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already registered.");
        
    }

    @PostMapping("/login")
    public ResponseEntity<String> findUserByEmail(@RequestBody Map<String,String> loginData){
        String email = loginData.get("email");
        String password = loginData.get("password");

        Optional<User> userOptional = userRepository.findByEmail(email);

        if(!userOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email is not registered.");
        }

        User user = userOptional.get();

        if(!password.equals(user.getPassword())){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong password");
        }

        return ResponseEntity.ok("Login SUccessful");
    }

}
