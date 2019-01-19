/*
Navicat MySQL Data Transfer
Source Server         : localhost
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : db_babykylin
Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001
Date: 2017-03-30 20:09:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `t_users`
-- ----------------------------
DROP TABLE IF EXISTS `t_users`;
CREATE TABLE `t_users` (
  `userid` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `account` varchar(64) NOT NULL DEFAULT '' COMMENT '账号',
  `deviceid` varchar(64) NOT NULL DEFAULT '' COMMENT '设备ID',
  `name` varchar(32) DEFAULT NULL COMMENT '用户昵称',
  `sex` int(1) DEFAULT NULL,
  `avatar` varchar(256) DEFAULT NULL,
  `lv` smallint(6) DEFAULT '1' COMMENT '用户等级',
  `coin` int(11) DEFAULT '0' COMMENT '用户金币',
  PRIMARY KEY (`userid`),
  UNIQUE KEY `account` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_users
-- ----------------------------
INSERT INTO `t_users` VALUES ('1', '1ef6ebe08b9c59439cf66bba9ce92f4d', '1ef6ebe08b9c59439cf66bba9ce92f4d', 'tangs', '1', 'https://avatars3.githubusercontent.com/u/3196414?s=400&u=8ca426b011a6957a0f97c1b1be6243abbdce093c&v=4', '10', '1000');
