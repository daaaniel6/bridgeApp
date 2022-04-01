-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 21-03-2022 a las 21:55:42
-- Versión del servidor: 8.0.28-0ubuntu0.20.04.3
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
CREATE DATABASE bridges;
USE bridges;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barrier`
--

CREATE TABLE `barrier` (
  `barrier_id` bigint NOT NULL,
  `material` varchar(450) DEFAULT NULL,
  `cracks_in_one_direction` varchar(450) DEFAULT NULL,
  `cracks_in_two_directions` varchar(450) DEFAULT NULL,
  `beaten` double DEFAULT NULL,
  `painting` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bearing_slab`
--

CREATE TABLE `bearing_slab` (
  `bearing_slab_id` bigint NOT NULL,
  `material` varchar(450) DEFAULT NULL,
  `cracks_in_one_direction` varchar(450) DEFAULT NULL,
  `cracks_in_two_directions` varchar(450) DEFAULT NULL,
  `detachment_of` varchar(450) DEFAULT NULL,
  `potholes` varchar(450) DEFAULT NULL,
  `steel_exhibition` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blueprint`
--

CREATE TABLE `blueprint` (
  `blueprint_id` bigint NOT NULL,
  `blueprint` longblob,
  `name` varchar(450) DEFAULT NULL,
  `description` varchar(450) DEFAULT NULL,
  `number` int DEFAULT NULL,
  `height` double DEFAULT NULL,
  `width` double DEFAULT NULL,
  `bridge_bridge_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bridge`
--

CREATE TABLE `bridge` (
  `bridge_id` bigint NOT NULL,
  `name` varchar(450) NOT NULL,
  `code` varchar(450) DEFAULT NULL,
  `route` varchar(450) DEFAULT NULL,
  `mileage` int DEFAULT NULL,
  `paved_route` varchar(450) DEFAULT NULL,
  `horizontal_alignment` varchar(450) DEFAULT NULL,
  `skew` varchar(450) DEFAULT NULL,
  `north_utm_coordinates` varchar(450) DEFAULT NULL,
  `east_utm_coordinates` varchar(450) DEFAULT NULL,
  `population_before` varchar(450) DEFAULT NULL,
  `population_after` varchar(450) DEFAULT NULL,
  `status` varchar(450) DEFAULT NULL,
  `traffic_light` varchar(450) DEFAULT NULL,
  `evaluation_start_date` date DEFAULT NULL,
  `evaluation_end_date` date DEFAULT NULL,
  `long` varchar(45) DEFAULT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `general_data_general_data_id` bigint DEFAULT NULL,
  `pile_pile_id` bigint DEFAULT NULL,
  `superstructure_superstructure_id` bigint DEFAULT NULL,
  `non_structural_elements_non_structural_elements_id` bigint DEFAULT NULL,
  `channel_channel_id` bigint DEFAULT NULL,
  `other_other_id` bigint DEFAULT NULL,
  `type` varchar(450) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL,
  `municipality_municipality_id` int DEFAULT NULL,
  `user_user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `channel`
--

CREATE TABLE `channel` (
  `channel_id` bigint NOT NULL,
  `river_name` varchar(450) DEFAULT NULL,
  `body_type` varchar(450) DEFAULT NULL,
  `channel_status` varchar(450) DEFAULT NULL,
  `state_zone_adjacent_to_abutments` varchar(450) DEFAULT NULL,
  `channeling` varchar(450) DEFAULT NULL,
  `overflow` varchar(450) DEFAULT NULL,
  `frequency` double DEFAULT NULL,
  `last_overflow_date` date DEFAULT NULL,
  `observation` varchar(4500) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL,
  `image` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comment`
--

CREATE TABLE `comment` (
  `comment_id` bigint NOT NULL,
  `comment` varchar(4500) DEFAULT NULL,
  `tag` varchar(450) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL,
  `bridge_bridge_id` bigint DEFAULT NULL,
  `user_user_id` int DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `concrete_row`
--

CREATE TABLE `concrete_row` (
  `concrete_row_id` bigint NOT NULL,
  `name_concrete` varchar(450) DEFAULT NULL,
  `diagonal_cracks` varchar(450) DEFAULT NULL,
  `vertical_cracks` varchar(450) DEFAULT NULL,
  `stone_loss_per_blow` varchar(450) DEFAULT NULL,
  `steel_exhibition` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL,
  `superstructure_superstructure_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `council`
--

CREATE TABLE `council` (
  `council_id` bigint NOT NULL,
  `name_council` varchar(450) DEFAULT NULL,
  `material` varchar(450) DEFAULT NULL,
  `clean_gasket` varchar(450) DEFAULT NULL,
  `damage` varchar(450) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL,
  `non_structural_elements_non_structural_elements_id` bigint DEFAULT NULL,
  `missing_item` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departament`
--

CREATE TABLE `departament` (
  `departament_id` int NOT NULL,
  `name` varchar(450) DEFAULT NULL,
  `long` varchar(45) DEFAULT NULL,
  `lat` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `departament`
--

INSERT INTO `departament` (`departament_id`, `name`, `long`, `lat`) VALUES
(1, 'Guatemala', NULL, NULL),
(2, 'El Progreso', NULL, NULL),
(3, 'Sacatepéquez', NULL, NULL),
(4, 'Chimaltenango', NULL, NULL),
(5, 'Escuintla', NULL, NULL),
(6, 'Santa Rosa', NULL, NULL),
(7, 'Sololá', NULL, NULL),
(8, 'Totonicapán', NULL, NULL),
(9, 'Quetzaltenango', NULL, NULL),
(10, 'Suchitepéquez', NULL, NULL),
(11, 'Retalhuleu', NULL, NULL),
(12, 'San Marcos', NULL, NULL),
(13, 'Huehuetenango', NULL, NULL),
(14, 'Quiché', NULL, NULL),
(15, 'Baja Verapaz', NULL, NULL),
(16, 'Alta Verapaz', NULL, NULL),
(17, 'Petén', NULL, NULL),
(18, 'Izabal', NULL, NULL),
(19, 'Zacapa', NULL, NULL),
(20, 'Chiquimula', NULL, NULL),
(21, 'Jalapa', NULL, NULL),
(22, 'Jutiapa', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `general_data`
--

CREATE TABLE `general_data` (
  `general_data_id` bigint NOT NULL,
  `length` double DEFAULT NULL,
  `number_sections` int DEFAULT NULL,
  `tread_width` double DEFAULT NULL,
  `curb_width_right` double DEFAULT NULL,
  `curb_width_left` double DEFAULT NULL,
  `bridge_typology` varchar(450) DEFAULT NULL,
  `top_headroom` double DEFAULT NULL,
  `free_height_above_river` double DEFAULT NULL,
  `bridge_over` varchar(450) DEFAULT NULL,
  `number_roads` int DEFAULT NULL,
  `superstructure_material` varchar(450) DEFAULT NULL,
  `traffic` double DEFAULT NULL,
  `percentage_trucks_buses` double DEFAULT NULL,
  `last_evaluation_date` date DEFAULT NULL,
  `design_load` varchar(255) DEFAULT NULL,
  `substructure_material` varchar(255) DEFAULT NULL,
  `year_of_construction` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `handrail_railing`
--

CREATE TABLE `handrail_railing` (
  `handrail_railing_id` bigint NOT NULL,
  `material` varchar(450) DEFAULT NULL,
  `absence_of_section` varchar(450) DEFAULT NULL,
  `element_deformation` varchar(450) DEFAULT NULL,
  `beaten` double DEFAULT NULL,
  `painting` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `image`
--

CREATE TABLE `image` (
  `image_id` bigint NOT NULL,
  `name` varchar(4500) DEFAULT NULL,
  `comment` varchar(450) DEFAULT NULL,
  `image` longblob,
  `bridge_bridge_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `image_other`
--

CREATE TABLE `image_other` (
  `image_other_id` bigint NOT NULL,
  `name` varchar(4500) DEFAULT NULL,
  `comment` varchar(450) DEFAULT NULL,
  `image` longblob,
  `other_other_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `municipality`
--

CREATE TABLE `municipality` (
  `municipality_id` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `long` varchar(45) DEFAULT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `departament_departament_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `municipality`
--

INSERT INTO `municipality` (`municipality_id`, `name`, `long`, `lat`, `departament_departament_id`) VALUES
(1, 'Guatemala', '', '101', 1),
(2, 'Santa Catarina Pinula', '', '102', 1),
(3, 'San José Pinula', '', '103', 1),
(4, 'San José del Golfo', '', '104', 1),
(5, 'Palencia', '', '105', 1),
(6, 'Chinautla', '', '106', 1),
(7, 'San Pedro Ayampuc', '', '107', 1),
(8, 'Mixco', '', '108', 1),
(9, 'San Pedro Sacatepéquez', '', '109', 1),
(10, 'San Juan Sacatepéquez', '', '110', 1),
(11, 'San Raymundo', '', '111', 1),
(12, 'Chuarrancho', '', '112', 1),
(13, 'Fraijanes', '', '113', 1),
(14, 'Amatitlán', '', '114', 1),
(15, 'Villa Nueva', '', '115', 1),
(16, 'Villa Canales', '', '116', 1),
(17, 'Petapa', '', '117', 1),
(18, 'Guastatoya', '', '201', 2),
(19, 'Morazán', '', '202', 2),
(20, 'San Agustín Acasaguastlán', '', '203', 2),
(21, 'San Cristóbal Acasaguastlán', '', '204', 2),
(22, 'El Jícaro', '', '205', 2),
(23, 'Sansare', '', '206', 2),
(24, 'Sanarate', '', '207', 2),
(25, 'San Antonio la Paz', '', '208', 2),
(26, 'Antigua Guatemala', '', '301', 3),
(27, 'Jocotenango', '', '302', 3),
(28, 'Pastores', '', '303', 3),
(29, 'Sumpango', '', '304', 3),
(30, 'Santo Domingo Xenacoj', '', '305', 3),
(31, 'Santiago Sacatepéquez', '', '306', 3),
(32, 'San Bartolomé Milpas Altas', '', '307', 3),
(33, 'San Lucas Sacatepéquez', '', '308', 3),
(34, 'Santa Lucía Milpas Altas', '', '309', 3),
(35, 'Magdalena Milpas Altas', '', '310', 3),
(36, 'Santa María de Jesús', '', '311', 3),
(37, 'Ciudad Vieja', '', '312', 3),
(38, 'San Miguel Dueñas', '', '313', 3),
(39, 'Alotenango', '', '314', 3),
(40, 'San Antonio Aguas Calientes', '', '315', 3),
(41, 'Santa Catarina Barahona', '', '316', 3),
(42, 'Chimaltenango', '', '401', 4),
(43, 'San José Poaquil', '', '402', 4),
(44, 'San Martín Jilotepeque', '', '403', 4),
(45, 'Comalapa', '', '404', 4),
(46, 'Santa Apolonia', '', '405', 4),
(47, 'Tecpán Guatemala', '', '406', 4),
(48, 'Patzún', '', '407', 4),
(49, 'Pochuta', '', '408', 4),
(50, 'Patzicía', '', '409', 4),
(51, 'Santa Cruz Balanyá', '', '410', 4),
(52, 'Acatenango', '', '411', 4),
(53, 'Yepocapa', '', '412', 4),
(54, 'San Andrés Itzapa', '', '413', 4),
(55, 'Parramos', '', '414', 4),
(56, 'Zaragoza', '', '415', 4),
(57, 'El Tejar', '', '416', 4),
(58, 'Escuintla', '', '501', 5),
(59, 'Santa Lucía Cotzumalguapa', '', '502', 5),
(60, 'La Democracia', '', '503', 5),
(61, 'Siquinalá', '', '504', 5),
(62, 'Masagua', '', '505', 5),
(63, 'Tiquisate', '', '506', 5),
(64, 'La Gomera', '', '507', 5),
(65, 'Guanagazapa', '', '508', 5),
(66, 'San José', '', '509', 5),
(67, 'Iztapa', '', '510', 5),
(68, 'Palín', '', '511', 5),
(69, 'San Vicente Pacaya', '', '512', 5),
(70, 'Nueva Concepción', '', '513', 5),
(71, 'Cuilapa', '', '601', 6),
(72, 'Barberena', '', '602', 6),
(73, 'Santa Rosa de Lima', '', '603', 6),
(74, 'Casillas', '', '604', 6),
(75, 'San Rafael las Flores', '', '605', 6),
(76, 'Oratorio', '', '606', 6),
(77, 'San Juan Tecuaco', '', '607', 6),
(78, 'Chiquimulilla', '', '608', 6),
(79, 'Taxisco', '', '609', 6),
(80, 'Santa María Ixhuatán', '', '610', 6),
(81, 'Guazacapán', '', '611', 6),
(82, 'Santa Cruz Naranjo', '', '612', 6),
(83, 'Pueblo Nuevo Viñas', '', '613', 6),
(84, 'Nueva Santa Rosa', '', '614', 6),
(85, 'Sololá', '', '701', 7),
(86, 'San José Chacayá', '', '702', 7),
(87, 'Santa María Visitación', '', '703', 7),
(88, 'Santa Lucía Utatlán', '', '704', 7),
(89, 'Nahualá', '', '705', 7),
(90, 'Santa Catarina Ixtahuacán', '', '706', 7),
(91, 'Santa Clara la Laguna', '', '707', 7),
(92, 'Concepción', '', '708', 7),
(93, 'San Andrés Semetabaj', '', '709', 7),
(94, 'Panajachel', '', '710', 7),
(95, 'Santa Catarina Palopó', '', '711', 7),
(96, 'San Antonio Palopó', '', '712', 7),
(97, 'San Lucas Tolimán', '', '713', 7),
(98, 'Santa Cruz la Laguna', '', '714', 7),
(99, 'San Pablo la Laguna', '', '715', 7),
(100, 'San Marcos la Laguna', '', '716', 7),
(101, 'San Juan la Laguna', '', '717', 7),
(102, 'San Pedro la Laguna', '', '718', 7),
(103, 'Santiago Atitlán', '', '719', 7),
(104, 'Totonicapán', '', '801', 8),
(105, 'San Cristóbal Totonicapán', '', '802', 8),
(106, 'San Francisco el Alto', '', '803', 8),
(107, 'San Andrés Xecul', '', '804', 8),
(108, 'Momostenango', '', '805', 8),
(109, 'Santa María Chiquimula', '', '806', 8),
(110, 'Santa Lucía la Reforma', '', '807', 8),
(111, 'San Bartolo', '', '808', 8),
(112, 'Quetzaltenango', '', '901', 9),
(113, 'Salcajá', '', '902', 9),
(114, 'Olintepeque', '', '903', 9),
(115, 'San Carlos Sija', '', '904', 9),
(116, 'Sibilia', '', '905', 9),
(117, 'Cabricán', '', '906', 9),
(118, 'Cajolá', '', '907', 9),
(119, 'San Miguel Siguilá', '', '908', 9),
(120, 'Ostuncalco', '', '909', 9),
(121, 'San Mateo', '', '910', 9),
(122, 'Concepción Chiquirichapa', '', '911', 9),
(123, 'San Martín Sacatepéquez', '', '912', 9),
(124, 'Almolonga', '', '913', 9),
(125, 'Cantel', '', '914', 9),
(126, 'Huitán', '', '915', 9),
(127, 'Zunil', '', '916', 9),
(128, 'Colomba', '', '917', 9),
(129, 'San Francisco la Unión', '', '918', 9),
(130, 'El Palmar', '', '919', 9),
(131, 'Coatepeque', '', '920', 9),
(132, 'Génova', '', '921', 9),
(133, 'Flores Costa Cuca', '', '922', 9),
(134, 'La Esperanza', '', '923', 9),
(135, 'Palestina de los Altos', '', '924', 9),
(136, 'Mazatenango', '', '1001', 10),
(137, 'Cuyotenango', '', '1002', 10),
(138, 'San Francisco Zapotitlán', '', '1003', 10),
(139, 'San Bernardino', '', '1004', 10),
(140, 'San José el Idolo', '', '1005', 10),
(141, 'Santo Domingo Suchitepéquez', '', '1006', 10),
(142, 'San Lorenzo', '', '1007', 10),
(143, 'Samayac', '', '1008', 10),
(144, 'San Pablo Jocopilas', '', '1009', 10),
(145, 'San Antonio Suchitepéquez', '', '1010', 10),
(146, 'San Miguel Panán', '', '1011', 10),
(147, 'San Gabriel', '', '1012', 10),
(148, 'Chicacao', '', '1013', 10),
(149, 'Patulul', '', '1014', 10),
(150, 'Santa Bárbara', '', '1015', 10),
(151, 'San Juan Bautista', '', '1016', 10),
(152, 'Santo Tomás la Unión', '', '1017', 10),
(153, 'Zunilito', '', '1018', 10),
(154, 'Pueblo Nuevo', '', '1019', 10),
(155, 'Río Bravo', '', '1020', 10),
(156, 'San José La Máquina', '', '1021', 10),
(157, 'Retalhuleu', '', '1101', 11),
(158, 'San Sebastián', '', '1102', 11),
(159, 'Santa Cruz Muluá', '', '1103', 11),
(160, 'San Martín Zapotitlán', '', '1104', 11),
(161, 'San Felipe', '', '1105', 11),
(162, 'San Andrés Villa Seca', '', '1106', 11),
(163, 'Champerico', '', '1107', 11),
(164, 'Nuevo San Carlos', '', '1108', 11),
(165, 'El Asintal', '', '1109', 11),
(166, 'San Marcos', '', '1201', 12),
(167, 'San Pedro Sacatepéquez', '', '1202', 12),
(168, 'San Antonio Sacatepéquez', '', '1203', 12),
(169, 'Comitancillo', '', '1204', 12),
(170, 'San Miguel Ixtahuacán', '', '1205', 12),
(171, 'Concepción Tutuapa', '', '1206', 12),
(172, 'Tacaná', '', '1207', 12),
(173, 'Sibinal', '', '1208', 12),
(174, 'Tajumulco', '', '1209', 12),
(175, 'Tejutla', '', '1210', 12),
(176, 'San Rafael Pié de la Cuesta', '', '1211', 12),
(177, 'Nuevo Progreso', '', '1212', 12),
(178, 'El Tumbador', '', '1213', 12),
(179, 'El Rodeo', '', '1214', 12),
(180, 'Malacatán', '', '1215', 12),
(181, 'Catarina', '', '1216', 12),
(182, 'Ayutla', '', '1217', 12),
(183, 'Ocós', '', '1218', 12),
(184, 'San Pablo', '', '1219', 12),
(185, 'El Quetzal', '', '1220', 12),
(186, 'La Reforma', '', '1221', 12),
(187, 'Pajapita', '', '1222', 12),
(188, 'Ixchiguán', '', '1223', 12),
(189, 'San José Ojetenán', '', '1224', 12),
(190, 'San Cristóbal Cucho', '', '1225', 12),
(191, 'Sipacapa', '', '1226', 12),
(192, 'Esquipulas Palo Gordo', '', '1227', 12),
(193, 'Río Blanco', '', '1228', 12),
(194, 'San Lorenzo', '', '1229', 12),
(195, 'La Blanca', '', '1230', 12),
(196, 'Huehuetenango', '', '1301', 13),
(197, 'Chiantla', '', '1302', 13),
(198, 'Malacatancito', '', '1303', 13),
(199, 'Cuilco', '', '1304', 13),
(200, 'Nentón', '', '1305', 13),
(201, 'San Pedro Necta', '', '1306', 13),
(202, 'Jacaltenango', '', '1307', 13),
(203, 'Soloma', '', '1308', 13),
(204, 'Ixtahuacán', '', '1309', 13),
(205, 'Santa Bárbara', '', '1310', 13),
(206, 'La Libertad', '', '1311', 13),
(207, 'La Democracia', '', '1312', 13),
(208, 'San Miguel Acatán', '', '1313', 13),
(209, 'San Rafael la Independencia', '', '1314', 13),
(210, 'Todos Santos Cuchumatán', '', '1315', 13),
(211, 'San Juan Atitán', '', '1316', 13),
(212, 'Santa Eulalia', '', '1317', 13),
(213, 'San Mateo Ixtatán', '', '1318', 13),
(214, 'Colotenango', '', '1319', 13),
(215, 'San Sebastián Huehuetenango', '', '1320', 13),
(216, 'Tectitán', '', '1321', 13),
(217, 'Concepción Huista', '', '1322', 13),
(218, 'San Juan Ixcoy', '', '1323', 13),
(219, 'San Antonio Huista', '', '1324', 13),
(220, 'San Sebastián Coatán', '', '1325', 13),
(221, 'Barillas', '', '1326', 13),
(222, 'Aguacatán', '', '1327', 13),
(223, 'San Rafael Petzal', '', '1328', 13),
(224, 'San Gaspar Ixchil', '', '1329', 13),
(225, 'Santiago Chimaltenango', '', '1330', 13),
(226, 'Santa Ana Huista', '', '1331', 13),
(227, 'Unión Cantinil', '', '1332', 13),
(228, 'Santa Cruz del Quiché', '', '1401', 14),
(229, 'Chiché', '', '1402', 14),
(230, 'Chinique', '', '1403', 14),
(231, 'Zacualpa', '', '1404', 14),
(232, 'Chajul', '', '1405', 14),
(233, 'Chichicastenango', '', '1406', 14),
(234, 'Patzité', '', '1407', 14),
(235, 'San Antonio Ilotenango', '', '1408', 14),
(236, 'San Pedro Jocopilas', '', '1409', 14),
(237, 'Cunén', '', '1410', 14),
(238, 'San Juan Cotzal', '', '1411', 14),
(239, 'Joyabaj', '', '1412', 14),
(240, 'Nebaj', '', '1413', 14),
(241, 'San Andrés Sajcabajá', '', '1414', 14),
(242, 'Uspantán', '', '1415', 14),
(243, 'Sacapulas', '', '1416', 14),
(244, 'San Bartolomé Jocotenango', '', '1417', 14),
(245, 'Canillá', '', '1418', 14),
(246, 'Chicamán', '', '1419', 14),
(247, 'Ixcán', '', '1420', 14),
(248, 'Pachalum', '', '1421', 14),
(249, 'Salamá', '', '1501', 15),
(250, 'San Miguel Chicaj', '', '1502', 15),
(251, 'Rabinal', '', '1503', 15),
(252, 'Cubulco', '', '1504', 15),
(253, 'Granados', '', '1505', 15),
(254, 'El Chol', '', '1506', 15),
(255, 'San Jerónimo', '', '1507', 15),
(256, 'Purulhá', '', '1508', 15),
(257, 'Cobán', '', '1601', 16),
(258, 'Santa Cruz Verapaz', '', '1602', 16),
(259, 'San Cristóbal Verapaz', '', '1603', 16),
(260, 'Tactic', '', '1604', 16),
(261, 'Tamahú', '', '1605', 16),
(262, 'Tucurú', '', '1606', 16),
(263, 'Panzós', '', '1607', 16),
(264, 'Senahú', '', '1608', 16),
(265, 'San Pedro Carchá', '', '1609', 16),
(266, 'San Juan Chamelco', '', '1610', 16),
(267, 'Lanquín', '', '1611', 16),
(268, 'Cahabón', '', '1612', 16),
(269, 'Chisec', '', '1613', 16),
(270, 'Chahal', '', '1614', 16),
(271, 'Fray Bartolomé de las Casas', '', '1615', 16),
(272, 'Santa Catalina la Tinta', '', '1616', 16),
(273, 'Raxruhá', '', '1617', 16),
(274, 'Flores', '', '1701', 17),
(275, 'San José', '', '1702', 17),
(276, 'San Benito', '', '1703', 17),
(277, 'San Andrés', '', '1704', 17),
(278, 'La Libertad', '', '1705', 17),
(279, 'San Francisco', '', '1706', 17),
(280, 'Santa Ana', '', '1707', 17),
(281, 'Dolores', '', '1708', 17),
(282, 'San Luis', '', '1709', 17),
(283, 'Sayaxché', '', '1710', 17),
(284, 'Melchor de Mencos', '', '1711', 17),
(285, 'Poptún', '', '1712', 17),
(286, 'Las Cruces', '', '1713', 17),
(287, 'El Chal', '', '1714', 17),
(288, 'Puerto Barrios', '', '1801', 18),
(289, 'Livingston', '', '1802', 18),
(290, 'El Estor', '', '1803', 18),
(291, 'Morales', '', '1804', 18),
(292, 'Los Amates', '', '1805', 18),
(293, 'Zacapa', '', '1901', 19),
(294, 'Estanzuela', '', '1902', 19),
(295, 'Río Hondo', '', '1903', 19),
(296, 'Gualán', '', '1904', 19),
(297, 'Teculután', '', '1905', 19),
(298, 'Usumatlán', '', '1906', 19),
(299, 'Cabañas', '', '1907', 19),
(300, 'San Diego', '', '1908', 19),
(301, 'La Unión', '', '1909', 19),
(302, 'Huité', '', '1910', 19),
(303, 'San Jorge', '', '1911', 19),
(304, 'Chiquimula', '', '2001', 20),
(305, 'San José La Arada', '', '2002', 20),
(306, 'San Juan Ermita', '', '2003', 20),
(307, 'Jocotán', '', '2004', 20),
(308, 'Camotán', '', '2005', 20),
(309, 'Olopa', '', '2006', 20),
(310, 'Esquipulas', '', '2007', 20),
(311, 'Concepción Las Minas', '', '2008', 20),
(312, 'Quetzaltepeque', '', '2009', 20),
(313, 'San Jacinto', '', '2010', 20),
(314, 'Ipala', '', '2011', 20),
(315, 'Jalapa', '', '2101', 21),
(316, 'San Pedro Pinula', '', '2102', 21),
(317, 'San Luis Jilotepeque', '', '2103', 21),
(318, 'San Manuel Chaparrón', '', '2104', 21),
(319, 'San Carlos Alzatate', '', '2105', 21),
(320, 'Monjas', '', '2106', 21),
(321, 'Mataquescuintla', '', '2107', 21),
(322, 'Jutiapa', '', '2201', 22),
(323, 'El Progreso', '', '2202', 22),
(324, 'Santa Catarina Mita', '', '2203', 22),
(325, 'Agua Blanca', '', '2204', 22),
(326, 'Asunción Mita', '', '2205', 22),
(327, 'Yupiltepeque', '', '2206', 22),
(328, 'Atescatempa', '', '2207', 22),
(329, 'Jerez', '', '2208', 22),
(330, 'El Adelanto', '', '2209', 22),
(331, 'Zapotitlán', '', '2210', 22),
(332, 'Comapa', '', '2211', 22),
(333, 'Jalpatagua', '', '2212', 22),
(334, 'Conguaco', '', '2213', 22),
(335, 'Moyuta', '', '2214', 22),
(336, 'Pasaco', '', '2215', 22),
(337, 'San José Acatempa', '', '2216', 22),
(338, 'Quesada', '', '2217', 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `non_structural_elements`
--

CREATE TABLE `non_structural_elements` (
  `non_structural_elements_id` bigint NOT NULL,
  `railing_posts_railing_posts_id` bigint DEFAULT NULL,
  `handrail_railing_handrail_railing_id` bigint DEFAULT NULL,
  `barrier_barrier_id` bigint DEFAULT NULL,
  `image` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `other`
--

CREATE TABLE `other` (
  `other_id` bigint NOT NULL,
  `informative_signage` varchar(450) DEFAULT NULL,
  `preventive_signage` varchar(45) DEFAULT NULL,
  `regulatory_signage` varchar(450) DEFAULT NULL,
  `horizontal_signage` varchar(450) DEFAULT NULL,
  `artificial_lighting` varchar(450) DEFAULT NULL,
  `sewer_system` varchar(450) DEFAULT NULL,
  `drainage_status` varchar(450) DEFAULT NULL,
  `observation` varchar(4500) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL,
  `maintenance` varchar(255) DEFAULT NULL,
  `repair` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pile`
--

CREATE TABLE `pile` (
  `pile_id` bigint NOT NULL,
  `name_pile` varchar(45) DEFAULT NULL,
  `support_support_id` bigint DEFAULT NULL,
  `scour_scour_id` bigint DEFAULT NULL,
  `image` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `protection_works`
--

CREATE TABLE `protection_works` (
  `protection_works_id` bigint NOT NULL,
  `name_protection_works` varchar(450) DEFAULT NULL,
  `material` varchar(450) DEFAULT NULL,
  `type` varchar(450) DEFAULT NULL,
  `long` double DEFAULT NULL,
  `width` double DEFAULT NULL,
  `height` double DEFAULT NULL,
  `non_structural_elements_non_structural_elements_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `railing_posts`
--

CREATE TABLE `railing_posts` (
  `railing_posts_id` bigint NOT NULL,
  `material` varchar(450) DEFAULT NULL,
  `absence_of_section` varchar(450) DEFAULT NULL,
  `element_deformation` varchar(450) DEFAULT NULL,
  `beaten` int DEFAULT NULL,
  `painting` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reading`
--

CREATE TABLE `reading` (
  `reading_id` bigint NOT NULL,
  `reading` varchar(450) DEFAULT NULL,
  `description` varchar(450) DEFAULT NULL,
  `date_time` datetime DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL,
  `sensor_sensor_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int NOT NULL,
  `name_rol` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `name_rol`) VALUES
(1, 'ROL_ADMIN'),
(2, 'ROL_USER');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `row_width`
--

CREATE TABLE `row_width` (
  `row_width_id` bigint NOT NULL,
  `name_row` varchar(450) DEFAULT NULL,
  `material` varchar(450) DEFAULT NULL,
  `height` double DEFAULT NULL,
  `width` decimal(10,0) DEFAULT NULL,
  `cracks_in_one_direction` varchar(450) DEFAULT NULL,
  `cracks_in_two_directions` varchar(450) DEFAULT NULL,
  `stone_loss_per_blow` varchar(450) DEFAULT NULL,
  `steel_exhibition` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL,
  `stapes_stapes_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `row_width_pile`
--

CREATE TABLE `row_width_pile` (
  `row_width_pile_id` bigint NOT NULL,
  `name_row` varchar(450) DEFAULT NULL,
  `material` varchar(450) DEFAULT NULL,
  `height` double DEFAULT NULL,
  `width` decimal(10,0) DEFAULT NULL,
  `cracks_in_one_direction` varchar(450) DEFAULT NULL,
  `cracks_in_two_directions` varchar(450) DEFAULT NULL,
  `stone_loss_per_blow` varchar(450) DEFAULT NULL,
  `steel_exhibition` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL,
  `pile_pile_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `scour`
--

CREATE TABLE `scour` (
  `scour_id` bigint NOT NULL,
  `name` varchar(450) DEFAULT NULL,
  `there_is_not` varchar(450) DEFAULT NULL,
  `yes_but_there_is_not` varchar(450) DEFAULT NULL,
  `yes_there_is_exposure` varchar(450) DEFAULT NULL,
  `settlement_of` varchar(450) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sensor`
--

CREATE TABLE `sensor` (
  `sensor_id` bigint NOT NULL,
  `name` varchar(450) DEFAULT NULL,
  `data` varchar(450) DEFAULT NULL,
  `description` varchar(450) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL,
  `bridge_bridge_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sewer_system`
--

CREATE TABLE `sewer_system` (
  `sewer_system_id` bigint NOT NULL,
  `clean` varchar(450) DEFAULT NULL,
  `blocked` varchar(450) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `slab_access`
--

CREATE TABLE `slab_access` (
  `slab_access_id` bigint NOT NULL,
  `name_salab_access` varchar(450) DEFAULT NULL,
  `material` varchar(450) DEFAULT NULL,
  `good_condition` varchar(450) DEFAULT NULL,
  `damage` varchar(450) DEFAULT NULL,
  `extra` varchar(45) DEFAULT NULL,
  `non_structural_elements_non_structural_elements_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stapes`
--

CREATE TABLE `stapes` (
  `stapes_id` bigint NOT NULL,
  `name_stapes` varchar(450) DEFAULT NULL,
  `bridge_bridge_id` bigint DEFAULT NULL,
  `support_support_id` bigint DEFAULT NULL,
  `scour_scour_id` bigint DEFAULT NULL,
  `image` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `steel_row`
--

CREATE TABLE `steel_row` (
  `steel_row_id` bigint NOT NULL,
  `name_steel` varchar(450) DEFAULT NULL,
  `oxide` varchar(450) DEFAULT NULL,
  `missing_bolts` varchar(450) DEFAULT NULL,
  `hit_element` varchar(450) DEFAULT NULL,
  `cut_element` varchar(450) DEFAULT NULL,
  `painting` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL,
  `superstructure_superstructure_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stretch`
--

CREATE TABLE `stretch` (
  `stretch_id` bigint NOT NULL,
  `length` double DEFAULT NULL,
  `type_section` varchar(450) DEFAULT NULL,
  `name` varchar(450) DEFAULT NULL,
  `bridge_bridge_id` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `superstructure`
--

CREATE TABLE `superstructure` (
  `superstructure_id` bigint NOT NULL,
  `bearing_slab_bearing_slab_id` bigint DEFAULT NULL,
  `sewer_system_sewer_system_id` bigint DEFAULT NULL,
  `image` longblob
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `support`
--

CREATE TABLE `support` (
  `support_id` bigint NOT NULL,
  `name` varchar(450) DEFAULT NULL,
  `material` varchar(450) DEFAULT NULL,
  `crushed_neoprene` varchar(450) DEFAULT NULL,
  `out_of_place` varchar(450) DEFAULT NULL,
  `rusty` varchar(450) DEFAULT NULL,
  `bolt_missing` varchar(450) DEFAULT NULL,
  `broken_bolt` varchar(450) DEFAULT NULL,
  `others` varchar(450) DEFAULT NULL,
  `extra` varchar(450) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `token_password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_rol`
--

CREATE TABLE `user_rol` (
  `user_id` int NOT NULL,
  `rol_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `barrier`
--
ALTER TABLE `barrier`
  ADD PRIMARY KEY (`barrier_id`);

--
-- Indices de la tabla `bearing_slab`
--
ALTER TABLE `bearing_slab`
  ADD PRIMARY KEY (`bearing_slab_id`);

--
-- Indices de la tabla `blueprint`
--
ALTER TABLE `blueprint`
  ADD PRIMARY KEY (`blueprint_id`),
  ADD KEY `fk_blueprint_bridge1_idx` (`bridge_bridge_id`);

--
-- Indices de la tabla `bridge`
--
ALTER TABLE `bridge`
  ADD PRIMARY KEY (`bridge_id`),
  ADD KEY `fk_bridge_general_data1_idx` (`general_data_general_data_id`),
  ADD KEY `fk_bridge_pile1_idx` (`pile_pile_id`),
  ADD KEY `fk_bridge_superstructure1_idx` (`superstructure_superstructure_id`),
  ADD KEY `fk_bridge_non_structural_elements1_idx` (`non_structural_elements_non_structural_elements_id`),
  ADD KEY `fk_bridge_channel1_idx` (`channel_channel_id`),
  ADD KEY `fk_bridge_other1_idx` (`other_other_id`),
  ADD KEY `fk_bridge_municipality1_idx` (`municipality_municipality_id`),
  ADD KEY `fk_bridge_user1_idx` (`user_user_id`);

--
-- Indices de la tabla `channel`
--
ALTER TABLE `channel`
  ADD PRIMARY KEY (`channel_id`);

--
-- Indices de la tabla `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`comment_id`),
  ADD KEY `fk_comment_bridge1_idx` (`bridge_bridge_id`),
  ADD KEY `fk_comment_user1_idx` (`user_user_id`);

--
-- Indices de la tabla `concrete_row`
--
ALTER TABLE `concrete_row`
  ADD PRIMARY KEY (`concrete_row_id`),
  ADD KEY `fk_concrete_row_superstructure1_idx` (`superstructure_superstructure_id`);

--
-- Indices de la tabla `council`
--
ALTER TABLE `council`
  ADD PRIMARY KEY (`council_id`),
  ADD KEY `fk_council_non_structural_elements1_idx` (`non_structural_elements_non_structural_elements_id`);

--
-- Indices de la tabla `departament`
--
ALTER TABLE `departament`
  ADD PRIMARY KEY (`departament_id`);

--
-- Indices de la tabla `general_data`
--
ALTER TABLE `general_data`
  ADD PRIMARY KEY (`general_data_id`);

--
-- Indices de la tabla `handrail_railing`
--
ALTER TABLE `handrail_railing`
  ADD PRIMARY KEY (`handrail_railing_id`);

--
-- Indices de la tabla `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `fk_image_bridge1_idx` (`bridge_bridge_id`);

--
-- Indices de la tabla `image_other`
--
ALTER TABLE `image_other`
  ADD PRIMARY KEY (`image_other_id`),
  ADD KEY `fk_image_other_other1_idx` (`other_other_id`);

--
-- Indices de la tabla `municipality`
--
ALTER TABLE `municipality`
  ADD PRIMARY KEY (`municipality_id`),
  ADD KEY `fk_municipality_departament_idx` (`departament_departament_id`);

--
-- Indices de la tabla `non_structural_elements`
--
ALTER TABLE `non_structural_elements`
  ADD PRIMARY KEY (`non_structural_elements_id`),
  ADD KEY `fk_non_structural_elements_railing_posts1_idx` (`railing_posts_railing_posts_id`),
  ADD KEY `fk_non_structural_elements_handrail_railing1_idx` (`handrail_railing_handrail_railing_id`),
  ADD KEY `fk_non_structural_elements_barrier1_idx` (`barrier_barrier_id`);

--
-- Indices de la tabla `other`
--
ALTER TABLE `other`
  ADD PRIMARY KEY (`other_id`);

--
-- Indices de la tabla `pile`
--
ALTER TABLE `pile`
  ADD PRIMARY KEY (`pile_id`),
  ADD KEY `fk_pile_support1_idx` (`support_support_id`),
  ADD KEY `fk_pile_scour1_idx` (`scour_scour_id`);

--
-- Indices de la tabla `protection_works`
--
ALTER TABLE `protection_works`
  ADD PRIMARY KEY (`protection_works_id`),
  ADD KEY `fk_protection_works_non_structural_elements1_idx` (`non_structural_elements_non_structural_elements_id`);

--
-- Indices de la tabla `railing_posts`
--
ALTER TABLE `railing_posts`
  ADD PRIMARY KEY (`railing_posts_id`);

--
-- Indices de la tabla `reading`
--
ALTER TABLE `reading`
  ADD PRIMARY KEY (`reading_id`),
  ADD KEY `fk_reading_sensor1_idx` (`sensor_sensor_id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `row_width`
--
ALTER TABLE `row_width`
  ADD PRIMARY KEY (`row_width_id`),
  ADD KEY `fk_row_width_stapes1_idx` (`stapes_stapes_id`);

--
-- Indices de la tabla `row_width_pile`
--
ALTER TABLE `row_width_pile`
  ADD PRIMARY KEY (`row_width_pile_id`),
  ADD KEY `fk_row_width_pile_pile1_idx` (`pile_pile_id`);

--
-- Indices de la tabla `scour`
--
ALTER TABLE `scour`
  ADD PRIMARY KEY (`scour_id`);

--
-- Indices de la tabla `sensor`
--
ALTER TABLE `sensor`
  ADD PRIMARY KEY (`sensor_id`),
  ADD KEY `fk_sensor_bridge1_idx` (`bridge_bridge_id`);

--
-- Indices de la tabla `sewer_system`
--
ALTER TABLE `sewer_system`
  ADD PRIMARY KEY (`sewer_system_id`);

--
-- Indices de la tabla `slab_access`
--
ALTER TABLE `slab_access`
  ADD PRIMARY KEY (`slab_access_id`),
  ADD KEY `fk_slab_access_non_structural_elements1_idx` (`non_structural_elements_non_structural_elements_id`);

--
-- Indices de la tabla `stapes`
--
ALTER TABLE `stapes`
  ADD PRIMARY KEY (`stapes_id`),
  ADD KEY `fk_stapes_bridge1_idx` (`bridge_bridge_id`),
  ADD KEY `fk_stapes_support1_idx` (`support_support_id`),
  ADD KEY `fk_stapes_scour1_idx` (`scour_scour_id`);

--
-- Indices de la tabla `steel_row`
--
ALTER TABLE `steel_row`
  ADD PRIMARY KEY (`steel_row_id`),
  ADD KEY `fk_steel_row_superstructure1_idx` (`superstructure_superstructure_id`);

--
-- Indices de la tabla `stretch`
--
ALTER TABLE `stretch`
  ADD PRIMARY KEY (`stretch_id`),
  ADD KEY `fk_stretch_bridge1_idx` (`bridge_bridge_id`);

--
-- Indices de la tabla `superstructure`
--
ALTER TABLE `superstructure`
  ADD PRIMARY KEY (`superstructure_id`),
  ADD KEY `fk_superstructure_bearing_slab1_idx` (`bearing_slab_bearing_slab_id`),
  ADD KEY `fk_superstructure_sewer_system1_idx` (`sewer_system_sewer_system_id`);

--
-- Indices de la tabla `support`
--
ALTER TABLE `support`
  ADD PRIMARY KEY (`support_id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_lqjrcobrh9jc8wpcar64q1bfh` (`user_name`);

--
-- Indices de la tabla `user_rol`
--
ALTER TABLE `user_rol`
  ADD PRIMARY KEY (`user_id`,`rol_id`),
  ADD KEY `FKpfraq7jod5w5xd3sxm3m6y1o` (`rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `barrier`
--
ALTER TABLE `barrier`
  MODIFY `barrier_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bearing_slab`
--
ALTER TABLE `bearing_slab`
  MODIFY `bearing_slab_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `blueprint`
--
ALTER TABLE `blueprint`
  MODIFY `blueprint_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `bridge`
--
ALTER TABLE `bridge`
  MODIFY `bridge_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `channel`
--
ALTER TABLE `channel`
  MODIFY `channel_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comment`
--
ALTER TABLE `comment`
  MODIFY `comment_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `concrete_row`
--
ALTER TABLE `concrete_row`
  MODIFY `concrete_row_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `council`
--
ALTER TABLE `council`
  MODIFY `council_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `departament`
--
ALTER TABLE `departament`
  MODIFY `departament_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `general_data`
--
ALTER TABLE `general_data`
  MODIFY `general_data_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `handrail_railing`
--
ALTER TABLE `handrail_railing`
  MODIFY `handrail_railing_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `image`
--
ALTER TABLE `image`
  MODIFY `image_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `image_other`
--
ALTER TABLE `image_other`
  MODIFY `image_other_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `municipality`
--
ALTER TABLE `municipality`
  MODIFY `municipality_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=339;

--
-- AUTO_INCREMENT de la tabla `non_structural_elements`
--
ALTER TABLE `non_structural_elements`
  MODIFY `non_structural_elements_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `other`
--
ALTER TABLE `other`
  MODIFY `other_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pile`
--
ALTER TABLE `pile`
  MODIFY `pile_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `protection_works`
--
ALTER TABLE `protection_works`
  MODIFY `protection_works_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `railing_posts`
--
ALTER TABLE `railing_posts`
  MODIFY `railing_posts_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reading`
--
ALTER TABLE `reading`
  MODIFY `reading_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `row_width`
--
ALTER TABLE `row_width`
  MODIFY `row_width_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `row_width_pile`
--
ALTER TABLE `row_width_pile`
  MODIFY `row_width_pile_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `scour`
--
ALTER TABLE `scour`
  MODIFY `scour_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sensor`
--
ALTER TABLE `sensor`
  MODIFY `sensor_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `sewer_system`
--
ALTER TABLE `sewer_system`
  MODIFY `sewer_system_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `slab_access`
--
ALTER TABLE `slab_access`
  MODIFY `slab_access_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stapes`
--
ALTER TABLE `stapes`
  MODIFY `stapes_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `steel_row`
--
ALTER TABLE `steel_row`
  MODIFY `steel_row_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stretch`
--
ALTER TABLE `stretch`
  MODIFY `stretch_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `superstructure`
--
ALTER TABLE `superstructure`
  MODIFY `superstructure_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `support`
--
ALTER TABLE `support`
  MODIFY `support_id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `blueprint`
--
ALTER TABLE `blueprint`
  ADD CONSTRAINT `fk_blueprint_bridge1` FOREIGN KEY (`bridge_bridge_id`) REFERENCES `bridge` (`bridge_id`);

--
-- Filtros para la tabla `bridge`
--
ALTER TABLE `bridge`
  ADD CONSTRAINT `fk_bridge_channel1` FOREIGN KEY (`channel_channel_id`) REFERENCES `channel` (`channel_id`),
  ADD CONSTRAINT `fk_bridge_general_data1` FOREIGN KEY (`general_data_general_data_id`) REFERENCES `general_data` (`general_data_id`),
  ADD CONSTRAINT `fk_bridge_municipality1` FOREIGN KEY (`municipality_municipality_id`) REFERENCES `municipality` (`municipality_id`),
  ADD CONSTRAINT `fk_bridge_non_structural_elements1` FOREIGN KEY (`non_structural_elements_non_structural_elements_id`) REFERENCES `non_structural_elements` (`non_structural_elements_id`),
  ADD CONSTRAINT `fk_bridge_other1` FOREIGN KEY (`other_other_id`) REFERENCES `other` (`other_id`),
  ADD CONSTRAINT `fk_bridge_pile1` FOREIGN KEY (`pile_pile_id`) REFERENCES `pile` (`pile_id`),
  ADD CONSTRAINT `fk_bridge_superstructure1` FOREIGN KEY (`superstructure_superstructure_id`) REFERENCES `superstructure` (`superstructure_id`),
  ADD CONSTRAINT `fk_bridge_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_comment_bridge1` FOREIGN KEY (`bridge_bridge_id`) REFERENCES `bridge` (`bridge_id`),
  ADD CONSTRAINT `fk_comment_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `concrete_row`
--
ALTER TABLE `concrete_row`
  ADD CONSTRAINT `fk_concrete_row_superstructure1` FOREIGN KEY (`superstructure_superstructure_id`) REFERENCES `superstructure` (`superstructure_id`);

--
-- Filtros para la tabla `council`
--
ALTER TABLE `council`
  ADD CONSTRAINT `fk_council_non_structural_elements1` FOREIGN KEY (`non_structural_elements_non_structural_elements_id`) REFERENCES `non_structural_elements` (`non_structural_elements_id`);

--
-- Filtros para la tabla `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `fk_image_bridge1` FOREIGN KEY (`bridge_bridge_id`) REFERENCES `bridge` (`bridge_id`);

--
-- Filtros para la tabla `image_other`
--
ALTER TABLE `image_other`
  ADD CONSTRAINT `fk_image_other_other1` FOREIGN KEY (`other_other_id`) REFERENCES `other` (`other_id`);

--
-- Filtros para la tabla `municipality`
--
ALTER TABLE `municipality`
  ADD CONSTRAINT `fk_municipality_departament` FOREIGN KEY (`departament_departament_id`) REFERENCES `departament` (`departament_id`);

--
-- Filtros para la tabla `non_structural_elements`
--
ALTER TABLE `non_structural_elements`
  ADD CONSTRAINT `fk_non_structural_elements_barrier1` FOREIGN KEY (`barrier_barrier_id`) REFERENCES `barrier` (`barrier_id`),
  ADD CONSTRAINT `fk_non_structural_elements_handrail_railing1` FOREIGN KEY (`handrail_railing_handrail_railing_id`) REFERENCES `handrail_railing` (`handrail_railing_id`),
  ADD CONSTRAINT `fk_non_structural_elements_railing_posts1` FOREIGN KEY (`railing_posts_railing_posts_id`) REFERENCES `railing_posts` (`railing_posts_id`);

--
-- Filtros para la tabla `pile`
--
ALTER TABLE `pile`
  ADD CONSTRAINT `fk_pile_scour1` FOREIGN KEY (`scour_scour_id`) REFERENCES `scour` (`scour_id`),
  ADD CONSTRAINT `fk_pile_support1` FOREIGN KEY (`support_support_id`) REFERENCES `support` (`support_id`);

--
-- Filtros para la tabla `protection_works`
--
ALTER TABLE `protection_works`
  ADD CONSTRAINT `fk_protection_works_non_structural_elements1` FOREIGN KEY (`non_structural_elements_non_structural_elements_id`) REFERENCES `non_structural_elements` (`non_structural_elements_id`);

--
-- Filtros para la tabla `reading`
--
ALTER TABLE `reading`
  ADD CONSTRAINT `fk_reading_sensor1` FOREIGN KEY (`sensor_sensor_id`) REFERENCES `sensor` (`sensor_id`);

--
-- Filtros para la tabla `row_width`
--
ALTER TABLE `row_width`
  ADD CONSTRAINT `fk_row_width_stapes1` FOREIGN KEY (`stapes_stapes_id`) REFERENCES `stapes` (`stapes_id`);

--
-- Filtros para la tabla `row_width_pile`
--
ALTER TABLE `row_width_pile`
  ADD CONSTRAINT `fk_row_width_pile_pile1` FOREIGN KEY (`pile_pile_id`) REFERENCES `pile` (`pile_id`);

--
-- Filtros para la tabla `sensor`
--
ALTER TABLE `sensor`
  ADD CONSTRAINT `fk_sensor_bridge1` FOREIGN KEY (`bridge_bridge_id`) REFERENCES `bridge` (`bridge_id`);

--
-- Filtros para la tabla `slab_access`
--
ALTER TABLE `slab_access`
  ADD CONSTRAINT `fk_slab_access_non_structural_elements1` FOREIGN KEY (`non_structural_elements_non_structural_elements_id`) REFERENCES `non_structural_elements` (`non_structural_elements_id`);

--
-- Filtros para la tabla `stapes`
--
ALTER TABLE `stapes`
  ADD CONSTRAINT `fk_stapes_bridge1` FOREIGN KEY (`bridge_bridge_id`) REFERENCES `bridge` (`bridge_id`),
  ADD CONSTRAINT `fk_stapes_scour1` FOREIGN KEY (`scour_scour_id`) REFERENCES `scour` (`scour_id`),
  ADD CONSTRAINT `fk_stapes_support1` FOREIGN KEY (`support_support_id`) REFERENCES `support` (`support_id`);

--
-- Filtros para la tabla `steel_row`
--
ALTER TABLE `steel_row`
  ADD CONSTRAINT `fk_steel_row_superstructure1` FOREIGN KEY (`superstructure_superstructure_id`) REFERENCES `superstructure` (`superstructure_id`);

--
-- Filtros para la tabla `stretch`
--
ALTER TABLE `stretch`
  ADD CONSTRAINT `fk_stretch_bridge1` FOREIGN KEY (`bridge_bridge_id`) REFERENCES `bridge` (`bridge_id`);

--
-- Filtros para la tabla `superstructure`
--
ALTER TABLE `superstructure`
  ADD CONSTRAINT `fk_superstructure_bearing_slab1` FOREIGN KEY (`bearing_slab_bearing_slab_id`) REFERENCES `bearing_slab` (`bearing_slab_id`),
  ADD CONSTRAINT `fk_superstructure_sewer_system1` FOREIGN KEY (`sewer_system_sewer_system_id`) REFERENCES `sewer_system` (`sewer_system_id`);

--
-- Filtros para la tabla `user_rol`
--
ALTER TABLE `user_rol`
  ADD CONSTRAINT `FKkijwolbkui74em8ip1i6vniu4` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKpfraq7jod5w5xd3sxm3m6y1o` FOREIGN KEY (`rol_id`) REFERENCES `rol` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
