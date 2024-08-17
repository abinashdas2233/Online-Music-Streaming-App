package com.example.tunehub.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.example.tunehub.entities.user;
import com.example.tunehub.services.userservice;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("*")
public class usercontroller {
   @Autowired
   userservice usr;
   
    @PostMapping("/register")
 public String adduser(@RequestBody user u){
   String s="";
   
   
   boolean userstatus=usr.emailexist(u.getEmail());
   if(userstatus==false){

    String msg=usr.adduser(u);
    System.out.println("user is added");
    s= "registersucces";
    
   }
   else{
      System.out.println("user is already exist");
      s= "registerfail";
   }
   System.out.println(s);
   return s;
   
 }
 @PostMapping("/login")
 public String validateuser(@RequestBody user u, HttpSession session){
   String email=u.getEmail();
  
   System.out.println(email);
   String password=u.getPassword();
   System.out.println("password "+password);
   boolean status=usr.validateuser(email,password);

   String role=usr.getRole(email);
   if (status==true) {
      System.out.println("session-"+email);
      session.setAttribute("em", email);
      if(role.equals("admin")){

      
      return "adminhome";
      }
       u=usr.getuser(email);
      boolean us=u.isPremium();
      if(us==true){
         return "displaysongs";
      }
      else{
         return "payment";
      }
      
   }
   else{
      return "loginfailed";
   }
 }
 @GetMapping("/findusers")
 public List<user>getallusers(){
   return usr.sendusers();
 }
 @PostMapping("/ptd")
 public user profiledata(@RequestBody user u){
   String pemail=u.getEmail();
   System.out.println("profileemail-"+u.toString());
   System.out.println("done data coming");
   user dt=usr.getpdata(pemail);
   System.out.println(dt.getUsername());
   return dt;
 }
 @PostMapping("/upp")
 public String updatepasswordbyid(@RequestBody user u){
   String email=u.getEmail();
  
   int iid=Integer.parseInt(u.getRole());
   String npw=u.getPassword();
   
   System.out.println("........email-"+email+"id-"+iid +"new-password"+npw);
   return usr.upasswordbyid(iid, email, npw);

 }
 @PostMapping("/ucp")
 public String updatepasswordbypw(@RequestBody user u){
   String email=u.getEmail();
  String npw=u.getPassword();
  String pw=u.getRole();
   
   System.out.println("........email-"+email+"ppw-"+pw+"new-password"+npw);
   return usr.upasswordbyppw(email,npw,pw);

 }
 
    

  
  
  
}

