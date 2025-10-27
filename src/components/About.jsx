import { motion } from "framer-motion";
import useResponsive from "../hooks/useResponsive";
import Profile from "../assets/images/Profile.jpg";

const About = () => {
  const { isMobile } = useResponsive();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-background-dp to-background-ds flex items-center py-36 justify-center px-4 md:px-8 md:py-52"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={`flex flex-col ${isMobile ? "gap-8" : "gap-12"} ${
            isMobile
              ? "items-center text-center"
              : "md:flex-row md:items-center md:gap-16"
          }`}
        >
          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            className={`flex-shrink-0 ${isMobile ? "w-40 h-40" : "w-56 h-56"}`}
          >
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-light-blue/30 shadow-2xl bg-gradient-to-br from-pink-1/20 to-light-blue/20">
              {/* Placeholder for actual image */}
              <div className="w-full h-full bg-gradient-to-br from-dark-purple to-background-ds flex items-center justify-center">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="flex-1 space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <motion.p
                variants={itemVariants}
                className="text-body-medium md:text-body-large text-light-blue font-medium"
              >
                Backend Developer
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-display-large md:text-display-xl font-bold"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-2 to-light-blue">
                  Subin Oh
                </span>
              </motion.h1>
            </div>

            {/* Korean Description */}
            <motion.div variants={itemVariants} className="space-y-1">
              <p className="text-body-medium md:text-body-large text-gray-0 leading-relaxed font-light">
                저는 성균관대학교에서 CSE를 공부하고 있습니다.
              </p>
              <p className="text-body-medium md:text-body-large text-gray-0 leading-relaxed font-light">
                효율적이고 확장 가능한 시스템 아키텍처 구상하고 구현하는
              </p>
              <p className="text-body-medium md:text-body-large text-gray-0 leading-relaxed font-light">
                성장형 백엔드 개발자를 지향합니다.
              </p>
            </motion.div>

            {/* English Description */}
            <motion.div
              variants={itemVariants}
              className="pt-4 border-t border-dark-purple/30 space-y-1"
            >
              <p className="text-body-medium md:text-body-large text-gray-0 leading-relaxed font-light">
                I am a growth-oriented Backend Developer
              </p>
              <p className="text-body-medium md:text-body-large text-gray-0 leading-relaxed font-light">
                aspiring to design and implement efficient and scalable system
                architectures,
              </p>
              <p className="text-body-medium md:text-body-large text-gray-0 leading-relaxed font-light">
                studying CSE at Sungkyunkwan University.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
