package com.example.tunehub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tunehub.entities.complaint;
import com.example.tunehub.repositry.complaintrepository;

@Service

public class complaintserviceimplementation implements complaintservice {
    @Autowired
    complaintrepository crepo;

    @Override
    public String registercomplaint(complaint c) {
        // TODO Auto-generated method stub
        try{
        crepo.save(c);
        return "success";
        }
        catch(Exception e){
            return "error";
        }
    }

    @Override
    public List<complaint> getcmps() {
        // TODO Auto-generated method stub
        
        return crepo.findAll();
    }

    @Override
    public String deletecomp(int tid) {
        // TODO Auto-generated method stub
       try {
        crepo.deleteById(tid);
        return "done";
       } catch (Exception e) {
        // TODO: handle exception
        return "failed to delete";
       }
    }
    
    
    

}
