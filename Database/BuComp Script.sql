CREATE DATABASE  IF NOT EXISTS `BuComp` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `BuComp`;
-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: localhost    Database: BuComp
-- ------------------------------------------------------
-- Server version	5.7.9

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
-- Table structure for table `Communities`
--

DROP TABLE IF EXISTS `Communities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Communities` (
  `CommunityId` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(150) DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  `CreaterUserId` int(11) DEFAULT NULL,
  `AccessType` int(11) DEFAULT NULL COMMENT 'Who can access the community?\n1- Public\n2- Members only\n3- Joined members',
  `JoinType` int(11) DEFAULT NULL COMMENT 'Who can join community?\n1- Free to join\n2- Approval needed',
  `PostType` int(11) DEFAULT NULL COMMENT 'Who can enter post?\n1- Joined members\n2- Only allowed members',
  `MeetingCreationType` int(11) DEFAULT NULL COMMENT 'Who can create meeting?\n1- Joined members\n2- Only allowed members',
  `ResourceAdditionType` int(11) DEFAULT NULL COMMENT 'Who can add resources?\n1- Joined members\n2- Only allowed members',
  PRIMARY KEY (`CommunityId`),
  KEY `FK_C_01_idx` (`CreaterUserId`),
  CONSTRAINT `FK_C_01` FOREIGN KEY (`CreaterUserId`) REFERENCES `Users` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Communities`
--

LOCK TABLES `Communities` WRITE;
/*!40000 ALTER TABLE `Communities` DISABLE KEYS */;
/*!40000 ALTER TABLE `Communities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CommunityMembers`
--

DROP TABLE IF EXISTS `CommunityMembers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CommunityMembers` (
  `CommunityMemberId` int(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `RoleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`CommunityMemberId`),
  UNIQUE KEY `CommunityMemberId_UNIQUE` (`CommunityMemberId`),
  KEY `FK_CM_01_idx` (`CommunityId`),
  KEY `FK_CM_02_idx` (`UserId`),
  KEY `FK_CM_03_idx` (`RoleId`),
  CONSTRAINT `FK_CM_01` FOREIGN KEY (`CommunityId`) REFERENCES `Communities` (`CommunityId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_CM_02` FOREIGN KEY (`UserId`) REFERENCES `Users` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_CM_03` FOREIGN KEY (`RoleId`) REFERENCES `Roles` (`RoleId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CommunityMembers`
--

LOCK TABLES `CommunityMembers` WRITE;
/*!40000 ALTER TABLE `CommunityMembers` DISABLE KEYS */;
/*!40000 ALTER TABLE `CommunityMembers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CommunityOffers`
--

DROP TABLE IF EXISTS `CommunityOffers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CommunityOffers` (
  `CommunityOfferId` int(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `OfferKey` varchar(100) DEFAULT NULL,
  `OfferDate` datetime DEFAULT NULL,
  PRIMARY KEY (`CommunityOfferId`),
  UNIQUE KEY `CommunityOfferId_UNIQUE` (`CommunityOfferId`),
  KEY `FK_CO_01_idx` (`CommunityId`),
  KEY `FK_CO_02_idx` (`UserId`),
  CONSTRAINT `FK_CO_01` FOREIGN KEY (`CommunityId`) REFERENCES `Communities` (`CommunityId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_CO_02` FOREIGN KEY (`UserId`) REFERENCES `Users` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CommunityOffers`
--

LOCK TABLES `CommunityOffers` WRITE;
/*!40000 ALTER TABLE `CommunityOffers` DISABLE KEYS */;
/*!40000 ALTER TABLE `CommunityOffers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CommunityRequests`
--

DROP TABLE IF EXISTS `CommunityRequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CommunityRequests` (
  `CommunityRequestId` int(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  `RequestDate` datetime DEFAULT NULL,
  `Status` int(11) DEFAULT '0' COMMENT 'Status of the request\n0- Waiting\n1- Approved\n2- Rejected',
  PRIMARY KEY (`CommunityRequestId`),
  UNIQUE KEY `CommunityRequestId_UNIQUE` (`CommunityRequestId`),
  KEY `FK_CR_01_idx` (`CommunityId`),
  KEY `FK_CR_02_idx` (`UserId`),
  CONSTRAINT `FK_CR_01` FOREIGN KEY (`CommunityId`) REFERENCES `Communities` (`CommunityId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_CR_02` FOREIGN KEY (`UserId`) REFERENCES `Users` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CommunityRequests`
--

LOCK TABLES `CommunityRequests` WRITE;
/*!40000 ALTER TABLE `CommunityRequests` DISABLE KEYS */;
/*!40000 ALTER TABLE `CommunityRequests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Logs`
--

DROP TABLE IF EXISTS `Logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Logs` (
  `LogId` int(11) NOT NULL AUTO_INCREMENT,
  `LogTitle` varchar(255) DEFAULT NULL,
  `LogDetail` varchar(2000) DEFAULT NULL,
  `LogDate` datetime DEFAULT NULL,
  PRIMARY KEY (`LogId`),
  UNIQUE KEY `LogId_UNIQUE` (`LogId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Logs`
--

LOCK TABLES `Logs` WRITE;
/*!40000 ALTER TABLE `Logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `Logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MeetingAttendants`
--

DROP TABLE IF EXISTS `MeetingAttendants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MeetingAttendants` (
  `MeetingAttendantId` int(11) NOT NULL AUTO_INCREMENT,
  `MeetingId` int(11) DEFAULT NULL,
  `UserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`MeetingAttendantId`),
  UNIQUE KEY `MeetingAttendantId_UNIQUE` (`MeetingAttendantId`),
  KEY `FK_MA_01_idx` (`MeetingId`),
  KEY `FK_MA_02_idx` (`UserId`),
  CONSTRAINT `FK_MA_01` FOREIGN KEY (`MeetingId`) REFERENCES `Meetings` (`MeetingId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_MA_02` FOREIGN KEY (`UserId`) REFERENCES `Users` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MeetingAttendants`
--

LOCK TABLES `MeetingAttendants` WRITE;
/*!40000 ALTER TABLE `MeetingAttendants` DISABLE KEYS */;
/*!40000 ALTER TABLE `MeetingAttendants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MeetingNotes`
--

DROP TABLE IF EXISTS `MeetingNotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MeetingNotes` (
  `MeetingNoteId` int(11) NOT NULL AUTO_INCREMENT,
  `MeetingId` int(11) DEFAULT NULL,
  `MeetingResourceId` int(11) DEFAULT NULL,
  `MeetingNote` blob,
  PRIMARY KEY (`MeetingNoteId`),
  UNIQUE KEY `MeetingNoteId_UNIQUE` (`MeetingNoteId`),
  KEY `FK_MN_01_idx` (`MeetingId`),
  KEY `FK_MN_02_idx` (`MeetingResourceId`),
  CONSTRAINT `FK_MN_01` FOREIGN KEY (`MeetingId`) REFERENCES `Meetings` (`MeetingId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_MN_02` FOREIGN KEY (`MeetingResourceId`) REFERENCES `MeetingResources` (`MeetingResourceId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MeetingNotes`
--

LOCK TABLES `MeetingNotes` WRITE;
/*!40000 ALTER TABLE `MeetingNotes` DISABLE KEYS */;
/*!40000 ALTER TABLE `MeetingNotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MeetingResourceTypes`
--

DROP TABLE IF EXISTS `MeetingResourceTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MeetingResourceTypes` (
  `MeetingResourceTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `MeetingResourceType` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`MeetingResourceTypeId`),
  UNIQUE KEY `MeetingResourceTypeId_UNIQUE` (`MeetingResourceTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MeetingResourceTypes`
--

LOCK TABLES `MeetingResourceTypes` WRITE;
/*!40000 ALTER TABLE `MeetingResourceTypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `MeetingResourceTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MeetingResources`
--

DROP TABLE IF EXISTS `MeetingResources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MeetingResources` (
  `MeetingResourceId` int(11) NOT NULL AUTO_INCREMENT,
  `MeetingId` int(11) DEFAULT NULL,
  `MeetingResourceTypeId` int(11) DEFAULT NULL,
  `ResourceName` varchar(100) DEFAULT NULL,
  `Description` varchar(1000) DEFAULT NULL,
  `Link` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`MeetingResourceId`),
  UNIQUE KEY `MeetingResourceId_UNIQUE` (`MeetingResourceId`),
  KEY `FK_MRS_01_idx` (`MeetingId`),
  KEY `FK_MRS_02_idx` (`MeetingResourceTypeId`),
  CONSTRAINT `FK_MRS_01` FOREIGN KEY (`MeetingId`) REFERENCES `Meetings` (`MeetingId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_MRS_02` FOREIGN KEY (`MeetingResourceTypeId`) REFERENCES `MeetingResourceTypes` (`MeetingResourceTypeId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MeetingResources`
--

LOCK TABLES `MeetingResources` WRITE;
/*!40000 ALTER TABLE `MeetingResources` DISABLE KEYS */;
/*!40000 ALTER TABLE `MeetingResources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MeetingRoles`
--

DROP TABLE IF EXISTS `MeetingRoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MeetingRoles` (
  `MeetingRoleId` int(11) NOT NULL AUTO_INCREMENT,
  `MeetingId` int(11) DEFAULT NULL,
  `RoleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`MeetingRoleId`),
  UNIQUE KEY `MeetingRoleId_UNIQUE` (`MeetingRoleId`),
  KEY `FK_MR_01_idx` (`MeetingId`),
  KEY `FK_MR_02_idx` (`RoleId`),
  CONSTRAINT `FK_MR_01` FOREIGN KEY (`MeetingId`) REFERENCES `Meetings` (`MeetingId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_MR_02` FOREIGN KEY (`RoleId`) REFERENCES `Roles` (`RoleId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MeetingRoles`
--

LOCK TABLES `MeetingRoles` WRITE;
/*!40000 ALTER TABLE `MeetingRoles` DISABLE KEYS */;
/*!40000 ALTER TABLE `MeetingRoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MeetingTypes`
--

DROP TABLE IF EXISTS `MeetingTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MeetingTypes` (
  `MeetingTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `MeetingType` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`MeetingTypeId`),
  UNIQUE KEY `MeetingTypeId_UNIQUE` (`MeetingTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MeetingTypes`
--

LOCK TABLES `MeetingTypes` WRITE;
/*!40000 ALTER TABLE `MeetingTypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `MeetingTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Meetings`
--

DROP TABLE IF EXISTS `Meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Meetings` (
  `MeetingId` int(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` int(11) DEFAULT NULL,
  `MeetingDate` datetime DEFAULT NULL,
  `TimeZone` varchar(50) DEFAULT NULL,
  `Duration` int(11) DEFAULT NULL,
  `Location` varchar(45) DEFAULT NULL,
  `IRCLink` varchar(50) DEFAULT NULL,
  `MeetingTypeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`MeetingId`),
  UNIQUE KEY `MeetingId_UNIQUE` (`MeetingId`),
  KEY `FK_M_01_idx` (`CommunityId`),
  KEY `FK_M_02_idx` (`MeetingTypeId`),
  CONSTRAINT `FK_M_01` FOREIGN KEY (`CommunityId`) REFERENCES `Communities` (`CommunityId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_M_02` FOREIGN KEY (`MeetingTypeId`) REFERENCES `MeetingTypes` (`MeetingTypeId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Meetings`
--

LOCK TABLES `Meetings` WRITE;
/*!40000 ALTER TABLE `Meetings` DISABLE KEYS */;
/*!40000 ALTER TABLE `Meetings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PostTypes`
--

DROP TABLE IF EXISTS `PostTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PostTypes` (
  `PostTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `PostType` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`PostTypeId`),
  UNIQUE KEY `PostTypeId_UNIQUE` (`PostTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PostTypes`
--

LOCK TABLES `PostTypes` WRITE;
/*!40000 ALTER TABLE `PostTypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `PostTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Posts` (
  `PostId` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `PostTypeId` int(11) DEFAULT NULL,
  `Title` varchar(1000) DEFAULT NULL,
  `Post` blob,
  `AssociatedObjectId` int(11) DEFAULT NULL,
  `PostDate` datetime DEFAULT NULL,
  PRIMARY KEY (`PostId`),
  UNIQUE KEY `PostId_UNIQUE` (`PostId`),
  KEY `FK_P_01_idx` (`UserId`),
  KEY `FK_P_02_idx` (`PostTypeId`),
  CONSTRAINT `FK_P_01` FOREIGN KEY (`UserId`) REFERENCES `Users` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_P_02` FOREIGN KEY (`PostTypeId`) REFERENCES `PostTypes` (`PostTypeId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ResourceTypes`
--

DROP TABLE IF EXISTS `ResourceTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ResourceTypes` (
  `ResourceTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `ResourceType` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ResourceTypeId`),
  UNIQUE KEY `ResourceTypeId_UNIQUE` (`ResourceTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ResourceTypes`
--

LOCK TABLES `ResourceTypes` WRITE;
/*!40000 ALTER TABLE `ResourceTypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ResourceTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Resources`
--

DROP TABLE IF EXISTS `Resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Resources` (
  `ResourceId` int(11) NOT NULL AUTO_INCREMENT,
  `ResourceTypeId` int(11) DEFAULT NULL,
  `Link` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ResourceId`),
  UNIQUE KEY `ResourceId_UNIQUE` (`ResourceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Resources`
--

LOCK TABLES `Resources` WRITE;
/*!40000 ALTER TABLE `Resources` DISABLE KEYS */;
/*!40000 ALTER TABLE `Resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Roles`
--

DROP TABLE IF EXISTS `Roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Roles` (
  `RoleId` int(11) NOT NULL AUTO_INCREMENT,
  `RoleName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`RoleId`),
  UNIQUE KEY `RoleId_UNIQUE` (`RoleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Roles`
--

LOCK TABLES `Roles` WRITE;
/*!40000 ALTER TABLE `Roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `Roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TagRelations`
--

DROP TABLE IF EXISTS `TagRelations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TagRelations` (
  `TagRelationId` int(11) NOT NULL AUTO_INCREMENT,
  `TagId` int(11) DEFAULT NULL,
  `TagTypeId` int(11) DEFAULT NULL,
  `TaggedObjectId` int(11) DEFAULT NULL,
  PRIMARY KEY (`TagRelationId`),
  UNIQUE KEY `TagRelationId_UNIQUE` (`TagRelationId`),
  KEY `FK_TR_01_idx` (`TagId`),
  KEY `FK_TR_02_idx` (`TagTypeId`),
  CONSTRAINT `FK_TR_01` FOREIGN KEY (`TagId`) REFERENCES `Tags` (`TagId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_TR_02` FOREIGN KEY (`TagTypeId`) REFERENCES `TagTypes` (`TagTypeId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TagRelations`
--

LOCK TABLES `TagRelations` WRITE;
/*!40000 ALTER TABLE `TagRelations` DISABLE KEYS */;
/*!40000 ALTER TABLE `TagRelations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TagTypes`
--

DROP TABLE IF EXISTS `TagTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TagTypes` (
  `TagTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `TagType` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`TagTypeId`),
  UNIQUE KEY `TagTypeId_UNIQUE` (`TagTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TagTypes`
--

LOCK TABLES `TagTypes` WRITE;
/*!40000 ALTER TABLE `TagTypes` DISABLE KEYS */;
/*!40000 ALTER TABLE `TagTypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tags`
--

DROP TABLE IF EXISTS `Tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tags` (
  `TagId` int(11) NOT NULL AUTO_INCREMENT,
  `Tag` varchar(100) DEFAULT NULL,
  `CreationDate` datetime DEFAULT NULL,
  PRIMARY KEY (`TagId`),
  UNIQUE KEY `TagId_UNIQUE` (`TagId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tags`
--

LOCK TABLES `Tags` WRITE;
/*!40000 ALTER TABLE `Tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `Tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserRoles`
--

DROP TABLE IF EXISTS `UserRoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserRoles` (
  `UserRoleId` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) DEFAULT NULL,
  `RoleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`UserRoleId`),
  UNIQUE KEY `UserRoleId_UNIQUE` (`UserRoleId`),
  KEY `FK_UR_01_idx` (`UserId`),
  KEY `FK_UR_02_idx` (`RoleId`),
  CONSTRAINT `FK_UR_01` FOREIGN KEY (`UserId`) REFERENCES `Users` (`UserId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_UR_02` FOREIGN KEY (`RoleId`) REFERENCES `Roles` (`RoleId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserRoles`
--

LOCK TABLES `UserRoles` WRITE;
/*!40000 ALTER TABLE `UserRoles` DISABLE KEYS */;
/*!40000 ALTER TABLE `UserRoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `UserId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Surname` varchar(50) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Location` varchar(150) DEFAULT NULL,
  `Hobbies` varchar(255) DEFAULT NULL,
  `CVLink` varchar(150) DEFAULT NULL,
  `PhotoLink` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `UserId_UNIQUE` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-31 16:36:20
