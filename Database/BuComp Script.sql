-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema BuComp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema BuComp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BuComp` DEFAULT CHARACTER SET utf8 ;
USE `BuComp` ;

-- -----------------------------------------------------
-- Table `BuComp`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Users` (
  `UserId` INT(11) NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(50) NULL DEFAULT NULL,
  `Surname` VARCHAR(50) NULL DEFAULT NULL,
  `Email` VARCHAR(100) NULL DEFAULT NULL,
  `Password` VARCHAR(45) NULL DEFAULT NULL,
  `Location` VARCHAR(150) NULL DEFAULT NULL,
  `Hobbies` VARCHAR(255) NULL DEFAULT NULL,
  `CVLink` VARCHAR(150) NULL DEFAULT NULL,
  `PhotoLink` VARCHAR(150) NULL DEFAULT NULL,
  `Education` VARCHAR(45) NULL DEFAULT NULL,
  `Profession` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE INDEX `UserId_UNIQUE` (`UserId` ASC),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`Communities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Communities` (
  `CommunityId` INT(11) NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(150) NULL DEFAULT NULL,
  `Description` VARCHAR(1000) NULL DEFAULT NULL,
  `CreationDate` DATETIME NULL DEFAULT NULL,
  `CreaterUserId` INT(11) NULL DEFAULT NULL,
  `AccessType` INT(11) NULL DEFAULT NULL COMMENT 'Who can access the community?\n1- Public\n2- Members only\n3- Joined members',
  `JoinType` INT(11) NULL DEFAULT NULL COMMENT 'Who can join community?\n1- Free to join\n2- Approval needed',
  `PostType` INT(11) NULL DEFAULT NULL COMMENT 'Who can enter post?\n1- Joined members\n2- Only allowed members',
  `MeetingCreationType` INT(11) NULL DEFAULT NULL COMMENT 'Who can create meeting?\n1- Joined members\n2- Only allowed members',
  `ResourceAdditionType` INT(11) NULL DEFAULT NULL COMMENT 'Who can add resources?\n1- Joined members\n2- Only allowed members',
  `TopicCreationType` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`CommunityId`),
  INDEX `FK_C_01_idx` (`CreaterUserId` ASC),
  CONSTRAINT `FK_C_01`
    FOREIGN KEY (`CreaterUserId`)
    REFERENCES `BuComp`.`Users` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`Roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Roles` (
  `RoleId` INT(11) NOT NULL AUTO_INCREMENT,
  `RoleName` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`RoleId`),
  UNIQUE INDEX `RoleId_UNIQUE` (`RoleId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`CommunityMembers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`CommunityMembers` (
  `CommunityMemberId` INT(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` INT(11) NULL DEFAULT NULL,
  `UserId` INT(11) NULL DEFAULT NULL,
  `RoleId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`CommunityMemberId`),
  UNIQUE INDEX `CommunityMemberId_UNIQUE` (`CommunityMemberId` ASC),
  INDEX `FK_CM_01_idx` (`CommunityId` ASC),
  INDEX `FK_CM_02_idx` (`UserId` ASC),
  INDEX `FK_CM_03_idx` (`RoleId` ASC),
  CONSTRAINT `FK_CM_01`
    FOREIGN KEY (`CommunityId`)
    REFERENCES `BuComp`.`Communities` (`CommunityId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CM_02`
    FOREIGN KEY (`UserId`)
    REFERENCES `BuComp`.`Users` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CM_03`
    FOREIGN KEY (`RoleId`)
    REFERENCES `BuComp`.`Roles` (`RoleId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`CommunityOffers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`CommunityOffers` (
  `CommunityOfferId` INT(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` INT(11) NULL DEFAULT NULL,
  `UserId` INT(11) NULL DEFAULT NULL,
  `OfferKey` VARCHAR(100) NULL DEFAULT NULL,
  `OfferDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`CommunityOfferId`),
  UNIQUE INDEX `CommunityOfferId_UNIQUE` (`CommunityOfferId` ASC),
  INDEX `FK_CO_01_idx` (`CommunityId` ASC),
  INDEX `FK_CO_02_idx` (`UserId` ASC),
  CONSTRAINT `FK_CO_01`
    FOREIGN KEY (`CommunityId`)
    REFERENCES `BuComp`.`Communities` (`CommunityId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CO_02`
    FOREIGN KEY (`UserId`)
    REFERENCES `BuComp`.`Users` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`CommunityRequests`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`CommunityRequests` (
  `CommunityRequestId` INT(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` INT(11) NULL DEFAULT NULL,
  `UserId` INT(11) NULL DEFAULT NULL,
  `RequestDate` DATETIME NULL DEFAULT NULL,
  `Status` INT(11) NULL DEFAULT '0' COMMENT 'Status of the request\n0- Waiting\n1- Approved\n2- Rejected',
  PRIMARY KEY (`CommunityRequestId`),
  UNIQUE INDEX `CommunityRequestId_UNIQUE` (`CommunityRequestId` ASC),
  UNIQUE INDEX `CommunityId_UserId` (`CommunityId`, `UserId`),
  INDEX `FK_CR_01_idx` (`CommunityId` ASC),
  INDEX `FK_CR_02_idx` (`UserId` ASC),
  CONSTRAINT `FK_CR_01`
    FOREIGN KEY (`CommunityId`)
    REFERENCES `BuComp`.`Communities` (`CommunityId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_CR_02`
    FOREIGN KEY (`UserId`)
    REFERENCES `BuComp`.`Users` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`Tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Tags` (
  `TagId` INT(11) NOT NULL AUTO_INCREMENT,
  `Tag` VARCHAR(100) NULL DEFAULT NULL,
  `CreationDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`TagId`),
  UNIQUE INDEX `TagId_UNIQUE` (`TagId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`CommunityTags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`CommunityTags` (
  `CommunityTagId` INT(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` INT(11) NOT NULL,
  `TagId` INT(11) NOT NULL,
  PRIMARY KEY (`CommunityTagId`),
  UNIQUE INDEX `CommunityTagId_UNIQUE` (`CommunityTagId` ASC),
  INDEX `CT_01_idx` (`CommunityId` ASC),
  INDEX `CT_02_idx` (`TagId` ASC),
  CONSTRAINT `CT_01`
    FOREIGN KEY (`CommunityId`)
    REFERENCES `BuComp`.`Communities` (`CommunityId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `CT_02`
    FOREIGN KEY (`TagId`)
    REFERENCES `BuComp`.`Tags` (`TagId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`Logs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Logs` (
  `LogId` INT(11) NOT NULL AUTO_INCREMENT,
  `LogTitle` VARCHAR(255) NULL DEFAULT NULL,
  `LogDetail` VARCHAR(2000) NULL DEFAULT NULL,
  `LogDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`LogId`),
  UNIQUE INDEX `LogId_UNIQUE` (`LogId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`MeetingTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`MeetingTypes` (
  `MeetingTypeId` INT(11) NOT NULL AUTO_INCREMENT,
  `MeetingType` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`MeetingTypeId`),
  UNIQUE INDEX `MeetingTypeId_UNIQUE` (`MeetingTypeId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`Meetings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Meetings` (
  `MeetingId` INT(11) NOT NULL AUTO_INCREMENT,
  `CommunityId` INT(11) NULL DEFAULT NULL,
  `MeetingDate` DATETIME NULL DEFAULT NULL,
  `TimeZone` VARCHAR(50) NULL DEFAULT NULL,
  `Duration` INT(11) NULL DEFAULT NULL,
  `Location` VARCHAR(45) NULL DEFAULT NULL,
  `IRCLink` VARCHAR(50) NULL DEFAULT NULL,
  `MeetingTypeId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`MeetingId`),
  UNIQUE INDEX `MeetingId_UNIQUE` (`MeetingId` ASC),
  INDEX `FK_M_01_idx` (`CommunityId` ASC),
  INDEX `FK_M_02_idx` (`MeetingTypeId` ASC),
  CONSTRAINT `FK_M_01`
    FOREIGN KEY (`CommunityId`)
    REFERENCES `BuComp`.`Communities` (`CommunityId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_M_02`
    FOREIGN KEY (`MeetingTypeId`)
    REFERENCES `BuComp`.`MeetingTypes` (`MeetingTypeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`MeetingAttendants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`MeetingAttendants` (
  `MeetingAttendantId` INT(11) NOT NULL AUTO_INCREMENT,
  `MeetingId` INT(11) NULL DEFAULT NULL,
  `UserId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`MeetingAttendantId`),
  UNIQUE INDEX `MeetingAttendantId_UNIQUE` (`MeetingAttendantId` ASC),
  INDEX `FK_MA_01_idx` (`MeetingId` ASC),
  INDEX `FK_MA_02_idx` (`UserId` ASC),
  CONSTRAINT `FK_MA_01`
    FOREIGN KEY (`MeetingId`)
    REFERENCES `BuComp`.`Meetings` (`MeetingId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_MA_02`
    FOREIGN KEY (`UserId`)
    REFERENCES `BuComp`.`Users` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`MeetingResourceTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`MeetingResourceTypes` (
  `MeetingResourceTypeId` INT(11) NOT NULL AUTO_INCREMENT,
  `MeetingResourceType` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`MeetingResourceTypeId`),
  UNIQUE INDEX `MeetingResourceTypeId_UNIQUE` (`MeetingResourceTypeId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`MeetingResources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`MeetingResources` (
  `MeetingResourceId` INT(11) NOT NULL AUTO_INCREMENT,
  `MeetingId` INT(11) NULL DEFAULT NULL,
  `MeetingResourceTypeId` INT(11) NULL DEFAULT NULL,
  `ResourceName` VARCHAR(100) NULL DEFAULT NULL,
  `Description` VARCHAR(1000) NULL DEFAULT NULL,
  `Link` VARCHAR(1000) NULL DEFAULT NULL,
  PRIMARY KEY (`MeetingResourceId`),
  UNIQUE INDEX `MeetingResourceId_UNIQUE` (`MeetingResourceId` ASC),
  INDEX `FK_MRS_01_idx` (`MeetingId` ASC),
  INDEX `FK_MRS_02_idx` (`MeetingResourceTypeId` ASC),
  CONSTRAINT `FK_MRS_01`
    FOREIGN KEY (`MeetingId`)
    REFERENCES `BuComp`.`Meetings` (`MeetingId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_MRS_02`
    FOREIGN KEY (`MeetingResourceTypeId`)
    REFERENCES `BuComp`.`MeetingResourceTypes` (`MeetingResourceTypeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`MeetingNotes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`MeetingNotes` (
  `MeetingNoteId` INT(11) NOT NULL AUTO_INCREMENT,
  `MeetingId` INT(11) NULL DEFAULT NULL,
  `MeetingResourceId` INT(11) NULL DEFAULT NULL,
  `MeetingNote` BLOB NULL DEFAULT NULL,
  PRIMARY KEY (`MeetingNoteId`),
  UNIQUE INDEX `MeetingNoteId_UNIQUE` (`MeetingNoteId` ASC),
  INDEX `FK_MN_01_idx` (`MeetingId` ASC),
  INDEX `FK_MN_02_idx` (`MeetingResourceId` ASC),
  CONSTRAINT `FK_MN_01`
    FOREIGN KEY (`MeetingId`)
    REFERENCES `BuComp`.`Meetings` (`MeetingId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_MN_02`
    FOREIGN KEY (`MeetingResourceId`)
    REFERENCES `BuComp`.`MeetingResources` (`MeetingResourceId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`MeetingRoles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`MeetingRoles` (
  `MeetingRoleId` INT(11) NOT NULL AUTO_INCREMENT,
  `MeetingId` INT(11) NULL DEFAULT NULL,
  `RoleId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`MeetingRoleId`),
  UNIQUE INDEX `MeetingRoleId_UNIQUE` (`MeetingRoleId` ASC),
  INDEX `FK_MR_01_idx` (`MeetingId` ASC),
  INDEX `FK_MR_02_idx` (`RoleId` ASC),
  CONSTRAINT `FK_MR_01`
    FOREIGN KEY (`MeetingId`)
    REFERENCES `BuComp`.`Meetings` (`MeetingId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_MR_02`
    FOREIGN KEY (`RoleId`)
    REFERENCES `BuComp`.`Roles` (`RoleId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`PostTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`PostTypes` (
  `PostTypeId` INT(11) NOT NULL AUTO_INCREMENT,
  `PostType` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`PostTypeId`),
  UNIQUE INDEX `PostTypeId_UNIQUE` (`PostTypeId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`Posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Posts` (
  `PostId` INT(11) NOT NULL AUTO_INCREMENT,
  `UserId` INT(11) NULL DEFAULT NULL,
  `PostTypeId` INT(11) NULL DEFAULT NULL,
  `Title` VARCHAR(1000) NULL DEFAULT NULL,
  `Post` BLOB NULL DEFAULT NULL,
  `AssociatedObjectId` INT(11) NULL DEFAULT NULL,
  `PostDate` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`PostId`),
  UNIQUE INDEX `PostId_UNIQUE` (`PostId` ASC),
  INDEX `FK_P_01_idx` (`UserId` ASC),
  INDEX `FK_P_02_idx` (`PostTypeId` ASC),
  CONSTRAINT `FK_P_01`
    FOREIGN KEY (`UserId`)
    REFERENCES `BuComp`.`Users` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_P_02`
    FOREIGN KEY (`PostTypeId`)
    REFERENCES `BuComp`.`PostTypes` (`PostTypeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`ResourceTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`ResourceTypes` (
  `ResourceTypeId` INT(11) NOT NULL AUTO_INCREMENT,
  `ResourceType` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`ResourceTypeId`),
  UNIQUE INDEX `ResourceTypeId_UNIQUE` (`ResourceTypeId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`Resources`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Resources` (
  `ResourceId` INT(11) NOT NULL AUTO_INCREMENT,
  `ResourceTypeId` INT(11) NULL DEFAULT NULL,
  `Link` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ResourceId`),
  UNIQUE INDEX `ResourceId_UNIQUE` (`ResourceId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`TagTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`TagTypes` (
  `TagTypeId` INT(11) NOT NULL AUTO_INCREMENT,
  `TagType` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`TagTypeId`),
  UNIQUE INDEX `TagTypeId_UNIQUE` (`TagTypeId` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`TagRelations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`TagRelations` (
  `TagRelationId` INT(11) NOT NULL AUTO_INCREMENT,
  `TagId` INT(11) NULL DEFAULT NULL,
  `TagTypeId` INT(11) NULL DEFAULT NULL,
  `TaggedObjectId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`TagRelationId`),
  UNIQUE INDEX `TagRelationId_UNIQUE` (`TagRelationId` ASC),
  INDEX `FK_TR_01_idx` (`TagId` ASC),
  INDEX `FK_TR_02_idx` (`TagTypeId` ASC),
  CONSTRAINT `FK_TR_01`
    FOREIGN KEY (`TagId`)
    REFERENCES `BuComp`.`Tags` (`TagId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_TR_02`
    FOREIGN KEY (`TagTypeId`)
    REFERENCES `BuComp`.`TagTypes` (`TagTypeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`Topics`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`Topics` (
  `TopicId` INT(11) NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(45) NULL DEFAULT NULL,
  `Description` VARCHAR(45) NULL DEFAULT NULL,
  `CommunityId` INT(11) NOT NULL,
  PRIMARY KEY (`TopicId`),
  UNIQUE INDEX `TopicId_UNIQUE` (`TopicId` ASC),
  INDEX `TP_01_idx` (`CommunityId` ASC),
  CONSTRAINT `TP_01`
    FOREIGN KEY (`CommunityId`)
    REFERENCES `BuComp`.`Communities` (`CommunityId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `BuComp`.`UserRoles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BuComp`.`UserRoles` (
  `UserRoleId` INT(11) NOT NULL AUTO_INCREMENT,
  `UserId` INT(11) NULL DEFAULT NULL,
  `RoleId` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`UserRoleId`),
  UNIQUE INDEX `UserRoleId_UNIQUE` (`UserRoleId` ASC),
  INDEX `FK_UR_01_idx` (`UserId` ASC),
  INDEX `FK_UR_02_idx` (`RoleId` ASC),
  CONSTRAINT `FK_UR_01`
    FOREIGN KEY (`UserId`)
    REFERENCES `BuComp`.`Users` (`UserId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_UR_02`
    FOREIGN KEY (`RoleId`)
    REFERENCES `BuComp`.`Roles` (`RoleId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
