# Creator Portfolio Template — 작업 규칙

한 페이지 포트폴리오 사이트. Next.js 16 App Router + React 19 + Tailwind CSS 4. DB·인증·결제 없음.

## 명령

- install: `bun install`
- dev: `bun run dev` (포트 3000)
- build: `bun run build` (배포 전 반드시 통과)

## 어디를 고치나

- **내용(글·숫자·링크·파일 경로)**: `src/content/site.ts` 한 파일. 사용자가 "내 정보로 바꿔 줘"라고 하면 여기만 고친다.
- **사진·영상**: `public/images/**`, `public/videos/**`. `site.ts`의 경로와 파일명을 맞춘다. 지금 들어 있는 파일은 단색 자리표시이므로 덮어써도 된다.
- **섹션 순서·추가·삭제**: `src/app/page.tsx`. 각 섹션은 `src/components/sections/*.tsx` 하나씩.
- **디자인 토큰(색·폰트·모서리)**: `src/app/globals.css`의 `:root`와 `@theme`. 규칙은 `DESIGN.md`.

## 하지 말 것

- 사용자가 명시적으로 디자인 변경을 요청하지 않으면 `globals.css`, 섹션의 className, 여백·폰트 크기를 바꾸지 않는다. 이 템플릿의 가치는 디자인이 일정하게 유지되는 데 있다.
- `src/components/ui/**`(shadcn 프리미티브)는 수정하지 않는다.
- 가짜 후기, 가짜 숫자, 가짜 수상 실적을 만들어 넣지 않는다. 재료에 없으면 비워 두고 사용자에게 알린다.
- 분석 코드(GA, Vercel Analytics), 사이트 인증 메타태그, API 키를 사용자 요청 없이 추가하지 않는다.

## 재료 폴더를 받았을 때 순서

1. 폴더 안 파일을 훑어 어떤 섹션에 들어갈지 분류한다 (프로필 / 작품 영상+포스터 / 갤러리 / 후기 / 강의·행사 사진 / 연락처).
2. 영상이 HEVC/mov이거나 100MB를 넘으면 `ffmpeg`로 H.264 1080p mp4로 변환한다. 이미지가 2000px를 넘으면 긴 변 1600px로 줄인다. 원본은 건드리지 않고 `public/`에 결과만 넣는다.
3. 파일명은 영문 소문자+하이픈으로 바꿔 `public/`의 해당 폴더에 넣는다.
4. `site.ts`를 채운다. 자리표시 문구는 전부 "여기에"로 시작하므로, 끝난 뒤 `grep -n 여기에 src/content/site.ts`로 남은 항목을 찾아 사용자에게 "아직 채워야 할 목록"으로 보고한다. 사용자가 준 글이 없는 항목은 지어내지 말고 그대로 둔다.
5. `bun run dev`로 띄우고 375px 폭에서 가로 스크롤이 없는지, 영상이 재생되는지 확인한다.

## 배포

GitHub 저장소 생성 → Vercel Import. 빌드 설정은 기본값. 배포 명령을 직접 실행하기 전에 사용자에게 확인한다.
