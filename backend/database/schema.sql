CREATE TABLE Accounts (
    organizationId VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    creationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (organizationId)
);

CREATE TABLE Shelters (
    id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    owner VARCHAR(255) NOT NULL,
    published BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (id),
    FOREIGN KEY (owner) REFERENCES Accounts(organizationId) ON DELETE SET NULL
);

CREATE TABLE Employees (
    id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    shelter VARCHAR(255),
    organization VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (shelter) REFERENCES Shelters(id) ON DELETE SET NULL,
    FOREIGN KEY (organization) REFERENCES Accounts(organizationId) ON DELETE SET NULL
);

CREATE TABLE Animals (
    id VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255),
    birthDate DATE,
    sex ENUM('male', 'female'),
    adopted BOOLEAN NOT NULL DEFAULT false,
    description MEDIUMTEXT,
    shelter VARCHAR(255),
    organization VARCHAR(255),
    employee VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (shelter) REFERENCES Shelters(id) ON DELETE SET NULL,
    FOREIGN KEY (organization) REFERENCES Accounts(organizationId) ON DELETE SET NULL,
    FOREIGN KEY (employee) REFERENCES Employees(id) ON DELETE SET NULL
);

