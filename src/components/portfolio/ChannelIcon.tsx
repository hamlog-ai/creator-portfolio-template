import { AtSign, Github, Instagram, Link as LinkIcon, Mail, MessageCircle, Play, Users, type LucideProps } from "lucide-react";

/** site.ts 의 contact.channels[].icon 문자열을 아이콘으로 바꿉니다. */
const icons = {
  mail: Mail,
  threads: AtSign,
  instagram: Instagram,
  youtube: Play,
  kakao: MessageCircle,
  community: Users,
  github: Github,
  link: LinkIcon,
} as const;

export type ChannelIconName = keyof typeof icons;

export function ChannelIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = icons[name as ChannelIconName] ?? LinkIcon;
  return <Icon {...props} />;
}
