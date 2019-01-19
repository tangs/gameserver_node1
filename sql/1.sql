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

DROP TABLE IF EXISTS `t_mails`;
CREATE TABLE `t_mails` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '邮件ID',
  `sid` int(11) unsigned NOT NULL  COMMENT '发件人ID',
  `did` int(11) unsigned NOT NULL COMMENT '收件人ID',
  `sname` varchar(64) NOT NULL DEFAULT '' COMMENT '发件人名字',
  `title` varchar(64) NOT NULL DEFAULT '' COMMENT '标题',
  `content` varchar(512) NOT NULL DEFAULT '' COMMENT '内容',
  `stime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;



INSERT INTO t_mails(sid, did, sname, title, content) VALUES(21, 22, "系统", "标题", "2018年外贸成绩单出炉，全年进出口规模创历史新高的同时，2018年12月的进出口却双双负增长。这份喜忧参半的成绩单，是中国进出口结构调整，以及外部环境变化的直接体现");
select * from t_mails;