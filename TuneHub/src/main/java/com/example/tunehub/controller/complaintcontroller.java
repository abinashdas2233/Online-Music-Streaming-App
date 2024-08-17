package com.example.tunehub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.tunehub.entities.complaint;
import com.example.tunehub.services.complaintservice;

@RestController
@CrossOrigin("*")
public class complaintcontroller {
    @Autowired
    complaintservice cs;

    @PostMapping("/pcom")
    public String registercomplaint(@RequestBody complaint c){
           String r=cs.registercomplaint(c);
           return r;



    }
    @GetMapping("/getcmp")
    public List<complaint>getcomps(){
        List<complaint> lt=cs.getcmps();
        return  lt;
    }
    @PostMapping("/delcmp")
public String deletecomp(@RequestBody complaint complaint){
    int ticketId = complaint.getTicketid();
    String res = cs.deletecomp(ticketId);
    return res;
}


}
