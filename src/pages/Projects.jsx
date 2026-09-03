import { useMemo, useState } from "react";
import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const categories = ["All", "AI/ML", "Web Apps", "Analytics"];

function categorize(tags) {
  const t = tags.join(" ").toLowerCase();
  if (t.includes("php") || t.includes("mysql") || t.includes("web") || t.includes("responsive")) return "Web Apps";
  if (t.includes("regression") || t.includes("sentiment") || t.includes("nlp") || t.includes("analytics")) return "Analytics";
  return "AI/ML";
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const projects = useMemo(
    () => profile.projects.map((p) => ({ ...p, category: categorize(p.tags) })),
    []
  );
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
      <Reveal>
        <p className="text-xs font-mono tracking-wide mb-3" style={{ color: "var(--accent)" }}>MY WORK</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
          Featured <span className="text-gradient">Projects</span>
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="text-sm px-4 py-2 pill transition-colors"
              style={{
                background: active === c ? "var(--accent)" : "transparent",
                color: active === c ? "#fff" : "var(--muted)",
                borderColor: active === c ? "var(--accent)" : "var(--line)",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, idx) => {
          const Wrapper = p.link ? "a" : "div";
          const wrapperProps = p.link ? { href: p.link, target: "_blank", rel: "noreferrer" } : {};
          return (
            <Reveal key={p.title} delay={(idx % 3) * 0.06}>
              <Wrapper {...wrapperProps} className="group block h-full">
                <motion.div
                  className="card overflow-hidden h-full"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(108,92,231,0.18)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  <div className="relative h-44 overflow-hidden">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{ background: "linear-gradient(135deg, rgba(108,92,231,0.4), #0a0a10)" }}
                      />
                    )}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(10,10,16,0.75) 0%, transparent 50%)" }}
                    />
                    {p.link && (
                      <span className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center icon-box opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <FiArrowUpRight />
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-[var(--accent-light)] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm mb-4 leading-relaxed line-clamp-3" style={{ color: "var(--muted)" }}>
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 pill" style={{ color: "var(--accent)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
