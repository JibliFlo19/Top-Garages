package com.TopGarages.top_garages_backend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.TopGarages.top_garages_backend.model.Review;
import com.TopGarages.top_garages_backend.service.ReviewService;

@CrossOrigin
@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public ResponseEntity<Review> addReview(@RequestBody Review review) {
        return ResponseEntity.ok(reviewService.addReview(review));
    }

    @GetMapping("/garage/{garageId}")
    public ResponseEntity<List<Review>> getReviewsByGarage(@PathVariable Long garageId) {
        return ResponseEntity.ok(reviewService.getReviewsByGarage(garageId));
    }
}




