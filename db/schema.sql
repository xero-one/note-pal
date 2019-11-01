CREATE DATABASE notetaker_db;

USE notetaker_db;

CREATE TABLE notes (
    note_id INTEGER(11) AUTO_INCREMENT NOT NULL,
    note_category VARCHAR(55) NOT NULL,
    note_text VARCHAR(300),
    color INTEGER(5) DEFAULT 5 NOT NULL,
    create_date DATETIME DEFAULT NOT NULL CURRENT_TIMESTAMP,
    modify_date DATETIME
);