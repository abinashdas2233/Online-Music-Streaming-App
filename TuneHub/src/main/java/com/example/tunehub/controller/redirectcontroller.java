package com.example.tunehub.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;



@Controller
public class redirectcontroller {

    @GetMapping("/redirectToPage")
    public RedirectView redirectToPage() {
        
        System.out.println("Redirecting to targetPage...");
        return new RedirectView("/targetPage");
    }

    @GetMapping("/targetPage")
    public String targetPage() {
        System.out.println("Rendering targetPage...");
        return "samplepayment";
    }
}
