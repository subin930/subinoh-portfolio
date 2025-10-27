import ProjectContribution from "../components/common/ProjectContribution";
import ProjectDetailHeader from "../components/common/ProjectDetailHeader";
import VideoSection from "../components/common/VideoSection";
import Logo from "../assets/logos/Project3_logo.svg";
import Project3_1 from "../assets/images/project3/Project3_1.png";
import Project3_2 from "../assets/images/project3/Project3_2.png";
import Project3_3 from "../assets/images/project3/Project3_3.png";
import Project3_4 from "../assets/images/project3/Project3_4.gif";
import Project3_5 from "../assets/images/project3/Project3_5.png";
import Project3_6 from "../assets/images/project3/Project3_6.png";

import Video from "../assets/videos/Project3_1.mov";

import { motion } from "framer-motion";
import useResponsive from "../hooks/useResponsive";
import { AiFillGithub } from "react-icons/ai";
import { ExternalLink } from "lucide-react";
import { SiTistory } from "react-icons/si";
import TroubleShooting from "../components/common/TroubleShooting";

const Guardians = () => {
  const { isMobile } = useResponsive();
  // 프로젝트 개요
  const overviewContent = (
    <>
      <p>
        가상의 프로야구 구단{" "}
        <strong className="text-gray-2">Shinhan Guardians</strong>를 기반으로,
        팬들이 경기 정보를 확인하고 티켓을 예매하며 커뮤니티 활동까지 할 수 있는{" "}
        <strong className="text-gray-2">통합 야구 예매 플랫폼</strong>을
        개발하였습니다. 좌석 선점 및 예매 대기열 시스템을 적용한 티켓 예매
        기능을 중심으로, 승부 예측, 응원, 커뮤니티 게시판, 구단 뉴스·하이라이트
        영상 자동 크롤링 기능 등 실제 구단 운영과 유사한 환경을 구현했습니다.
      </p>
      <p>
        Spring MVC Project로, 전체 시스템은 Spring + Tomcat 기반 백엔드,
        MariaDB·Redis 기반 데이터 관리, 그리고 HTML/CSS/JavaScript를 활용한
        프론트엔드로 구성되어 있습니다. 풀스택 개발자로 참여했으며{" "}
        <strong className="text-gray-2">
          Redis를 활용한 예매 대기열 시스템, 좌석 선점/예매 흐름(좌석 선택 →
          결제 → 예외 처리) 개발을 주도적으로 담당
        </strong>
        하였습니다.
      </p>
    </>
  );

  // 프로젝트 데이터
  const projectData = {
    date: "2025.06 - 2025.07",
    badge: "웹 애플리케이션 | 5인 프로젝트",
    title: "통합 야구 예매 플랫폼, Guardians",
    logo: Logo,
    image: Project3_1,
    overviewContent: overviewContent,
    techStack: [
      { name: "Spring", icon: "Spring", color: "#6DB33F" },
      { name: "HTML", icon: "HTML", color: "#E34F26" },
      { name: "CSS", icon: "CSS", color: "#1572B6" },
      { name: "JavaScript", icon: "JavaScript", color: "#F7DF1E" },
      { name: "Redis", icon: "Redis", color: "#DC382D" },
      { name: "MariaDB", icon: "MariaDB", color: "#003545" },
      { name: "Tomcat", icon: "Tomcat", color: "#D9A918" },
    ],
    githubUrl: [
      {
        url: "https://github.com/min-value/guardians.git",
        title: "Github",
      },
    ],
  };

  // 담당 역할
  const contributions = [
    {
      title: "Redis 기반 좌석 선점 시스템 구현",
      description:
        "경기별·좌석별로 Redis 분산 락을 적용하여 동시 예매 시 발생하는 race condition을 방지하고 하나의 좌석이 여러 사용자에게 중복 예약되지 않도록 선점 로직을 설계 및 개발하였습니다.",
    },
    {
      title: "Redis 기반 예매 대기열 시스템 구축",
      description:
        "예매 가능 인원을 N명으로 제한하고 사용자 요청이 몰릴 경우 Redis Queue에 사용자 정보를 저장합니다. Scheduler가 주기적으로 대기열을 확인하여 예약 가능 상태가 되면 해당 유저를 큐에서 제거하고 available:{gamePk}:{userPk} 키를 부여하여 예매 페이지 접근 권한을 부여하는 구조로 설계했습니다.",
    },
    {
      title: "전체 야구 예매 흐름 구현",
      description:
        "좌석 선택 → 선점 저장 → 권종/할인 적용 → 결제 → 예외 처리(시간 초과/결제 실패/중복 요청 차단)까지 이어지는 End-to-End 예매 흐름을 설계했습니다.",
    },
    {
      title: "야구 예매 전반 프론트엔드 UI/UX 구현",
      description:
        "좌석 선택, 구역 정보 표시, 금액 계산, 예매 확인 및 결제 화면까지 이어지는 전체 예매 흐름의 화면을 HTML/CSS/JavaScript 기반으로 구현했습니다. 사용자가 선택한 경기, 좌석, 권종/할인 정보가 유지되도록 로컬 스토리지 상태를 관리합니다.",
    },
    {
      title: "qa + 트러블 슈팅 관리",
      description:
        "개발 과정에서 발생한 오류 및 개선 사항을 Notion 기반 Trouble-Shooting 문서로 관리하며 팀 내 공유 체계를 구축했습니다.",
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
              프로젝트에서는 경기장을 일반 좌석과 자동 배정 좌석(외야석)으로
              구분해 예매하도록 설계했습니다. 일반 좌석은{" "}
              <strong className="text-gray-2">
                lock:seat:{"{"}gamePk
                {"}"}:{"{"}zonePk{"}"}:{"{"}
                seatNum{"}"}{" "}
              </strong>
              형태로 좌석 단위에 락을 적용했고, 외야석도 동일한 방식으로
              구현하고자{" "}
              <strong className="text-gray-2">
                lock:seat:{"{"}gamePk{"}"}:{"{"}zonePk{"}"}
                :auto:{"{"}userPk{"}"}
              </strong>{" "}
              형태로 락을 구성했습니다.
            </p>
            <div className="w-full">
              <img
                src={Project3_2}
                alt="img1"
                className="w-full md:w-auto md:h-80 rounded-xl object-cover shadow-lg"
              />
            </div>
            <p className="md:mt-8">
              대부분의 상황에서는 정상적으로 동작했지만, 외야석의 잔여 좌석이
              1개뿐일 때 두 명이 동시에 예매 요청을 보내는 경우,{" "}
              <strong className="text-gray-2">
                각각의 사용자에게 서로 다른 락이 생성되면서 잔여 좌석 수를
                초과한 예매가 허용되는 문제
              </strong>
              가 발생했습니다.
            </p>
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
              문제는 외야석의 선점 락을{" "}
              <strong className="text-gray-2">"사용자 기준"</strong>으로 걸었기
              때문에 발생했습니다. 즉, 좌석에 락을 건 것이 아니라 유저 별로 각각
              락이 생성되어 동시에 예매 처리가 가능해진 것입니다. 따라서 이를
              해결하기 위해 외야석에 대해서는 락 키를 사용자 단위가 아닌{" "}
              <strong className="text-gray-2">구역 전체 단위</strong>로
              변경했습니다.
            </p>
            <strong className="text-gray-2">☑️ 변경 전</strong>
            <br />
            유저별 락: lock:seat:{"{"}gamePk{"}"}:{"{"}zonePk{"}"}:auto:{"{"}
            userPk{"}"}
            <br />
            <br />
            <strong className="text-gray-2">☑️ 변경 후</strong>
            <br />
            외야석 전체 락: lock:seat:{"{"}gamePk{"}"}:{"{"}zonePk{"}"}:auto
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
            하나의 좌석을 여러 사용자가 동시에 예매하려고 할 때 중복 예약이
            발생하는 문제가 있었고, 이를 해결하기 위해 Redis 기반 분산 락을
            적용하여 좌석 자원에 대한 접근을 직렬화했습니다. 이 과정에서
            운영체제 수업에서 배운 Lock과 Race Condition 개념을 실제 서비스
            개발에 그대로 응용할 수 있다는 점을 직접 경험했습니다. 또한 락의
            대상과 단위를 어떻게 설정하느냐에 따라 시스템의 안정성과 효율성이
            달라진다는 점도 함께 깨달을 수 있었습니다.
          </div>
        </div>

        {/* 그외 */}
        {child && <div className="mt-6">{child}</div>}
      </motion.div>
    );
  };

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
            좌석 선점 및 예매 시스템 구현
          </h2>
          <div className="flex flex-row gap-2">
            <a
              href="https://huffpuffkin.tistory.com/57"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
            >
              <SiTistory className="w-4 h-4" />
              <span className="text-body-small md:text-body-medium">Blog</span>
              <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
            </a>
          </div>
        </div>
        <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              좌석 예매 화면은 등급/좌석 선택 → 권종/할인 선택 → 예매
              확인/결제의 흐름으로 구성하였고, 해당 경기의{" "}
              <strong className="text-gray-2">
                좌석 선점 여부에 따라 진입 화면을 다르게 설정
              </strong>
              했습니다. 구현을 위해{" "}
              <strong className="text-gray-2">Redis에 선점 키</strong>를
              등록하고 <strong className="text-gray-2">로컬 스토리지</strong>에
              선점 경기와 좌석 정보를 저장합니다. 로컬 스토리지 정보와 Redis에
              저장되어 있는 정보의 일치 여부를 확인하고 진입 화면을 결정하며
              일치하지 않는 경우 Redis/로컬스토리지 키 삭제를 통해{" "}
              <strong className="text-gray-2">데이터 일관성을 유지</strong>
              했습니다.
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-[30%]">
                <img
                  src={Project3_4}
                  alt="img1"
                  className="w-full md:w-auto md:h-80 rounded-xl object-cover shadow-lg"
                />
              </div>
              <div className="md:w-[70%]">
                <img
                  src={Project3_3}
                  alt="img1"
                  className="w-full md:w-auto md:h-80 rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
            <p className="md:mt-8">
              예매 창 진입 후에는 race condition을 방지하기 위해 경기 번호, 구역
              번호, 좌석 번호 기반으로 락을 획득한 후 모든 로직을 수행하도록
              구현했습니다. 선점/예매 시에는 항상 DB 기록 → Redis 기록의
              흐름으로 수행하여 롤백을 용이하게 했습니다.
            </p>
            <p>
              좌석 선점 시에는 10분의 TTL을 설정한 Redis 선점 키를 등록하고,
              예매 시에는 TTL이 설정되어 있지 않은 Redis 예매 키를 등록해 영구
              점유되도록 구현했습니다. 이러한 구조를 통해 안정적인 예매 트랜잭션
              제어가 가능한 End-to-End 예매 프로세스를 구축했습니다.
            </p>
            <div className="w-full">
              <img
                src={Project3_5}
                alt="img1"
                className="w-full md:w-auto md:h-80 rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>
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
            대기열 시스템 구현
          </h2>
          <div className="flex flex-row gap-2">
            <a
              href="https://huffpuffkin.tistory.com/59"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-white/40 transition-all group"
            >
              <SiTistory className="w-4 h-4" />
              <span className="text-body-small md:text-body-medium">Blog</span>
              <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5" />
            </a>
          </div>
        </div>
        <div className="bg-background-ds/50 backdrop-blur-sm rounded-2xl border border-gray-7/40 p-6 md:p-8">
          <div className="text-gray-4 text-body-large leading-relaxed flex flex-col gap-4">
            <p>
              예매 트래픽이 집중되는 상황에서도 서버 안정성을 유지하기 위해{" "}
              <strong className="text-gray-2">Redis 기반 대기열 시스템</strong>
              을 구현했습니다. 초기에는 N명씩 M시간마다 입장시키는 방식을
              고려했으나 AWS 프리티어 환경에서 순간적인 트래픽 폭주로 인한 자원
              부족 위험이 크다고 판단해{" "}
              <strong className="text-gray-2">
                상시 대기열 기반 순차 입장
              </strong>{" "}
              방식을 채택했습니다.
            </p>

            <p>
              유저가 입장하면{" "}
              <strong className="text-gray-2">
                queue:{"{"}gamePk{"}"}
              </strong>{" "}
              형식으로 Redis 큐에 유저를 등록합니다. 허용 인원보다 접속 인원이
              많은 경우 뒤 순번은 대기열에 남습니다. 스케줄러가 주기적으로 큐를
              확인하며 앞 순번 유저를{" "}
              <strong className="text-gray-2">
                available:{"{"}gamePk{"}"}:{"{"}userPk{"}"}
              </strong>
              로 이동시켜 입장 가능 상태를 부여합니다.
            </p>
            <p>
              초기 구현 시 <strong className="text-gray-2">keys 메서드</strong>
              를 활용했습니다. 이때 해당 메서드가 실행 중일 경우 다른 모든 Redis
              동작이 블락되어 시스템에 오류가 발생했습니다. 따라서{" "}
              <strong className="text-gray-2">SCAN 기반 키 탐색</strong>을
              이용해 <strong className="text-gray-2">개선</strong>했습니다.
              프로젝트에서는 Redis Cloud를 사용했는데 Redis CLI와 다르게 SCAN
              함수가 명시적으로 존재하지 않기 때문에 로우 레벨 커넥션을 다루는
              execute 메서드 내에서 SCAN 메서드를 사용했습니다.
            </p>
            <div className="w-full">
              <img
                src={Project3_6}
                alt="img1"
                className="w-full md:w-auto md:h-80 rounded-xl object-cover shadow-lg"
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
        title="좌석 수 초과 예매 문제 해결"
        Trouble={<TroubleShootingCard1 />}
      />

      {/* 비디오 섹션 */}
      <VideoSection
        video={Video}
        title="시연 영상"
        description="가디언즈는 다음과 같이 동작합니다."
      />

      {/* 여백 */}
      <div className="h-20"></div>
    </div>
  );
};

export default Guardians;
