import { useState, useRef, useEffect } from "react";
import useResponsive from "../hooks/useResponsive";
import { motion } from "framer-motion";
import Skill from "./common/Skill";

const Skills = () => {
  const { isMobile } = useResponsive();
  const [activeTab, setActiveTab] = useState("Base Language");
  const tabContainerRef = useRef(null);

  const tabs = [
    "Base Language",
    "Backend",
    "Frontend",
    "Database",
    "Cloud/DevOps",
    "Collaboration",
    "Certification",
  ];

  const skillsData = {
    "Base Language": [
      { name: "C", icon: "C", color: "#A8B9CC", degree: 1 },
      { name: "C++", icon: "C++", color: "#00599C", degree: 1 },
      { name: "Java", icon: "Java", color: "#007396", degree: 0 },
      { name: "Python", icon: "Python", color: "#3776AB", degree: 0 },
    ],
    Backend: [
      { name: "Java", icon: "Java", color: "#007396", degree: 0 },
      { name: "Spring", icon: "Spring", color: "#6DB33F", degree: 0 },
      { name: "Spring Boot", icon: "SpringBoot", color: "#6DB33F", degree: 0 },
      { name: "FastAPI", icon: "FastAPI", color: "#009688", degree: 1 },
    ],
    Frontend: [
      { name: "React", icon: "React", color: "#61DAFB", degree: 0 },
      { name: "JavaScript", icon: "JavaScript", color: "#F7DF1E", degree: 0 },
      { name: "HTML", icon: "HTML", color: "#E34F26", degree: 0 },
      { name: "CSS", icon: "CSS", color: "#1572B6", degree: 0 },
    ],
    Database: [
      { name: "MySQL", icon: "MySQL", color: "#4479A1", degree: 0 },
      { name: "MariaDB", icon: "MariaDB", color: "#003545", degree: 0 },
      { name: "Redis", icon: "Redis", color: "#DC382D", degree: 0 },
      { name: "Oracle", icon: "Oracle", color: "#F80000", degree: 0 },
    ],
    "Cloud/DevOps": [
      { name: "AWS", icon: "AWS", color: "#FF9900", degree: 0 },
      { name: "Docker", icon: "Docker", color: "#2496ED", degree: 1 },
    ],
    Collaboration: [
      { name: "Git", icon: "Git", color: "#F05032", degree: 0 },
      { name: "Notion", icon: "Notion", color: "#000000", degree: 0 },
      { name: "Slack", icon: "Slack", color: "#4A154B", degree: 0 },
      { name: "Discord", icon: "Discord", color: "#5865F2", degree: 0 },
      { name: "Jira", icon: "Jira", color: "#0052CC", degree: 0 },
    ],
    Certification: [
      { name: "SQLD", icon: "SQLD", color: "#FF9900", degree: 0 },
    ],
  };

  const allSkills = [
    { name: "C", icon: "C", color: "#A8B9CC", degree: 1 },
    { name: "C++", icon: "C++", color: "#00599C", degree: 1 },
    { name: "Java", icon: "Java", color: "#007396", degree: 0 },
    { name: "Python", icon: "Python", color: "#3776AB", degree: 0 },
    { name: "Spring", icon: "Spring", color: "#6DB33F", degree: 0 },
    { name: "Spring Boot", icon: "SpringBoot", color: "#6DB33F", degree: 0 },
    { name: "FastAPI", icon: "FastAPI", color: "#009688", degree: 1 },
    { name: "React", icon: "React", color: "#61DAFB", degree: 0 },
    { name: "JavaScript", icon: "JavaScript", color: "#F7DF1E", degree: 0 },
    { name: "HTML", icon: "HTML", color: "#E34F26", degree: 0 },
    { name: "CSS", icon: "CSS", color: "#1572B6", degree: 0 },
    { name: "MySQL", icon: "MySQL", color: "#4479A1", degree: 0 },
    { name: "MariaDB", icon: "MariaDB", color: "#003545", degree: 0 },
    { name: "Redis", icon: "Redis", color: "#DC382D", degree: 0 },
    { name: "Oracle", icon: "Oracle", color: "#F80000", degree: 0 },
    { name: "AWS", icon: "AWS", color: "#FF9900", degree: 0 },
    { name: "Docker", icon: "Docker", color: "#2496ED", degree: 1 },
    { name: "Git", icon: "Git", color: "#F05032", degree: 0 },
    { name: "Notion", icon: "Notion", color: "#000000", degree: 0 },
    { name: "Slack", icon: "Slack", color: "#4A154B", degree: 0 },
    { name: "Discord", icon: "Discord", color: "#5865F2", degree: 0 },
    { name: "Jira", icon: "Jira", color: "#0052CC", degree: 0 },
    { name: "SQLD", icon: "SQLD", color: "#FF9900", degree: 0 },
  ];

  const currentSkills = skillsData[activeTab] || [];

  // 탭 클릭 시 스크롤 이동 (모바일)
  useEffect(() => {
    if (isMobile && tabContainerRef.current) {
      const activeButton = tabContainerRef.current.querySelector(
        `[data-tab="${activeTab}"]`
      );
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeTab, isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const nameCardsContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.06,
        delayChildren: 0.04,
      },
    },
  };

  const nameCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  //기술 이름 카드
  const SkillNameCard = ({ skill }) => {
    return (
      <motion.div
        className="inline-flex items-center justify-center text-label-large font-medium text-gray-5 rounded-full px-6 py-2 bg-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="m-0 p-0">{skill.name}</span>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background-dp to-background-ds ${
        isMobile ? "px-4 py-16" : "px-12 py-24"
      }`}
    >
      <div className="max-w-[1200px] w-full">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-1 to-pink-2 ${
              isMobile ? "text-display-small" : "text-display-medium"
            }`}
          >
            Skills
          </h2>
          <p
            className={`text-gray-2 ${
              isMobile ? "text-body-medium" : "text-body-large"
            }`}
          >
            저는 이런 기술을 가지고 있어요!
          </p>
        </motion.div>

        {/* 탭 메뉴 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`bg-background-ds/60 backdrop-blur-md rounded-full ${
            isMobile ? "mb-12 px-2 py-2" : "mb-12 p-2"
          }`}
        >
          <div
            ref={tabContainerRef}
            className={`flex ${
              isMobile
                ? "overflow-x-auto gap-2 scrollbar-hide"
                : "gap-3 justify-center flex-wrap"
            }`}
            style={isMobile ? { scrollBehavior: "smooth" } : {}}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                data-tab={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 whitespace-nowrap font-medium flex-shrink-0 ${
                  isMobile ? "text-label-large" : "text-body-medium"
                } ${
                  activeTab === tab
                    ? "bg-dark-purple/40 text-gray-2 hover:bg-dark-purple/60 hover:text-gray-0"
                    : ""
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* 스킬 카드 그리드 */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`grid gap-6 ${
            isMobile
              ? "grid-cols-2"
              : currentSkills.length <= 2
              ? "grid-cols-2 max-w-[600px] mx-auto"
              : currentSkills.length <= 4
              ? "grid-cols-4 max-w-[900px] mx-auto"
              : "grid-cols-5"
          }`}
        >
          {currentSkills.length > 0 ? (
            currentSkills.map((skill) => (
              <Skill key={skill.name} skill={skill} variants={cardVariants} />
            ))
          ) : (
            <motion.div
              variants={cardVariants}
              className="col-span-full text-center py-20"
            >
              <p className="text-gray-4 text-body-large">준비중입니다...</p>
            </motion.div>
          )}
        </motion.div>

        {/* 하단 범례 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`flex gap-6 justify-center mt-12 ${
            isMobile ? "flex-col items-center" : "flex-row"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-yellow"></div>
            <span className="text-gray-3 text-body-small">
              주력 기술 (Main Skills)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-pink"></div>
            <span className="text-gray-3 text-body-small">
              기술 경험 있음 (Familiar / Experience)
            </span>
          </div>
        </motion.div>
      </div>
      {/* 모든 기술 스택 카드 */}
      <motion.div
        className={`flex gap-2 flex-wrap justify-center 
          px-4 pt-12 pb-24 md:px-24 md:pt-24 md:pb-36 max-w-6xl
        }`}
      >
        {allSkills.map((skill) => (
          <SkillNameCard key={skill.name} skill={skill} />
        ))}
      </motion.div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Skills;
