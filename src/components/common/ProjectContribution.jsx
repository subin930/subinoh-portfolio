import { motion } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";
import { CheckCircle2 } from "lucide-react";

const ProjectContribution = ({ contributions }) => {
  const { isMobile } = useResponsive();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12"
    >
      {/* 제목 */}
      <h2
        className={`flex items-center gap-3 font-bold text-pink-2 mb-6 ${
          isMobile ? "text-title-large" : "text-headline-medium"
        }`}
      >
        <span className="text-3xl">🧑‍💻</span>
        담당 역할
      </h2>
      <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
        {/* 기여 리스트 */}
        <div className="space-y-4">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-gray-3" />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-3 font-semibold text-body-large mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-3 text-body-medium leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectContribution;
