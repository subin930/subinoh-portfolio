import { motion } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";

const TroubleShootingCard = ({
  number,
  title,
  problem,
  solution,
  learned,
  child,
}) => {
  const { isMobile } = useResponsive();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8 "
    >
      {/* 문제 배경 */}
      <div className="mb-6">
        <h4
          className={`font-semibold text-pink-1 mb-3 flex items-center gap-2 ${
            isMobile ? "text-title-medium" : "text-title-large"
          }`}
        >
          <span>🚨</span>
          문제 배경
        </h4>
        <div className="text-gray-3 text-body-large leading-relaxed">
          {problem}
        </div>
      </div>

      {/* 해결 방법 */}
      <div className="mb-6">
        <h4
          className={`font-semibold text-light-blue mb-3 flex items-center gap-2 ${
            isMobile ? "text-title-medium" : "text-title-large"
          }`}
        >
          <span>💡</span>
          해결 방법
        </h4>
        <div className="text-gray-3 text-body-large leading-relaxed space-y-2">
          {Array.isArray(solution) ? (
            solution.map((item, i) => {
              if (item.type === "break") return <div key={i} className="h-2" />;
              if (item.type === "strong")
                return (
                  <p key={i} className="font-bold text-gray-1">
                    {item.text}
                  </p>
                );
              return <p key={i}>{item.text}</p>;
            })
          ) : (
            <p>{solution}</p>
          )}
        </div>
      </div>

      {/* 배운 점 */}
      <div className="bg-gradient-to-r from-pink-1/5 to-light-blue/5 rounded-xl p-4 border border-pink-1/20">
        <h4 className="text-gray-1 font-semibold text-body-large mb-2 flex items-center gap-2">
          <span>📚</span>
          배운 점
        </h4>
        <div className="text-gray-3 text-body-large leading-relaxed pl-7">
          {learned}
        </div>
      </div>

      {/* 그외 */}
      {child && <div className="mt-6">{child}</div>}
    </motion.div>
  );
};

const TroubleShooting = ({ title, Trouble }) => {
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
      <h2
        className={`flex items-center gap-3 font-bold text-pink-2 mb-6 ${
          isMobile ? "text-title-large" : "text-headline-medium"
        }`}
      >
        <span className="text-3xl">🤔</span>
        트러블슈팅 - {title}
      </h2>
      {/* 트러블슈팅 카드들 */}
      {Trouble}
    </motion.section>
  );
};

export default TroubleShooting;
