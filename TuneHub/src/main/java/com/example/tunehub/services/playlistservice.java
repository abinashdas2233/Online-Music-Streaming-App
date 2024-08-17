package com.example.tunehub.services;

import java.util.List;

import com.example.tunehub.entities.playlist;

public interface playlistservice {
    public String addplaylist(playlist p);
    public List<playlist>fetchplaylist();


}
