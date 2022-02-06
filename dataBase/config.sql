-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 03-02-2022 a las 02:39:44
-- Versión del servidor: 8.0.27-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bridges`
--
USE bridges;
-- --------------------------------------------------------

--
-- Volcado de datos para la tabla `rol`
--
INSERT INTO `rol` (`id`, `name_rol`) VALUES
(1, 'ROL_ADMIN'),
(2, 'ROL_USER');

--
-- Volcado de datos para la tabla `user`
--
INSERT INTO `user` (`id`, `email`, `name`, `password`, `user_name`, `token_password`) VALUES
(1, 'admin', 'admin', '$2a$10$vvWB4g0sIOZQ9sW0qbTtm.PsJiT53/WwvbbeOnrB.f3EVHkXA0qD.', 'admin', NULL),
(2, 'user', 'user', '$2a$10$iZQKAENF0PLmTlqpCknL1OZgNjiTZXQtKTFxM9lDbjGLHaCW19hV.', 'user', NULL);


--
-- Volcado de datos para la tabla `user_rol`
--
INSERT INTO `user_rol` (`user_id`, `rol_id`) VALUES
(1, 1),
(1, 2),
(2, 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
