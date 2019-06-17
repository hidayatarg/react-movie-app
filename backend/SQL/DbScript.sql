-- User Table
CREATE TABLE users(
   id serial PRIMARY KEY,
   username VARCHAR (50) UNIQUE NOT NULL,
   password VARCHAR (50) NOT NULL,
   email VARCHAR (355) UNIQUE NOT NULL,
   created_on TIMESTAMP NOT NULL,
   last_login TIMESTAMP
);
CREATE TABLE movies(
   id serial PRIMARY KEY,
   title VARCHAR,
   cover VARCHAR 
);

INSERT INTO users (username, password) VALUES ('anc', '$2a$08$HMdQ9Hj8zyH3wTKFX5HeTe6qwdQhl.RtxEDKQeCk0ORdVe2nyeOgG')