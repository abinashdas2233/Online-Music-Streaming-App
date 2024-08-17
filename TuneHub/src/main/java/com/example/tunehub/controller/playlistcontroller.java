package com.example.tunehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tunehub.services.playlistservice;
import com.example.tunehub.services.songservice;
import com.example.tunehub.entities.playlist;
import com.example.tunehub.entities.songs;

@RestController
@CrossOrigin("*")
public class playlistcontroller {
    @Autowired
    playlistservice pserv;
    @Autowired
    songservice sserv;
    @GetMapping("/createplaylist")
    public String createplaylist(Model model){
        //Fetching the songs using song service
        List<songs> songslist=sserv.fetchallsongs();
        //Adding the songs in the model
        model.addAttribute("songslist",songslist);
       //sending create playlist
        return "openplaylist";

    }
    @PostMapping("/addplaylist")
    public String addplaylist(@ModelAttribute playlist p){
        System.out.println("add playlist response");
        String s=pserv.addplaylist(p);
        
    
        return "playlistsuccess";
    }
    @GetMapping("/viewplaylist")
    public List<playlist> viewplaylist(Model model){
        List<playlist> pl=pserv.fetchplaylist();
        return pl;
    }



}
