package com.curewell.backend.controller;
import com.curewell.backend.entity.Patient;
import com.curewell.backend.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
@CrossOrigin

public class PatientController{

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping
    public List<Patient> getAllPatients(){
        return patientRepository.findAll();
    }

    //POST add d
    @PostMapping
    public Patient addDoctor(@RequestBody Patient patient){
        return patientRepository.save(patient);
    }


    @DeleteMapping("/{id}")
    public String deletePatient(@PathVariable int id)
    {
        patientRepository.deleteById(id);
        return "Patient deleted successfully";
    }


}