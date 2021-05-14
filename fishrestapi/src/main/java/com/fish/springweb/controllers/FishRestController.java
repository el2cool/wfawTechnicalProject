package com.fish.springweb.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fish.springweb.entities.Fish;
import com.fish.springweb.repos.FishRepository;

@RestController
public class FishRestController {
	
	@Autowired
	FishRepository repository;
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/fishes",method=RequestMethod.GET)
	public List<Fish> getFishes(/*@RequestParam(required = false, defaultValue = "World") String name*/) {
		return repository.findAll();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/fishes/{id}",method=RequestMethod.GET)
	public Fish getFish(@PathVariable("id") int id) {
		return repository.findById(id).get();
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/fishes/",method=RequestMethod.POST)
	public Fish createFish(@RequestBody Fish fish) {
		return repository.save(fish);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/fishes/",method=RequestMethod.PUT)
	public Fish updateFish(@RequestBody Fish fish) {
		//fish.setId(id);
		return repository.save(fish);
	}
	
	@CrossOrigin(origins = "*")
	@RequestMapping(value="/fishes/{id}",method=RequestMethod.DELETE)
	public void deleteFish(@PathVariable("id") int id) {
		repository.deleteById(id);
	}

}
