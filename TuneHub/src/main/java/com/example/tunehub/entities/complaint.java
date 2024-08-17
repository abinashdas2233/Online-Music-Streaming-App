package com.example.tunehub.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class complaint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int Ticketid;
    String Name;
    String Email;
    long num;
    String Feedback;
    public complaint() {
        super();
    }
    public complaint(int ticketid, String name, String email, long num, String feedback) {
        super();
        Ticketid = ticketid;
        Name = name;
        Email = email;
        this.num = num;
        Feedback = feedback;
    }
    public int getTicketid() {
        return Ticketid;
    }
    public void setTicketid(int ticketid) {
        Ticketid = ticketid;
    }
    public String getName() {
        return Name;
    }
    public void setName(String name) {
        Name = name;
    }
    public String getEmail() {
        return Email;
    }
    public void setEmail(String email) {
        Email = email;
    }
    public long getNum() {
        return num;
    }
    public void setNum(long num) {
        this.num = num;
    }
    public String getFeedback() {
        return Feedback;
    }
    public void setFeedback(String feedback) {
        Feedback = feedback;
    }
    @Override
    public String toString() {
        return "complaint [Ticketid=" + Ticketid + ", Name=" + Name + ", Email=" + Email + ", num=" + num
                + ", Feedback=" + Feedback + "]";
    }
   
    


}
