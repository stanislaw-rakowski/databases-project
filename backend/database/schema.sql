CREATE TABLE Accounts (
    organizationId VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (organizationId)
);

CREATE TABLE Shelters (
    shelterId VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    owner VARCHAR(255),
    published BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (shelterId),
    FOREIGN KEY (owner) REFERENCES Accounts(organizationId) ON DELETE SET NULL
);

CREATE TABLE Employees (
    id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    shelter VARCHAR(255),
    organization VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (shelter) REFERENCES Shelters(shelterId) ON DELETE SET NULL,
    FOREIGN KEY (organization) REFERENCES Accounts(organizationId) ON DELETE SET NULL
);

CREATE TABLE Species (
    name ENUM('dog', 'cat', 'other'),
    count SMALLINT UNSIGNED,
    PRIMARY KEY (name)
);

CREATE TABLE Animals (
    id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    birthDate VARCHAR(255),
    gender ENUM('male', 'female'),
    species ENUM('dog', 'cat', 'other'),
    adopted BOOLEAN NOT NULL DEFAULT false,
    adoptionDate VARCHAR(255),
    description MEDIUMTEXT,
    shelter VARCHAR(255),
    organization VARCHAR(255),
    employee VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (shelter) REFERENCES Shelters(shelterId) ON DELETE SET NULL,
    FOREIGN KEY (organization) REFERENCES Accounts(organizationId) ON DELETE SET NULL,
    FOREIGN KEY (employee) REFERENCES Employees(id) ON DELETE SET NULL,
    FOREIGN KEY (species) REFERENCES Species(name) ON DELETE SET NULL
);

INSERT INTO Species (name, count) VALUES ('dog', 0);
INSERT INTO Species (name, count) VALUES ('cat', 0);
INSERT INTO Species (name, count) VALUES ('other', 0);

DELIMITER $$
CREATE TRIGGER increment_species_count AFTER INSERT ON Animals
FOR EACH ROW
BEGIN
   UPDATE Species SET count = count + 1 WHERE name = NEW.species;
END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER decrement_species_count AFTER DELETE ON Animals
FOR EACH ROW
BEGIN
   UPDATE Species SET count = count - 1 WHERE name = OLD.species;
END$$
DELIMITER ;
