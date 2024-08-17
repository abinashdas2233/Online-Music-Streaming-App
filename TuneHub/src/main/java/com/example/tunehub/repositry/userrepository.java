package com.example.tunehub.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tunehub.entities.user;



public interface userrepository extends JpaRepository<user, Integer>{
     public  user  findByEmail(String email);
     public user findByusername(String username);
   

}
