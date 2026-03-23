package com.curewell.backend.repository;
import com.curewell.backend.entity.Patient;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient,Integer>{
}