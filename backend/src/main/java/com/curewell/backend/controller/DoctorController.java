package com.curewell.backend.controller;
import com.curewell.backend.entity.Doctor;
import com.curewell.backend.repository.DoctorRepository;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/doctors")

public class DoctorController{

    @Autowired
    private DoctorRepository doctorRepository;

    //get all doctors
    @GetMapping
    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    //POST add doctor
    @PostMapping
    public Doctor addDoctor(@RequestBody Doctor doctor){
        return doctorRepository.save(doctor);
    }

    //DELETE doctor
    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable int id){
        doctorRepository.deleteById(id);
        return "Doctor deleted";
    }
//PUT  for update doctor names
    @PutMapping("/{id}")
    public Doctor updateDoctor(@PathVariable Integer id, @RequestBody Doctor updatedDoctor)
    {
        Doctor doctor =doctorRepository.findById(id).orElseThrow();
        doctor.setName(updatedDoctor.getName());
        return doctorRepository.save(doctor);



    }
    @GetMapping("/specialization/{SpecializationCode}")
    public List<Doctor> getDoctorsBySpecialization(@PathVariable String SpecializationCode) {
        return doctorRepository.findBySpecializationCode(SpecializationCode);
    }

}