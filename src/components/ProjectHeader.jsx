import { useState, useEffect, useRef } from "react"; // ← useRef 추가
import useResponsive from "../hooks/useResponsive";
import { AiFillGithub } from "react-icons/ai";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectHeader = () => {
  const { isMobile } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const isAutoScrollingRef = useRef(false);
  const targetYRef = useRef(0);
  const unlockTimerRef = useRef(null);
  const rafRef = useRef(0);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 자동 스크롤 중엔 활성 섹션 갱신을 잠깐 막음
      if (isAutoScrollingRef.current) {
        // 목적지 근처면 락 해제(픽셀 오차 허용)
        const y = window.pageYOffset;
        if (Math.abs(y - targetYRef.current) < 2) {
          isAutoScrollingRef.current = false;
          if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
          cancelAnimationFrame(rafRef.current);
        }
        return;
      }

      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const waitUntilArrive = () => {
    const tick = () => {
      const y = window.pageYOffset;
      if (Math.abs(y - targetYRef.current) < 2) {
        isAutoScrollingRef.current = false;
        if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
        return; // 도착
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const smoothScrollTo = (href) => {
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    const headerOffset = 100;
    const elementTop = targetEl.getBoundingClientRect().top;
    const offsetY = elementTop + window.pageYOffset - headerOffset;

    setActiveSection(targetId);
    setIsMenuOpen(false);

    isAutoScrollingRef.current = true;
    targetYRef.current = Math.max(0, offsetY);

    window.scrollTo({ top: targetYRef.current, behavior: "smooth" });

    waitUntilArrive();

    if (unlockTimerRef.current) clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = setTimeout(() => {
      isAutoScrollingRef.current = false;
      cancelAnimationFrame(rafRef.current);
    }, 1200);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full backdrop-blur-md z-50"
    >
      <nav
        className={`relative max-w-[1400px] mx-auto px-6 md:px-12 ${
          isMobile ? "py-4" : "py-8"
        }`}
      >
        {isMobile ? (
          <>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-title-large font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-2 to-light-blue hover:scale-105 transition-transform cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Subin Oh
              </a>
            </div>
          </>
        ) : (
          <div className="flex justify-between items-center">
            {/* 이름 */}
            <a
              href="#"
              className="text-title-large font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-2 to-light-blue hover:scale-105 transition-transform cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Subin Oh
            </a>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default ProjectHeader;
