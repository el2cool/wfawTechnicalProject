package com.fish.springweb.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fish.springweb.entities.Fish;

public interface FishRepository extends JpaRepository<Fish, Integer> {

}
