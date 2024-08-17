package com.example.tunehub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.tunehub.entities.user;
import com.example.tunehub.repositry.userrepository;

@Service
public class userserviceimplementation implements userservice {
    @Autowired
    userrepository urepo;

    @Override
    public String adduser(user u) {
        // TODO Auto-generated method stub

        urepo.save(u);
        return "user created";
    }

    @Override
    public boolean emailexist(String email) {
        // TODO Auto-generated method stub
        if (urepo.findByEmail(email) == null) {
            return false;
        } else {
            return true;
        }

    }

    @Override
    public boolean validateuser(String email, String password) {
        // TODO Auto-generated method stub
        user u = urepo.findByEmail(email);
        String pw = u.getPassword();
        System.out.println("my password---"+pw);
        if (pw.equals(password)) {
            return true;
        } else {

            return false;
        }
    }

    @Override
    public String getRole(String email) {
        // TODO Auto-generated method stub
        user u = urepo.findByEmail(email);
        String role = u.getRole();
        return role;
    }

    @Override
    public user getuser(String email) {
        // TODO Auto-generated method 
        
        

        return urepo.findByEmail(email);
    }

    @Override
    public void updateuser(user u) {
        // TODO Auto-generated method stub
        urepo.save(u);
        
    }

    @Override
    public List<user> sendusers() {
        // TODO Auto-generated method stub
       
        return  urepo.findAll();
    }

    @Override
    public user getpdata(String pemail) {
        // TODO Auto-generated method stub
        return urepo.findByEmail(pemail);
        
    }

    @Override
    public String upasswordbyid(int id, String email, String password) {
        // TODO Auto-generated method stub
        user us=urepo.findByEmail(email);
       int iid=us.getId();
        if (iid==id) {
            us.setPassword(password);
            urepo.save(us);
            System.out.println("success");
            return "success";
        }
        else{
            System.out.println("failure");
            return "failure to updatepassword . wrong id";

        }
        
    }

    @Override
    public String upasswordbyppw(String email, String newpassword, String currentpassword) {
        // TODO Auto-generated method stub
         // Fetch the user by email
    user user = urepo.findByEmail(email);
    String dbpw=user.getPassword();
    
    // Check if user exists
    if (user == null) {
        return "User not found";
    }
    

    // Verify current password
    if (!currentpassword.equals(dbpw)) {
        return "Current password is incorrect";
    }
    
    // Update password
    user.setPassword(newpassword);
    urepo.save(user);
    
    return "Password updated successfully";
      
    }
    
    

}
