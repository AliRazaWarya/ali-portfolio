import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import { motion } from "framer-motion";
import { HiOutlineClock, HiOutlineCpuChip, HiOutlineServerStack, HiOutlineSparkles } from "react-icons/hi2";

const journeyStats = [
  { label: "Years Leading Teams", value: 6, suffix: "+", icon: "clock" },
  { label: "AI Models Trained", value: 10, suffix: "+", icon: "chip" },
  { label: "Projects Shipped", value: 15, suffix: "+", icon: "server" },
  { label: "Curiosity", value: 100, suffix: "%", icon: "spark" },
];

const ICONS = {
  clock: HiOutlineClock,
  chip: HiOutlineCpuChip,
  server: HiOutlineServerStack,
  spark: HiOutlineSparkles,
};

export default function Experience() {
  return (
    <div className="relative overflow-hidden">
      {/* Soft background art */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <img src="/bg.png" alt="" className="w-full h-full object-cover object-center" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--bg) 0%, transparent 25%, transparent 70%, var(--bg) 100%), linear-gradient(90deg, var(--bg) 0%, transparent 20%, transparent 80%, var(--bg) 100%)",
          }}
        />
      </div>

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
        <Reveal>
          <p className="text-xs font-mono tracking-wide mb-3" style={{ color: "var(--accent)" }}>MY JOURNEY</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="text-gradient">Timeline</span>
          </h1>
          <p className="mb-14 max-w-lg" style={{ color: "var(--muted)" }}>
            My learning and building journey so far.
          </p>
        </Reveal>

        <div className="relative pl-8 md:pl-10 mb-16">
          <div className="absolute left-0 top-2 bottom-2 w-px" style={{ background: "var(--line)" }} />
          <div className="space-y-12">
            {profile.experience.map((e, idx) => (
              <Reveal key={e.company} delay={idx * 0.08} className="relative">
                <span
                  className="absolute -left-8 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full"
                  style={{ background: "var(--accent)", boxShadow: "0 0 0 4px rgba(var(--accent-rgb),0.25)" }}
                />
                <p className="text-xs font-mono" style={{ color: "var(--muted)" }}>{e.period}</p>
                <h3 className="font-display text-xl font-semibold mt-1">{e.role}</h3>
                <p className="text-sm mt-0.5" style={{ color: "var(--accent)" }}>{e.company}</p>
                <p className="text-sm mt-3 max-w-2xl leading-relaxed" style={{ color: "var(--muted)" }}>
                  {e.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <motion.div
            className="card p-8 grid grid-cols-2 md:grid-cols-4 gap-8"
            whileHover={{ y: -2 }}
          >
            {journeyStats.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} icon={ICONS[s.icon]} />
            ))}
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}
