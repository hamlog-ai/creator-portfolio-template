import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 이미지 최적화를 끕니다. public/ 안의 어떤 파일(jpg, png, webp, svg)이든 그대로 보여줍니다.
  // 방문자가 많아져 전송량이 걱정되면 false로 바꾸고 이미지를 webp로 줄여 두세요.
  images: { unoptimized: true },
};

export default nextConfig;
