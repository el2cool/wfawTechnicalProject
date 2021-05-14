package com.fish.springweb.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Fish {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private int fish_length;
	private String sex;
	private String Species;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getFishLength() {
		return fish_length;
	}

	public void setFishLength(int length) {
		this.fish_length = length;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getSpecies() {
		return Species;
	}

	public void setSpecies(String species) {
		Species = species;
	}

}
