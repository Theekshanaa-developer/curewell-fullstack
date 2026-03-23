package com.curewell.backend.repository;
import com.curewell.backend.entity.Specialization;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecializationRepository extends JpaRepository<Specialization,Integer>{
}