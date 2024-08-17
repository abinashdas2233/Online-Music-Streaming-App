package com.example.tunehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.tunehub.entities.songs;
import com.example.tunehub.services.songservice;

@RestController
@CrossOrigin("*")
public class songscontroller {
    @Autowired
    songservice ssr;
    @PostMapping("/addsongs")
    public String addsongs(@RequestBody songs s){
        System.out.println("get response");
        boolean status=ssr.songExist(s.getName());
        if(status==false){
        ssr.addsongs(s);
        System.out.println("task complete"+status);
        return "songsuccess";
        }
        else{
            System.out.println("fail");
            return "songfail";
        }
        
    }
    @GetMapping("/map-viewsong")
    public List<songs> viewsongs(Model model){
       List<songs> songslist= ssr.fetchallsongs();
       model.addAttribute("songslist",songslist);
       System.out.println(songslist);
       return songslist;


    }
    @GetMapping("/viewsongs")
    public String viewcustomersongs(Model model){
        boolean primestatus=true;
        if(primestatus==true){
            List<songs> songslist= ssr.fetchallsongs();
       model.addAttribute("songslist",songslist);
       return "displaysongs";

        }
        else{
            return "makepayment";
        }

    }


}
