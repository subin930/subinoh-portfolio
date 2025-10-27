import { motion } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";

const VideoSection = ({ video, title, description }) => {
  const { isMobile } = useResponsive();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 md:px-12 py-16"
    >
      {/* 섹션 제목 */}
      <h2
        className={`flex items-center gap-3 font-bold text-pink-2 mb-6 ${
          isMobile ? "text-title-large" : "text-headline-medium"
        }`}
      >
        <span className="text-3xl">📽️</span>
        {title}
      </h2>
      <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
        {/* 설명 */}
        {description && (
          <p className="text-gray-3 text-body-large mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {/* 동영상 */}
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <video controls className="w-full" preload="metadata">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
