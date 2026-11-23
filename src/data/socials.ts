import { profile } from "./profile";

export interface SocialLink {
  name: string;
  icon: string;
  darkIcon?: string;
  href: string;
}

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: `https://github.com/${profile.githubUsername}`,
  },
  {
    name: "X",
    icon: "/social/x.svg",
    darkIcon: "/social/x-dark.svg",
    href: "https://x.com/liuliuw2128293",
  },
  {
    name: "网易邮箱",
    icon: "/social/netease-mail.svg",
    href: "mailto:zhuiliang0@163.com",
  },
];
