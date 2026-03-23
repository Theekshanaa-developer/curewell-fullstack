package com.curewell.backend.entity;
import jakarta.persistence.*;

@Entity
@Table(name="specialization")
public class Specialization
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int specializationId;
    @Column(name="code")
    private String specializationCode;
    private String name;


    //default constructor
    public Specialization(){}

    //get set
    public int getSpecializationId(){
        return specializationId;
    }
    public void setSpecializationIdId(int specializationId)
    {
        this.specializationId=specializationId;
    }
    public String getCode(){
        return specializationCode;
    }
    public void setCode(String specializationCode){
        this.specializationCode=specializationCode;
    }
    public String getName(){
        return name;
    }
    public void setName(String name)
    {
        this.name=name;
    }


}