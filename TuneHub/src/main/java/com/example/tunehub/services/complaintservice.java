package com.example.tunehub.services;

import java.util.List;

import com.example.tunehub.entities.complaint;

public interface complaintservice {
    public String registercomplaint(complaint c);
    public List<complaint>getcmps();
    public String deletecomp(int tid);

}
