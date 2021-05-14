# fawProject
 Assigned technical project for faw


Assigned techincal project for faw. Assignment is as follows,

One screen that allows you to add simple fish records.
Each record allows you to record a fish length, the sex of the fish (Male or Female), and what species the fish is (Black Rockfish, Chinook Salmon, or Dungeness Crab).
You should be able to add/delete/update each fish record.
Create a README doc in your GitHub repo that explains how to install any dependencies and how to get the app running on my machine.

I've setup the angular application and also created an API to connect it to a mySQL database. Please follow these steps in order to test my work. You will also need to download and install nodejs on your machine in order to run my application.

1. Setting up mySQL.

	Install mySQL Workbench and server through their website.
	
	Once installed, launch mySQL workbench and create a new connection. My API is looking at port 3306 and is simply using "root" as the username and "4565" as the password.
	
	After the connection has been established create a database called "catches" using the following and setup a table called "fish" using the following;
	
		create database catches

		use catches

		create table fish(
		id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
		fish_length int,
		sex varchar(20),
		species varchar(20)
		) 
		
	From here the database should be setup.
	
2. Setting up fishrestapi.

	I used Java1.8 to compile the api.
	Using some sort of terminal, navigate to ./fawProject/fishrestapi/target and run the following line
	
		java -jar fishrestapi-0.0.1-SNAPSHOT.jar
		
	From here the API should be running.
	
3. Setting up the Web Application

	If you do not have angular already installed, open a terminal and run the following command to install.
	
		npm install -g @angular/cli
		
	Once installed navigate using a terminal to ./fawProject/fawProject/dist/fawProject
	
	Once here, run the following command,
	
		ng serve
		
Everything should be setup at this point. Open a browser of your choice and navigate to http://localhost:4200/
