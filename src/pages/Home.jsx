import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaKaggle } from "react-icons/fa6";
import { HiOutlineCollection, HiOutlineLightningBolt, HiOutlineClock, HiOutlineChip, HiOutlineSparkles } from "react-icons/hi";
import { profile } from "../data/profile";
import StatCounter from "../components/StatCounter";
import Reveal from "../components/Reveal";

const ICONS = {
  layers: HiOutlineCollection,
  brain: HiOutlineLightningBolt,
  clock: HiOutlineClock,
  chip: HiOutlineChip,
  spark: HiOutlineSparkles,
};

function RotatingWord({ words }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom min-w-[160px] md:min-w-[240px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="text-gradient inline-block"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const highlights = [
  { title: "AI & Deep Learning", body: "CNNs, OCR pipelines, and LLM-driven tools trained and shipped end to end." },
  { title: "Full-Stack Delivery", body: "PHP, Flask, and MySQL products with role-based portals, built and deployed." },
  { title: "Operations Leadership", body: "Six years running teams and logistics across retail and live events." },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden min-h-[88vh] md:min-h-[92vh] flex flex-col">
        {/* Full-bleed hero image */}
        <div className="absolute inset-0 hidden md:block">
          <img
            src="/hero-bg.png"
            alt=""
            className="w-full h-full object-cover object-[72%_center]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #0a0a10 0%, #0a0a10 28%, rgba(10,10,16,0.92) 42%, rgba(10,10,16,0.45) 58%, transparent 75%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,10,16,0.55) 0%, transparent 18%, transparent 70%, rgba(10,10,16,0.9) 100%)",
            }}
          />
        </div>

        {/* LEFT-aligned content — more to the left like reference */}
        <div className="relative z-10 flex-1 w-full px-6 sm:px-10 lg:px-16 xl:px-24 pt-20 pb-8 md:pt-28 md:pb-12 flex items-center">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal>
              <p
                className="text-xs font-mono tracking-[0.2em] mb-5 uppercase"
                style={{ color: "var(--accent)" }}
              >
                {profile.role}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Hi, I'm
                <br />
                <span className="text-gradient">{profile.name}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base sm:text-lg leading-relaxed max-w-md" style={{ color: "var(--muted)" }}>
                {profile.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/projects" className="btn-primary px-7 py-3.5 font-medium text-sm">
                  Explore My Work
                </Link>
                <a href={profile.resumeFile} download className="btn-outline px-7 py-3.5 text-sm">
                  Download CV ↓
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex items-center gap-3">
                {[
                  [FaGithub, profile.social.github],
                  [FaLinkedin, profile.social.linkedin],
                  [FaXTwitter, profile.social.x],
                  [FaKaggle, profile.social.kaggle],
                ].map(([Icon, href], i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full transition-transform hover:-translate-y-0.5"
                    style={{ color: "var(--muted)", border: "1px solid var(--line)" }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mobile image */}
        <div className="md:hidden relative mx-6 mb-6 rounded-2xl overflow-hidden" style={{ aspectRatio: "16/11" }}>
          <img src="/hero-bg.png" alt="AI Workspace" className="w-full h-full object-cover" />
        </div>

        {/* Stats */}
        <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 pb-10">
          <div
            className="rounded-2xl px-4 py-6 md:px-10 md:py-7 grid grid-cols-2 md:grid-cols-5 gap-6"
            style={{
              background: "rgba(18,18,26,0.8)",
              border: "1px solid var(--line)",
              backdropFilter: "blur(14px)",
            }}
          >
            {profile.stats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} icon={ICONS[s.icon]} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-20">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10">
            What I bring to a team
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
          {highlights.map((h, idx) => (
            <Reveal key={h.title} delay={idx * 0.08} className="card p-8">
              <h3 className="font-display text-lg font-semibold mb-3">{h.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{h.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
