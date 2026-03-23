package com.curewell.backend.repository;
import com.curewell.backend.entity.Surgery;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SurgeryRepository extends JpaRepository<Surgery,Long>{


    List<Surgery> findByDoctorId (int DoctorId);

    //query for time conflict

    List<Surgery> findByDoctorIdAndSurgeryDate(int doctorId, LocalDate surgeryDate);

}