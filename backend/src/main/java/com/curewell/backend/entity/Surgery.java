package com.curewell.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name="surgery")
public class Surgery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int surgeryId;

    private int doctorId;
    private LocalDate surgeryDate;

    private LocalTime startTime;  // Changed to LocalTime
    private LocalTime endTime;    // Changed to LocalTime

    private String surgeryCategory;

    // Default constructor, getters, and setters
    public Surgery() {}

    public int getSurgeryId() {
        return surgeryId;
    }

    public void setSurgeryId(int surgeryId) {
        this.surgeryId = surgeryId;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public LocalDate getSurgeryDate() {
        return surgeryDate;
    }

    public void setSurgeryDate(LocalDate surgeryDate) {
        this.surgeryDate = surgeryDate;
    }

    public LocalTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalTime startTime) {
        this.startTime = startTime;
    }

    public LocalTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalTime endTime) {
        this.endTime = endTime;
    }

    public String getSurgeryCategory() {
        return surgeryCategory;
    }

    public void setSurgeryCategory(String surgeryCategory) {
        this.surgeryCategory = surgeryCategory;
    }
}