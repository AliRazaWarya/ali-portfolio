import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { HiOutlineUser, HiOutlineBriefcase, HiOutlineCog, HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

const tags = ["Deep Learning", "Machine Learning", "NLP", "Computer Vision", "Data Analytics", "Problem Solver"];

const infoRows = [
  { icon: HiOutlineUser, label: "NAME", value: profile.name },
  { icon: HiOutlineBriefcase, label: "ROLE", value: profile.role },
  { icon: HiOutlineCog, label: "EXPERIENCE", value: "6+ Years Leadership" },
  { icon: HiOutlineLocationMarker, label: "LOCATION", value: profile.location },
  { icon: HiOutlineMail, label: "EMAIL", value: profile.email },
];

export default function About() {
  return (
    <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-start">
        <div>
          <Reveal>
            <p className="text-xs font-mono tracking-wide mb-3" style={{ color: "var(--accent)" }}>ABOUT ME</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Get to Know <span className="text-gradient">Me</span>
            </h1>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mt-8 mb-8">
              {tags.map((t) => (
                <span key={t} className="text-sm px-3.5 py-1.5 pill" style={{ color: "var(--text)" }}>
                  {t}
                </span>
              ))}
            </div>
            <a href={profile.resumeFile} download className="inline-block btn-primary px-6 py-3 text-sm font-medium">
              Download CV ↓
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <motion.div
            className="card p-6 md:p-8"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            {/* Profile photo - larger and prominent */}
            <div className="flex items-center gap-4 mb-7">
              <div className="relative">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-top"
                  style={{ border: "3px solid var(--accent)", boxShadow: "0 0 0 4px rgba(108,92,231,0.25)" }}
                />
                <span
                  className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2"
                  style={{ background: "#22c55e", borderColor: "var(--surface)" }}
                />
              </div>
              <div>
                <p className="font-display font-semibold text-lg">{profile.name}</p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{profile.role}</p>
              </div>
            </div>

            <div className="space-y-5">
              {infoRows.map((row) => (
                <div key={row.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center icon-box shrink-0">
                    <row.icon className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-wide" style={{ color: "var(--muted)" }}>{row.label}</p>
                    <p className="font-medium break-all">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </div>
  );
}
