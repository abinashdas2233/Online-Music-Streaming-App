package com.example.tunehub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tunehub.entities.playlist;
import com.example.tunehub.repositry.playlistrepository;

@Service
public class playlistserviceimplementation implements playlistservice{
    @Autowired
playlistrepository prepo;

    @Override
    public String addplaylist(playlist p) {
        // TODO Auto-generated method stub
        prepo.save(p);
        return "done";
    }

    @Override
    public List<playlist> fetchplaylist() {
        // TODO Auto-generated method stub
      List<playlist>pl=prepo.findAll();
        return  pl;
    }


    

}
