import { useState, useEffect, useRef } from "react"; // ← useRef 추가
import useResponsive from "../hooks/useResponsive";
import { AiFillGithub } from "react-icons/ai";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
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

              <div className="flex flex-row gap-4 items-center">
                <div className="flex flex-row gap-4">
                  <a
                    href="https://github.com/subin930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-0 hover:text-pink-1 transition text-title-medium"
                  >
                    <AiFillGithub size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://huffpuffkin.tistory.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-0 hover:text-pink-1 transition text-title-medium"
                  >
                    <span>Blog</span>
                  </a>
                </div>

                <motion.button
                  onClick={() => setIsMenuOpen((v) => !v)}
                  className="text-gray-0 p-2 hover:text-pink-1 transition"
                  whileTap={{ scale: 0.9 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>

            {/* 모바일 드롭다운: 열림/닫힘 모두 부드럽게 */}
            <AnimatePresence initial={false} mode="wait">
              {isMenuOpen && (
                <motion.div
                  key="mobileMenu"
                  initial={{
                    opacity: 0,
                    y: -10,
                    clipPath: "inset(0 0 100% 0)",
                  }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, y: -10, clipPath: "inset(0 0 100% 0)" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="absolute top-full left-0 w-full bg-background-ds shadow-lg"
                >
                  <ul className="flex flex-col p-4 space-y-4">
                    {navItems.map((item) => (
                      <motion.li key={item.name} whileTap={{ scale: 0.95 }}>
                        <a
                          href={item.href}
                          className={`block text-title-medium transition ${
                            activeSection === item.href.substring(1)
                              ? "text-pink-1 font-semibold"
                              : "text-gray-0 hover:text-pink-1"
                          }`}
                          onClick={(e) => handleNavClick(e, item.href)}
                        >
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
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

            {/* 네비게이션 메뉴 */}
            <ul className="flex items-center gap-12">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.li
                    key={item.name}
                    className="relative group will-change-transform transform-gpu"
                    whileHover={{ y: -5 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  >
                    <a
                      href={item.href}
                      className={`text-title-large transition-all duration-300 block pb-2 ${
                        isActive
                          ? "text-pink-1"
                          : "text-gray-2 hover:text-pink-1"
                      }`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}

                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-1 to-light-blue rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 450,
                            damping: 36,
                          }}
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* 오른쪽: GitHub / Blog */}
            <motion.div
              className="flex items-center flex-row gap-5"
              // 헤더 초기 애니메이션으로 통일했으니 여기선 별도 initial/animate 제거
            >
              <motion.a
                href="https://github.com/subin930"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-0 hover:text-pink-1 transition-colors duration-200 flex flex-row items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AiFillGithub size={28} />
                <div className="text-title-large font-medium">Github</div>
              </motion.a>
              <motion.a
                href="https://huffpuffkin.tistory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-0 hover:text-pink-1 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-title-large font-medium">Blog</span>
              </motion.a>
            </motion.div>
          </div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
