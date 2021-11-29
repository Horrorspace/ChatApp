CREATE ROLE chat_admin WITH LOGIN PASSWORD 'KQoEgwBi';
CREATE DATABASE chat OWNER chat_admin;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255), 
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  online BOOLEAN DEFAULT false,
  avatar_src VARCHAR(255) DEFAULT ''
);

CREATE TABLE messages(
  id SERIAL PRIMARY KEY,
  user_id SERIAL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  created TIMESTAMP WITH TIME ZONE,
  date_to_do TIMESTAMP WITH TIME ZONE,
  date_complete TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
  date_cancel  TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
  date_delete  TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
  title VARCHAR(255),
  task TEXT,
  is_priority BOOLEAN DEFAULT false,
  is_complete BOOLEAN DEFAULT false,
  is_cancel BOOLEAN DEFAULT false,
  is_delete BOOLEAN DEFAULT false
);
