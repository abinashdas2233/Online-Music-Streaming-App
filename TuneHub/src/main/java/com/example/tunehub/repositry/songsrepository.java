package com.example.tunehub.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tunehub.entities.songs;



public interface songsrepository extends JpaRepository<songs,Integer>{
    public songs  findByName(String name);

}
