import { motion } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";

const ProjectOverview = ({
  icon = "💡",
  title = "어떤 프로젝트인가요?",
  content,
}) => {
  const { isMobile } = useResponsive();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 md:px-12 py-16"
    >
      <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-8 md:p-12">
        {/* 제목 */}
        <h2
          className={`flex items-center gap-3 font-bold text-gray-0 mb-6 ${
            isMobile ? "text-title-large" : "text-display-small"
          }`}
        >
          <span className="text-3xl">{icon}</span>
          {title}
        </h2>

        {/* 내용 */}
        <div className="text-gray-3 text-body-medium leading-relaxed space-y-4">
          {content}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectOverview;
