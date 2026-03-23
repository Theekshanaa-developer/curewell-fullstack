package com.curewell.backend.controller;

import com.curewell.backend.entity.Surgery;
import com.curewell.backend.repository.SurgeryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalTime;
import java.util.List;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/surgeries")
public class SurgeryController {

    @Autowired
    private SurgeryRepository surgeryRepository;

    // GET all surgeries
    @GetMapping
    public List<Surgery> getAll() {
        return surgeryRepository.findAll();
    }

    // POST: Add surgery and check for time conflict
    @PostMapping
    public ResponseEntity<String> add(@RequestBody Surgery surgery) {
        try {
            // Log incoming surgery data for debugging
            System.out.println("Incoming surgery data: " + surgery);

            // Existing time conflict check and saving logic
            List<Surgery> existing = surgeryRepository.findByDoctorIdAndSurgeryDate(surgery.getDoctorId(), surgery.getSurgeryDate());

            for (Surgery s : existing) {
                if (surgery.getStartTime().isBefore(s.getEndTime()) && surgery.getEndTime().isAfter(s.getStartTime())) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                            .body("Time conflict: Doctor already has surgery scheduled at the required time");
                }
            }

            // Save surgery if no conflict
            surgeryRepository.save(surgery);
            return ResponseEntity.status(HttpStatus.CREATED).body("Surgery Scheduled successfully");
        } catch (Exception e) {
            e.printStackTrace();  // Log the stack trace for debugging
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while scheduling the surgery");
        }
    }

    // GET surgeries by doctor ID
    @GetMapping("/doctor/{doctorId}")
    public List<Surgery> getByDoctor(@PathVariable int doctorId) {
        return surgeryRepository.findByDoctorId(doctorId);
    }
    @PutMapping("/{id}")
    public  Surgery updateSurgery(@PathVariable Integer id, @RequestBody Surgery surgery)
    {
        surgery.setSurgeryId(id);
        return  surgeryRepository.save(surgery);
    }
}