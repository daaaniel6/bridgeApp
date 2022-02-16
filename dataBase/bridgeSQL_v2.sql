-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bridges
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bridges
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bridges` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bridges` ;

-- -----------------------------------------------------
-- Table `bridges`.`barrier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`barrier` (
  `barrier_id` BIGINT NOT NULL AUTO_INCREMENT,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `cracks_in_one_direction` VARCHAR(450) NULL DEFAULT NULL,
  `cracks_in_two_directions` VARCHAR(450) NULL DEFAULT NULL,
  `beaten` DOUBLE NULL DEFAULT NULL,
  `painting` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`barrier_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`bearing_slab`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`bearing_slab` (
  `bearing_slab_id` BIGINT NOT NULL AUTO_INCREMENT,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `cracks_in_one_direction` VARCHAR(450) NULL DEFAULT NULL,
  `cracks_in_two_directions` VARCHAR(450) NULL DEFAULT NULL,
  `detachment_of` VARCHAR(450) NULL DEFAULT NULL,
  `potholes` VARCHAR(450) NULL DEFAULT NULL,
  `steel_exhibition` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  PRIMARY KEY (`bearing_slab_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`channel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`channel` (
  `channel_id` BIGINT NOT NULL AUTO_INCREMENT,
  `river_name` VARCHAR(450) NULL DEFAULT NULL,
  `body_type` VARCHAR(450) NULL DEFAULT NULL,
  `channel_status` VARCHAR(450) NULL DEFAULT NULL,
  `state_zone_adjacent_to_abutments` VARCHAR(450) NULL DEFAULT NULL,
  `channeling` VARCHAR(450) NULL DEFAULT NULL,
  `overflow` VARCHAR(450) NULL DEFAULT NULL,
  `frequency` DOUBLE NULL DEFAULT NULL,
  `last_overflow_date` DATE NULL DEFAULT NULL,
  `observation` VARCHAR(4500) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  `image` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`channel_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`general_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`general_data` (
  `general_data_id` BIGINT NOT NULL AUTO_INCREMENT,
  `length` DOUBLE NULL DEFAULT NULL,
  `number_sections` INT NULL DEFAULT NULL,
  `tread_width` DOUBLE NULL DEFAULT NULL,
  `curb_width_right` DOUBLE NULL DEFAULT NULL,
  `curb_width_left` DOUBLE NULL DEFAULT NULL,
  `bridge_typology` VARCHAR(450) NULL DEFAULT NULL,
  `top_headroom` DOUBLE NULL DEFAULT NULL,
  `free_height_above_river` DOUBLE NULL DEFAULT NULL,
  `bridge_over` VARCHAR(450) NULL DEFAULT NULL,
  `number_roads` INT NULL DEFAULT NULL,
  `superstructure_material` VARCHAR(450) NULL DEFAULT NULL,
  `traffic` DOUBLE NULL DEFAULT NULL,
  `percentage_trucks_buses` DOUBLE NULL DEFAULT NULL,
  `last_evaluation_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`general_data_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`handrail_railing`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`handrail_railing` (
  `handrail_railing_id` BIGINT NOT NULL AUTO_INCREMENT,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `absence_of_section` VARCHAR(450) NULL DEFAULT NULL,
  `element_deformation` VARCHAR(450) NULL DEFAULT NULL,
  `beaten` DOUBLE NULL DEFAULT NULL,
  `painting` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`handrail_railing_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`railing_posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`railing_posts` (
  `railing_posts_id` BIGINT NOT NULL AUTO_INCREMENT,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `absence_of_section` VARCHAR(450) NULL DEFAULT NULL,
  `element_deformation` VARCHAR(450) NULL DEFAULT NULL,
  `beaten` INT NULL DEFAULT NULL,
  `painting` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`railing_posts_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`non_structural_elements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`non_structural_elements` (
  `non_structural_elements_id` BIGINT NOT NULL AUTO_INCREMENT,
  `railing_posts_railing_posts_id` BIGINT NULL DEFAULT NULL,
  `handrail_railing_handrail_railing_id` BIGINT NULL DEFAULT NULL,
  `barrier_barrier_id` BIGINT NULL DEFAULT NULL,
  `image` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`non_structural_elements_id`),
  INDEX `fk_non_structural_elements_railing_posts1_idx` (`railing_posts_railing_posts_id` ASC) VISIBLE,
  INDEX `fk_non_structural_elements_handrail_railing1_idx` (`handrail_railing_handrail_railing_id` ASC) VISIBLE,
  INDEX `fk_non_structural_elements_barrier1_idx` (`barrier_barrier_id` ASC) VISIBLE,
  CONSTRAINT `fk_non_structural_elements_barrier1`
    FOREIGN KEY (`barrier_barrier_id`)
    REFERENCES `bridges`.`barrier` (`barrier_id`),
  CONSTRAINT `fk_non_structural_elements_handrail_railing1`
    FOREIGN KEY (`handrail_railing_handrail_railing_id`)
    REFERENCES `bridges`.`handrail_railing` (`handrail_railing_id`),
  CONSTRAINT `fk_non_structural_elements_railing_posts1`
    FOREIGN KEY (`railing_posts_railing_posts_id`)
    REFERENCES `bridges`.`railing_posts` (`railing_posts_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`other`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`other` (
  `other_id` BIGINT NOT NULL AUTO_INCREMENT,
  `informative_signage` VARCHAR(450) NULL DEFAULT NULL,
  `preventive_signage` VARCHAR(45) NULL DEFAULT NULL,
  `regulatory_signage` VARCHAR(450) NULL DEFAULT NULL,
  `horizontal_signage` VARCHAR(450) NULL DEFAULT NULL,
  `artificial_lighting` VARCHAR(450) NULL DEFAULT NULL,
  `sewer_system` VARCHAR(450) NULL DEFAULT NULL,
  `drainage_status` VARCHAR(450) NULL DEFAULT NULL,
  `observation` VARCHAR(4500) NULL DEFAULT NULL,
  `extra` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`other_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`scour`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`scour` (
  `scour_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(450) NULL DEFAULT NULL,
  `there_is_not` VARCHAR(450) NULL DEFAULT NULL,
  `yes_but_there_is_not` VARCHAR(450) NULL DEFAULT NULL,
  `yes_there_is_exposure` VARCHAR(450) NULL DEFAULT NULL,
  `settlement_of` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`scour_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`support`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`support` (
  `support_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(450) NULL DEFAULT NULL,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `crushed_neoprene` VARCHAR(450) NULL DEFAULT NULL,
  `out_of_place` VARCHAR(450) NULL DEFAULT NULL,
  `rusty` VARCHAR(450) NULL DEFAULT NULL,
  `bolt_missing` VARCHAR(450) NULL DEFAULT NULL,
  `broken_bolt` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  PRIMARY KEY (`support_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`pile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`pile` (
  `pile_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_pile` VARCHAR(45) NULL DEFAULT NULL,
  `support_support_id` BIGINT NULL DEFAULT NULL,
  `scour_scour_id` BIGINT NULL DEFAULT NULL,
  `image` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`pile_id`),
  INDEX `fk_pile_support1_idx` (`support_support_id` ASC) VISIBLE,
  INDEX `fk_pile_scour1_idx` (`scour_scour_id` ASC) VISIBLE,
  CONSTRAINT `fk_pile_scour1`
    FOREIGN KEY (`scour_scour_id`)
    REFERENCES `bridges`.`scour` (`scour_id`),
  CONSTRAINT `fk_pile_support1`
    FOREIGN KEY (`support_support_id`)
    REFERENCES `bridges`.`support` (`support_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`sewer_system`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`sewer_system` (
  `sewer_system_id` BIGINT NOT NULL AUTO_INCREMENT,
  `clean` VARCHAR(450) NULL DEFAULT NULL,
  `blocked` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`sewer_system_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`superstructure`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`superstructure` (
  `superstructure_id` BIGINT NOT NULL AUTO_INCREMENT,
  `bearing_slab_bearing_slab_id` BIGINT NULL DEFAULT NULL,
  `sewer_system_sewer_system_id` BIGINT NULL DEFAULT NULL,
  `image` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`superstructure_id`),
  INDEX `fk_superstructure_bearing_slab1_idx` (`bearing_slab_bearing_slab_id` ASC) VISIBLE,
  INDEX `fk_superstructure_sewer_system1_idx` (`sewer_system_sewer_system_id` ASC) VISIBLE,
  CONSTRAINT `fk_superstructure_bearing_slab1`
    FOREIGN KEY (`bearing_slab_bearing_slab_id`)
    REFERENCES `bridges`.`bearing_slab` (`bearing_slab_id`),
  CONSTRAINT `fk_superstructure_sewer_system1`
    FOREIGN KEY (`sewer_system_sewer_system_id`)
    REFERENCES `bridges`.`sewer_system` (`sewer_system_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`departament`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`departament` (
  `departament_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(450) NULL DEFAULT NULL,
  `long` VARCHAR(45) NULL DEFAULT NULL,
  `lat` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`departament_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`municipality`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`municipality` (
  `municipality_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `long` VARCHAR(45) NULL DEFAULT NULL,
  `lat` VARCHAR(45) NULL DEFAULT NULL,
  `departament_departament_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`municipality_id`),
  INDEX `fk_municipality_departament_idx` (`departament_departament_id` ASC) VISIBLE,
  CONSTRAINT `fk_municipality_departament`
    FOREIGN KEY (`departament_departament_id`)
    REFERENCES `bridges`.`departament` (`departament_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 339
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `user_name` VARCHAR(255) NULL DEFAULT NULL,
  `token_password` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UK_lqjrcobrh9jc8wpcar64q1bfh` (`user_name` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`bridge`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`bridge` (
  `bridge_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(450) NOT NULL,
  `code` VARCHAR(450) NULL DEFAULT NULL,
  `route` VARCHAR(450) NULL DEFAULT NULL,
  `mileage` INT NULL DEFAULT NULL,
  `paved_route` VARCHAR(450) NULL DEFAULT NULL,
  `horizontal_alignment` VARCHAR(450) NULL DEFAULT NULL,
  `skew` VARCHAR(450) NULL DEFAULT NULL,
  `north_utm_coordinates` VARCHAR(450) NULL DEFAULT NULL,
  `east_utm_coordinates` VARCHAR(450) NULL DEFAULT NULL,
  `population_before` VARCHAR(450) NULL DEFAULT NULL,
  `population_after` VARCHAR(450) NULL DEFAULT NULL,
  `status` VARCHAR(450) NULL DEFAULT NULL,
  `traffic_light` VARCHAR(450) NULL DEFAULT NULL,
  `evaluation_start_date` DATE NULL DEFAULT NULL,
  `evaluation_end_date` DATE NULL DEFAULT NULL,
  `long` VARCHAR(45) NULL DEFAULT NULL,
  `lat` VARCHAR(45) NULL DEFAULT NULL,
  `general_data_general_data_id` BIGINT NULL DEFAULT NULL,
  `pile_pile_id` BIGINT NULL DEFAULT NULL,
  `superstructure_superstructure_id` BIGINT NULL DEFAULT NULL,
  `non_structural_elements_non_structural_elements_id` BIGINT NULL DEFAULT NULL,
  `channel_channel_id` BIGINT NULL DEFAULT NULL,
  `other_other_id` BIGINT NULL DEFAULT NULL,
  `type` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  `municipality_municipality_id` INT NULL,
  `user_user_id` INT NULL,
  PRIMARY KEY (`bridge_id`),
  INDEX `fk_bridge_general_data1_idx` (`general_data_general_data_id` ASC) VISIBLE,
  INDEX `fk_bridge_pile1_idx` (`pile_pile_id` ASC) VISIBLE,
  INDEX `fk_bridge_superstructure1_idx` (`superstructure_superstructure_id` ASC) VISIBLE,
  INDEX `fk_bridge_non_structural_elements1_idx` (`non_structural_elements_non_structural_elements_id` ASC) VISIBLE,
  INDEX `fk_bridge_channel1_idx` (`channel_channel_id` ASC) VISIBLE,
  INDEX `fk_bridge_other1_idx` (`other_other_id` ASC) VISIBLE,
  INDEX `fk_bridge_municipality1_idx` (`municipality_municipality_id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_bridge_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_bridge_channel1`
    FOREIGN KEY (`channel_channel_id`)
    REFERENCES `bridges`.`channel` (`channel_id`),
  CONSTRAINT `fk_bridge_general_data1`
    FOREIGN KEY (`general_data_general_data_id`)
    REFERENCES `bridges`.`general_data` (`general_data_id`),
  CONSTRAINT `fk_bridge_non_structural_elements1`
    FOREIGN KEY (`non_structural_elements_non_structural_elements_id`)
    REFERENCES `bridges`.`non_structural_elements` (`non_structural_elements_id`),
  CONSTRAINT `fk_bridge_other1`
    FOREIGN KEY (`other_other_id`)
    REFERENCES `bridges`.`other` (`other_id`),
  CONSTRAINT `fk_bridge_pile1`
    FOREIGN KEY (`pile_pile_id`)
    REFERENCES `bridges`.`pile` (`pile_id`),
  CONSTRAINT `fk_bridge_superstructure1`
    FOREIGN KEY (`superstructure_superstructure_id`)
    REFERENCES `bridges`.`superstructure` (`superstructure_id`),
  CONSTRAINT `fk_bridge_municipality1`
    FOREIGN KEY (`municipality_municipality_id`)
    REFERENCES `bridges`.`municipality` (`municipality_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bridge_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `bridges`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`blueprint`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`blueprint` (
  `blueprint_id` BIGINT NOT NULL AUTO_INCREMENT,
  `blueprint` LONGBLOB NULL DEFAULT NULL,
  `name` VARCHAR(450) NULL DEFAULT NULL,
  `description` VARCHAR(450) NULL DEFAULT NULL,
  `number` INT NULL DEFAULT NULL,
  `height` DOUBLE NULL DEFAULT NULL,
  `width` DOUBLE NULL DEFAULT NULL,
  `bridge_bridge_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`blueprint_id`),
  INDEX `fk_blueprint_bridge1_idx` (`bridge_bridge_id` ASC) VISIBLE,
  CONSTRAINT `fk_blueprint_bridge1`
    FOREIGN KEY (`bridge_bridge_id`)
    REFERENCES `bridges`.`bridge` (`bridge_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`comment` (
  `comment_id` BIGINT NOT NULL AUTO_INCREMENT,
  `comment` VARCHAR(4500) NULL DEFAULT NULL,
  `tag` VARCHAR(450) NULL,
  `type` VARCHAR(45) NULL,
  `extra` VARCHAR(45) NULL,
  `bridge_bridge_id` BIGINT NULL DEFAULT NULL,
  `user_user_id` INT NULL,
  PRIMARY KEY (`comment_id`),
  INDEX `fk_comment_bridge1_idx` (`bridge_bridge_id` ASC) VISIBLE,
  INDEX `fk_comment_user1_idx` (`user_user_id` ASC) VISIBLE,
  CONSTRAINT `fk_comment_bridge1`
    FOREIGN KEY (`bridge_bridge_id`)
    REFERENCES `bridges`.`bridge` (`bridge_id`),
  CONSTRAINT `fk_comment_user1`
    FOREIGN KEY (`user_user_id`)
    REFERENCES `bridges`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`concrete_row`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`concrete_row` (
  `concrete_row_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_concrete` VARCHAR(450) NULL DEFAULT NULL,
  `diagonal_cracks` VARCHAR(450) NULL DEFAULT NULL,
  `vertical_cracks` VARCHAR(450) NULL DEFAULT NULL,
  `stone_loss_per_blow` VARCHAR(450) NULL DEFAULT NULL,
  `steel_exhibition` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  `superstructure_superstructure_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`concrete_row_id`),
  INDEX `fk_concrete_row_superstructure1_idx` (`superstructure_superstructure_id` ASC) VISIBLE,
  CONSTRAINT `fk_concrete_row_superstructure1`
    FOREIGN KEY (`superstructure_superstructure_id`)
    REFERENCES `bridges`.`superstructure` (`superstructure_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`council`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`council` (
  `council_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_council` VARCHAR(450) NULL DEFAULT NULL,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `clean_gasket` VARCHAR(450) NULL DEFAULT NULL,
  `damage` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(45) NULL DEFAULT NULL,
  `non_structural_elements_non_structural_elements_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`council_id`),
  INDEX `fk_council_non_structural_elements1_idx` (`non_structural_elements_non_structural_elements_id` ASC) VISIBLE,
  CONSTRAINT `fk_council_non_structural_elements1`
    FOREIGN KEY (`non_structural_elements_non_structural_elements_id`)
    REFERENCES `bridges`.`non_structural_elements` (`non_structural_elements_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`image` (
  `image_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(4500) NULL DEFAULT NULL,
  `comment` VARCHAR(450) NULL DEFAULT NULL,
  `image` LONGBLOB NULL DEFAULT NULL,
  `bridge_bridge_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  INDEX `fk_image_bridge1_idx` (`bridge_bridge_id` ASC) VISIBLE,
  CONSTRAINT `fk_image_bridge1`
    FOREIGN KEY (`bridge_bridge_id`)
    REFERENCES `bridges`.`bridge` (`bridge_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`image_other`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`image_other` (
  `image_other_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(4500) NULL DEFAULT NULL,
  `comment` VARCHAR(450) NULL DEFAULT NULL,
  `image` LONGBLOB NULL DEFAULT NULL,
  `other_other_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`image_other_id`),
  INDEX `fk_image_other_other1_idx` (`other_other_id` ASC) VISIBLE,
  CONSTRAINT `fk_image_other_other1`
    FOREIGN KEY (`other_other_id`)
    REFERENCES `bridges`.`other` (`other_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`protection_works`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`protection_works` (
  `protection_works_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_protection_works` VARCHAR(450) NULL DEFAULT NULL,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `type` VARCHAR(450) NULL DEFAULT NULL,
  `long` DOUBLE NULL DEFAULT NULL,
  `width` DOUBLE NULL DEFAULT NULL,
  `height` DOUBLE NULL DEFAULT NULL,
  `non_structural_elements_non_structural_elements_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`protection_works_id`),
  INDEX `fk_protection_works_non_structural_elements1_idx` (`non_structural_elements_non_structural_elements_id` ASC) VISIBLE,
  CONSTRAINT `fk_protection_works_non_structural_elements1`
    FOREIGN KEY (`non_structural_elements_non_structural_elements_id`)
    REFERENCES `bridges`.`non_structural_elements` (`non_structural_elements_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`sensor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`sensor` (
  `sensor_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(450) NULL DEFAULT NULL,
  `data` VARCHAR(450) NULL DEFAULT NULL,
  `description` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  `bridge_bridge_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`sensor_id`),
  INDEX `fk_sensor_bridge1_idx` (`bridge_bridge_id` ASC) VISIBLE,
  CONSTRAINT `fk_sensor_bridge1`
    FOREIGN KEY (`bridge_bridge_id`)
    REFERENCES `bridges`.`bridge` (`bridge_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`reading`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`reading` (
  `reading_id` BIGINT NOT NULL AUTO_INCREMENT,
  `reading` VARCHAR(450) NULL DEFAULT NULL,
  `description` VARCHAR(450) NULL DEFAULT NULL,
  `date_time` DATETIME NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  `sensor_sensor_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`reading_id`),
  INDEX `fk_reading_sensor1_idx` (`sensor_sensor_id` ASC) VISIBLE,
  CONSTRAINT `fk_reading_sensor1`
    FOREIGN KEY (`sensor_sensor_id`)
    REFERENCES `bridges`.`sensor` (`sensor_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`rol` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name_rol` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`stapes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`stapes` (
  `stapes_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_stapes` VARCHAR(450) NULL DEFAULT NULL,
  `bridge_bridge_id` BIGINT NULL DEFAULT NULL,
  `support_support_id` BIGINT NULL DEFAULT NULL,
  `scour_scour_id` BIGINT NULL DEFAULT NULL,
  `image` LONGBLOB NULL DEFAULT NULL,
  PRIMARY KEY (`stapes_id`),
  INDEX `fk_stapes_bridge1_idx` (`bridge_bridge_id` ASC) VISIBLE,
  INDEX `fk_stapes_support1_idx` (`support_support_id` ASC) VISIBLE,
  INDEX `fk_stapes_scour1_idx` (`scour_scour_id` ASC) VISIBLE,
  CONSTRAINT `fk_stapes_bridge1`
    FOREIGN KEY (`bridge_bridge_id`)
    REFERENCES `bridges`.`bridge` (`bridge_id`),
  CONSTRAINT `fk_stapes_scour1`
    FOREIGN KEY (`scour_scour_id`)
    REFERENCES `bridges`.`scour` (`scour_id`),
  CONSTRAINT `fk_stapes_support1`
    FOREIGN KEY (`support_support_id`)
    REFERENCES `bridges`.`support` (`support_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`row_width`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`row_width` (
  `row_width_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_row` VARCHAR(450) NULL DEFAULT NULL,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `height` DOUBLE NULL DEFAULT NULL,
  `width` DECIMAL(10,0) NULL DEFAULT NULL,
  `cracks_in_one_direction` VARCHAR(450) NULL DEFAULT NULL,
  `cracks_in_two_directions` VARCHAR(450) NULL DEFAULT NULL,
  `stone_loss_per_blow` VARCHAR(450) NULL DEFAULT NULL,
  `steel_exhibition` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  `stapes_stapes_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`row_width_id`),
  INDEX `fk_row_width_stapes1_idx` (`stapes_stapes_id` ASC) VISIBLE,
  CONSTRAINT `fk_row_width_stapes1`
    FOREIGN KEY (`stapes_stapes_id`)
    REFERENCES `bridges`.`stapes` (`stapes_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`row_width_pile`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`row_width_pile` (
  `row_width_pile_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_row` VARCHAR(450) NULL DEFAULT NULL,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `height` DOUBLE NULL DEFAULT NULL,
  `width` DECIMAL(10,0) NULL DEFAULT NULL,
  `cracks_in_one_direction` VARCHAR(450) NULL DEFAULT NULL,
  `cracks_in_two_directions` VARCHAR(450) NULL DEFAULT NULL,
  `stone_loss_per_blow` VARCHAR(450) NULL DEFAULT NULL,
  `steel_exhibition` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  `pile_pile_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`row_width_pile_id`),
  INDEX `fk_row_width_pile_pile1_idx` (`pile_pile_id` ASC) VISIBLE,
  CONSTRAINT `fk_row_width_pile_pile1`
    FOREIGN KEY (`pile_pile_id`)
    REFERENCES `bridges`.`pile` (`pile_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`slab_access`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`slab_access` (
  `slab_access_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_salab_access` VARCHAR(450) NULL DEFAULT NULL,
  `material` VARCHAR(450) NULL DEFAULT NULL,
  `good_condition` VARCHAR(450) NULL DEFAULT NULL,
  `damage` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(45) NULL DEFAULT NULL,
  `non_structural_elements_non_structural_elements_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`slab_access_id`),
  INDEX `fk_slab_access_non_structural_elements1_idx` (`non_structural_elements_non_structural_elements_id` ASC) VISIBLE,
  CONSTRAINT `fk_slab_access_non_structural_elements1`
    FOREIGN KEY (`non_structural_elements_non_structural_elements_id`)
    REFERENCES `bridges`.`non_structural_elements` (`non_structural_elements_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`steel_row`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`steel_row` (
  `steel_row_id` BIGINT NOT NULL AUTO_INCREMENT,
  `name_steel` VARCHAR(450) NULL DEFAULT NULL,
  `oxide` VARCHAR(450) NULL DEFAULT NULL,
  `missing_bolts` VARCHAR(450) NULL DEFAULT NULL,
  `hit_element` VARCHAR(450) NULL DEFAULT NULL,
  `cut_element` VARCHAR(450) NULL DEFAULT NULL,
  `painting` VARCHAR(450) NULL DEFAULT NULL,
  `others` VARCHAR(450) NULL DEFAULT NULL,
  `extra` VARCHAR(450) NULL DEFAULT NULL,
  `superstructure_superstructure_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`steel_row_id`),
  INDEX `fk_steel_row_superstructure1_idx` (`superstructure_superstructure_id` ASC) VISIBLE,
  CONSTRAINT `fk_steel_row_superstructure1`
    FOREIGN KEY (`superstructure_superstructure_id`)
    REFERENCES `bridges`.`superstructure` (`superstructure_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`stretch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`stretch` (
  `stretch_id` BIGINT NOT NULL AUTO_INCREMENT,
  `length` DOUBLE NULL DEFAULT NULL,
  `type_section` VARCHAR(450) NULL DEFAULT NULL,
  `name` VARCHAR(450) NULL DEFAULT NULL,
  `bridge_bridge_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`stretch_id`),
  INDEX `fk_stretch_bridge1_idx` (`bridge_bridge_id` ASC) VISIBLE,
  CONSTRAINT `fk_stretch_bridge1`
    FOREIGN KEY (`bridge_bridge_id`)
    REFERENCES `bridges`.`bridge` (`bridge_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bridges`.`user_rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bridges`.`user_rol` (
  `user_id` INT NOT NULL,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `rol_id`),
  INDEX `FKpfraq7jod5w5xd3sxm3m6y1o` (`rol_id` ASC) VISIBLE,
  CONSTRAINT `FKkijwolbkui74em8ip1i6vniu4`
    FOREIGN KEY (`user_id`)
    REFERENCES `bridges`.`user` (`id`),
  CONSTRAINT `FKpfraq7jod5w5xd3sxm3m6y1o`
    FOREIGN KEY (`rol_id`)
    REFERENCES `bridges`.`rol` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
