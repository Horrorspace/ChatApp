CREATE ROLE chat_admin WITH LOGIN PASSWORD 'KQoEgwBi';
CREATE DATABASE chat OWNER chat_admin;
CREATE DATABASE chat_sessions OWNER chat_admin;

-- CREATE TABLE User(
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255), 
--   email VARCHAR(255) UNIQUE,
--   password VARCHAR(255),
--   online BOOLEAN DEFAULT false,
--   avatarSrc VARCHAR(255) DEFAULT '',
--   confirmed BOOLEAN DEFAULT false
-- );

-- CREATE TABLE Message(
--   id SERIAL PRIMARY KEY,
--   date TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
--   text TEXT,
--   readed BOOLEAN DEFAULT false,
--   fromUserId SERIAL,
--   FOREIGN KEY (fromUserId) REFERENCES users (id),
--   toUserId SERIAL,
--   FOREIGN KEY (toUserId) REFERENCES users (id)
-- );
