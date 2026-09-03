import { FaGithub, FaLinkedin, FaXTwitter, FaKaggle, FaInstagram } from "react-icons/fa6";
import { profile } from "../data/profile";

const socialIcons = [
  { key: "github", icon: FaGithub },
  { key: "linkedin", icon: FaLinkedin },
  { key: "x", icon: FaXTwitter },
  { key: "kaggle", icon: FaKaggle },
  { key: "instagram", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)" }} className="mt-24">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} {profile.name}. Built with intent.
        </p>
        <div className="flex items-center gap-4">
          {socialIcons.map(({ key, icon: Icon }) => (
            <a
              key={key}
              href={profile.social[key]}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full transition-colors icon-box"
              aria-label={key}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
