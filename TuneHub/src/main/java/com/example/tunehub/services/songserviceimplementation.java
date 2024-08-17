package com.example.tunehub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tunehub.entities.songs;
import com.example.tunehub.repositry.songsrepository;
@Service
public class songserviceimplementation implements songservice {
    @Autowired
    songsrepository songrepo;
    @Override
    public String addsongs(songs s) {
        // TODO Auto-generated method stub
        songrepo.save(s);

        return "song is added";
    }
    @Override
    public boolean songExist(String name) {
        // TODO Auto-generated method stub
        songs s=songrepo.findByName(name);
        if(s==null){
            return false;
        }
        else{
            return true;
        }
    }
    @Override
    public List<songs> fetchallsongs() {
        // TODO Auto-generated method stub
        List <songs> songlist=songrepo.findAll();
        return songlist;
    }
    

    

}
