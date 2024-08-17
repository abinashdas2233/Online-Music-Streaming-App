package com.example.tunehub.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tunehub.entities.playlist;

public interface playlistrepository extends JpaRepository<playlist,Integer>{

}
