import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { Reveal } from "@/components/reveal";

type Lang = "zh" | "en";
type Variant = "grid" | "particle";

type PageProps = {
  params: Promise<{ lang: string; variant: string }>;
};

const particlePoints = [
  { x: 6, y: 16, size: 2, delay: 0.2, duration: 6.2 },
  { x: 12, y: 64, size: 3, delay: 0.6, duration: 5.4 },
  { x: 18, y: 34, size: 1, delay: 0.9, duration: 7.1 },
  { x: 25, y: 74, size: 2, delay: 0.4, duration: 6.5 },
  { x: 31, y: 23, size: 3, delay: 1.2, duration: 5.8 },
  { x: 36, y: 48, size: 2, delay: 0.3, duration: 6.9 },
  { x: 42, y: 80, size: 1, delay: 1.1, duration: 6.2 },
  { x: 47, y: 14, size: 3, delay: 0.8, duration: 5.7 },
  { x: 53, y: 66, size: 2, delay: 0.5, duration: 6.8 },
  { x: 58, y: 28, size: 1, delay: 1.4, duration: 7.3 },
  { x: 64, y: 76, size: 2, delay: 0.2, duration: 6.6 },
  { x: 69, y: 42, size: 3, delay: 0.9, duration: 5.9 },
  { x: 75, y: 18, size: 2, delay: 1.6, duration: 6.1 },
  { x: 81, y: 61, size: 1, delay: 0.7, duration: 7.2 },
  { x: 87, y: 32, size: 3, delay: 1.3, duration: 5.6 },
  { x: 93, y: 72, size: 2, delay: 0.4, duration: 6.4 },
] as const;

const cubeFaces = [
  "front",
  "back",
  "right",
  "left",
  "top",
  "bottom",
] as const;

function ReactorCube({ className }: { className: string }) {
  return (
    <div className={`reactor-cube ${className}`}>
      {cubeFaces.map((face) => (
        <span key={face} className={`cube-face cube-face-${face}`} />
      ))}
    </div>
  );
}

const copy = {
  zh: {
    label: "OBSIDIAN BLACK / FORGE ENGINE",
    compareLink: "版本对比",
    switchLabel: "EN",
    nav: {
      work: "作品",
      lab: "Lab",
      blog: "Blog",
      about: "关于",
    },
    heroTitle: "把想法锻造成可上线、可扩展的产品引擎。",
    heroSubtitle:
      "策略定义轨道，工程提供推力。每个细节都为发布效率、稳定性和增长服务。",
    ctaPrimary: "查看作品",
    ctaSecondary: "联系我",
    strip: ["Product Radar", "3D Interface", "Ship & Scale"],
    selectedTitle: "Work Deck / 精选案例",
    selectedSubtitle:
      "从抽象需求到上线指标，关注可验证的价值输出，而不是只做视觉层包装。",
    cards: [
      {
        title: "Growth Command Center",
        tag: "B2B SaaS",
        desc: "把分散运营流程收敛成统一操作台，关键指标可追踪可复盘。",
      },
      {
        title: "Creator Subscription Flow",
        tag: "Content Platform",
        desc: "从内容分发到订阅转化重构全链路，降低决策噪音并提升付费效率。",
      },
      {
        title: "Mobile Commerce Checkout",
        tag: "E-commerce",
        desc: "压缩移动结账路径，优化关键路径反馈，显著改善转化与留存。",
      },
    ],
    labTitle: "Lab / R&D",
    labSubtitle: "先放占位，但保留实验与发布的完整轨道。",
    labSoon: "Coming Soon",
    labText:
      "Lab 会记录交互动效、可视化实验、性能探索。Blog 会输出产品工程实践与方法论。",
    labBlogTitle: "Lab / Blog",
    aboutTitle: "About / 方法",
    aboutText:
      "我习惯先定义问题与成功指标，再做信息架构、交互和实现方案。目标不是“做个页面”，而是交付能长期演进的产品系统。",
    footerLead: "Open for high-impact collaborations.",
    footerText: "如果你也在做有长期价值的产品，可以一起聊聊。",
  },
  en: {
    label: "OBSIDIAN BLACK / FORGE ENGINE",
    compareLink: "Compare",
    switchLabel: "中",
    nav: {
      work: "Work",
      lab: "Lab",
      blog: "Blog",
      about: "About",
    },
    heroTitle: "Forging ideas into launch-ready, scalable product engines.",
    heroSubtitle:
      "Strategy defines trajectory. Engineering provides thrust. Every detail is tuned for shipping velocity and measurable growth.",
    ctaPrimary: "View Work",
    ctaSecondary: "Contact",
    strip: ["Product Radar", "3D Interface", "Ship & Scale"],
    selectedTitle: "Work Deck / Selected Work",
    selectedSubtitle:
      "I focus on measurable outcomes from ambiguous ideas to production systems.",
    cards: [
      {
        title: "Growth Command Center",
        tag: "B2B SaaS",
        desc: "Consolidated fragmented operations into one measurable control layer.",
      },
      {
        title: "Creator Subscription Flow",
        tag: "Content Platform",
        desc: "Rebuilt content-to-subscription journeys to improve paid conversion quality.",
      },
      {
        title: "Mobile Commerce Checkout",
        tag: "E-commerce",
        desc: "Reduced checkout friction on mobile with clearer state and feedback.",
      },
    ],
    labTitle: "Lab / R&D",
    labSubtitle: "Placeholders now, built for continuous iteration.",
    labSoon: "Coming Soon",
    labText:
      "Lab will hold experiments in interaction and performance. Blog will cover product-engineering workflows.",
    labBlogTitle: "Lab / Blog",
    aboutTitle: "About / Method",
    aboutText:
      "I start from problem framing and success metrics, then shape information architecture, interaction, and implementation details.",
    footerLead: "Open for high-impact collaborations.",
    footerText: "Building a long-term product? Let us talk.",
  },
} as const;

