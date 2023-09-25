--
-- PostgreSQL database dump
--

-- Open your terminal

-- Run psql
psql

-- Create DB
CREATE DATABASE contactapp;

-- View all databases
\l

-- Connect to the db
psql contactapp;

-- Create table
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(50),
    address TEXT,
    image_path VARCHAR(512)
);

-- View all tables
\dt

-- Insert rows into table
INSERT INTO contacts (first_name, last_name, email, phone_number, address, image_path) 
VALUES 
('Gon', 'Freecss', 'gon@example.com', '+1234567890', '123 Main St, Anytown, Anystate, 12345', 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Gon-Freecss-Hunter-x-Hunter-anime.jpg'),

('Killua', 'Zoldyck', 'killua@example.com', '+0987654321', '456 Elm St, Somecity, Somestate, 67890', 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/11/Killua-Zoldyck-Hunter-x-Hunter-.jpg?q=50&fit=crop&w=1500&dpr=1.5'),

('Kurapika', 'Kurta', 'kurapika@example.com', '+1122334455', '789 Pine St, Thistown, Thatstate, 11223', 'https://static.wikia.nocookie.net/characterprofile/images/d/d7/11a60a1fd8c74a675308549d7c57d8df.jpg/revision/latest?cb=20200716142716');

-- View the list
SELECT * FROM contacts;


--
-- PostgreSQL database dump complete
--