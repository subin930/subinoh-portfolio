import ProjectContribution from "../components/common/ProjectContribution";
import ProjectDetailHeader from "../components/common/ProjectDetailHeader";
import VideoSection from "../components/common/VideoSection";
import Logo from "../assets/logos/Project4_logo.png";
import Project4_1 from "../assets/images/project4/Project4_1.png";
import Project4_2 from "../assets/images/project4/Project4_2.png";
import Project4_3 from "../assets/images/project4/Project4_3.png";
import Project4_4 from "../assets/images/project4/Project4_4.png";
import Project4_5 from "../assets/images/project4/Project4_5.gif";

// import Video from "../assets/videos/Project4_1.mp4";

import { motion } from "framer-motion";
import useResponsive from "../hooks/useResponsive";
import { AiFillGithub } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { SiTistory } from "react-icons/si";
import TroubleShooting from "../components/common/TroubleShooting";
import YouTubeSection from "../components/common/YoutubeSection";

const SOLCATION = () => {
  const { isMobile } = useResponsive();
  // 프로젝트 개요
  const overviewContent = (
    <>
      <p>
        <strong className="text-gray-2">쏠케이션</strong>은 여행의 준비부터
        정산까지 한 번에 해결할 수 있는 여행 특화 모임통장 플랫폼입니다. 여행 시
        필요한 일정 계획, 예산 설정, 공동 통장 관리, 실제 지출 기록, 정산 및
        소비 통계 분석 기능을 하나의 서비스로 통합하였습니다. 즉, 그룹 생성 →
        여행 계획 → 지출 기록 → 정산 및 소비 분석까지의 전 과정을 쏠케이션에서
        모두 처리할 수 있습니다.
      </p>
      <p>
        시스템은 Spring Boot 기반 백엔드, MariaDB를 활용한 데이터 관리, React
        기반 프론트엔드로 구성되어 있습니다. 풀스택 개발자로 프로젝트에
        참여했으며 프로젝트 일정 및 진행 관리, 백엔드 개발 표준 구조 설계, SSE
        기반 실시간 알림 구현을 주도적으로 담당하였습니다.
      </p>
    </>
  );

  // 프로젝트 데이터
  const projectData = {
    date: "2025.08 - 2025.09",
    badge: "웹 애플리케이션 | 3인 프로젝트",
    title: "여행을 위한 모임통장, SOLCATION",
    logo: Logo,
    image: Project4_1,
    overviewContent: overviewContent,
    techStack: [
      { name: "Spring Boot", icon: "SpringBoot", color: "#6DB33F" },
      { name: "React", icon: "React", color: "#61DAFB" },
      { name: "Redis", icon: "Redis", color: "#DC382D" },
      { name: "MariaDB", icon: "MariaDB", color: "#003545" },
      { name: "AWS", icon: "AWS", color: "#FF9900" },
      { name: "Docker", icon: "Docker", color: "#2496ED" },
    ],
    githubUrl: [
      {
        url: "https://github.com/sh-min-value/solcation_be.git",
        title: "Backend",
      },
      {
        url: "https://github.com/sh-min-value/solcation_fe.git",
        title: "Frontend",
      },
    ],
    siteUrl: "https://solcation.shinhanacademy.co.kr",
  };

  // 담당 역할
  const contributions = [
    {
      title: "프로젝트 일정 및 진행 관리",
      description:
        "스프린트기반 개발 방식을 적용하여 기획 → 백엔드 개발 → 프론트엔드 개발 → QA 및 기능 개선의 전체프로세스를 Jira Sprint로 체계적으로 관리했습니다. 매일 데일리 레포트(10분 미팅 형식)를 통해 진행 상황, 이슈 사항, 향후 작업 계획을 기록하며 팀의 일정 조율과 협업 효율을 높였습니다.",
    },
    {
      title: "백엔드 개발 표준 구조 설계",
      description:
        "일관된 응답 구조, 글로벌 타임존 처리, 데이터 캐싱, 민감 정보 암호화, 인증/인가 체계를 구축 및 구현하였습니다.",
    },
    {
      title: "SSE 기반 실시간 알림 시스템 구현",
      description:
        "Redis Pub/Sub와 Spring Boot의 SseEmitter를 활용하여 애플리케이션 내 실시간 알림 기능을 구현했습니다.",
    },
    {
      title: "UI 구현",
      description: "React로 그룹, 통계 기능 전반의 UI를 구현했습니다.",
    },
    {
      title: "웹 서비스 배포 자동화",
      description:
        "Docker Compose를 사용해 백엔드, 프론트엔드, 프록시를 하나의 배포 단위로 구성하고 컨테이너 기반으로 관리 및 운영할 수 있는 환경을 구축했습니다.",
    },
  ];

  const TroubleShootingCard1 = ({ problem, solution, learned, child }) => {
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
          <div className="text-gray-4 text-body-large leading-relaxed">
            개발 초기에는 `LocalDateTime.now()`를 사용해 서버의{" "}
            <strong className="text-gray-2">
              현재 시간(KST 기준)을 그대로 DB에 저장
            </strong>
            했습니다. 하지만 `LocalDateTime`은 타임존 정보를 포함하지 않기
            때문에, 서버의 시스템 시간 설정이 변경되거나 해외 서버 환경에서
            운영될 경우{" "}
            <strong className="text-gray-2">
              DB에 저장된 시간의 일관성이 보장되지 않는
            </strong>{" "}
            문제가 발생했습니다. 이를 해결하기 위해 시간 저장 방식을
            <strong className="text-gray-2">
              Instant 기반의 UTC 저장 방식
            </strong>
            으로 전환하고, 클라이언트에 응답할 때는 DTO 필드에 `@KstDateTime`
            어노테이션을 적용하여{" "}
            <strong className="text-gray-2">KST 기준으로 변환</strong>하도록
            구현했습니다. 그러나 DB 조회 후 가공 로직에서 UTC로 저장된 시간과
            KST 기준 비교 시간이 섞여 사용되면서 “오늘”, “이번 주”와 같은{" "}
            <strong className="text-gray-2">날짜 비교 시 시간 오차</strong>가
            생기는 문제가 추가로 발생했습니다.
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
          <div className="text-gray-4 text-body-large leading-relaxed space-y-2">
            <strong className="text-gray-2">1. DB 저장 규칙 통일</strong>
            <br />
            DB TimeStamp 칼럼 + Java Instant 타입을 적용해 모든 시간 데이터를
            UTC 기반 Instant로 저장하도록 변경하였습니다.
            <br />
            <br />
            <strong className="text-gray-2">
              2. 서버에서만 KST로 변환하여 처리
            </strong>
            <br />
            KST 기준 날짜(start, end)를 UTC로 변환해주는 ZoneTimeUtil 클래스를
            구현하여 로직 상 날짜 비교에 활용하였습니다. 또한 단순 조회일 경우
            DTO 필드에 @KstDateTime 커스텀 어노테이션을 적용하여 KST로 변환하여
            값을 클라이언트에 전송하도록 구현했습니다.
          </div>
        </div>

        {/* 배운 점 */}
        <div className="bg-gradient-to-r from-pink-1/5 to-light-blue/5 rounded-xl p-4 border border-pink-1/20">
          <h4
            className={`font-semibold text-gray-2 mb-3 flex items-center gap-2 ${
              isMobile ? "text-title-medium" : "text-title-large"
            }`}
          >
            <span>📚</span>
            배운 점
          </h4>
          <div className="text-gray-4 text-body-large leading-relaxed">
            이 문제에 대한 고찰은 이전 프로젝트에서{" "}
            <strong className="text-gray-2">
              서버 시간과 스케줄러(크롤러) 실행 시간이 서로 달라 데이터를 정확히
              처리하지 못했던 경험
            </strong>
            에서 출발했습니다. 이번 프로젝트를 통해 시간 데이터는 ‘서버 환경이
            바뀌어도 동일하게 유지될 수 있는가?’를 고려하는 것이 중요하다는 것을
            깨달았습니다. 또한 운영체제 설정, 배포 환경, 해외 서버 등 다양한
            조건을 고려한다면{" "}
            <strong className="text-gray-2">
              DB에는 UTC 기준으로 저장하고, 실제 사용자에게 보여줄 때만 KST와
              같은 로컬 시간대로 변환하는 방식이 가장 안전하고 확장성이 높다
            </strong>
            는 것을 직접 경험하며 확실히 이해할 수 있었습니다.
          </div>
        </div>

        {/* 그외 */}
        {child && <div className="mt-6">{child}</div>}
      </motion.div>
    );
  };

  //기여 디테일
  const ContributionDetail1 = ({}) => {
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
            백엔드 개발 표준 구조 설계
          </h2>
        </div>
        {/* section 1 */}
        <div className="flex flex-col gap-8">
          <Contribution1 />
          <Contribution2 />
          <Contribution3 />
        </div>
      </motion.section>
    );
  };

  const Contribution1 = ({}) => {
    return (
      <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
        {/* section 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start md:items-center gap-3 flex-col md:flex-row mb-4 md:justify-between">
            <div className="flex flex-row items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-1 to-pink-2 flex items-center justify-center text-white font-bold"></div>
              <h3
                className={`font-bold text-gray-0 ${
                  isMobile ? "text-title-medium" : "text-title-large"
                }`}
              >
                API 응답 형식 지정 및 에러 처리 방식 통일
              </h3>
            </div>
            <div className="flex flex-row gap-2">
              <a
                href="https://huffpuffkin.tistory.com/44"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
              >
                <SiTistory className="w-4 h-4" />
                <span className="text-body-small md:text-body-medium">
                  Blog1
                </span>
                <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </a>{" "}
              <a
                href="https://huffpuffkin.tistory.com/45"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
              >
                <SiTistory className="w-4 h-4" />
                <span className="text-body-small md:text-body-medium">
                  Blog2
                </span>
                <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </a>
            </div>
          </div>
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              기존에는 기능별로 예외 클래스를 정의하고 응답을 매번 수동으로
              래핑해야 했기 때문에 코드 중복이 발생하고 유지보수가 어려웠습니다.
            </p>
            <div className="w-full">
              <img
                src={Project4_2}
                alt="img1"
                className="w-full md:w-auto md:h-56 rounded-xl object-cover shadow-lg"
              />
            </div>
            <p className="md:mt-8">
              API 응답 형식과 예외 처리 방식을 공통화하여 전역에서 일관성 있게
              처리할 수 있도록 개선했습니다. ResponseBodyAdvice 인터페이스를
              구현해 API 응답을
              <strong className="text-gray-2">
                ApiResponse 형식으로 자동 래핑
              </strong>
              하도록 수정했고, GlobalExceptionHandler를 통해 공통 예외 상황을
              일괄 처리했습니다. 비즈니스 로직 예외는
              <strong className="text-gray-2">
                ENUM으로 정의해 하나의 파일
              </strong>
              에서 관리하도록 설계했습니다.
            </p>
            <div className="w-full">
              <img
                src={Project4_3}
                alt="img1"
                className="w-full md:w-auto md:h-64  rounded-xl object-contain shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Contribution2 = ({}) => {
    return (
      <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
        {/* section 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start md:items-center gap-3 flex-col md:flex-row mb-4">
            <div className="flex flex-row items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-1 to-pink-2 flex items-center justify-center text-white font-bold"></div>
              <h3
                className={`font-bold text-gray-0 ${
                  isMobile ? "text-title-medium" : "text-title-large"
                }`}
              >
                조회용 데이터 캐싱 구조 설계
              </h3>
            </div>
          </div>
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              프로젝트에는 총 15개의 테이블 중 4개가 조회용 테이블이었고, 조회용
              테이블과 연관된 다른 6개의 테이블 때문에 조회 호출이 빈번하게
              발생했습니다. 특히 조회용 테이블에는 공통적으로 코드 칼럼이
              존재하는데 Primary Key가 아니라 해당 칼럼 값을 이용해 모든 로직을
              처리해야했습니다. 이로 인해 서비스 로직에{" "}
              <strong className="text-gray-2">
                반복적이고 비효율적인 DB 접근
              </strong>
              과 번거로운 추가 작업이 늘어났습니다.
            </p>
            <div className="w-full">
              <img
                src={Project4_4}
                alt="img1"
                className="w-full md:w-auto md:h-96 rounded-xl object-contain shadow-lg"
              />
            </div>
            <p className="md:mt-8">
              이를 해결하기 위해 서버 시작 시에 조회용 테이블의 모든 데이터를
              메모리로 미리 로드하고 코드 기준으로 조회할 수 있는{" "}
              <strong className="text-gray-2">캐싱 Lookup 컴포넌트</strong>를
              구현했습니다. @PostConstruct 단계에서 한 번만 데이터를 로드하도록
              하여 불필요한 DB 접근을 제거한 후 EnumMap을 활용해 코드 기반
              매핑을 구성하고 Map.of() 및 Collections.unmodifiableMap()과
              volatile을 함께 사용하여 안전하게 교체 가능한 읽기 전용 캐시
              구조를 설계했습니다.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const Contribution3 = ({}) => {
    return (
      <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
        {/* section 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start md:items-center gap-3 flex-col md:flex-row mb-4 md:justify-between">
            <div className="flex flex-row items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-pink-1 to-pink-2 flex items-center justify-center text-white font-bold"></div>
              <h3
                className={`font-bold text-gray-0 ${
                  isMobile ? "text-title-medium" : "text-title-large"
                }`}
              >
                인가용 커스텀 필터 구현
              </h3>
            </div>
            <div className="flex flex-row gap-2">
              <a
                href="https://huffpuffkin.tistory.com/53"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
              >
                <SiTistory className="w-4 h-4" />
                <span className="text-body-small md:text-body-medium">
                  Blog
                </span>
                <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
              </a>
            </div>
          </div>
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              프로젝트에서 /group/{"{"}groupPk{"}"}/** 형식의 API 요청에 대해
              groupPk에 해당하는 그룹에 사용자가 실제로 속해 있는지를 반드시
              확인하는 과정이 필요했습니다. 초기 논의 단계에서는 프론트엔드
              단에서 이 검증 로직을 처리하는 방안도 검토했지만 인가 절차는
              백엔드에서 처리하는 것이 보안 및 유지보수 측면에서 올바르다는
              결론에 도달했습니다.
            </p>
            <p className="md:mt-8">
              이에 따라 Spring Security의{" "}
              <strong className="text-gray-2">
                AuthorizationManager를 활용한 커스텀 필터
              </strong>
              를 설계하여 전역적으로 인가 절차를 처리할 수 있는 구조를
              구축했습니다. DB에 저장된 정보를 기반으로 인가 절차가 필요한 모든
              경로에 대해 AuthorizationManager에서 인가 여부를 판단하도록
              구현했습니다.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ContributionDetail2 = ({}) => {
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
            SSE 기반 실시간 알림 시스템 구현
          </h2>
          <div className="flex flex-row gap-2">
            <a
              href="https://huffpuffkin.tistory.com/46"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
            >
              <SiTistory className="w-4 h-4" />
              <span className="text-body-small md:text-body-medium">Blog1</span>
              <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
            </a>
            <a
              href="https://huffpuffkin.tistory.com/56"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
            >
              <SiTistory className="w-4 h-4" />
              <span className="text-body-small md:text-body-medium">Blog2</span>
              <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
            </a>
          </div>
        </div>
        <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              Spring Boot의{" "}
              <strong className="text-gray-2">
                SseEmitter를 사용자별 리스트
              </strong>
              로 관리해 다중 탭 환경에서도 안정적으로 작동하도록 설계하고
              주기적인 하트비트 전송으로 연결 유실을 방지했습니다. 또한{" "}
              <strong className="text-gray-2">Redis Pub/Sub 기능</strong>을
              활용해 서버 간 알림 발행, 구독을 처리하고 Redis Key의 TTL 설정을
              활용해 알림 자동 만료 및 후속 처리를 진행했습니다.
            </p>
            <div className="w-full">
              <img
                src={Project4_5}
                alt="img1"
                className="w-full md:w-auto md:h-96 rounded-xl object-contain shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>
    );
  };

  return (
    <div className="bg-background-dp min-h-screen md:px-[20%]">
      {/* Header + Overview */}
      <ProjectDetailHeader {...projectData} />

      {/* 담당 역할 */}
      <ProjectContribution contributions={contributions} />

      {/* 기여 디테일 */}
      <ContributionDetail1 />
      <ContributionDetail2 />

      {/* 트러블 슈팅 */}
      <TroubleShooting
        title="글로벌 타임존 이슈 해결"
        Trouble={<TroubleShootingCard1 />}
      />

      {/* 비디오 섹션 */}
      {/* <VideoSection
        video={Video}
        title="시연 영상"
        description="쏠케이션은 다음과 같이 동작합니다."
      /> */}

      <YouTubeSection
        videoId="4V9dc6S7Gx4"
        title="시연 영상"
        description="쏠케이션은 다음과 같이 동작합니다."
      />

      {/* 여백 */}
      <div className="h-20"></div>
    </div>
  );
};

export default SOLCATION;
