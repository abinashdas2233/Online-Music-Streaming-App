package com.example.tunehub.controller;


import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import com.example.tunehub.entities.user;
import com.example.tunehub.services.userservice;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.razorpay.Utils;

import jakarta.servlet.http.HttpSession;




@Controller

public class paymentcontroller {
    @Autowired
        userservice us;
    @PostMapping("/createorder")
    @ResponseBody
    public String createorder(){
        
        Order order=null;
       
try {
    RazorpayClient razorpay = new RazorpayClient("rzp_test_aye40rGG4z8s1W", "rfoRHXmODWe0o5CUQRY24fDN");

    JSONObject orderRequest = new JSONObject();
    orderRequest.put("amount",50000);
    orderRequest.put("currency","INR");
    orderRequest.put("receipt", "receipt#1");
    JSONObject notes = new JSONObject();
    notes.put("notes_key_1","Tea, Earl Grey, Hot");
    orderRequest.put("notes",notes);
    
    order = razorpay.orders.create(orderRequest);
} catch (Exception e) {
    // TODO: handle exception
    System.out.println("exception while creating order");
    
}
return order.toString();
}
@PostMapping("/verify")
	@ResponseBody
	public boolean verifyPayment(@RequestParam  String orderId, @RequestParam String paymentId, @RequestParam String signature) {
	    try {
	        // Initialize Razorpay client with your API key and secret
	        RazorpayClient razorpayClient = new RazorpayClient("rzp_test_aye40rGG4z8s1W", "rfoRHXmODWe0o5CUQRY24fDN");
	        // Create a signature verification data string
	        String verificationData = orderId + "|" + paymentId;

	        // Use Razorpay's utility function to verify the signature
	        boolean isValidSignature = Utils.verifySignature(verificationData, signature, "rfoRHXmODWe0o5CUQRY24fDN");

	        return isValidSignature;
	    } catch (RazorpayException e) {
	        e.printStackTrace();
	        return false;
	    }
	}
    @GetMapping("payment-success")
    public String paymentsuccess(){
       
       return "ea";

    }
    @PostMapping("/uk")
    public RedirectView map(@RequestParam String email){
        System.out.println("email id-"+email);
       user u= us.getuser(email);
       u.setPremium(true);
       us.updateuser(u);
       return new RedirectView("http://localhost:3000/") ;
    }
    }


