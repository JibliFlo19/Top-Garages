package com.TopGarages.top_garages_backend.model;

import jakarta.persistence.*;

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String comment;
    private int rating;
    @ManyToOne
    @JoinColumn(name = "garage_id")
    private Garage garage;


    public Review() {}

    public Review(String username, String comment, int rating, Garage garage) {
        this.username = username;
        this.comment = comment;
        this.rating = rating;
        this.garage = garage;
    }

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Garage getGarage() {
        return garage;
    }

    public void setGarage(Garage garage) {
        this.garage = garage;
    }
}




