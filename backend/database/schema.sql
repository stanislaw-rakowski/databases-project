CREATE TABLE `Posts` (
    `id` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255),
    `title` VARCHAR(255),
    `content` VARCHAR(255),
    PRIMARY KEY (`id`)
);

INSERT INTO `Posts` (`id`, `author`, `title`, `content`) VALUES (`123`, `John`, `test`, `content`);