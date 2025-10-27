import React from "react";
import ProjectOverview from "../components/common/ProjectOverview";
import ProjectContribution from "../components/common/ProjectContribution";
import TroubleShooting from "../components/common/TroubleShooting";

import Logo from "../assets/logos/Project1_logo.png";
import Project1_1 from "../assets/images/project1/Project1_1.png";
import Project1_2 from "../assets/images/project1/Project1_2.png";
import ProjectDetailHeader from "../components/common/ProjectDetailHeader";
// import Video from "../assets/videos/Project1_1.mp4";
import VideoSection from "../components/common/VideoSection";
import BlogLinkCard from "../components/common/BlogLinkCard";
import YouTubeSection from "../components/common/YoutubeSection";

import { motion } from "framer-motion";
import useResponsive from "../hooks/useResponsive";
import { AiFillGithub } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { SiTistory } from "react-icons/si";

const AIF = () => {
  const { isMobile } = useResponsive();

  // 프로젝트 개요
  const overviewContent = (
    <>
      <p>
        <strong className="text-gray-3">AIF</strong>는 AI 기반 양분 분석
        디바이스 개발 프로젝트입니다. 본 프로젝트는 인바디에 사용되는 생체 전기
        임피던스 분석(BIA) 원리를 응용하여, 양분의 임피던스를 측정합니다. 물질의
        성분에 따라 저항 값이 달라지는 점을 이용해 측정된 데이터를 AI 모델로
        분석하여 질소, 인, 칼륨의 성분 비율을 실시간 추정하는 솔루션입니다.
      </p>
      <p>
        <strong className="text-gray-3">
          임베디드 소프트웨어 경진대회 자유 공모 부문
        </strong>
        에 출품한 저의 첫 공모전 프로젝트로,{" "}
        <strong className="text-gray-3">Fast API 서버와 AI 모델</strong>을
        구축했습니다.
      </p>
    </>
  );

  // 프로젝트 데이터
  const projectData = {
    date: "2024.07 - 2024.11",
    badge: "공모전 | 5인 프로젝트",
    title: "AIF (AI-Impedance-Fertilizer)",
    logo: Logo,
    image: Project1_1,
    overviewContent: overviewContent,
    techStack: [
      { name: "Python", icon: "Python", color: "#3776AB" },
      { name: "FastAPI", icon: "FastAPI", color: "#009688" },
      { name: "MQTT", icon: "MQTT", color: "#FF6F00" },
      { name: "Pytorch", icon: "Pytorch", color: "#EE4C2C" },
      { name: "HTML", icon: "HTML", color: "#E34F26" },
      { name: "CSS", icon: "CSS", color: "#1572B6" },
      { name: "JavaScript", icon: "JavaScript", color: "#F7DF1E" },
    ],
    githubUrl: [{ url: "https://github.com/...", title: "Github" }],
    siteUrl: "https://aif-project.example.com",
  };

  // 담당 역할
  const contributions = [
    {
      title: "FastAPI 서버 개발 및 하드웨어 통신",
      description:
        "센서 데이터를 실시간으로 수신 및 처리 가능한 FastAPI 서버를 구축하여 임피던스 측정부와의 직렬 통신을 담당했습니다.",
    },
    {
      title: "CNN 모델 학습 및 추론 모듈 개발",
      description:
        "수집된 임피던스 데이터에 Min-Max 정규화를 적용한 뒤 CNN 모델을 학습하고 FastAPI 서버에 실시간 추론 모듈로 적용했습니다.",
    },
    {
      title: "웹 대시보드 제작",
      description:
        "html, css, js 기반 웹 대시보드를 제작해 실시간 센싱 데이터의 AI 예측 결과를 조회할 수 있는 UI 및 API를 구현했습니다.",
    },
  ];

  // 트러블슈팅
  const troubleShootings = [
    {
      title: "글로벌 타임존 이슈 해결",
      problem: "개발 초기에는...",
      solution: [
        { type: "strong", text: "1. DB 저장 규칙 통일" },
        {
          type: "normal",
          text: "DB TimeStamp 칼럼 + Java Instant 타입을 적용해...",
        },
        { type: "break" },
        { type: "strong", text: "2. 서버에서만 KST로 변환하여 처리" },
        { type: "normal", text: "KST 기준 날짜(start, end)를..." },
      ],
      learned: "IoT 환경에서는...",
    },
  ];

  const Contribution1 = () => {
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
            데이터 전처리 및 AI 구축
          </h2>
        </div>
        <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              임피던스 데이터를 기반으로{" "}
              <strong className="text-gray-2">
                질소, 인, 칼륨 성분 비율을 추정하는 AI 모델 학습 파이프라인
              </strong>
              을 구축했습니다. 수집한 CSV 데이터를 로드한 뒤 magnitude, phase
              데이터를 전처리하고, K·N·P 조합에 따라 총 8개의 라벨 클래스로
              분류하는 로직을 설계했습니다.
            </p>
            <p>
              수집한 데이터의 각 칼럼 단위가 상이하여 스케일 조정 없이 학습을
              진행할 경우{" "}
              <strong className="text-gray-2">
                특정 특성이 모델에 과도하게 영향을 줄 수 있는 문제
              </strong>
              가 발생했습니다. 이에 따라 데이터의 분포가 극단적으로 넓지 않다는
              점을 고려해 모든 입력 데이터를{" "}
              <strong className="text-gray-2">MinMaxScaler</strong>를 이용해
              정규화했습니다. 정규화된 데이터를{" "}
              <strong className="text-gray-2">
                PyTorch 텐서로 변환한 후 CNN 모델
              </strong>
              을 학습시켰고,{" "}
              <strong className="text-gray-2">학습률 스케줄링</strong>을 적용해
              최적의 학습률로 모델 성능을 극대화했습니다. 학습된 스케일러와
              모델은 모두 저장하여 추론 시 동일한 전처리 및 모델을 사용할 수
              있도록 구성했습니다.
            </p>
            <div className="w-full">
              <img
                src={Project1_2}
                alt="img1"
                className="w-full md:w-auto md:h-96 rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>
    );
  };

  const Accomplishment = ({}) => {
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
          <span className="text-3xl">🏆</span>
          성과
        </h2>
        {/* 성과 */}
        <div className="px-6 py-2 bg-gray-7/30 text-gray-2 text-body-small md:text-body-large rounded-full border border-gray-6/20 inline-flex gap-2 hover:bg-gray-7/50 transition-colors">
          <span>
            임베디드 SW 경진대회 자유공모 부문 한국전자기술연구원 원장상
          </span>
        </div>
      </motion.section>
    );
  };
  return (
    <div className="bg-background-dp min-h-screen md:px-[16%]">
      {/* Header + Overview */}
      <ProjectDetailHeader {...projectData} />
      {/* 담당 역할 */}
      <ProjectContribution contributions={contributions} />
      {/* 기여에 대한 자세한 설명 */}
      <Contribution1 />
      <Accomplishment />
      {/* 비디오 섹션 */}
      {/* <VideoSection
        video={Video}
        title="시연 영상"
        description="디바이스는 다음과 같이 동작합니다."
      /> */}

      <YouTubeSection
        videoId="ugHWal4_ciw"
        title="시연 영상"
        description="디바이스는 다음과 같이 동작합니다."
      />
      {/* <BlogLinkCard
        url="https://m.blog.naver.com/..."
        title="하루 1% 15분의 힘이 주는 아침 에너지"
        description="변화의 시작은 하루 1%로 충분하다. 하루 1%만 투자하면 개인이든 조직..."
      /> */}
      {/* 여백 */}
      <div className="h-20"></div>
    </div>
  );
};

export default AIF;
