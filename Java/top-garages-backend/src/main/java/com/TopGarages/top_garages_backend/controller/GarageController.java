package com.TopGarages.top_garages_backend.controller;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.TopGarages.top_garages_backend.model.Garage;
import com.TopGarages.top_garages_backend.service.GarageService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/garages")
public class GarageController {
	private final GarageService garageService;
   
    public GarageController(GarageService garageService) {
        this.garageService = garageService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Garage> getGarageById(@PathVariable Long id) {
        Garage garage = garageService.getGarageById(id);
        if (garage != null) {
            return ResponseEntity.ok(garage);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }
    
    @PostMapping
    public ResponseEntity<Garage> addGarage(@RequestBody Garage garage) {
        Garage savedGarage = garageService.addGarage(garage);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedGarage);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGarage(@PathVariable Long id) {
        garageService.deleteGarage(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/search")
    public List<Garage> getGarages(
            @RequestParam(required = false) String location,
            @RequestParam(required = false) Double rating)
             {
        return garageService.getGarages(location, rating);
    }

}



