import useResponsive from "../hooks/useResponsive";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Footer() {
  const { isMobile } = useResponsive();

  const socialLinks = [
    {
      icon: BsLinkedin,
      href: "https://www.linkedin.com/in/subin-oh-943396276",
      label: "LinkedIn",
    },
    {
      icon: BsGithub,
      href: "https://github.com/subin930",
      label: "GitHub",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-background-dp to-background-ds text-gray-0 py-12 md:py-20 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-1/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-light-blue/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8 md:space-y-12"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-2 via-pink-1 to-light-blue text-title-medium md:text-title-large"
          >
            Contact Me
          </motion.h2>

          {/* Social Links & Contact Info */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <p className="text-label-large text-dark-purple font-medium">
                Follow me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg bg-background-ds hover:bg-background-ds/80 border border-dark-purple/20 hover:border-pink-1/50 transition-all duration-300 flex items-center justify-center group"
                    >
                      <Icon
                        size={isMobile ? 20 : 24}
                        className="text-dark-purple group-hover:text-pink-1 transition-colors"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <p className="text-label-large text-dark-purple font-medium">
                Get in touch
              </p>
              <div className="space-y-3">
                <div className="group cursor-pointer">
                  <p className="text-body-small text-dark-purple/60 mb-1">
                    Name
                  </p>
                  <p className="text-body-medium md:text-body-large text-gray-0 group-hover:text-pink-1 transition-colors">
                    오수빈 Subin Oh
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-body-small text-dark-purple/60 mb-1">
                    Email
                  </p>
                  <motion.a
                    href="mailto:bread0930@g.skku.edu"
                    whileHover={{ x: 5 }}
                    className="text-body-medium md:text-body-large text-gray-0 hover:text-pink-1 transition-colors inline-flex items-center"
                  >
                    bread0930@g.skku.edu
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-dark-purple/30 to-transparent"
          />

          {/* Copyright & Extra */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          >
            <p className="text-body-small md:text-body-medium text-dark-purple/70">
              Copyright © 2025 SubinOh, All rights reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
