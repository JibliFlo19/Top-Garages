package com.TopGarages.top_garages_backend.repository;
import com.TopGarages.top_garages_backend.model.Services;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepository extends JpaRepository<Services, Long> {
	 List<Services> findByGarageId(Long garageId);
	 }

