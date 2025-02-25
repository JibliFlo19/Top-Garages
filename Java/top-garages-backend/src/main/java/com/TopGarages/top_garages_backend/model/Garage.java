package com.TopGarages.top_garages_backend.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="garage")
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
//@Builder
//@Getter
//@Setter
public class Garage {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String name;
    private String imageUrl;
    private String location;
    private String schedule;
    private String description;
    private String contact;
    @Transient  // Nu va fi salvat în baza de date
    private Double averageRating;

	@OneToMany(mappedBy = "garage", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Services> services;
    
    @OneToMany(mappedBy = "garage", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews;
    
    public Garage() {
		super();
	}

	public Garage(Long id, String name, String image, String location, String schedule, String description,
			String contact, List<Services> services, List<Review> reviews) {
		super();
		this.id = id;
		this.name = name;
		this.imageUrl = image;
		this.location = location;
		this.schedule = schedule;
		this.description = description;
		this.contact = contact;
		this.services = services;
		this.reviews = reviews;
	}


	public Double getAverageRating() {
	    if (reviews == null || reviews.isEmpty()) {
	        return 0.0;
	    }
	    return reviews.stream()
	                  .mapToInt(Review::getRating)
	                  .average()
	                  .orElse(0.0);
	}
	
	public List<Services> getServices() {
        return services;
    }
    public void setServices(List<Services> services) {
        this.services = services;
    }
	

	public void setAverageRating(Double averageRating) {
		this.averageRating = averageRating;
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

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getSchedule() {
		return schedule;
	}

	public void setSchedule(String schedule) {
		this.schedule = schedule;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
	    return (!this.imageUrl.isEmpty()) ? this.imageUrl : "/Users/jibleanuflorin/Documents/SoftwareAcademy/Proiect /web/top-garages-frontend/photo/poza1.png";
	}


	public void setImage(String image) {

		this.imageUrl = image;
	}
	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

}

