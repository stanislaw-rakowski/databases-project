CREATE TABLE `Organizations` (
    `id` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255),
    `password` VARCHAR(255),
    PRIMARY KEY (`id`)
);

CREATE TABLE `Shelters` (
    `id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `owner` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (owner) REFERENCES Organizations(id)
)
