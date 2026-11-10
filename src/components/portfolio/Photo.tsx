import Image from "next/image";
import { cn } from "@/lib/utils";

type PhotoProps = {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
  readonly className?: string;
  readonly imageClassName?: string;
  /** 실제 픽셀을 알면 적어 주세요. 모르면 비워도 됩니다(비율은 파일을 따라갑니다). */
  readonly width?: number;
  readonly height?: number;
};

export function Photo({ src, alt, caption, className, imageClassName, width = 1440, height = 960 }: PhotoProps) {
  return (
    <figure className={cn("min-w-0", className)}>
      <div className="relative w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 1024px, 100vw"
          className={cn("h-auto w-full", imageClassName)}
        />
      </div>
      {caption && <figcaption className="mt-3 break-keep text-sm leading-relaxed text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}
