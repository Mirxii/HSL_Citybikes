CREATE DATABASE IF NOT EXISTS citybikes;
USE citybikes;

CREATE TABLE IF NOT EXISTS citybikes.journeys (
    id INT NOT NULL AUTO_INCREMENT,
    departure_time DATETIME NOT NULL,
    return_time DATETIME NOT NULL,
    departure_station_id INT NOT NULL,
    departure_station_name VARCHAR(255) NOT NULL,
    return_station_id INT NOT NULL,
    return_station_name VARCHAR(255) NOT NULL,
    covered_distance FLOAT NOT NULL,
    duration INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS citybikes.stations (
    id INT NOT NULL AUTO_INCREMENT,
    station_id INT NOT NULL,
    name_fi VARCHAR(255) NOT NULL,
    name_sv VARCHAR(255) NOT NULL,
    name_en VARCHAR(255) NOT NULL,
    address_fi VARCHAR(255) NOT NULL,
    address_sv VARCHAR(255) NOT NULL,
    city_fi VARCHAR(255) NOT NULL,
    city_sv VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    PRIMARY KEY (id)
);

LOAD DATA INFILE '/journey_data.csv' 
INTO TABLE citybikes.journeys 
FIELDS TERMINATED BY ';'
IGNORE 1 LINES
(departure_time, return_time, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance, duration);

LOAD DATA INFILE '/station_data.csv' 
INTO TABLE citybikes.stations 
FIELDS TERMINATED BY ';'
IGNORE 1 LINES
(station_id, name_fi, name_sv, name_en, address_fi, address_sv, city_fi, city_sv, capacity, latitude, longitude) 
;
