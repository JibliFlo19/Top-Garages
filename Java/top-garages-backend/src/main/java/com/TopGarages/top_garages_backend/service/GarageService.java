package com.TopGarages.top_garages_backend.service;
import java.util.ArrayList;
import java.util.List;
import com.TopGarages.top_garages_backend.model.Services;
import org.springframework.stereotype.Service;
import com.TopGarages.top_garages_backend.model.*;
import com.TopGarages.top_garages_backend.repository.GarageRepository;
import com.TopGarages.top_garages_backend.repository.ReviewRepository;
import com.TopGarages.top_garages_backend.repository.ServiceRepository;

@Service
public class GarageService {
    private final GarageRepository garageRepository;
    private final ReviewRepository reviewRepository;
    private final ServiceRepository serviceRepository;
    

    public GarageService(GarageRepository garageRepository,ReviewRepository reviewRepository,ServiceRepository serviceRepository) {
        this.garageRepository = garageRepository;
        this.reviewRepository = reviewRepository;
        this.serviceRepository=serviceRepository;
    }
   

    public List<Garage> getAllGarages() {
    	List<Garage> result=new ArrayList<>();
        
    	garageRepository.findAll().forEach(result::add);
    	return result;
    }
    
    public Garage getGarageById(Long id) {
        return garageRepository.findById(id).orElse(null);
    }
    
   
    public Garage addGarage(Garage garage) {
        Garage savedGarage = garageRepository.save(garage);

        for (Services services : garage.getServices()) {
            services.setGarage(savedGarage); 
            serviceRepository.save(services); 
        }
        return savedGarage;
    }
    

    public void deleteGarage(Long id) {
        Garage garage = garageRepository.findById(id).orElseThrow(() -> new RuntimeException("Garage not found"));
        reviewRepository.deleteByGarageId(id);
        garageRepository.delete(garage);
    }
    
    
    public List<Garage> getGarages(String location,  Double rating) {	
        if (location==null &&  rating==null ) {
        	return this.getAllGarages(); }
        
        if(location!=null && rating!=null){
        	List<Garage> result=new ArrayList<>();
    		    for(Garage garage:this.getAllGarages()) 
    		    {
    			    if(garage.getAverageRating() >=rating && 
    			       garage.getLocation().equalsIgnoreCase(location)) 
    			    {
    				    result.add(garage);
    			      }
    		}
    		  return result;
          }
        	  if(location!=null)
        	  {
        		  return garageRepository.findByLocation(location);
        	     }
        	  if(rating!=null) 
        	    {
        		  List<Garage> result=new ArrayList<>();
        		  for(Garage garage:this.getAllGarages()) {
        			if(garage.getAverageRating() >=rating)
        			{
        				result.add(garage);
        			}
        		}
        		 return result;
        	}
        	 return null; 
    }
   
}




