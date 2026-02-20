import Link from "next/link";
import { notFound } from "next/navigation";

type Lang = "zh" | "en";

type PageProps = {
  params: Promise<{ lang: string }>;
};

const copy = {
  zh: {
    eyebrow: "Design Decision",
    title: "版本 B 已定稿",
    description:
      "我们已固定为 Obsidian 高级黑方向，并完成了重设计与 3D 场景升级。下一步可以直接进入正式多页面落地。",
    switchLabel: "EN",
    openLabel: "进入新版主页",
  },
  en: {
    eyebrow: "Design Decision",
    title: "Version B Is Selected",
    description:
      "Obsidian black is now the selected direction, with a refined visual system and stronger 3D scene work.",
    switchLabel: "中",
    openLabel: "Open New Homepage",
  },
} as const;

function asLang(raw: string): Lang | null {
  if (raw === "zh" || raw === "en") {
    return raw;
  }
  return null;
}

export default async function CompareLandingPage({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const lang = asLang(rawLang);

  if (!lang) {
    notFound();
  }

  const t = copy[lang];
  const otherLang: Lang = lang === "zh" ? "en" : "zh";

  return (
    <main className="particle-site relative min-h-screen overflow-hidden text-[var(--text-strong)]">
      <div className="pointer-events-none absolute inset-0 particle-gradient-mesh" />
      <div className="pointer-events-none absolute inset-0 ambient-noise" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10">
        <header className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
            {t.eyebrow}
          </p>
          <Link href={`/${otherLang}/compare`} className="lang-toggle">
            {t.switchLabel}
          </Link>
        </header>

        <section className="mx-auto mt-20 max-w-4xl text-center sm:mt-24">
          <h1 className="hero-title text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {t.title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-[color:var(--text-soft)] sm:text-lg">
            {t.description}
          </p>
        </section>

        <section className="mx-auto mt-12 grid w-full max-w-3xl gap-6 pb-16">
          <Link href={`/${lang}/compare/particle`} className="compare-card group">
            <div className="inline-flex rounded-full border border-[color:var(--line-soft)] px-3 py-1 text-xs tracking-[0.18em] text-[color:var(--text-muted)]">
              B / PARTICLE
            </div>
            <h2 className="mt-6 text-3xl font-medium text-[color:var(--text-strong)]">
              Obsidian Home
            </h2>
            <p className="mt-4 max-w-xl text-[color:var(--text-soft)]">
              {lang === "zh"
                ? "新版采用高级黑主色、银灰高光和 3D 反应堆主视觉。"
                : "The refreshed version uses obsidian blacks, silver highlights, and a 3D reactor hero."}
            </p>
            <span className="mt-8 inline-flex text-sm tracking-wide text-[color:var(--accent-electric)] transition duration-500 group-hover:text-[color:var(--text-strong)]">
              {t.openLabel} →
            </span>
          </Link>
        </section>
      </div>
    </main>
  );
}
