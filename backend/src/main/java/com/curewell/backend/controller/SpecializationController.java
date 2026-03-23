package com.curewell.backend.controller;
import com.curewell.backend.entity.Specialization;
import com.curewell.backend.repository.SpecializationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/specializations")


public class SpecializationController{

    @Autowired
    private SpecializationRepository specializationRepository;

    @GetMapping
    public List<Specialization> getAll(){
        return specializationRepository.findAll();
    }

    //POST add d
    @PostMapping
    public Specialization add(@RequestBody Specialization specialization){
        return specializationRepository.save(specialization);
    }


    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id)
    {
        specializationRepository.deleteById(id);
        return "Specialization deleted successfully";
    }


}