CREATE DATABASE prontobpo;

USE prontobpo;

CREATE TABLE `users` (
`userId` int (11) NOT NULL AUTO_INCREMENT,
`name` varchar(100),
PRIMARY KEY (`userId`),
UNIQUE KEY `name` (`name`)
)


CREATE TABLE `meetings` (
`meetingId` int(5) NOT NULL AUTO_INCREMENT,
`meetingTime` time NOT NULL,
`availableTime` time DEFAULT NULL,
`userId` int(11),
PRIMARY KEY (`meetingId`),
KEY `userId`(`userId`)
)