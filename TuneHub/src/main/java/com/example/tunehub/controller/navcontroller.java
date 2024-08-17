package com.example.tunehub.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class navcontroller {
@GetMapping("/mapregister")
   public String registermapping(){
      return "register";

   }
   @GetMapping("/maplogin")
   public String  logmapping(){
     return "login";
   }
   @GetMapping("/map-song")
   public String songmapping(){
      return "addsongs";
   }
   @GetMapping("/sample")
   public String sample(){
      return "samplepayment";
   }
}
