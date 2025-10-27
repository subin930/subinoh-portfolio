import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useResponsive from "../hooks/useResponsive";
import getIcon from "../utils/getIcon";
import Project1_1 from "../assets/images/project1/Project1_1.png";
import Project2_1 from "../assets/images/project2/Project2_1.png";
import Project3_1 from "../assets/images/project3/Project3_1.png";
import Project4_1 from "../assets/images/project4/Project4_1.png";

const ProjectCard = ({ project, variants }) => {
  const { isMobile } = useResponsive();
  const navigate = useNavigate();

  const handleClick = () => {
    if (project.link) {
      navigate(project.link);
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className="group relative bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 hover:border-pink-1/40 transition-all cursor-pointer overflow-hidden"
    >
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-1/5 to-light-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 테두리 그라데이션 */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-1/20 to-light-blue/20" />
      </div>

      {/* 이미지 */}
      <div className="relative w-full h-64 bg-gray-8/30 rounded-t-2xl overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-6">
            <span
              className={isMobile ? "text-body-medium" : "text-title-small"}
            >
              이미지 준비중
            </span>
          </div>
        )}
      </div>

      {/* 컨텐츠 영역 */}
      <div className="relative p-6 space-y-3">
        <h3
          className={`text-gray-0 font-bold ${
            isMobile ? "text-title-small" : "text-title-large"
          }`}
        >
          {project.title}
        </h3>

        <p className="text-gray-4 text-body-small line-clamp-2">
          {project.description}
        </p>

        {/* 기술 스택 태그 */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, index) => {
              const IconComponent = getIcon(tag); // 여기서 컴포넌트 받기
              return (
                <div
                  key={index}
                  className="px-3 py-1 bg-gray-7/30 text-gray-2 text-body-small rounded-full border border-gray-6/20 flex flex-row items-center justify-center gap-1.5"
                >
                  {IconComponent && (
                    <div className="text-gray-2 flex items-center">
                      <IconComponent />
                    </div>
                  )}
                  <span>{tag}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* 날짜 */}
        <div className="pt-3 border-t border-gray-7/40">
          <span className="text-gray-5 text-body-small font-medium">
            {project.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { isMobile, isTablet } = useResponsive();

  // 프로젝트 데이터
  const projects = [
    {
      title: "AIF (AI-Impedance-Fertilizer)",
      description:
        "AI 기반 양분 분석 디바이스 개발 프로젝트입니다. 임베디드 소프트웨어 경진대회 출품작으로, Fast API 서버와 AI 모델을 구축했습니다. ",
      tags: ["Python", "FastAPI", "MQTT", "Pytorch"],
      date: "2024.07 - 2024.11",
      image: Project1_1,
      link: "/project/AIF",
    },
    {
      title: "OMOK",
      description:
        "실시간 웹소켓 기반 오목 게임 개발 프로젝트입니다. 메인 화면 개발과 프로젝트 코드 리팩토링을 담당했습니다.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "MariaDB",
        "Java",
        "JSP",
        "Servlet",
        "Tomcat",
      ],
      date: "2025.05 - 2025.09",
      image: Project2_1,
      link: "/project/OMOK",
    },
    {
      title: "통합 야구 예매 플랫폼, Guardians",
      description:
        "프로야구 구단 통합 야구 예매 플랫폼 개발 프로젝트입니다. Redis 기반 대기열 시스템, 좌석 선점/예매 플로우 개발을 담당했습니다.",
      tags: [
        "Spring",
        "HTML",
        "CSS",
        "JavaScript",
        "Redis",
        "MariaDB",
        "Tomcat",
      ],
      date: "2025.06 - 2025.07",
      image: Project3_1,
      link: "/project/Guardians",
    },
    {
      title: "여행을 위한 모임통장, SOLCATION",
      description:
        "여행 특화 모임통장 플랫폼 개발 프로젝트입니다. 프로젝트 일정 관리, 백엔드 개발 표준 구조 설계, 실시간 알림 시스템 구현을 담당했습니다.",
      tags: ["SpringBoot", "React", "Redis", "MariaDB", "AWS", "Docker"],
      date: "2025.08 - 2025.09",
      image: Project4_1,
      link: "/project/SOLCATION",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-12 lg:px-24 bg-background-ds"
    >
      <div className="max-w-7xl mx-auto">
        {/* 섹션 제목 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2
            className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-1 to-pink-2 ${
              isMobile ? "text-display-small" : "text-display-medium"
            }`}
          >
            Projects
          </h2>
          <p className="text-gray-4 text-body-medium">
            저는 다음과 같은 프로젝트를 진행했습니다 :)
          </p>
        </motion.div>

        {/* 프로젝트 그리드 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-3"}`}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
