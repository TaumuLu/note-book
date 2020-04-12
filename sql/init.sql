-- MySQL dump 10.13  Distrib 5.6.47, for Linux (x86_64)
--
-- Host: localhost    Database: notebook
-- ------------------------------------------------------
-- Server version	5.6.47

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bill`
--

drop database if exists notebook;

create database notebook;

use notebook;

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bill` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `type` int(11) NOT NULL,
  `category` varchar(255) DEFAULT NULL,
  `amount` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_554bb37a19491544a7d11be77b7` (`category`),
  CONSTRAINT `FK_554bb37a19491544a7d11be77b7` FOREIGN KEY (`category`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (1,'2019-06-30 16:00:00.000000',0,'8s0p77c323',5400),(2,'2019-06-30 16:00:00.000000',0,'0fnhbcle6hg',1500),(3,'2019-07-23 16:00:00.000000',0,'3tqndrjqgrg',3900),(4,'2019-07-30 16:00:00.000000',0,'bsn20th0k2o',1900),(5,'2019-07-31 16:00:00.000000',0,'8s0p77c323',5400),(6,'2019-07-31 16:00:00.000000',0,'0fnhbcle6hg',1500),(7,'2019-07-31 16:00:00.000000',0,'3tqndrjqgrg',5000),(8,'2019-08-20 16:00:00.000000',0,'bsn20th0k2o',2000),(9,'2019-08-31 16:00:00.000000',0,'8s0p77c323',5400),(10,'2019-08-31 16:00:00.000000',0,'0fnhbcle6hg',1500),(11,'2019-09-29 16:00:00.000000',0,'1bcddudhmh',3000),(12,'2019-09-29 16:00:00.000000',0,'bsn20th0k2o',1500),(13,'2019-09-29 16:00:00.000000',0,'3tqndrjqgrg',5000),(14,'2019-09-30 16:00:00.000000',0,'0fnhbcle6hg',1500),(15,'2019-10-29 16:00:00.000000',0,'odrjk823mj8',3000),(16,'2019-10-30 16:00:00.000000',0,'3tqndrjqgrg',4600),(17,'2019-10-30 16:00:00.000000',0,'3tqndrjqgrg',3800),(18,'2019-10-31 16:00:00.000000',0,'0fnhbcle6hg',1500),(19,'2019-11-19 16:00:00.000000',0,'odrjk823mj8',2000),(20,'2019-11-27 16:00:00.000000',0,'1bcddudhmh',3000),(21,'2019-11-28 16:00:00.000000',0,'8s0p77c323',5400),(22,'2019-11-29 16:00:00.000000',0,'3tqndrjqgrg',5000),(23,'2019-11-30 16:00:00.000000',0,'0fnhbcle6hg',1500),(24,'2019-12-25 16:00:00.000000',0,'3tqndrjqgrg',4000),(25,'2019-12-26 07:28:53.184000',0,'odrjk823mj8',2000),(26,'2019-12-26 07:29:27.638000',0,'1bcddudhmh',3000),(27,'2019-12-26 07:29:38.418000',0,'j1h1nohhmmo',800),(28,'2019-12-26 07:31:44.140000',0,'bsn20th0k2o',1000),(29,'2019-12-26 07:31:57.217000',0,'hc5g66kviq',2000),(30,'2019-12-26 07:32:56.917000',0,'8s0p77c323',5400),(31,'2019-12-26 07:33:10.283000',0,'1bcddudhmh',3000),(32,'2019-12-26 07:36:29.527000',0,'3tqndrjqgrg',3900),(33,'2019-12-28 16:00:00.000000',0,'8s0p77c323',5400),(34,'2019-06-30 16:00:00.000000',1,'s73ijpispio',30000),(35,'2019-07-30 16:00:00.000000',1,'5il79e11628',1000),(36,'2019-08-29 16:00:00.000000',1,'1vjj47vpd28',-3000),(37,'2019-08-30 16:00:00.000000',1,'s73ijpispio',28000),(38,'2019-09-29 16:00:00.000000',1,'s73ijpispio',28000),(39,'2019-09-29 16:00:00.000000',1,'1vjj47vpd28',2000),(40,'2019-10-30 16:00:00.000000',1,'s73ijpispio',20000),(41,'2019-12-26 07:27:47.529000',1,'s73ijpispio',30000),(42,'2019-12-26 07:28:23.191000',1,'1vjj47vpd28',-10000),(43,'2019-12-26 07:28:37.187000',1,'5il79e11628',1000),(44,'2019-12-26 07:31:03.930000',1,'s73ijpispio',3000),(45,'2019-12-26 07:31:17.581000',1,'5il79e11628',2000),(46,'2019-12-26 07:33:58.784000',1,'1vjj47vpd28',2000);
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('0fnhbcle6hg','房屋租赁',0),('1bcddudhmh','车贷',0),('1vjj47vpd28','股票投资',1),('3tqndrjqgrg','日常饮食',0),('5il79e11628','基金投资',1),('8s0p77c323','房贷',0),('bsn20th0k2o','交通',0),('hc5g66kviq','车辆保养',0),('j1h1nohhmmo','旅游',0),('odrjk823mj8','家庭用品',0),('s73ijpispio','工资',1);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-09 13:08:32
