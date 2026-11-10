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
    siteName: "내 이름",
    title: "내 이름 | AI 영상 크리에이터",
    description: "AI 영상 크리에이터 [내 이름]의 포트폴리오. 숏드라마, 브랜드 영상, 제작 노하우를 소개합니다.",
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
    wordmark: "MYNAME",
  },

  /** 1. 히어로: 전체 화면 배경 영상 + 큰 제목 */
  hero: {
    eyebrow: "MYNAME",
    /** <br/>로 줄을 나눕니다. 두 줄 권장. */
    headline: ["이야기가 있는 사람은", "누구나 감독이 될 수 있습니다."],
    /** 두 줄 권장. 첫 줄은 직함, 둘째 줄은 한 줄 소개. */
    sub: ["AI 영상 크리에이터 · AI 실습 강사, [내 이름]입니다.", "직접 만들며 배운 것을 영상과 수업으로 나눕니다."],
    cta: { label: "작품 만나보기", href: "#works" },
    video: "/videos/hero.mp4",            // 가로 영상, 소리 없어도 되는 것, 15~30초, 20MB 이하 권장
    videoMobile: "/videos/hero-mobile.mp4", // 없으면 video와 같은 파일을 적으세요
    poster: "/images/hero-poster.jpg",    // 영상 첫 장면 캡처
  },

  /** 2. 소개 */
  about: {
    enabled: true,
    eyebrow: "ABOUT MYNAME",
    photo: { src: "/images/about.jpg", alt: "작업 중인 모습", caption: "작업실에서" },
    headline: ["안녕하세요, [내 이름]입니다.", "AI와 함께 저만의 이야기를 만들고 있습니다."],
    body: [
      "첫 문단. 어떻게 시작했는지, 지금 무엇을 하는지 두세 문장으로.",
    ],
    timeline: [
      { date: "2015–2024", text: "이전 경력 (회사·전공·직무)" },
      { date: "2025", text: "AI 영상 제작 시작" },
      { date: "현재", text: "AI 영상 제작과 강의" },
    ],
    /** 상패·수료증 같은 작은 보조 이미지. 없으면 null */
    badge: null as null | { src: string; alt: string; caption: string; width: number; height: number },
  },

  /** 3. 작품: 영상 4편 + 이미지 갤러리 */
  works: {
    enabled: true,
    title: "AI Video Works",
    intro: "직접 만든 숏드라마와 AI 숏폼 작품입니다.",
    /** 2열 그리드. 4개 권장. 영상은 public/videos/works/, 포스터는 public/images/works/ */
    videos: [
      { title: "작품 제목 1", episode: "EP01", src: "/videos/works/work-01.mp4", poster: "/images/works/work-01.jpg" },
      { title: "작품 제목 2", episode: "EP01", src: "/videos/works/work-02.mp4", poster: "/images/works/work-02.jpg" },
      { title: "작품 제목 3", episode: "숏폼", src: "/videos/works/work-03.mp4", poster: "/images/works/work-03.jpg" },
      { title: "작품 제목 4", episode: "뮤직비디오", src: "/videos/works/work-04.mp4", poster: "/images/works/work-04.jpg" },
    ],
    galleryTitle: "AI Image Works",
    /** 큰 이미지 1장 + 썸네일 줄. 10~15장 권장. alt는 화면에도 표시됩니다. */
    gallery: [
      { src: "/images/gallery/01.jpg", alt: "이미지 설명 1" },
      { src: "/images/gallery/02.jpg", alt: "이미지 설명 2" },
      { src: "/images/gallery/03.jpg", alt: "이미지 설명 3" },
      { src: "/images/gallery/04.jpg", alt: "이미지 설명 4" },
      { src: "/images/gallery/05.jpg", alt: "이미지 설명 5" },
    ],
  },

  /** 4. 협업 실적 (클라이언트 작업·연구 협업) */
  clients: {
    enabled: true,
    eyebrow: "Client work",
    title: "제작·납품 및 협업",
    featured: {
      eyebrow: "Featured",
      title: ["대표 협업 프로젝트", "한 줄 부제"],
      body: "어떤 목적의 영상을 몇 편 만들어 납품했는지, 내가 맡은 역할은 무엇이었는지 서술합니다.",
      photo: { src: "/images/clients/featured.jpg", alt: "협업 현장", caption: "2026년 · 현장" },
    },
    /** 2열. 비우면 영역이 사라집니다. */
    list: [
      { kicker: "브랜드 광고 · 납품 완료", title: "클라이언트 A", body: "릴스 광고 영상 제작·납품" },
      { kicker: "기업 홍보 · 납품 완료", title: "클라이언트 B", body: "홍보 영상 제작·납품" },
    ],
  },

  /** 5. 강의 */
  teaching: {
    enabled: true,
    eyebrow: "Teaching",
    title: "기업·기관 강의",
    featured: {
      photo: { src: "/images/teaching/featured.jpg", alt: "워크숍 현장", caption: "장소 · 2026.00.00" },
      title: "대표 워크숍 이름",
      body: "어떤 대상에게 몇 시간짜리 어떤 수업을 했는지 두세 문장으로.",
      links: [
        { label: "강의 소개 보기", href: "https://example.com" },
      ],
      secondPhoto: { src: "/images/teaching/second.jpg", alt: "워크숍 현장 두 번째 사진" },
    },
    upcomingLabel: "Upcoming",
    /** 예정 강의. 없으면 [] */
    upcoming: [
      { date: "2026년 00월 예정", title: "예정 강의 1", body: "대상·내용 한 줄", link: null as null | { label: string; href: string } },
    ],
  },

  /** 6. 임팩트: 숫자 카운트업 + 이야기 + 후기 */
  impact: {
    enabled: true,
    eyebrow: "IMPACT & COMMUNITY",
    title: "함께 만든 변화",
    intro: "숫자가 어떻게 모였는지 두세 문장으로. 과장 없이.",
    /** 3개 권장. value는 숫자만. link는 없으면 null */
    stats: [
      { label: "팔로워", value: 1000, note: "2026년 00월 기준", link: "https://www.instagram.com/" as string | null },
      { label: "커뮤니티", value: 300, note: "함께하는 크리에이터", link: null as string | null },
      { label: "누적 수강생", value: 500, note: "온라인 클래스", link: null as string | null },
    ],
    statSuffix: "명+",
    story: {
      kicker: "첫 온라인 강의",
      title: ["기억에 남는 순간을", "한 문장으로."],
      body: [
        "첫 문단.",
        "둘째 문단.",
      ],
      /** 짧은 무음 루프 영상. 없으면 null */
      video: { src: "/videos/impact.mp4", poster: "/images/impact-poster.jpg", caption: "그날의 장면" } as null | { src: string; poster: string; caption: string },
      link: { label: "다시보기", href: "https://example.com" } as null | { label: string; href: string },
    },
    reviews: {
      enabled: true,
      title: "함께한 분들의 이야기",
      intro: "강의와 커뮤니티에서 자발적으로 남겨주신 후기입니다. 캡처를 누르면 크게 읽을 수 있습니다.",
      note: "이름·아이디·프로필 사진을 가린 원본 캡처입니다.",
      /** public/images/reviews/ 에 넣고 세로형(3:4) 권장. width/height는 실제 픽셀. */
      items: [
        { id: 1, src: "/images/reviews/01.png", width: 720, height: 960, title: "후기 제목 1" },
        { id: 2, src: "/images/reviews/02.png", width: 720, height: 960, title: "후기 제목 2" },
        { id: 3, src: "/images/reviews/03.png", width: 720, height: 960, title: "후기 제목 3" },
        { id: 4, src: "/images/reviews/04.png", width: 720, height: 960, title: "후기 제목 4" },
      ],
      /** 전체 후기 PDF. 없으면 null */
      pdf: null as null | { href: string; filename: string },
    },
  },

  /** 7. 미디어·행사 */
  media: {
    enabled: true,
    eyebrow: "Media & events",
    title: "방송 · 행사 · 활동",
    featured: {
      photo: { src: "/images/media/featured.jpg", alt: "방송 출연 현장", caption: "매체 · 프로그램 · 2026.00.00" },
      title: "출연 프로그램 이름",
      body: "무엇에 대해 이야기했는지 두 문장.",
      links: [{ label: "방송 보기", href: "https://example.com" }],
      secondPhoto: { src: "/images/media/second.jpg", alt: "스튜디오" },
    },
    /** 2열 카드. 각 카드에 사진 1~2장 */
    events: [
      { date: "2026.00.00 · 행사 참석", title: "행사 이름 1", body: "한 줄 설명", photo: { src: "/images/media/event-01.jpg", alt: "행사 1" }, link: null as null | { label: string; href: string } },
      { date: "2026.00.00 · 행사 참석", title: "행사 이름 2", body: "한 줄 설명", photo: { src: "/images/media/event-02.jpg", alt: "행사 2" }, link: null as null | { label: string; href: string } },
    ],
    /** 앰버서더·소속 등 한 줄 강조. 없으면 null */
    highlight: { kicker: "앰버서더 활동", title: "브랜드 앰버서더", link: { label: "소개 보기", href: "https://example.com" } } as null | { kicker: string; title: string; link: { label: string; href: string } | null },
  },

  /** 8. 자료 (링크 목록) */
  resources: {
    enabled: true,
    eyebrow: "Resources",
    title: "함께 만드는 창작",
    intro: "창작을 시작하고 이어가는 데 필요한 자료를 모았습니다.",
    items: [
      { title: "자료 1", detail: "한 줄 설명", href: "https://example.com" },
      { title: "자료 2", detail: "한 줄 설명", href: "https://example.com" },
    ],
  },

  /** 9. 철학: 사진 배경 위 한 문장 */
  philosophy: {
    enabled: true,
    eyebrow: "Philosophy",
    /** 마지막 요소는 모바일에서 줄바꿈 없이 붙어 나옵니다. */
    quote: ["AI로 영상을 만들지만,", "제가 전하고 싶은 건", "사람의 이야기입니다."],
    background: "/images/philosophy.jpg",
    /** 모바일에서 사진의 어느 가로 위치를 보여줄지 (얼굴 위치). 0~100 */
    focusX: 50,
  },

  /** 10. 하는 일 (2×2 카드) */
  services: {
    enabled: true,
    title: "What I Do",
    items: [
      { title: "AI Video Creation", desc: "AI 기술을 활용한 영상 콘텐츠 제작", detail: "광고 영상, 브랜드 콘텐츠, 스토리 영상" },
      { title: "AI Visual Art", desc: "AI 이미지, 비주얼 콘텐츠 제작", detail: "" },
      { title: "AI 제작 파이프라인 설계", desc: "도구를 엮어 제작 워크플로우를 설계합니다", detail: "기업 맞춤 컨설팅" },
      { title: "AI 실습 강의", desc: "직접 만들며 배우는 AI 영상 수업", detail: "온라인 클래스 · 기업·기관 강의" },
    ],
  },

  /** 11. 연락 */
  contact: {
    eyebrow: "Contact",
    title: "함께 만들어요",
    intro: "작업 의뢰, 강의, 협업 모두 환영합니다. 편하게 연락 주세요.",
    email: "hello@example.com",
    /** 아이콘 이름: mail | threads | instagram | youtube | kakao | community | github | link */
    channels: [
      { icon: "mail", label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
      { icon: "instagram", label: "Instagram", value: "@myname", href: "https://www.instagram.com/" },
      { icon: "threads", label: "Threads", value: "@myname", href: "https://www.threads.com/" },
      { icon: "youtube", label: "YouTube", value: "@myname", href: "https://www.youtube.com/" },
      { icon: "kakao", label: "1:1 문의", value: "카카오톡 오픈채팅", href: "https://open.kakao.com/" },
    ],
    /** 하단 무음 루프 영상. 없으면 null */
    video: { src: "/videos/contact.mp4", poster: "/images/contact-poster.jpg" } as null | { src: string; poster: string },
    /** 우측 하단 떠 있는 "문의하기" 캐릭터 버튼. 캐릭터 이미지가 없으면 enabled: false */
    companion: {
      enabled: false,
      image: "/images/companion.png",
      title: "문의하기",
      subtitle: "AI 영상 제작 · 강의 · 협업",
      greeting: ["안녕하세요.", "함께 만들고 싶은 이야기를 편하게 보내주세요."],
      kakaoHref: "https://open.kakao.com/",
    },
  },

  /** 12. 푸터 */
  footer: {
    tagline: ["AI 영상 크리에이터", "기술에 이야기를, 창작에 마음을."],
    copyright: "© 2026 MYNAME. All rights reserved.",
  },
} as const;

export type Site = typeof site;
