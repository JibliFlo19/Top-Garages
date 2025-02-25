package com.TopGarages.top_garages_backend.service;


import com.TopGarages.top_garages_backend.model.Garage;
import com.TopGarages.top_garages_backend.model.Review;
import com.TopGarages.top_garages_backend.repository.GarageRepository;
import com.TopGarages.top_garages_backend.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    public final GarageRepository garageRepository;

    public ReviewService(ReviewRepository reviewRepository,GarageRepository garageRepository) {
        this.reviewRepository = reviewRepository;
        this.garageRepository=garageRepository;
    }

    public Review addReview(Review review) {
        Garage garage = garageRepository.findById(review.getGarage().getId())
            .orElseThrow(() -> new RuntimeException("Garajul nu a fost găsit"));
        review.setGarage(garage); 
        return reviewRepository.save(review); 
        }

    public List<Review> getReviewsByGarage(Long garageId) {
        return reviewRepository.findByGarageId(garageId);
        
    }
}





