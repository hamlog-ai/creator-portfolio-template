# Design System

hamlog.ai 홈페이지에서 추출한 편집 디자인 규칙입니다. 이 템플릿의 코드는 아래 수치를 그대로 구현합니다.
바꾸고 싶은 항목이 있으면 이 문서를 먼저 고치고, 그다음 코드를 맞추세요.

## 1. 분위기

흰 여백, 검정 타이포, 실제 사진과 영상이 색을 담당한다. 장식 없음. 새 브랜드 색을 추가하지 않는다.
서사 순서: 소개 → 작품 → 협업 → 강의 → 임팩트/후기 → 미디어 → 자료 → 철학 → 하는 일 → 연락.

## 2. 색 (`globals.css` `:root`, HSL)

| 토큰 | 값 | 용도 |
|---|---|---|
| background / card | 0 0% 100% | 페이지·카드 배경 |
| foreground / primary | 0 0% 0% | 글자, 버튼 |
| muted | 0 0% 96% | 아주 연한 회색 면 |
| muted-foreground | 0 0% 40% | 보조 글자 |
| accent | 0 0% 90% | 호버 배경 |
| border | 0 0% 90% | 모든 선 |
| footer | #111 | 푸터 배경 |
| radius | 0px | 모서리. 예외: 히어로 CTA 12px, 문의 캐릭터 말풍선 |

히어로·철학 섹션은 사진 위에 검정 50~55% 오버레이 + 흰 글자.

## 3. 타이포

- 제목(display): **Jost** 400/500/600/700, `letter-spacing: -0.03em`
- 본문(body): **Pretendard**, 줄 간격 넉넉하게, `word-break: keep-all`
- 크기 단계 (Tailwind): 캡션 `text-xs` · 메타 `text-sm` · 본문 `text-base md:text-lg` · 카드 제목 `text-xl/2xl` · 섹션 제목 `text-3xl md:text-4xl` · 히어로 `text-4xl → md:text-6xl`
- 히어로 제목 줄 간격: 데스크톱 85px, 모바일 1.4. 히어로 본문 줄 간격 2.0, 흰색 90%
- 섹션 eyebrow: `text-sm uppercase tracking-widest text-muted-foreground` (영문)

## 4. 간격·레이아웃

- 섹션: `border-t border-border px-6 py-32 md:py-40`, 내부 `max-w-5xl mx-auto` (작품 영상 그리드만 `max-w-[1600px]`)
- 간격: Tailwind 4px 스케일, gap 6/8/12/16
- 2열 편집 레이아웃은 `md`부터, 모바일은 한 컬럼
- 사진은 원본 비율 유지, 보조 사진은 더 작게 가능
- 고정 메뉴 높이만큼 앵커 여백 `scroll-margin-top: 5rem`

## 5. 컴포넌트

- **Photo**: `figure` + 이미지 + 캡션(`text-sm text-muted-foreground`)
- **EditorialLink**: 밑줄(현재 색 1px) + 18px 화살표, `text-sm font-medium`, 최소 높이 44px, hover는 muted
- **히어로 CTA**: 흰 배경 `rounded-xl`(12px), 검정 글자, `px-6 py-3`, 최소 44px
- **숫자 카운트업**: 뷰포트 진입 시 1번, 1.2초 ease-out, `tabular-nums`, 최종 폭 미리 확보. 모션 감소 설정이면 최종값 즉시
- **What I Do 카드**: 2×2, 선으로만 구분, 호버 시 검정 배경·흰 글자(0.5초)
- **후기 마퀴**: 두 줄 반대 방향, 카드 폭 모바일 2장/데스크톱 3장, 클릭 시 다이얼로그. 일시정지 버튼 제공
- **푸터**: `#111`, 3영역(브랜드 / MENU 2열 / CONTACT), `py-8`, 링크 최소 높이 32px, 글자 흰색 75%

## 6. 모션

- 등장: `.reveal` 클래스, opacity + translateY(30px) → 0, 0.8s cubic-bezier(0.16,1,0.3,1). 형제는 0.1s씩 지연
- 히어로 하단 요소: `animate-fade-up` 1.2s 지연
- 필름 그레인 오버레이 opacity 0.03
- 철학 섹션 배경: 데스크톱 마우스 환경에서만 `background-attachment: fixed`
- `prefers-reduced-motion: reduce`면 모든 전환·애니메이션 끔, 스무스 스크롤 끔

## 7. 접근성

- 모든 버튼에 이름(aria-label), 사진에 설명 alt
- 포커스 링 보이게(`focus-visible:outline-2`)
- 터치 타깃 44px(푸터 링크만 32px)
- 375 / 768 / 1280px에서 가로 스크롤 없음
- 영상 자동재생은 무음·`playsInline`, 작품 영상은 사용자가 눌러야 로드
