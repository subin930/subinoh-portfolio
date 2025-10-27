import ProjectContribution from "../components/common/ProjectContribution";
import ProjectDetailHeader from "../components/common/ProjectDetailHeader";
import VideoSection from "../components/common/VideoSection";

const ProjectGeneral = () => {
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
    logo: Project1_1,
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
    githubUrl: "https://github.com/...",
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
  return (
    <div className="bg-background-dp min-h-screen md:px-[16%]">
      {/* Header + Overview */}
      <ProjectDetailHeader {...projectData} />

      {/* 담당 역할 */}
      <ProjectContribution contributions={contributions} />

      {/* 비디오 섹션 */}
      <VideoSection
        video={Video}
        title="시연 영상"
        description="디바이스는 다음과 같이 동작합니다."
      />

      {/* 여백 */}
      <div className="h-20"></div>
    </div>
  );
};

export default Projectgeneral;
