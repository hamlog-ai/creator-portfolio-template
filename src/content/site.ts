/**
 * ─────────────────────────────────────────────────────────────
 *  내 포트폴리오 콘텐츠는 전부 이 파일 하나에서 바꿉니다.
 *
 *  · 글자는 따옴표 안의 내용만 바꾸세요.
 *  · 사진·영상은 public/ 폴더에 넣고 "/images/...", "/videos/..." 경로로 적습니다.
 *  · 없는 항목은 빈 배열 []로 두거나 섹션 자체를 enabled: false 로 끄세요.
 *  · 가짜 숫자, 가짜 후기는 넣지 마세요. 증명할 수 없으면 비워 두는 게 낫습니다.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  /** 사이트 기본 정보 (브라우저 탭, 검색 결과, 카톡 미리보기) */
  meta: {
    siteName: "여기에 이름 또는 브랜드명",
    title: "여기에 이름 | 여기에 직함 (브라우저 탭에 보입니다)",
    description: "여기에 검색 결과와 카톡 미리보기에 나올 한 문장 소개를 입력해 주세요 (80자 안팎).",
    url: "https://example.com",          // 배포 후 실제 주소로 바꾸세요 (끝에 / 없이)
    ogImage: "/images/og-image.jpg",     // 1200×630 권장
    locale: "ko",
  },

  /** 상단 메뉴. href는 아래 섹션의 id와 같아야 합니다. 빼고 싶은 메뉴는 줄을 지우세요. */
  nav: [
    { label: "소개", href: "#about" },
    { label: "작품", href: "#works" },
    { label: "협업 실적", href: "#clients" },
    { label: "강의", href: "#teaching" },
    { label: "후기", href: "#impact" },
    { label: "활동", href: "#media" },
    { label: "자료", href: "#resources" },
    { label: "문의", href: "#contact" },
  ],

  /** 좌측 상단·푸터에 들어가는 영문 워드마크 */
  brand: {
    wordmark: "YOURNAME",
  },

  /** 1. 히어로: 전체 화면 배경 영상 + 큰 제목 */
  hero: {
    eyebrow: "YOURNAME",
    /** 배열 한 칸이 한 줄입니다. 두 줄 권장. */
    headline: ["여기에는 나를 한 문장으로 말하는", "큰 제목을 두 줄로 입력해 주세요."],
    /** 두 줄 권장. 첫 줄은 직함, 둘째 줄은 한 줄 소개. */
    sub: ["여기에는 직함 · 직함, 이름입니다 형식의 첫 줄을 입력해 주세요.", "여기에는 내가 하는 일을 설명하는 둘째 줄을 입력해 주세요."],
    cta: { label: "여기에 버튼 글자 (예: 작품 보기)", href: "#works" },
    video: "/videos/hero.mp4",            // 가로 영상, 소리 없어도 되는 것, 15~30초, 20MB 이하 권장
    videoMobile: "/videos/hero-mobile.mp4", // 없으면 video와 같은 파일을 적으세요
    poster: "/images/hero-poster.jpg",    // 영상 첫 장면 캡처
  },

  /** 2. 소개 */
  about: {
    enabled: true,
    eyebrow: "ABOUT YOURNAME",
    photo: { src: "/images/about.jpg", alt: "여기에 사진 설명 (화면에는 안 보이고 검색·접근성용)", caption: "여기에 사진 아래 짧은 캡션" },
    headline: ["여기에는 인사말 첫 줄을 입력해 주세요.", "여기에는 지금 하는 일을 한 줄로 입력해 주세요."],
    body: [
      "여기에는 어떻게 시작했고 지금 무엇을 하는지 두세 문장으로 입력해 주세요. 문단을 더 넣으려면 쉼표 뒤에 따옴표로 한 줄 더 추가하면 됩니다.",
    ],
    timeline: [
      { date: "여기에 기간", text: "여기에 이전 경력 (회사·전공·직무)" },
      { date: "여기에 연도", text: "여기에 전환점 (예: AI 영상 제작 시작)" },
      { date: "현재", text: "여기에 지금 하는 일" },
    ],
    /** 상패·수료증 같은 작은 보조 이미지. 없으면 null */
    badge: null as null | { src: string; alt: string; caption: string; width: number; height: number },
  },

  /** 3. 작품: 영상 4편 + 이미지 갤러리 */
  works: {
    enabled: true,
    title: "여기에 작품 섹션 제목 (예: AI Video Works)",
    intro: "여기에는 아래 영상들이 어떤 작품인지 한 문장으로 입력해 주세요.",
    /** 2열 그리드. 4개 권장. 영상은 public/videos/works/, 포스터는 public/images/works/ */
    videos: [
      { title: "여기에 작품 1 제목", episode: "여기에 회차·종류 (예: EP01)", src: "/videos/works/work-01.mp4", poster: "/images/works/work-01.jpg" },
      { title: "여기에 작품 2 제목", episode: "여기에 회차·종류", src: "/videos/works/work-02.mp4", poster: "/images/works/work-02.jpg" },
      { title: "여기에 작품 3 제목", episode: "여기에 회차·종류 (예: 숏폼)", src: "/videos/works/work-03.mp4", poster: "/images/works/work-03.jpg" },
      { title: "여기에 작품 4 제목", episode: "여기에 회차·종류 (예: 뮤직비디오)", src: "/videos/works/work-04.mp4", poster: "/images/works/work-04.jpg" },
    ],
    galleryTitle: "여기에 이미지 갤러리 제목 (예: AI Image Works)",
    /** 큰 이미지 1장 + 썸네일 줄. 10~15장 권장. alt는 화면에도 표시됩니다. */
    gallery: [
      { src: "/images/gallery/01.jpg", alt: "여기에 이미지 1 설명 (큰 화면 왼쪽 아래에 표시됩니다)" },
      { src: "/images/gallery/02.jpg", alt: "여기에 이미지 2 설명 (큰 화면 왼쪽 아래에 표시됩니다)" },
      { src: "/images/gallery/03.jpg", alt: "여기에 이미지 3 설명 (큰 화면 왼쪽 아래에 표시됩니다)" },
      { src: "/images/gallery/04.jpg", alt: "여기에 이미지 4 설명 (큰 화면 왼쪽 아래에 표시됩니다)" },
      { src: "/images/gallery/05.jpg", alt: "여기에 이미지 5 설명 (큰 화면 왼쪽 아래에 표시됩니다)" },
    ],
  },

  /** 4. 협업 실적 (클라이언트 작업·연구 협업) */
  clients: {
    enabled: true,
    eyebrow: "Client work",
    title: "여기에 협업 섹션 제목 (예: 제작·납품 및 협업)",
    featured: {
      eyebrow: "Featured",
      title: ["여기에 대표 협업 프로젝트 이름", "여기에 한 줄 부제"],
      body: "여기에는 어떤 목적의 영상을 몇 편 만들어 납품했는지, 내가 맡은 역할은 무엇이었는지 입력해 주세요.",
      photo: { src: "/images/clients/featured.jpg", alt: "여기에 사진 설명", caption: "여기에 캡션 (예: 2026년 · 장소)" },
    },
    /** 2열. 비우면 영역이 사라집니다. */
    list: [
      { kicker: "여기에 분류 (예: 브랜드 광고 · 납품 완료)", title: "여기에 클라이언트·프로젝트 이름", body: "여기에 무엇을 만들었는지 한 줄" },
      { kicker: "여기에 분류", title: "여기에 클라이언트·프로젝트 이름", body: "여기에 무엇을 만들었는지 한 줄" },
    ],
  },

  /** 5. 강의 */
  teaching: {
    enabled: true,
    eyebrow: "Teaching",
    title: "여기에 강의 섹션 제목 (예: 기업·기관 강의)",
    featured: {
      photo: { src: "/images/teaching/featured.jpg", alt: "여기에 사진 설명", caption: "여기에 캡션 (예: 장소 · 2026.00.00)" },
      title: "여기에 대표 강의·워크숍 이름",
      body: "여기에는 어떤 대상에게 몇 시간짜리 어떤 수업을 했는지 두세 문장으로 입력해 주세요.",
      links: [
        { label: "여기에 링크 글자 (예: 강의 소개 보기)", href: "https://example.com" },
      ],
      secondPhoto: { src: "/images/teaching/second.jpg", alt: "여기에 두 번째 사진 설명" },
    },
    upcomingLabel: "Upcoming",
    /** 예정 강의. 없으면 [] */
    upcoming: [
      { date: "여기에 예정 시기 (예: 2026년 00월 예정)", title: "여기에 예정 강의 이름", body: "여기에 대상·내용 한 줄", link: null as null | { label: string; href: string } },
    ],
  },

  /** 6. 임팩트: 숫자 카운트업 + 이야기 + 후기 */
  impact: {
    enabled: true,
    eyebrow: "IMPACT & COMMUNITY",
    title: "여기에 임팩트 섹션 제목 (예: 함께 만든 변화)",
    intro: "여기에는 아래 숫자가 어떻게 모였는지 두세 문장으로 입력해 주세요. 과장 없이, 증명할 수 있는 것만.",
    /** 3개 권장. value는 숫자만. link는 없으면 null */
    stats: [
      { label: "여기에 숫자 이름 (예: 팔로워)", value: 1000, note: "여기에 기준 (예: 2026년 00월 기준)", link: "https://www.instagram.com/" as string | null },
      { label: "여기에 숫자 이름 (예: 커뮤니티)", value: 300, note: "여기에 보조 설명", link: null as string | null },
      { label: "여기에 숫자 이름 (예: 누적 수강생)", value: 500, note: "여기에 보조 설명", link: null as string | null },
    ],
    statSuffix: "명+",
    story: {
      kicker: "여기에 이야기 소제목 (예: 첫 온라인 강의)",
      title: ["여기에는 기억에 남는 순간을", "두 줄 제목으로 입력해 주세요."],
      body: [
        "여기에는 그 순간의 이야기 첫 문단을 입력해 주세요.",
        "여기에는 그 경험이 지금의 나에게 어떤 의미인지 둘째 문단을 입력해 주세요.",
      ],
      /** 짧은 무음 루프 영상. 없으면 null */
      video: { src: "/videos/impact.mp4", poster: "/images/impact-poster.jpg", caption: "여기에 영상 아래 캡션" } as null | { src: string; poster: string; caption: string },
      link: { label: "여기에 링크 글자 (예: 다시보기)", href: "https://example.com" } as null | { label: string; href: string },
    },
    reviews: {
      enabled: true,
      title: "여기에 후기 제목 (예: 함께한 분들의 이야기)",
      intro: "여기에는 후기가 어디서 어떻게 모인 것인지 한두 문장으로 입력해 주세요.",
      note: "이름·아이디·프로필 사진을 가린 원본 캡처입니다. (이 문장은 그대로 써도 됩니다)",
      /** public/images/reviews/ 에 넣고 세로형(3:4) 권장. width/height는 실제 픽셀. */
      items: [
        { id: 1, src: "/images/reviews/01.png", width: 720, height: 960, title: "여기에 후기 1 한 줄 요약" },
        { id: 2, src: "/images/reviews/02.png", width: 720, height: 960, title: "여기에 후기 2 한 줄 요약" },
        { id: 3, src: "/images/reviews/03.png", width: 720, height: 960, title: "여기에 후기 3 한 줄 요약" },
        { id: 4, src: "/images/reviews/04.png", width: 720, height: 960, title: "여기에 후기 4 한 줄 요약" },
      ],
      /** 전체 후기 PDF. 없으면 null */
      pdf: null as null | { href: string; filename: string },
    },
  },

  /** 7. 미디어·행사 */
  media: {
    enabled: true,
    eyebrow: "Media & events",
    title: "여기에 미디어 섹션 제목 (예: 방송 · 행사 · 활동)",
    featured: {
      photo: { src: "/images/media/featured.jpg", alt: "여기에 사진 설명", caption: "여기에 캡션 (예: 매체 · 프로그램 · 2026.00.00)" },
      title: "여기에 출연 프로그램·기사 이름",
      body: "여기에는 무엇에 대해 이야기했는지 두 문장으로 입력해 주세요.",
      links: [{ label: "여기에 링크 글자 (예: 방송 보기)", href: "https://example.com" }],
      secondPhoto: { src: "/images/media/second.jpg", alt: "여기에 두 번째 사진 설명" },
    },
    /** 2열 카드. 각 카드에 사진 1~2장 */
    events: [
      { date: "여기에 날짜 · 분류 (예: 2026.00.00 · 행사 참석)", title: "여기에 행사 1 이름", body: "여기에 한 줄 설명", photo: { src: "/images/media/event-01.jpg", alt: "여기에 사진 설명" }, link: null as null | { label: string; href: string } },
      { date: "여기에 날짜 · 분류", title: "여기에 행사 2 이름", body: "여기에 한 줄 설명", photo: { src: "/images/media/event-02.jpg", alt: "여기에 사진 설명" }, link: null as null | { label: string; href: string } },
    ],
    /** 앰버서더·소속 등 한 줄 강조. 없으면 null */
    highlight: { kicker: "여기에 분류 (예: 앰버서더 활동)", title: "여기에 소속·직함 (예: ○○ 앰버서더)", link: { label: "여기에 링크 글자", href: "https://example.com" } } as null | { kicker: string; title: string; link: { label: string; href: string } | null },
  },

  /** 8. 자료 (링크 목록) */
  resources: {
    enabled: true,
    eyebrow: "Resources",
    title: "여기에 자료 섹션 제목 (예: 함께 만드는 창작)",
    intro: "여기에는 어떤 자료를 모아 두었는지 한 문장으로 입력해 주세요.",
    items: [
      { title: "여기에 자료 1 이름", detail: "여기에 한 줄 설명", href: "https://example.com" },
      { title: "여기에 자료 2 이름", detail: "여기에 한 줄 설명", href: "https://example.com" },
    ],
  },

  /** 9. 철학: 사진 배경 위 한 문장 */
  philosophy: {
    enabled: true,
    eyebrow: "Philosophy",
    /** 마지막 요소는 모바일에서 줄바꿈 없이 붙어 나옵니다. */
    quote: ["여기에는 내 창작 철학을", "세 줄짜리 한 문장으로", "입력해 주세요."],
    background: "/images/philosophy.jpg",
    /** 모바일에서 사진의 어느 가로 위치를 보여줄지 (얼굴 위치). 0~100 */
    focusX: 50,
  },

  /** 10. 하는 일 (2×2 카드) */
  services: {
    enabled: true,
    title: "여기에 섹션 제목 (예: What I Do)",
    items: [
      { title: "여기에 하는 일 1 (예: AI Video Creation)", desc: "여기에 한 줄 설명", detail: "여기에 세부 항목 (예: 광고 영상, 브랜드 콘텐츠)" },
      { title: "여기에 하는 일 2", desc: "여기에 한 줄 설명", detail: "" },
      { title: "여기에 하는 일 3", desc: "여기에 한 줄 설명", detail: "여기에 세부 항목" },
      { title: "여기에 하는 일 4", desc: "여기에 한 줄 설명", detail: "여기에 세부 항목" },
    ],
  },

  /** 11. 연락 */
  contact: {
    eyebrow: "Contact",
    title: "여기에 연락 섹션 제목 (예: 함께 만들어요)",
    intro: "여기에는 어떤 연락을 환영하는지 한두 문장으로 입력해 주세요.",
    email: "hello@example.com",
    /** 아이콘 이름: mail | threads | instagram | youtube | kakao | community | github | link */
    channels: [
      { icon: "mail", label: "Email", value: "여기에 이메일 주소", href: "mailto:hello@example.com" },
      { icon: "instagram", label: "Instagram", value: "여기에 @아이디", href: "https://www.instagram.com/" },
      { icon: "threads", label: "Threads", value: "여기에 @아이디", href: "https://www.threads.com/" },
      { icon: "youtube", label: "YouTube", value: "여기에 채널 이름", href: "https://www.youtube.com/" },
      { icon: "kakao", label: "1:1 문의", value: "여기에 채널 설명 (예: 카카오톡 오픈채팅)", href: "https://open.kakao.com/" },
    ],
    /** 하단 무음 루프 영상. 없으면 null */
    video: { src: "/videos/contact.mp4", poster: "/images/contact-poster.jpg" } as null | { src: string; poster: string },
    /** 우측 하단 떠 있는 "문의하기" 캐릭터 버튼. 캐릭터 이미지가 없으면 enabled: false */
    companion: {
      enabled: false,
      image: "/images/companion.png",
      title: "여기에 버튼 글자 (예: 문의하기)",
      subtitle: "여기에 문의 종류 (예: AI 영상 제작 · 강의 · 협업)",
      greeting: ["여기에 인사 첫 줄.", "여기에 문의를 권하는 둘째 줄."],
      kakaoHref: "https://open.kakao.com/",
    },
  },

  /** 12. 푸터 */
  footer: {
    tagline: ["여기에 직함 한 줄", "여기에 짧은 슬로건 한 줄"],
    copyright: "© 2026 여기에 이름. All rights reserved.",
  },
} as const;

export type Site = typeof site;
