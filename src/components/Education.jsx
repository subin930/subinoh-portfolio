import { motion } from "framer-motion";
import Shinhan from "../assets/logos/Shinhan.svg";
import Sungkyunkwan from "../assets/logos/Sungkyunkwan.svg";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-background-ds to-background-dp flex items-center py-24 justify-center px-4 md:px-8 md:py-52"
    >
      <div className="w-full max-w-4xl">
        {/* 제목 */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-display-small font-bold text-center mb-16 md:mb-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-1 to-pink-2">
            Education
          </span>
        </motion.h2>

        {/*타임라인 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative"
        >
          {/* 타임라인 선 */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-1 via-light-blue to-dark-purple" />

          {/* 타임라인 요소들 */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8 md:mb-12 pl-6 md:pl-12"
          >
            {/* 선 */}
            <div className="absolute -left-px md:left-3 top-4 w-6 md:w-8 h-px bg-gradient-to-r from-pink-1 to-transparent" />

            {/* 성균관 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-pink-1/10 to-pink-2/5 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-pink-1/30 hover:border-pink-1/60 transition-all duration-300 shadow-lg hover:shadow-pink-1/20"
            >
              <div className="flex flex-row gap-4 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={Sungkyunkwan}
                    alt="Sungkyunkwan"
                    className="w-10 h-10 md:w-12 md:h-12 mb-2"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-body-small md:text-body-medium text-pink-1 font-semibold">
                      2022.02 - present
                    </p>
                  </div>
                  <h3 className="text-title-medium md:text-title-large font-bold text-gray-0 mb-2">
                    성균관대학교 소프트웨어학과
                  </h3>
                  <p className="text-body-small md:text-body-medium text-gray-5 font-light">
                    Sungkyunkwan University Department of Computer Science and
                    Engineering (CSE)
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Second Education Item */}
          <motion.div
            variants={itemVariants}
            className="relative pl-6 md:pl-12"
          >
            {/* Connector Line */}
            <div className="absolute -left-px md:left-3 top-4 w-6 md:w-8 h-px bg-gradient-to-r from-light-blue to-transparent" />

            {/* Content Card 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-light-blue/10 to-cyan-400/5 backdrop-blur-sm rounded-lg p-5 md:p-6 border border-light-blue/30 hover:border-light-blue/60 transition-all duration-300 shadow-lg hover:shadow-light-blue/20"
            >
              <div className="flex flex-row gap-4 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={Shinhan}
                    alt="Shinhan"
                    className="w-10 h-10 md:w-12 md:h-12 mb-2"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-body-small md:text-body-medium text-light-blue font-semibold">
                      2024.04 - 2024.09
                    </p>
                  </div>
                  <h3 className="text-title-medium md:text-title-large font-bold text-gray-0 mb-2">
                    신한 금융 SW 아카데미
                  </h3>
                  <p className="text-body-small md:text-body-medium text-gray-5 font-light">
                    Shinhan Financial SW Academy
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
