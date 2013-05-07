-- phpMyAdmin SQL Dump
-- version 2.11.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 07, 2013 at 06:50 AM
-- Server version: 5.1.57
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `a6142793_b`
--

-- --------------------------------------------------------

--
-- Table structure for table `burger`
--
USE goeat;

CREATE TABLE `burger` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `value` int(11) NOT NULL,
  `flag` tinyint(4) NOT NULL,
  KEY `fk_Burger_1` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `burger`
--

INSERT INTO `burger` VALUES(1, 'burger1', 45, 0);
INSERT INTO `burger` VALUES(1, 'burger2', 50, 0);
INSERT INTO `burger` VALUES(1, 'burger3', 65, 1);
INSERT INTO `burger` VALUES(1, 'burger6', 60, 1);
INSERT INTO `burger` VALUES(2, 'burger1', 75, 0);
INSERT INTO `burger` VALUES(2, 'burger6', 55, 1);
INSERT INTO `burger` VALUES(2, 'burger6', 55, 1);
INSERT INTO `burger` VALUES(3, 'Burger1', 40, 1);
INSERT INTO `burger` VALUES(3, 'Burger8', 50, 1);
INSERT INTO `burger` VALUES(3, 'Burger9', 66, 0);
INSERT INTO `burger` VALUES(3, 'Burger6', 45, 1);
INSERT INTO `burger` VALUES(5, 'burgerabc', 55, 1);
INSERT INTO `burger` VALUES(5, 'cheese burger', 65, 1);
INSERT INTO `burger` VALUES(6, 'chicken burger', 65, 0);

-- --------------------------------------------------------

--
-- Table structure for table `drinks`
--

CREATE TABLE `drinks` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `value` int(6) NOT NULL,
  KEY `fk_drinks` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `drinks`
--

INSERT INTO `drinks` VALUES(1, 'cool drink', 15);
INSERT INTO `drinks` VALUES(1, 'midland  drink', 20);
INSERT INTO `drinks` VALUES(2, 'cool drink', 30);
INSERT INTO `drinks` VALUES(2, 'milk shakes', 35);
INSERT INTO `drinks` VALUES(3, 'drink1', 20);
INSERT INTO `drinks` VALUES(4, 'drink2', 25);
INSERT INTO `drinks` VALUES(4, 'drink3', 40);
INSERT INTO `drinks` VALUES(5, 'drinkab', 25);
INSERT INTO `drinks` VALUES(5, 'drink5', 25);
INSERT INTO `drinks` VALUES(6, 'drinks', 20);

-- --------------------------------------------------------

--
-- Table structure for table `main`
--

CREATE TABLE `main` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `main`
--

INSERT INTO `main` VALUES(1, 'Mid Land', 'Rajeev nagar x road', 'Rajeev Nagar', 17.4508, 78.4245);
INSERT INTO `main` VALUES(2, 'Hungry Jacks', 'S R Nagar x roads', 'S.R Nagar', 17.4422, 78.4246);
INSERT INTO `main` VALUES(3, 'Tasty Treat', 'Near S.R nagar bus stop', 'S.R Nagar', 17.4411, 78.4425);
INSERT INTO `main` VALUES(4, 'Almas', 'near S.R Nagar X Roads', 'S.R Nagar', 17.4408, 78.4345);
INSERT INTO `main` VALUES(5, 'Stop and go', 'near mithrivanam bus stop', 'S.R Nagar', 17.4498, 78.4399);
INSERT INTO `main` VALUES(6, 'snack and pack', 'near S.R Nagar', 'S.R Nagar', 17.4558, 78.4389);

-- --------------------------------------------------------

--
-- Table structure for table `pizza`
--

CREATE TABLE `pizza` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `value` int(11) NOT NULL,
  `flag` tinyint(4) NOT NULL,
  KEY `fk_Pizza_1` (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pizza`
--

INSERT INTO `pizza` VALUES(1, 'pizzaC', 90, 0);
INSERT INTO `pizza` VALUES(2, 'pizzaC', 80, 0);
INSERT INTO `pizza` VALUES(3, 'Pizza7', 80, 1);
INSERT INTO `pizza` VALUES(3, 'Pizza8', 85, 1);
INSERT INTO `pizza` VALUES(3, 'Pizza9', 90, 0);
INSERT INTO `pizza` VALUES(3, 'Pizza10', 100, 1);
INSERT INTO `pizza` VALUES(2, 'Pizzad', 80, 1);
INSERT INTO `pizza` VALUES(2, 'Pizzae', 85, 1);
INSERT INTO `pizza` VALUES(4, 'Pizzaf', 90, 0);
INSERT INTO `pizza` VALUES(4, 'Pizzag', 100, 1);
