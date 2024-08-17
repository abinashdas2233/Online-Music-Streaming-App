package com.example.tunehub.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity

public class playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;
    String playlistname;
    String link;
    public playlist() {
        super();
    }
    public playlist(int id, String playlistname, String link) {
        this.id = id;
        this.playlistname = playlistname;
        this.link = link;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getPlaylistname() {
        return playlistname;
    }
    public void setPlaylistname(String playlistname) {
        this.playlistname = playlistname;
    }
    public String getLink() {
        return link;
    }
    public void setLink(String link) {
        this.link = link;
    }
    @Override
    public String toString() {
        return "playlist [id=" + id + ", playlistname=" + playlistname + ", link=" + link + "]";
    }


    

}
