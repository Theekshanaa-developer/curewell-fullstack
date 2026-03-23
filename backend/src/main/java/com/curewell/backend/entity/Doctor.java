package com.curewell.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name="doctor")
public class Doctor
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doctorId;
    private String name;

    private String specializationCode;

    //default constructor
    public Doctor(){}

    //get set
    public int getDoctorId(){
        return doctorId;
    }
    public void setDoctorId(int doctorId)
    {
        this.doctorId=doctorId;
    }
    public String getName(){
        return name;
    }
    public void setName(String name)
    {
        this.name=name;
    }
    public String getSpecializationCode()
    {
        return specializationCode;
    }
    public void setSpecializationCode(String specializationCode)
    {
        this.specializationCode=specializationCode;
    }
}