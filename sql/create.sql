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
  date TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
  text TEXT,
  readed BOOLEAN DEFAULT false,
  from_user_id SERIAL,
  FOREIGN KEY (from_user_id) REFERENCES users (id),
  to_user_id SERIAL,
  FOREIGN KEY (to_user_id) REFERENCES users (id),
);
