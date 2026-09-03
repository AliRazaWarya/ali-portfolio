import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "../context/ThemeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)", color: "var(--text)" }}>
        <Navbar />
        <main className="flex-1 pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
