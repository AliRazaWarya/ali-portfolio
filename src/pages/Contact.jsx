import { useState } from "react";
import { profile } from "../data/profile";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaKaggle, FaInstagram } from "react-icons/fa6";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
const assetBase = import.meta.env.BASE_URL;

const socials = [
  { key: "email", icon: HiOutlineMail, label: "EMAIL", value: profile.email, href: `mailto:${profile.email}` },
  { key: "location", icon: HiOutlineLocationMarker, label: "LOCATION", value: profile.location, href: null },
  { key: "linkedin", icon: FaLinkedin, label: "LINKEDIN", value: "linkedin.com/in/ali-raza-warya", href: profile.social.linkedin },
  { key: "github", icon: FaGithub, label: "GITHUB", value: "github.com/AliRazaWarya", href: profile.social.github },
  { key: "x", icon: FaXTwitter, label: "X", value: "x.com/alirazawarya110", href: profile.social.x },
  { key: "kaggle", icon: FaKaggle, label: "KAGGLE", value: "kaggle.com/aliraza512", href: profile.social.kaggle },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative min-h-[85vh] overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src={`${assetBase}contact-bg.jpg`}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(10,10,16,0.92) 0%, rgba(10,10,16,0.78) 45%, rgba(10,10,16,0.55) 100%)",
          }}
        />
      </div>

      <div className="relative w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-16">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <p className="text-xs font-mono tracking-wide mb-3" style={{ color: "var(--accent)" }}>
              LET'S CONNECT
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Let's Build Something <span className="text-gradient">Amazing Together.</span>
            </h1>
            <p className="mb-10 max-w-md" style={{ color: "var(--muted)" }}>
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>

            <div className="space-y-5">
              {socials.map((s) => {
                const content = (
                  <div className="flex items-center gap-4 group">
                    <div className="w-11 h-11 flex items-center justify-center icon-box shrink-0 group-hover:scale-105 transition-transform">
                      <s.icon className="text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-wide" style={{ color: "var(--muted)" }}>
                        {s.label}
                      </p>
                      <p className="font-medium text-sm break-all">{s.value}</p>
                    </div>
                  </div>
                );
                return s.href ? (
                  <a key={s.key} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={s.key}>{content}</div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.form
              onSubmit={handleSubmit}
              className="card p-6 md:p-8 backdrop-blur-md"
              style={{ background: "rgba(18,18,26,0.85)" }}
              whileHover={{ y: -2 }}
            >
              <h2 className="font-display text-xl font-semibold mb-6">Send Me a Message</h2>

              <div className="space-y-4">
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--text)" }}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--text)" }}
                />
                <input
                  name="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--text)" }}
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--text)" }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 w-full btn-primary py-3.5 text-sm font-medium flex items-center justify-center gap-2"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent ✓" : "Send Message"}
                {status !== "sent" && <FiSend />}
              </button>

              {status === "error" && (
                <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>
              )}
            </motion.form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
