CREATE TABLE Accounts (
    organizationId VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    shelters VARCHAR(255),
    PRIMARY KEY (organizationId)
);

CREATE TABLE Shelters (
    id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    owner VARCHAR(255) NOT NULL,
    published BOOLEAN NOT NULL DEFAULT 0,
    animals VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (owner) REFERENCES Accounts(organizationId)
);

ALTER TABLE Accounts ADD FOREIGN KEY (shelters) REFERENCES Shelters(id);

CREATE TABLE Animals (
    id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    birthDate VARCHAR(255),
    shelter VARCHAR(255),
    organization VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (shelter) REFERENCES Shelters(id),
    FOREIGN KEY (organization) REFERENCES Accounts(organizationId)
);

ALTER TABLE Shelters ADD FOREIGN KEY (animals) REFERENCES Animals(id);

