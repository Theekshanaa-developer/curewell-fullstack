package com.curewell.backend.repository;
import com.curewell.backend.entity.Doctor;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorRepository extends JpaRepository<Doctor,Integer>{

    List<Doctor> findBySpecializationCode(String specializationCode);
}