function asLang(raw: string): Lang | null {
  if (raw === "zh" || raw === "en") {
    return raw;
  }
  return null;
}

function asVariant(raw: string): Variant | null {
  if (raw === "grid" || raw === "particle") {
    return raw;
  }
  return null;
}

function VariantBackground() {
  return (
    <div className="particle-bg-layer pointer-events-none absolute inset-0">
      <div className="particle-gradient-mesh absolute inset-0" />
      <div className="particle-constellation absolute inset-0" />
      <div className="particle-rings absolute inset-0">
        <span className="ring ring-one" />
        <span className="ring ring-two" />
      </div>
      <div className="absolute inset-0">
        {particlePoints.map((point, idx) => (
          <span
            key={`${point.x}-${point.y}-${idx}`}
            className="particle-star"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${point.size}px`,
              height: `${point.size}px`,
              animationDelay: `${point.delay}s`,
              animationDuration: `${point.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default async function CompareVariantPage({ params }: PageProps) {
  const { lang: rawLang, variant: rawVariant } = await params;
  const lang = asLang(rawLang);
  const variant = asVariant(rawVariant);

  if (!lang || !variant) {
    notFound();
  }

  if (variant === "grid") {
    redirect(`/${lang}/compare/particle`);
  }

  const t = copy[lang];
  const otherLang: Lang = lang === "zh" ? "en" : "zh";

  return (
    <main className="particle-site relative min-h-screen overflow-hidden text-[var(--text-strong)]">
      <VariantBackground />
      <div className="ambient-noise pointer-events-none absolute inset-0" />

      <div className="site-shell relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-8 sm:px-10">
        <header className="site-header">
          <Link href={`/${lang}/compare`} className="site-brand">
            <span className="brand-dot" />
            <span>QIU / PRODUCT ENGINEER</span>
          </Link>
          <nav className="site-nav">
            <a href="#work">{t.nav.work}</a>
            <a href="#lab">{t.nav.lab}</a>
            <a href="#blog">{t.nav.blog}</a>
            <a href="#about">{t.nav.about}</a>
          </nav>
          <div className="header-actions">
            <Link href={`/${lang}/compare`} className="utility-chip">
              {t.compareLink}
            </Link>
            <Link href={`/${otherLang}/compare/particle`} className="lang-toggle">
              {t.switchLabel}
            </Link>
          </div>
        </header>

        <section className="hero-block mx-auto flex min-h-[74vh] max-w-4xl flex-col items-center justify-center text-center">
          <div className="forge-stage" aria-hidden="true">
            <div className="forge-vortex">
              <span className="vortex-ring vr-a" />
              <span className="vortex-ring vr-b" />
              <span className="vortex-ring vr-c" />
            </div>
            <div className="forge-columns">
              <span className="forge-column col-a" />
              <span className="forge-column col-b" />
              <span className="forge-column col-c" />
              <span className="forge-column col-d" />
            </div>
            <div className="forge-floor" />
            <div className="forge-reactor">
              <div className="reactor-shell">
                <span className="reactor-layer layer-front" />
                <span className="reactor-layer layer-mid" />
                <span className="reactor-layer layer-back" />
                <span className="reactor-axis axis-x" />
                <span className="reactor-axis axis-y" />
                <span className="reactor-axis axis-z" />
                <span className="reactor-core-dot" />
              </div>
              <span className="reactor-orbit orbit-a" />
              <span className="reactor-orbit orbit-b" />
              <span className="reactor-orbit orbit-c" />
              <span className="reactor-spark spark-a" />
              <span className="reactor-spark spark-b" />
              <span className="reactor-spark spark-c" />
              <ReactorCube className="cube-a" />
              <ReactorCube className="cube-b" />
              <ReactorCube className="cube-c" />
              <ReactorCube className="cube-d" />
            </div>
          </div>
          <p className="hero-kicker">{t.label}</p>
          <h1 className="hero-title text-balance">
            {t.heroTitle}
          </h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <div className="hero-actions">
            <a href="#work" className="action-primary">
              {t.ctaPrimary}
            </a>
            <a href="#about" className="action-ghost">
              {t.ctaSecondary}
            </a>
          </div>
        </section>

        <Reveal className="mx-auto mt-2 max-w-5xl" delayMs={80}>
          <section className="proof-strip">
            {t.strip.map((item) => (
              <p key={item} className="proof-item">
                {item}
              </p>
            ))}
          </section>
        </Reveal>

        <Reveal className="mx-auto mt-20 max-w-6xl" delayMs={120}>
          <section id="work" className="section-block">
            <div className="section-head">
              <h2 className="section-title">{t.selectedTitle}</h2>
              <p className="section-copy">{t.selectedSubtitle}</p>
            </div>
            <div className="work-grid">
              {t.cards.map((card, index) => (
                <article
                  key={card.title}
                  className={`work-card${index === 0 ? " work-card-featured" : ""}`}
                >
                  <div className="work-card-media" />
                  <div className="work-card-meta">{card.tag}</div>
                  <h3 className="work-card-title">{card.title}</h3>
                  <p className="work-card-copy">{card.desc}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-6xl" delayMs={160}>
          <section id="lab" className="section-block">
            <div className="section-head">
              <h2 className="section-title">{t.labTitle}</h2>
              <p className="section-copy">{t.labSubtitle}</p>
            </div>
            <div className="dual-grid">
              <article className="dual-card">
                <p className="dual-card-label">Lab</p>
                <h3 className="dual-card-title">{t.labSoon}</h3>
                <p className="dual-card-copy">{t.labText}</p>
              </article>
              <article id="blog" className="dual-card dual-card-accent">
                <p className="dual-card-label">{t.labBlogTitle}</p>
                <h3 className="dual-card-title">Soon, but intentional.</h3>
                <p className="dual-card-copy">
                  {lang === "zh"
                    ? "先建立结构和语气，再逐步放入真实内容。"
                    : "Structure and voice first, then real content in steady iterations."}
                </p>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal className="mx-auto mt-16 max-w-6xl" delayMs={200}>
          <section id="about" className="about-panel">
            <p className="about-label">{t.aboutTitle}</p>
            <p className="about-copy">{t.aboutText}</p>
            <div className="about-footer">
              <p>{t.footerLead}</p>
              <p className="about-footer-muted">{t.footerText}</p>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
