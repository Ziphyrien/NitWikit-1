import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";


import CubicBanner from "../components/CubicBanner";

const knowledgeMap = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    title: "准备工作",
    description: "Java 安装、文本编辑器选择、必备工具与脚本使用。",
    to: "/preparation",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    title: "开始阶段",
    description: "服务器基础知识、如何选择服务端、如何搭建并连接。",
    to: "/start",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18"/>
        <path d="M5 21V7l8-4 8 4v14"/>
        <path d="M17 21v-8.5a2.5 2.5 0 0 0-5 0V21"/>
      </svg>
    ),
    title: "建设阶段",
    description: "插件配置、手机玩家支持、跨服搭建等进阶内容。",
    to: "/process",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
    title: "进阶教程",
    description: "Linux 运维、Docker 容器化、性能优化与自动化运维。",
    to: "/advance",
  },
];

const communityHighlights = [
  {
    title: "持续更新中",
    meta: "@Community · 进行中",
    description: "文档内容持续更新，跟随最新版本和社区动态。",
  },
  {
    title: "开源协作",
    meta: "@Contributors · 持续",
    description: "欢迎通过 GitHub 提交建议、报告问题或贡献文档。",
  },
  {
    title: "新手友好",
    meta: "@Tutorial · 特点",
    description: "从零开始，手把手教你搭建和运营 Minecraft 服务器。",
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.page}>
        <CubicBanner />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>核心板块</h2>
          <div className={styles.grid}>
            {knowledgeMap.map((item) => (
              <Link key={item.title} to={item.to} className={styles.card}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}
