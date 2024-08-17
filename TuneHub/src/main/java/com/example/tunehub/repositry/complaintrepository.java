package com.example.tunehub.repositry;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tunehub.entities.complaint;

public interface complaintrepository extends JpaRepository<complaint,Integer> {

}
