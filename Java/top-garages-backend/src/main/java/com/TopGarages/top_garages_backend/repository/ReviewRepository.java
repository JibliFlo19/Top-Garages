package com.TopGarages.top_garages_backend.repository;
import com.TopGarages.top_garages_backend.model.Review;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByGarageId(Long garageId);
    void deleteByGarageId(Long garageId);
}


