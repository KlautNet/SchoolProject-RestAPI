CREATE DATABASE firstapi;

CREATE TABLE users (
    id INTEGER SERIAL PRIMARY KEY,
    user VARCHAR(500),
    properties LONGTEXT,
    added timestamp DEFAULT current_timestamp,
    last_change timestamp DEFAULT current_timestamp
);


