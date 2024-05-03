-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 03 mai 2024 à 10:13
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `dreamgames`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `disponibilité` tinyint(1) DEFAULT '1',
  `category` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `quantityMax` int NOT NULL,
  `prix` int NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `title`, `description`, `disponibilité`, `category`, `quantity`, `quantityMax`, `prix`, `image`) VALUES
(8, 'nes', 'nes', 1, 'console', 1, 2, 10, 'image-1714140231638.jpg'),
(9, 'Manette playstion 1', 'Manette compatible avec la playstation 1', 1, 'Accessoires', 5, 5, 10, 'image-1714207510803.jpg'),
(11, 'playstation 2', 'Console playstation 2', 1, 'console', 3, 3, 50, 'image-1714207906643.jpg'),
(12, 'Playstation 3', 'Console playstation 3 ', 1, 'console', 3, 3, 50, 'image-1714208355518.jpg'),
(13, 'Chaise Gaming', 'Chaise gaming  ultra confortable', 1, 'Accessoires', 3, 3, 10, 'image-1714208664328.jpg'),
(16, 'Final fantasy X et X-2 ps3', ' fantasy X et X-2 sur playstation 3', 1, 'jeux_video', 2, 2, 5, 'image-1714211253769.jpg'),
(17, 'Kingdom heart ps2', 'Jeux kingdom heart sur playstation 2', 1, 'jeux_video', 2, 2, 5, 'image-1714211465049.jpg'),
(20, 'Digimon world', 'Jeux digimon world compatible sur ps1', 1, 'jeux_video', 1, 1, 15, 'image-1714378989843.jpg'),
(22, 'playstation 1', 'console retro de playstation ', 1, 'console', 2, 2, 15, 'image-1714488226599.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

DROP TABLE IF EXISTS `location`;
CREATE TABLE IF NOT EXISTS `location` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `article_id` int NOT NULL,
  `user_id` int NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'a valider',
  PRIMARY KEY (`id`),
  KEY `article_id` (`article_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `location`
--

INSERT INTO `location` (`id`, `date_start`, `date_end`, `article_id`, `user_id`, `status`) VALUES
(36, '2024-05-04', '2024-05-11', 8, 16, 'en cours');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT 'user',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `address` varchar(255) NOT NULL,
  `token` varchar(225) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `role`, `created_at`, `address`, `token`) VALUES
(12, 'admin@admin.admin', 'admin', 'admin', '$2b$10$93zFeek.B9FWqzAP5Ip7uegAfaUOqlIy0mHVuI621k59hPb.RaA6i', 'admin', '2024-04-25 19:02:38', '', ''),
(13, 'oki@oki.oki', 'oki', 'oki', '$2b$10$hqpHhzhwpMJW.8NHWLQoOus0UaS/hHKttForMK9ll5ZBC3r7sZOqi', 'user', '2024-04-28 16:16:35', '9 rue du oki 73000 oki', ''),
(15, 'ok@ok.ok', 'ok', 'ok', '$2b$10$wZ/4m6cAcw3NuEyN2avA9OuvxhbXmkImdYl/NPkVCjzvA1QyIg70S', 'user', '2024-05-02 11:26:13', '9 rue du ok', '$2b$10$ExzF8Q71CpO9cVhcHhWFceWjB/urJr1kQnmCBUYwsMqqPeNZC6PgK'),
(16, 'ez@ez.ez', 'ez', 'ez', '$2b$10$gQiAfSB3N4Y/uCpz6c1fVezQG.P5LxMpBPImhzDlgpGfiwTqYh7vS', 'user', '2024-05-03 09:06:22', '0 ez ez ez', '$2b$10$YtsdL1rDmKAPaOb7oEay..z4iNIFK2M1Gd2/uBgM4WSmfPC/B2da'),
(17, 'aaa@aaa.aaa', 'aaa', 'aaa', '$2b$10$YG/oApybBPRMzZRtnCcYAuYSuPFuzsJgiWdY1bUVvWNkbaUuPE3o2', 'user', '2024-05-03 11:40:33', 'aaa aaaa aaa ', '$2b$10$RUEpu46qlG9h.Tmj17CZYuSN8FkkgGFBrobw3PvNvVKzSUEuA8ACq');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `location_ibfk_1` FOREIGN KEY (`article_id`) REFERENCES `articles` (`id`),
  ADD CONSTRAINT `location_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
