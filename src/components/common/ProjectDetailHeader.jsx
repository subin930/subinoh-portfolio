import { motion } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";
import getIcon from "../../utils/getIcon";
import { ExternalLink } from "lucide-react";
import { AiFillGithub } from "react-icons/ai";
import { IoGlobeOutline } from "react-icons/io5";

const ProjectDetailHeader = ({
  date,
  badge,
  title,
  subtitle,
  logo,
  image,
  overviewContent,
  techStack,
  githubUrl,
  siteUrl,
}) => {
  const { isMobile } = useResponsive();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative text-white overflow-hidden"
    >
      {/* 배경 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* 상단: 로고 + 제목 + 날짜 + 링크 */}
        <div className="flex flex-col gap-6 mb-8">
          {/* 로고 + 제목 + 날짜 */}
          <div className="flex items-center gap-4">
            {/* 로고 */}
            {logo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`${title} logo`}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-2xl object-cover shadow-lg"
                />
              </motion.div>
            )}

            {/* 제목 + 날짜 */}
            <div className="flex-1 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`font-bold text-gray-0 mb-2 break-words ${
                  isMobile ? "text-headline-medium" : "text-display-small"
                }`}
              >
                {title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-2 md:gap-3"
              >
                <span className="text-gray-4 text-body-medium md:text-body-large whitespace-nowrap">
                  {date}
                </span>
                {badge && (
                  <>
                    <span className="text-gray-5 hidden sm:inline">|</span>
                    <span className="px-2.5 py-0.5 md:px-3 md:py-1 bg-pink-500/20 text-pink-1 rounded-full text-label-medium md:text-label-large border border-pink-500/30 whitespace-nowrap">
                      {badge}
                    </span>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* GitHub & Site 링크 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            {githubUrl &&
              githubUrl.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10  backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
                >
                  <AiFillGithub className="w-4 h-4" />
                  <span className="text-body-small md:text-body-medium">
                    {link.title}
                  </span>
                  <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </a>
              ))}
            {siteUrl && (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
              >
                <IoGlobeOutline />
                <span className="text-body-small md:text-body-medium">
                  Site
                </span>
                <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 " />
              </a>
            )}
          </motion.div>
        </div>

        {/* 메인 이미지 */}
        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-xl overflow-hidden shadow-2xl mb-12"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )}

        {/* 개요 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <h2
            className={`flex items-center gap-3 font-bold text-pink-2 mb-6 ${
              isMobile ? "text-title-large" : "text-headline-medium"
            }`}
          >
            <span className="text-3xl">📋</span>
            개요
          </h2>
          <div className="text-gray-3 text-body-large leading-relaxed space-y-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
            {overviewContent}
          </div>
        </motion.div>

        {/* 기술 스택 */}
        {techStack && techStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2
              className={`flex items-center gap-3 font-bold text-pink-2 mb-6 ${
                isMobile ? "text-title-large" : "text-headline-medium"
              }`}
            >
              <span className="text-3xl">⚒️</span>
              기술 스택
            </h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => {
                const IconComponent = getIcon(tech.name);

                return (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gray-7/30 text-gray-4 text-body-large rounded-full border border-gray-6/20 flex flex-row items-center justify-center gap-2 hover:bg-gray-7/50 transition-colors"
                  >
                    {IconComponent && (
                      <div className="text-gray-4 flex items-center text-lg">
                        <IconComponent style={{ color: tech.color }} />
                      </div>
                    )}
                    <span>{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default ProjectDetailHeader;
