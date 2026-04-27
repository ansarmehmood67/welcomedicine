import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const logo = "https://wp-uploads.welmed.it/uploads/sites/9/2024/05/Logo-Welcomedicine-png-trasparente.png";

const navLinks = [
  { label: "PAZIENTI", href: "https://www.welcomedicineonline.it/" },
  { label: "PIANI E PREZZI", href: "https://www.welcomedicineonline.it/piani-e-prezzi" },
  { label: "SUPPORTO", href: "https://www.welcomedicineonline.it/supporto" },
  { label: "ACCEDI", href: "https://app.welmed.it/welcomedicine/login" },
];

const ctaStyle: React.CSSProperties = {
  backgroundColor: "#4BA3F2",
  color: "#ffffff",
  fontWeight: 700,
  borderRadius: "3px",
  padding: "9px 20px",
  fontSize: "12px",
  textAlign: "center",
  lineHeight: "1.3",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "normal",
  maxWidth: "120px",
  letterSpacing: "0.02em",
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isPazienti = location.pathname === "/pazienti";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white">
        <div className="container max-w-6xl mx-auto flex items-center justify-between h-24 py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Welcomedicine" className="h-[72px]" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {isHome &&
              navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs font-semibold uppercase tracking-wide underline underline-offset-2 transition-colors"
                  style={{ color: "#00AEEF" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#0090C5")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#00AEEF")}
                >
                  {l.label}
                </a>
              ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaStyle}
            >
              PROVA GRATIS 30 GIORNI
            </a>
            <a
              href="https://calendly.com/welmeditalia/formazione-telemedicina/?month=2025-10"
              target="_blank"
              rel="noopener noreferrer"
              style={ctaStyle}
            >
              PRENOTA UNA DEMO
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden bg-background border-b border-border">
              <div className="flex flex-col gap-3 p-4">
                {isHome &&
                  navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-xs font-semibold uppercase tracking-wide underline underline-offset-2 py-2 transition-colors"
                      style={{ color: "#00AEEF" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#0090C5")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#00AEEF")}
                    >
                      {l.label}
                    </a>
                  ))}
                <a
                  href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  style={{ ...ctaStyle, maxWidth: "100%" }}
                  className="mt-2"
                >
                  PROVA GRATIS 30 GIORNI
                </a>
                <a
                  href="https://calendly.com/welmeditalia/formazione-telemedicina/?month=2025-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  style={{ ...ctaStyle, maxWidth: "100%" }}
                >
                  PRENOTA UNA DEMO
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </>
  );
};

export default Navbar;
