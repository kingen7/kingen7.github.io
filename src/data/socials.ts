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
];
