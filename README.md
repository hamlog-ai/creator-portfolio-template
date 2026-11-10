# Creator Portfolio Template

AI 영상 크리에이터를 위한 한 페이지 포트폴리오 사이트 템플릿입니다.
[hamlog.ai](https://www.hamlog.ai)의 골격과 디자인 시스템을 그대로 쓰되, 콘텐츠·사진·영상·분석 코드는 전부 비워 둔 상태입니다.

- 흰 배경 · 검정 글자 · 사진과 영상만 색. 제목 Jost, 본문 Pretendard.
- 섹션: Hero → About → Works → Clients → Teaching → Impact(숫자·후기) → Media → Resources → Philosophy → What I Do → Contact → Footer
- Next.js 16 + React 19 + Tailwind CSS 4. 로그인·DB·결제 없음. 서버 비용 0원(Vercel 무료).

## 가장 빠른 길: 터미널 없이, Claude 앱 안에서만

터미널을 열 필요가 없습니다. 명령은 전부 Claude Code가 대신 실행합니다.

1. 클로드 데스크톱 앱 설치 → **Code 탭**
2. 바탕화면에 빈 폴더(예: `내이름-site`)를 만들고 Code 탭에서 그 폴더를 엽니다
3. 채팅에 이렇게 씁니다:

```
https://github.com/hamlog-ai/creator-portfolio-template 템플릿을 이 폴더에 받아서 설치해 줘.
내 재료 폴더는 [내재료 폴더 경로]야. 이름은 [이름], 스레드는 [주소], 이메일은 [이메일].
이 재료로 포트폴리오 초안을 만들고 localhost로 띄워서 보여 줘.
```

4. 다 되면 "인터넷에 올려 줘" → 브라우저에서 Vercel 승인 한 번 → 주소가 나옵니다
5. 도메인을 샀다면 "도메인 연결해 줘"

**최소 준비물**은 폴더 하나입니다.

```
내재료/
├─ images/   ← 사진 전부 (프로필, 작품 이미지, 현장 사진, 후기 캡처)
└─ videos/   ← 영상 전부 (대표 영상, 작품 영상)
```

이 템플릿을 받은 폴더에서 Claude Code를 열고 이렇게 말하면 됩니다.

```
내 재료 폴더는 [내재료 폴더 경로]야. 내 스레드는 [스레드 주소], 이름은 [이름]이야.
이 재료로 포트폴리오 초안을 만들어 줘. 어디에 쓸지 애매한 파일은 한 번에 모아서 물어봐.
스레드를 못 읽으면 뭘 복사해 줘야 하는지 알려 줘.
다 되면 localhost로 띄워서 보여 줘.
```

Claude Code가 사진·영상을 분류해 자리에 넣고, 스레드 글에서 소개·경력·숫자 초안을 뽑고, 모자란 항목은 목록으로 알려 줍니다.
CLAUDE.md에 이 템플릿의 규칙이 적혀 있어서 디자인은 건드리지 않고 내용만 바꿉니다.

스레드·인스타는 로그인 없이는 내용을 안 보여 주는 경우가 많습니다. 그때는 Claude Code가 요청하는 대로 프로필 소개글과 대표 게시글 5~10개를 복사해 붙여 주면 됩니다.

## 직접 하는 길

### 1. 받기와 실행

```bash
git clone https://github.com/hamlog-ai/creator-portfolio-template.git 내이름-site
cd 내이름-site
bun install        # 또는 npm install
bun run dev        # http://localhost:3000
```

GitHub에서 바로 내 저장소로 복사하려면 저장소 페이지의 **Use this template** 버튼을 누르세요.

### 2. 내용 바꾸기: `src/content/site.ts` 한 파일

모든 글, 숫자, 링크, 파일 경로가 이 파일에 있습니다. 따옴표 안만 바꾸면 됩니다.
자리표시 문구는 전부 "여기에 …"로 시작합니다. 다 채웠는지 확인하려면 `grep -n 여기에 src/content/site.ts` 를 실행해 아무것도 안 나오면 됩니다.
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

Claude Code에 "인터넷에 올려 줘"라고 하면 Vercel CLI로 바로 배포합니다(GitHub 불필요). 직접 하려면 `bunx vercel login` 후 `bunx vercel --prod`.
도메인 연결은 "도메인 연결해 줘" 또는 Vercel → Settings → Domains.

전송량 주의: Vercel 무료는 월 100GB입니다. 영상이 많고 방문자가 늘면 영상은 YouTube/Vimeo 링크나 Cloudflare R2로 옮기세요.

## 디자인을 바꾸고 싶다면

`src/app/globals.css` 상단 `:root`의 숫자가 색이고, `@theme`의 `--font-display` / `--font-body`가 폰트입니다.
수치와 규칙 전체는 [DESIGN.md](DESIGN.md)에 있습니다. 바꾸기 전에 한 번 읽어 보세요.

## 라이선스

코드와 디자인 시스템은 MIT 라이선스입니다([LICENSE](LICENSE)). 폰트 Jost·Pretendard는 SIL Open Font License로 상업 사용이 가능합니다.
"HAMLOG" 이름·로고·캐릭터·사진·영상·후기는 이 템플릿에 포함되어 있지 않으며 사용할 수 없습니다.
