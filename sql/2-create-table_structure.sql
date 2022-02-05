CREATE TABLE `table_structure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `header` varchar(20) NOT NULL,
  `dataType` varchar(10) NOT NULL,
  `format` varchar(20) DEFAULT NULL,
  `fkTableTypeId` int(11) DEFAULT NULL,
  `required` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_7e9e87f33cb934acdb020cf0867` (`fkTableTypeId`),
  CONSTRAINT `FK_7e9e87f33cb934acdb020cf0867` FOREIGN KEY (`fkTableTypeId`) REFERENCES `table_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 14 DEFAULT CHARSET = utf8;