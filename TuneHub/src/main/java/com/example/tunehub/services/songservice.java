
package com.example.tunehub.services;

import java.util.List;

import com.example.tunehub.entities.songs;

public interface songservice {
    public String addsongs(songs s);
    public boolean songExist(String name);
    public List<songs> fetchallsongs();

}
