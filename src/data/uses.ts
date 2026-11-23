export type UseCategory = {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    link?: string;
    tag?: string;
  }[];
};

export const usesData: UseCategory[] = [
  {
    title: "硬件与人体工学",
    description: "日常开发和专注工作时使用的硬件与桌面配置。",
    items: [
      {
        name: "宏碁 暗影骑士擎",
        description: "配备第 11 代英特尔酷睿 i5 处理器和 16 GB 内存，运行 Ubuntu Linux 24.04 LTS，是我的主力开发电脑。",
        tag: "笔记本电脑",
      },
      {
        name: "ATK A9 Air+VGN 霓虹68",
        description: "紧凑的 68% 配列磁轴键盘搭配轻量化的鼠标，日常打字更舒适。",
        tag: "外设",
      },
      {
        name: "觅声 白羊座",
        description: "头戴式线耳机，适合专注工作，同时兼顾游戏。",
        tag: "音频设备",
      },
    ],
  },
  {
    title: "编辑器与操作系统",
    description: "注重速度、效率和低内存占用的编程环境。",
    items: [
      {
        name: "Zed 编辑器",
        description: "主力编辑器，用 Rust 编写，运行速度快，内存占用低。",
        link: "https://zed.dev",
        tag: "编辑器",
      },
      {
        name: "Cursor",
        description: "备用 AI 编辑器，在需要完整的 VS Code 扩展（VSX）支持时使用。",
        link: "https://cursor.com",
        tag: "编辑器",
      },
      {
        name: "Ubuntu 24.04 LTS",
        description: "主力 Linux 系统，提供响应迅速的原生终端和开发环境。",
        tag: "操作系统",
      },
      {
        name: "GNOME 终端与 Bash",
        description: "默认的 Linux 终端环境，用来运行脚本和 Git 命令。",
        tag: "终端",
      },
    ],
  },
  {
    title: "AI、命令行工具与云托管",
    description: "开发时使用的 AI 助手、智能体命令行工具和云基础设施。",
    items: [
      {
        name: "Cindy、Claude 和 Codex",
        description: "常用的 AI 工具：Cindy具有直观的交互、顺畅的多设备协作与远程访问功能。同时可以沿用熟悉的订阅，也用 Claude 和 Codex 辅助编程、快速生成代码。",
        tag: "AI 与智能体",
      },
      {
        name: "Bun 和 Node.js",
        description: "常用的 JavaScript 和 TypeScript 运行时，其中 Bun 的包管理速度很快。",
        link: "https://bun.sh",
        tag: "运行时",
      },
      {
        name: "Git 和 GitHub CLI",
        description: "通过 Git 命令和 GitHub 的 gh 命令行工具管理版本。",
        link: "https://cli.github.com",
        tag: "版本控制",
      },
      {
        name: "Render 和 Cloudflare",
        description: "用 Render 部署后端服务，用 Cloudflare 提供边缘缓存和 DNS，加快网站访问。",
        link: "https://render.com",
        tag: "云服务",
      },
    ],
  },
  {
    title: "软件与开发技术栈",
    description: "日常项目中使用的编程语言、框架和效率工具。",
    items: [
      {
        name: "Spring Boot 和 Go",
        description: "Spring Boot 是我主要使用的 Java 后端框架；Go 用于开发高性能微服务和命令行工具。",
        tag: "后端",
      },
      {
        name: "React、Next.js 和 TypeScript",
        description: "用于构建类型安全、性能良好的前端应用。",
        tag: "前端",
      },
      {
        name: "Tailwind CSS 和 Vite",
        description: "Tailwind CSS 是实用类优先的 CSS 框架，Vite 是支持快速热更新的构建工具。",
        link: "https://tailwindcss.com",
        tag: "开发工具",
      },
      {
        name: "Bruno",
        description: "常用的开源 API 客户端，便于用 Git 管理测试文件，可测试 REST 和 GraphQL 接口。",
        link: "https://usebruno.com",
        tag: "API 客户端",
      },
      {
        name: "Google Chrome、ego lite",
        description: "Chrome 是主力浏览器，也会用 ego lite 做computer-use。",
        tag: "浏览器",
      },
      {
        name: "Spotify 与专注工作",
        description: "用 Spotify 播放适合专注的音乐，避免一直刷社交媒体。",
        tag: "工作流",
      },
    ],
  },
];
