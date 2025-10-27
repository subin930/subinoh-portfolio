import { motion } from "framer-motion";
import useResponsive from "../hooks/useResponsive";
import { AiFillGithub } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { SiTistory } from "react-icons/si";

const General = ({}) => {
  const { isMobile } = useResponsive();
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12"
    >
      {/* 섹션 제목 */}
      <div
        className={`flex  mb-6 justify-between ${
          isMobile
            ? "flex-col items-start justify-center gap-2"
            : "flex-row items-center"
        }`}
      >
        <h2
          className={`flex items-center gap-3 font-bold text-pink-2  ${
            isMobile ? "text-title-large" : "text-headline-medium"
          }`}
        >
          <span className="text-3xl">⚙️</span>
          섹션 제목
        </h2>
        <div className="flex flex-row gap-2">
          <a
            href="https://github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
          >
            <AiFillGithub className="w-4 h-4" />
            <span className="text-body-small md:text-body-medium">GitHub</span>
            <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
          </a>
          <a
            href="https://github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
          >
            <SiTistory className="w-4 h-4" />
            <span className="text-body-small md:text-body-medium">Blog</span>
            <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
          </a>
        </div>
      </div>
      <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
        <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
          <p>
            프로젝트에서 /group/groupPk/** 형식의 API 요청에 대해, groupPk에
            해당하는 그룹에 사용자가 실제로 속해 있는지를 반드시 확인해야 하는
            요구사항이 있었습니다. 초기 논의 단계에서는 프론트엔드 단에서 이
            검증 로직을 처리하는 방안도 검토했지만 인가 절차는 백엔드에서
            처리하는 것이 보안 및 유지보수 측면에서 올바르다는 결론에
            도달했습니다.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
