-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-07-2020 a las 20:17:13
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
-- Estructura de tabla para la tabla `cuestionario`
--

DROP TABLE IF EXISTS `cuestionario`;
CREATE TABLE IF NOT EXISTS `cuestionario` (
  `idcuestionario` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `valortotal` int(11) DEFAULT NULL,
  `resultado_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idcuestionario`),
  KEY `fk_cuestionario_resultado1_idx` (`resultado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cuestionario`
--

INSERT INTO `cuestionario` (`idcuestionario`, `fecha`, `valortotal`, `resultado_id`) VALUES
(1, '2020-06-24', 23, 1),
(2, '2020-06-27', 8, 3),
(3, '2020-06-28', 0, NULL),
(4, '2020-06-29', 0, NULL),
(5, '2020-06-30', 0, NULL),
(7, '2020-06-28', 0, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opcion`
--

DROP TABLE IF EXISTS `opcion`;
CREATE TABLE IF NOT EXISTS `opcion` (
  `idopcion` int(11) NOT NULL AUTO_INCREMENT,
  `opcion` varchar(45) NOT NULL,
  PRIMARY KEY (`idopcion`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `opcion`
--

INSERT INTO `opcion` (`idopcion`, `opcion`) VALUES
(1, 'si'),
(2, 'no');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta`
--

DROP TABLE IF EXISTS `pregunta`;
CREATE TABLE IF NOT EXISTS `pregunta` (
  `idpregunta` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(250) NOT NULL,
  `valor` int(11) NOT NULL,
  PRIMARY KEY (`idpregunta`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pregunta`
--

INSERT INTO `pregunta` (`idpregunta`, `pregunta`, `valor`) VALUES
(1, '¿Presentas Disminución del gusto o del olfato?', 2),
(2, '¿Presentas Tos?', 2),
(3, '¿Presentas dolor de garganta?', 2),
(4, '¿Presentas dificultad para respirar?', 3),
(5, '¿Presentas congestión nasal?', 2),
(6, '¿Presentas fiebre?', 2),
(7, '¿Presentas falla renal?', 3),
(8, '¿En los últimos 14 días, has estado fuera del país?', 1),
(9, ' ¿Estuviste en contacto con algún caso conocido de COVID-19 los 14 días anteriores al inicio de los síntomas?', 5),
(10, '¿En los últimos 14 días, te has desplazado a un distrito diferente al de tu residencia?', 1),
(11, '¿Pertenece a algún grupo de riesgo? (mayor de 60 años, hipertensión, diabetes, cardiopatías, patología pulmonar, enfermedad renal crónica, inmunosupresión, patología hepática, neoplasias activas u obesidad)', 2),
(12, '¿Trabajas en algún establecimiento de salud?', 2),
(13, '¿Has estado en ambulatorio, urgencias o has ingresado en un hospital desde el 1 de febrero? ', 3),
(14, '¿Si la anterior pregunta es afirmativa, te han diagnosticado algún tipo de neumonía?', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pregunta_has_opcion`
--

DROP TABLE IF EXISTS `pregunta_has_opcion`;
CREATE TABLE IF NOT EXISTS `pregunta_has_opcion` (
  `pregunta_idpregunta` int(11) NOT NULL,
  `opcion_idopcion` int(11) NOT NULL,
  PRIMARY KEY (`pregunta_idpregunta`,`opcion_idopcion`),
  KEY `fk_pregunta_has_opcion_opcion2_idx` (`opcion_idopcion`),
  KEY `fk_pregunta_has_opcion_pregunta2_idx` (`pregunta_idpregunta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pregunta_has_opcion`
--

INSERT INTO `pregunta_has_opcion` (`pregunta_idpregunta`, `opcion_idopcion`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(1, 2),
(2, 2),
(3, 2),
(4, 2),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 2),
(10, 2),
(11, 2),
(12, 2),
(13, 2),
(14, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta`
--

DROP TABLE IF EXISTS `respuesta`;
CREATE TABLE IF NOT EXISTS `respuesta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idcuestionario` int(11) NOT NULL,
  `idpregunta` int(11) NOT NULL,
  `idopcion` int(11) NOT NULL,
  `users_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_respuesta_cuestionario1_idx` (`idcuestionario`),
  KEY `fk_respuesta_pregunta_has_opcion1_idx` (`idpregunta`,`idopcion`),
  KEY `fk_respuesta_users1_idx` (`users_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `respuesta`
--

INSERT INTO `respuesta` (`id`, `idcuestionario`, `idpregunta`, `idopcion`, `users_id`) VALUES
(1, 1, 1, 1, 1),
(2, 1, 2, 1, 1),
(3, 1, 3, 1, 1),
(4, 1, 4, 1, 1),
(5, 1, 5, 1, 1),
(6, 1, 6, 1, 1),
(7, 1, 7, 1, 1),
(8, 1, 8, 2, 1),
(9, 1, 9, 1, 1),
(10, 1, 10, 2, 1),
(11, 1, 11, 1, 1),
(12, 1, 12, 2, 1),
(13, 1, 13, 2, 1),
(14, 1, 14, 2, 1),
(15, 2, 1, 2, 1),
(16, 2, 2, 2, 1),
(17, 2, 2, 2, 1),
(18, 2, 3, 2, 1),
(19, 2, 8, 2, 1),
(20, 2, 9, 1, 1),
(21, 2, 10, 1, 1),
(22, 2, 11, 1, 1);

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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_USER'),
(2, 'ROLE_ADMIN');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(120) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `edad` varchar(45) DEFAULT NULL,
  `dni` varchar(8) DEFAULT NULL,
  `sexo` varchar(20) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `distrito` varchar(45) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `nombre`, `apellido`, `edad`, `dni`, `sexo`, `telefono`, `distrito`, `direccion`) VALUES
(1, 'jon@gmail.com', 'jonathan', '$2a$10$70jQEapNmG7QJnX0AuuDveW1fVSjbDTElM5D0Xil8MmZY2e5cBY5.', 'Jonthan', 'Huarca', '24', '73232323', 'Masculino', '989889889', 'Villa el salvador', 'Mz g lt 24'),
(2, 'Steve@gmail.com', 'Steve', '$2a$10$uZHfD7CYFQG73af3ahMEB.NHjpFBFGVgeXJ1u/Waau5U3C9mIZmhm', 'Steve', 'Huarca', '24', '73232323', 'Masculino', '989889889', NULL, NULL),
(3, 'Noemi@gmail.com', 'Noemihkhku', '$2a$10$8KIFrKaxNIzuLNpx2lrZ8.vSWUnvZGZvxv8eehn9xhXLgs.6bYRvK', 'Noemi', 'Huarca', '14', '73232323', 'Femenina', '989889889', NULL, NULL),
(4, 'carlos@gmail.com', 'Calos', '$2a$10$Yw9eq6/0aU5d2OfnlnX1ce9b9pmQ11.uPFR4tZg/XFMezhs2Fcju2', 'Calos', 'Huaynates', '18', '98218212', 'Masculino', '981821862', NULL, NULL),
(5, 'Noelia@gmail.com', 'Noelia', '$2a$10$pZ7RPtdGKvOa1SRles9xlOxD2n1wJ3CozJS1PWINrAFxnNv5.r5M6', 'Noelia', 'Huarca', '14', '73232323', 'Femenina', '989889889', NULL, NULL),
(6, 'Juan@gmail.com', 'Juan', '$2a$10$RUHZzNXzaylI.3FV9W7V1ubr5oazt8Whv6Xun2Bo7YSlMSpgAS4/u', 'Juan', 'Torres', '18', '98218212', 'Masculino', '981821862', NULL, NULL),
(7, 'Khail@gmail.com', 'Khail', '$2a$10$DX5TvJPOcto01s7KtnJDw.xaOaKJ4hI4U4VzeuXmQ5LkMKNQv5wjq', 'Khail', 'Mogollon', '18', '98218212', 'Masculino', '981821862', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_users_has_roles_roles1_idx` (`role_id`),
  KEY `fk_users_has_roles_users1_idx` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(1, 2),
(2, 2);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cuestionario`
--
ALTER TABLE `cuestionario`
  ADD CONSTRAINT `fk_cuestionario_resultado1` FOREIGN KEY (`resultado_id`) REFERENCES `resultado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pregunta_has_opcion`
--
ALTER TABLE `pregunta_has_opcion`
  ADD CONSTRAINT `fk_pregunta_has_opcion_opcion2` FOREIGN KEY (`opcion_idopcion`) REFERENCES `opcion` (`idopcion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_pregunta_has_opcion_pregunta2` FOREIGN KEY (`pregunta_idpregunta`) REFERENCES `pregunta` (`idpregunta`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `respuesta`
--
ALTER TABLE `respuesta`
  ADD CONSTRAINT `fk_respuesta_cuestionario1` FOREIGN KEY (`idcuestionario`) REFERENCES `cuestionario` (`idcuestionario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_respuesta_pregunta_has_opcion1` FOREIGN KEY (`idpregunta`,`idopcion`) REFERENCES `pregunta_has_opcion` (`pregunta_idpregunta`, `opcion_idopcion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_respuesta_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `fk_users_has_roles_roles1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_has_roles_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
