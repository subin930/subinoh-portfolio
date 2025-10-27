import { motion } from "framer-motion";
import useResponsive from "../../hooks/useResponsive";
import getIcon from "../../utils/getIcon";

const Skill = ({ skill, variants }) => {
  const { isMobile } = useResponsive();
  const IconComponent = getIcon(skill.icon);

  return (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative bg-background-ds/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-7/20 hover:border-pink-1/40 transition-all cursor-pointer overflow-hidden"
    >
      {/* 일 경험 정도 표시 */}
      <div
        className={`absolute top-4 right-4 text-body-small font-medium px-1 py-1 rounded-full z-10 ${
          skill.degree === 0 ? "bg-accent-yellow" : "bg-accent-pink"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-1/5 to-light-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative flex flex-col items-center gap-4">
        {IconComponent && (
          <div
            className="text-6xl transition-transform duration-300 group-hover:scale-110"
            style={{ color: skill.color }}
          >
            <IconComponent />
          </div>
        )}

        <span
          className={`text-gray-0 font-semibold ${
            isMobile ? "text-body-medium" : "text-title-medium"
          }`}
        >
          {skill.name}
        </span>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-1/20 to-light-blue/20" />
      </div>
    </motion.div>
  );
};

export default Skill;
