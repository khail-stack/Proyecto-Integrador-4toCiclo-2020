-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-07-2020 a las 06:24:54
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `covid`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultado`
--

DROP TABLE IF EXISTS `resultado`;
CREATE TABLE IF NOT EXISTS `resultado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `resultado` varchar(100) NOT NULL,
  `mensaje` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `resultado`
--

INSERT INTO `resultado` (`id`, `resultado`, `mensaje`) VALUES
(1, 'Posible caso', 'Tendrá que ir al hospital para realizarse la prueba, mientras no vayas al trabajo, escuela o lugares públicos. '),
(2, 'Zona de riesgo', 'Ten cuidado, usa tapabocas al estar en contacto con otras personas. '),
(3, 'Libre de riesgo', 'Trata de cuidarte no salgas de casa y cuídate usando cubre bocas');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
