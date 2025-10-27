import ProjectContribution from "../components/common/ProjectContribution";
import ProjectDetailHeader from "../components/common/ProjectDetailHeader";
import VideoSection from "../components/common/VideoSection";
import Logo from "../assets/logos/Project2_logo.png";

import Project2_1 from "../assets/images/project2/Project2_1.png";
import Project2_2 from "../assets/images/project2/Project2_2.mov";
import Project2_3 from "../assets/images/project2/Project2_3.mov";
import Project2_4 from "../assets/images/project2/Project2_4.mov";
import Project2_5 from "../assets/images/project2/Project2_5.mov";
import Project2_6 from "../assets/images/project2/Project2_6.png";
import Project2_7 from "../assets/images/project2/Project2_7.png";
import Project2_8 from "../assets/images/project2/Project2_8.png";
import Project2_9 from "../assets/images/project2/Project2_9.png";
import Project2_10 from "../assets/images/project2/Project2_10.png";

import Video from "../assets/videos/Project3_1.mov";

import { motion } from "framer-motion";
import useResponsive from "../hooks/useResponsive";
import { AiFillGithub } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { SiTistory } from "react-icons/si";
import TroubleShooting from "../components/common/TroubleShooting";

const OMOK = () => {
  const { isMobile } = useResponsive();
  // 프로젝트 개요
  const overviewContent = (
    <>
      <p>
        <strong className="text-gray-2">
          실시간 웹소켓 오목 게임 웹 애플리케이션
        </strong>
        으로 유저는 웹소켓을 통해 실시간으로 매칭되어 상대방과 오목을 즐길 수
        있습니다. JSP/Servlelt 기반 웹 애플리케이션이며 풀스택 개발자로
        참여하였습니다.
      </p>
      <p>
        해당 프로젝트는 처음에 6명의 팀원과 함께 개발되었습니다. 이후 코드
        구조의 비효율성과 유지보수 문제를 개선하기 위해 한 명의 팀원과 함께
        전반적인 <strong className="text-gray-2">리팩토링 작업</strong>을
        진행했습니다. 리팩토링 과정에서는{" "}
        <strong className="text-gray-2">
          기능별 웹소켓 분리와 파일 구조 개선, UI 개선
        </strong>
        을 중심으로 웹 애플리케이션을 개선하였습니다.
      </p>
    </>
  );

  // 프로젝트 데이터
  const projectData = {
    date: "2025.05 - 2025.09",
    badge: "웹 애플리케이션 | 2-6인 프로젝트",
    title: "OMOK",
    logo: Logo,
    image: Project2_1,
    overviewContent: overviewContent,
    techStack: [
      { name: "HTML", icon: "HTML", color: "#E34F26" },
      { name: "CSS", icon: "CSS", color: "#1572B6" },
      { name: "JavaScript", icon: "JavaScript", color: "#F7DF1E" },
      { name: "MariaDB", icon: "MariaDB", color: "#003545" },
      { name: "Java", icon: "Java", color: "#007396" },
      { name: "JSP", icon: "JSP", color: "#007396" },
      { name: "Servlet", icon: "Servlet", color: "#007396" },
      { name: "Tomcat", icon: "Tomcat", color: "#D9A918" },
    ],
    githubUrl: [
      {
        url: "https://github.com/min-value/omok",
        title: "Github",
      },
      {
        url: "https://github.com/hwang-hyesung/omok-refactoring",
        title: "Github_Refactoring",
      },
    ],
  };

  // 담당 역할
  const contributions = [
    {
      title: "메인 페이지 구현",
      description:
        "사용자 프로필 조회 및 수정, 실시간 랭킹 표시 기능을 포함한 메인 페이지를 구현했습니다.",
    },
    {
      title: "코드 리팩토링",
      description:
        "파일 구조 개선, 기능 별 웹소켓 분리, 매칭 소켓 구현, UI 개선을 중심으로 코드를 리팩토링했습니다.",
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
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              게임 시작 후 최초 매칭 모달 렌더링 된 상태에서 새로고침을 하면
              매칭 모달이 무한히 반복 렌더링되는 문제가 발생했습니다. 원래는
              최초 1회만 렌더링 되어야 하지만 새로고침 시마다 계속 표시되어 게임
              종료 후 결과 모달이 렌더링 되어야 할 시점에도 매칭 모달이 다시
              나타나는 심각한 오류가 발생했습니다.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <video controls className="w-full" preload="metadata">
                <source src={Project2_2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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
            <p>
              매칭 모달 렌더링 여부를 관리하는 변수를 별도로 두지 않았기 때문에
              발생한 오류였습니다. 이를 해결하기 위해 세션 스토리지에{" "}
              <strong className="text-gray-2">opened</strong> 변수를 추가로
              관리하여 게임 페이지 최초 진입 시에는{" "}
              <strong className="text-gray-2">"N"</strong>, 매칭 모달 최초
              렌더링 시에는 <strong className="text-gray-2">"Y"</strong>로
              설정함으로써 모달이 반복적으로 표시되는 문제를 방지했습니다.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <video controls className="w-full" preload="metadata">
                <source src={Project2_3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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
            사실 상태 변수 한 개만 추가하면 해결되는 단순한 문제였지만, 초기
            프로젝트 구현 단계에서는 쉽게 해결하지 못했습니다. 매칭 모달을
            관리하는 함수가 중복으로 여러 개 존재했기 때문에 각 함수에서 변수를
            독립적으로 관리하면서 상태 일관성이 깨졌기 때문입니다. 이 경험을
            통해 코드 구조의 중요성과 클린 코드 원칙의 필요성을 깨달았고, 이후
            리팩토링 과정에서 중복 함수를 통합하고 명확한 상태 관리 흐름을
            설계할 수 있었습니다.
          </div>
        </div>

        {/* 그외 */}
        {child && <div className="mt-6">{child}</div>}
      </motion.div>
    );
  };

  const TroubleShootingCard2 = ({ problem, solution, learned, child }) => {
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
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              유저가 게임 시작 후 뒤로가기 버튼을 누르면 브라우저가 메인
              화면으로 돌아가지만, 이전 게임의 상태가 그대로 세션에
              남아있습니다. 이 상태에서 사용자가 다시 게임 시작 버튼을 누르면
              이전 게임 정보가 무시되고 새로운 게임이 매칭되어 기존 게임과
              중복이 되는 문제가 발생했습니다.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <video controls className="w-full" preload="metadata">
                <source src={Project2_4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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
            <p>
              메인 화면에서 window.addEventListener('pageshow', ...) 이벤트를
              활용해 페이지가 브라우저 히스토리에서 뒤로 가기로 복원될 때를 따로
              처리해주었습니다. <br /> <br />
              세션 스토리지에 저장된 gameId와 MATCHED 상태를 확인한 후 다음과
              같이 처리합니다.
              <br />
              <strong className="text-gray-2">
                ☑️ 매칭 중(MATCHED='N')일 경우
              </strong>
              <br />
              아직 게임이 시작되지 않았기 때문에 이전 매칭 정보를 세션에서
              삭제하고 페이지를 리로드합니다.
              <br />
              <br />
              <strong className="text-gray-2">
                ☑️ 게임 중(MATCHED='Y')일 경우
              </strong>
              <br />
              기존 게임 화면으로 바로 이동합니다.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <video controls className="w-full" preload="metadata">
                <source src={Project2_5} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
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
            pageshow 이벤트와 event.persisted를 활용하면 페이지 캐시 복원 시의
            동작을 제어할 수 있음을 알게되었습니다. 이를 활용해 사용자가
            뒤로가기를 눌러도 기존 게임 및 매칭 상태를 반영하거나 불필요한 새
            게임 매칭을 방지할 수 있었습니다. 하지만 뒤로 가기 버튼을 반복해서
            누를 경우는 제어가 안되기 때문에 이에 대해 추가적인 제어가 필요할
            것이라고 생각이 들었습니다.
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
            코드 리팩토링
          </h2>
        </div>
        {/* section 1 */}
        <div className="flex flex-col gap-8">
          <Contribution1 />
          <Contribution2 />
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
                파일 구조 개선
              </h3>
            </div>
          </div>
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>기존 코드에는 크게 2가지의 문제가 존재했습니다.</p>
            <p>
              <strong className="text-gray-2">
                1. 개발용 View와 서비스용 View의 분리
              </strong>
              <br />
              초기 개발 시에는 view 폴더에서 프론트엔드 작업을 진행하고, 실제
              서비스에 사용되는 페이지는 WEB-INF/view 폴더에 구현하기로
              했습니다. 이는 WEB-INF 내부의 파일은 백엔드와 연결되어야만
              렌더링되기 때문에 프론트 → 백엔드 순서로 개발하는 과정에서
              효율성을 높이기 위한 구조였습니다.
              <br />
              <br />
              <div className="ml-2">
                <strong className="text-gray-2">
                  ⚠️ View 경로 혼용 문제 발생
                </strong>
                <br />
                하지만 실제 운영 환경에서는 view 폴더와 WEB-INF/view 폴더의
                파일들이 혼용되어 서비스되는 문제가 발생했습니다. 이로 인해
                개발과 운영 간의 경로 일관성이 깨지고, 유지 보수나 디버깅 시
                혼란을 초래했습니다.
              </div>
              <div className="w-full mt-4">
                <img
                  src={Project2_6}
                  alt="img1"
                  className="w-full md:w-auto md:h-56 rounded-xl object-cover shadow-lg"
                />
              </div>
            </p>
            <p>
              <strong className="text-gray-2">
                2. 게임 전 과정의 단일 파일 관리로 인한 복잡성
              </strong>
              <br />
              게임의 매칭, 진행, 종료의 전 과정을 모두 websocket.js 하나의
              파일에서 관리하면서 유지 보수가 매우 어려워졌습니다. 특히 다른
              폴더에 있는 함수들을 재정의하거나 중복 작성하는 일이 발생해 코드
              구조가 복잡해졌습니다. 이로 인해 게임 진행 흐름이나 모달 렌더링
              상태를 관리하는 데 많은 어려움이 있었고, 기능 별로 책임이 분리되지
              않아 디버깅과 확장에도 제약이 생겼습니다.
              <div className="w-full mt-4">
                <img
                  src={Project2_7}
                  alt="img1"
                  className="w-full md:w-auto md:h-96  rounded-xl object-contain shadow-lg"
                />
              </div>
            </p>
            <p>
              <strong className="text-gray-2">
                🌟 기능 별로 폴더와 파일을 분리
              </strong>
              <br />
              따라서 리팩토링을 진행하면서 기능별로 폴더와 파일을
              분리하였습니다. 먼저 css, js, jsp 파일을 각각 css/, js/,
              WEB-INF/view/ 로 구분해 역할 별로 폴더를 분리했습니다. 또한 게임
              매칭, 진행, 종료를 담당하는 JS 파일을 각각 분리했습니다. 각 파일이
              단일 책임 원칙을 따르도록 구성해 하나의 파일이 하나의 역할만
              수행하도록 정리했습니다.
              <div className="w-full mt-4">
                <img
                  src={Project2_8}
                  alt="img1"
                  className="w-full md:w-auto md:h-90 rounded-xl object-cover shadow-lg"
                />
              </div>
            </p>
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
                기능 별 웹 소켓 분리 및 매칭, 채팅 소켓 구현
              </h3>
            </div>
          </div>
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              리팩토링 이전에는 WebSocket 클래스 하나에서 게임 매칭, 진행, 종료,
              채팅 등 모든 기능을 처리하고 있었습니다. @OnOpen이 호출되면
              매칭으로 처리하고, @OnMessage이 호출되면 클라이언트가 메시지를
              보낸 경우로 게임 진행, 채팅, 종료로 처리합니다. @OnClose,
              @OnError은 연결 종료 및 에러를 처리합니다. 추가적으로 gameRoomMap,
              sessionRoomMap을 통해 게임 방과 세션을 관리했습니다. 이 방식에는
              2가지의 문제점이 존재했습니다.
            </p>
            <p>
              <strong className="text-gray-2">1. 기능 분리의 모호성</strong>
              <br />
              @OnOpen 메서드에서 소켓 연결이 발생하면 무조건 매칭 시점으로
              간주했습니다. 하지만 실제로는 새로고침만 해도 소켓 연결이 새로
              생성되기 때문에 매칭 로직이 오작동하는 경우가 존재했습니다. 예를
              들면 이미 매칭된 게임인데 새로고침으로 인해 다시 WAITING 또는
              MATCHED 상태로 브로드 캐스트되는 경우가 있습니다.
              <br />
              <br />
              추가적으로 메시지 타입 구분을 위해 "chat", "move", "gameover"의
              접두사를 활용하기로 논의했지만 실제 구현 시에는 프론트엔드와
              백엔드 간 접두사 불일치로 인해 메시지 처리 오류가 발생했습니다.
              <br />
              <br />
              단일 클래스에서 모든 기능을 처리하다 보니 상태 관리와 메시지 분기
              로직이 복잡해진 것이 원인이었습니다.
            </p>
            <p>
              <strong className="text-gray-2">
                2. 새로 고침 시 소켓 재연결 문제
              </strong>
              <br />
              새로고침을 하면 클라이언트의 소켓 연결이 끊기고 다시 연결되면서
              @OnOpen이 다시 호출됩니다. 이때 기존 세션을 sessionRoomMap에서
              제거하고 새로 추가하는 과정에서 정상적인 세션 교체가 이루어지지
              않아서 gameRoomMap과 sessionRoomMap 간의 매핑이 꼬이거나 중복
              세션이 남아있는 문제가 발생했습니다.
              <div className="w-full mt-4">
                <img
                  src={Project2_9}
                  alt="img1"
                  className="w-full md:w-auto md:h-96  rounded-xl object-contain shadow-lg"
                />
              </div>
            </p>
            <p>
              <strong className="text-gray-2">🌟 기능 별 소켓 분리</strong>
              <br />
              이를 해결하기 위해 기능을 명확히 분리하는 리팩토링을 진행했고 그
              중 저는 MatchingSocket과 ChatSocket을 직접 구성했습니다.
              MatchingSocket은 게임 매칭만을 전담하는 서블릿 기반 컨트롤러로
              구현했습니다. 기존에는 @OnOpen에서 매칭이 처리되어 새로고침 시에
              매칭 오류가 간헐적으로 발생했지만 리팩토링 후 HTTP 요청 기반
              매칭으로 변경하여 안정성을 높였습니다. 또한 기능별 소켓 분리와
              함께 통신 규약을 명확히 정리해 협업 효율을 높였습니다.
              <div className="w-full mt-4">
                <img
                  src={Project2_10}
                  alt="img1"
                  className="w-full md:w-auto md:h-96 rounded-xl object-cover shadow-lg"
                />
              </div>
            </p>
          </div>
        </div>
      </div>
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

      {/* 트러블 슈팅 */}
      <TroubleShooting
        title="새로고침 시 매칭 모달 중복 렌더링 문제 해결"
        Trouble={<TroubleShootingCard1 />}
      />

      {/* 트러블 슈팅 */}
      <TroubleShooting
        title="브라우저 히스토리 기반 중복 매칭 방지"
        Trouble={<TroubleShootingCard2 />}
      />

      {/* 비디오 섹션
      <VideoSection
        video={Video}
        title="시연 영상"
        description="가디언즈는 다음과 같이 동작합니다."
      /> */}

      {/* 여백 */}
      <div className="h-20"></div>
    </div>
  );
};

export default OMOK;
