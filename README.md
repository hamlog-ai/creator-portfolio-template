# Creator Portfolio Template

AI 영상 크리에이터를 위한 한 페이지 포트폴리오 사이트 템플릿입니다.
[hamlog.ai](https://www.hamlog.ai)의 골격과 디자인 시스템을 그대로 쓰되, 콘텐츠·사진·영상·분석 코드는 전부 비워 둔 상태입니다.

- 흰 배경 · 검정 글자 · 사진과 영상만 색. 제목 Jost, 본문 Pretendard.
- 섹션: Hero → About → Works → Clients → Teaching → Impact(숫자·후기) → Media → Resources → Philosophy → What I Do → Contact → Footer
- Next.js 16 + React 19 + Tailwind CSS 4. 로그인·DB·결제 없음. 서버 비용 0원(Vercel 무료).

## 가장 빠른 길: Claude Code에 맡기기

이 폴더에서 Claude Code를 열고 이렇게 말하면 됩니다.

```
내 재료 폴더는 [폴더 경로]야. 이 안의 사진·영상을 public/ 에 맞게 복사하고,
src/content/site.ts 의 모든 글과 경로를 내 정보로 바꿔 줘.
없는 항목은 비워 두고 알려 줘. 가짜 숫자·가짜 후기는 만들지 마.
다 되면 localhost로 띄워서 보여 줘.
```

CLAUDE.md에 이 템플릿의 규칙이 적혀 있어서 Claude Code가 디자인은 건드리지 않고 내용만 바꿉니다.

## 직접 하는 길

### 1. 실행

```bash
bun install        # 또는 npm install
bun run dev        # http://localhost:3000
```

### 2. 내용 바꾸기: `src/content/site.ts` 한 파일

모든 글, 숫자, 링크, 파일 경로가 이 파일에 있습니다. 따옴표 안만 바꾸면 됩니다.
섹션을 빼고 싶으면 `enabled: false`, 메뉴를 빼고 싶으면 `nav`에서 줄을 지웁니다.

### 3. 사진·영상 넣기: `public/` 폴더

| 자리 | 경로 | 권장 |
|---|---|---|
| 히어로 배경 영상 | `public/videos/hero.mp4`, `hero-mobile.mp4` | 가로 1080p, 15~30초, 20MB 이하, 무음 OK |
| 히어로 포스터 | `public/images/hero-poster.jpg` | 영상 첫 장면 |
| 프로필 | `public/images/about.jpg` | 세로 3:4 |
| 작품 영상 4편 | `public/videos/works/work-0N.mp4` + `public/images/works/work-0N.jpg` | H.264 mp4, 100MB 이하 |
| 이미지 갤러리 | `public/images/gallery/0N.jpg` | 10~15장, 긴 변 1600px |
| 후기 캡처 | `public/images/reviews/0N.png` | 세로 3:4, 이름 가리기 |
| 철학 배경 | `public/images/philosophy.jpg` | 가로 1920px |
| 카톡 미리보기 | `public/images/og-image.jpg` | 1200×630 |

지금 들어 있는 파일은 전부 단색 자리표시입니다. 같은 이름으로 덮어쓰거나, `site.ts`의 경로를 바꾸세요.

영상 변환(아이폰 HEVC → 웹용 H.264):

```bash
ffmpeg -i 원본.mov -vf "scale=-2:1080" -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k -movflags +faststart out.mp4
```

### 4. 배포

GitHub에 올리고 Vercel에서 Import 하면 끝입니다. 빌드 설정은 기본값 그대로 두면 됩니다.
도메인 연결은 Vercel → Settings → Domains.

전송량 주의: Vercel 무료는 월 100GB입니다. 영상이 많고 방문자가 늘면 영상은 YouTube/Vimeo 링크나 Cloudflare R2로 옮기세요.

## 디자인을 바꾸고 싶다면

`src/app/globals.css` 상단 `:root`의 숫자가 색이고, `@theme`의 `--font-display` / `--font-body`가 폰트입니다.
수치와 규칙 전체는 [DESIGN.md](DESIGN.md)에 있습니다. 바꾸기 전에 한 번 읽어 보세요.

## 라이선스

코드와 디자인 시스템은 MIT 라이선스입니다([LICENSE](LICENSE)). 폰트 Jost·Pretendard는 SIL Open Font License로 상업 사용이 가능합니다.
"HAMLOG" 이름·로고·캐릭터·사진·영상·후기는 이 템플릿에 포함되어 있지 않으며 사용할 수 없습니다.
