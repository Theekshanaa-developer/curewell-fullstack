package com.curewell.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name="patient")
public class Patient
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int patientId;
    private String name;


    //default constructor
    public Patient(){}

    //get set
    public int getPatientIdId(){
        return patientId;
    }
    public void setPatientIdId(int patientIdId)
    {
        this.patientId=patientId;
    }
    public String getName(){
        return name;
    }
    public void setName(String name)
    {
        this.name=name;
    }


}