package com.TopGarages.top_garages_backend.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;

import jakarta.persistence.ManyToOne;

@Entity
public class Services {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	
	@Column(nullable = false)
	private double price=0.0;
	
	@ManyToOne
	@JoinColumn(name = "garage_id")
	@JsonIgnore
	private Garage garage;
	
	public Services() {
		
	}
	
	@JsonCreator
    public Services(@JsonProperty("name") String name, @JsonProperty("price") double price) {
        this.name = name;
        this.price = price;
    }

	public Services(Long id, String name, double price, Garage garage) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.garage = garage;
	}

	public Garage getGarage() {
		return garage;
	}

	public void setGarage(Garage garage) {
		this.garage = garage;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
}
