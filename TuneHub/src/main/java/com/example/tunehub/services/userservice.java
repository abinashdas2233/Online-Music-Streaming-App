package com.example.tunehub.services;



import java.util.List;

import com.example.tunehub.entities.user;

public interface userservice {
    public String adduser(user u);
    public boolean emailexist(String email);
    public boolean validateuser(String email,String password);
    public String getRole(String email);
    public user getuser(String email);
    public void updateuser(user u);
    public List<user>sendusers();
    public user getpdata(String pemail);
    public String upasswordbyid(int id,String email,String password);
    public String upasswordbyppw(String email,String newpassword,String currentpassword);
    

}
