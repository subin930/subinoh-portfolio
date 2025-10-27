import { BiLogoJava } from "react-icons/bi"; //java
import { BiLogoCPlusPlus } from "react-icons/bi"; //c++
import { IoLogoPython } from "react-icons/io5"; //python
import { SiC } from "react-icons/si"; //c

import { IoLogoHtml5 } from "react-icons/io5"; //html
import { IoLogoCss3 } from "react-icons/io5"; //css
import { IoLogoJavascript } from "react-icons/io5"; //js
import { IoLogoReact } from "react-icons/io5"; //react

import { SiFastapi } from "react-icons/si"; //fastapi
import { BiLogoSpringBoot } from "react-icons/bi"; //spring
import { SiSpringboot } from "react-icons/si"; //springboot

import { BiLogoAmazon } from "react-icons/bi"; //aws
import { DiMysql } from "react-icons/di"; //mysql
import { SiMariadb } from "react-icons/si"; //mariadb
import { SiRedis } from "react-icons/si"; //redis
import { SiOracle } from "react-icons/si"; //oracle

import { BiLogoGit } from "react-icons/bi"; //git
import { SiNotion } from "react-icons/si"; //notion
import { IoLogoSlack } from "react-icons/io5"; //slack
import { IoLogoDiscord } from "react-icons/io5"; //discord
import { SiJira } from "react-icons/si"; //jira
import { IoLogoDocker } from "react-icons/io5"; //docker

import { FaDatabase } from "react-icons/fa"; //sqld

import { SiMqtt } from "react-icons/si"; //mqtt
import { SiPytorch } from "react-icons/si"; //pytorch

import { SiApachetomcat } from "react-icons/si"; //tomcat

const iconMap = {
  Java: BiLogoJava,
  "C++": BiLogoCPlusPlus,
  Python: IoLogoPython,
  C: SiC,
  HTML: IoLogoHtml5,
  CSS: IoLogoCss3,
  JavaScript: IoLogoJavascript,
  React: IoLogoReact,
  FastAPI: SiFastapi,
  Spring: BiLogoSpringBoot,
  SpringBoot: SiSpringboot,
  AWS: BiLogoAmazon,
  MySQL: DiMysql,
  MariaDB: SiMariadb,
  Redis: SiRedis,
  Oracle: SiOracle,
  Git: BiLogoGit,
  Notion: SiNotion,
  Slack: IoLogoSlack,
  Discord: IoLogoDiscord,
  Jira: SiJira,
  Docker: IoLogoDocker,
  SQLD: FaDatabase,
  MQTT: SiMqtt,
  Pytorch: SiPytorch,
  Tomcat: SiApachetomcat,
};

const getIcon = (iconName) => {
  return iconMap[iconName] || null;
};

export default getIcon;
