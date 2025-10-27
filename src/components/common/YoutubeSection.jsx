import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";

const YouTubeSection = ({ videoId, title, description }) => {
  const { isMobile } = useResponsive();

  const opts = {
    width: "100%",
    height: isMobile ? "250" : "480",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12"
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

      {/* 설명 */}
      {description && (
        <p className="text-gray-4 text-body-medium md:text-body-large mb-6">
          {description}
        </p>
      )}

      {/* YouTube 비디오 */}
      <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-4 md:p-6 overflow-hidden">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <YouTube videoId={videoId} opts={opts} onReady={onReady} />
        </div>
      </div>
    </motion.section>
  );
};

export default YouTubeSection;
