import { motion } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";
import { ExternalLink } from "lucide-react";

const BlogLinkCard = ({ url, title, description }) => {
  const { isMobile } = useResponsive();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 md:px-12 py-16"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-0 hover:bg-gray-1 rounded-2xl border border-gray-4 p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:border-gray-5 group hover:border-light-blue hover:-translate-y-1"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* 제목 */}
            <h3
              className={`font-bold text-gray-8 mb-3 group-hover:text-light-blue transition-colors ${
                isMobile ? "text-title-large" : "text-headline-small"
              }`}
            >
              {title}
            </h3>

            {/* 설명 */}
            {description && (
              <p className="text-gray-6 text-body-large mb-4 leading-relaxed">
                {description}
              </p>
            )}

            {/* URL */}
            <div className="flex items-center gap-2 text-light-blue text-body-medium">
              <span className="break-all">{url}</span>
            </div>
          </div>

          {/* 아이콘 */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-light-blue/10 flex items-center justify-center group-hover:bg-light-blue/20 transition-colors">
            <ExternalLink className="w-5 h-5 text-light-blue" />
          </div>
        </div>
      </a>
    </motion.section>
  );
};

export default BlogLinkCard;
