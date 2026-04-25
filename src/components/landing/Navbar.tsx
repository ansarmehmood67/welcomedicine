import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
const logo = "https://wp-uploads.welmed.it/uploads/sites/9/2024/05/Logo-Welcomedicine-png-trasparente.png";

const navLinks = [
  { label: "Funzioni", href: "#funzioni" },
  { label: "Vantaggi", href: "#vantaggi" },
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Testimonianze", href: "#testimonianze" },
  { label: "Piani e Prezzi", href: "#prezzi" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isPazienti = location.pathname === "/pazienti";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border bg-secondary-foreground text-primary-foreground">
        <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Welcomedicine" className="h-8" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {isHome &&
              navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm font-medium transition-colors text-primary-foreground">
                  {l.label}
                </a>
              ))}
            <Link
              to="/pazienti"
              className="inline-flex items-center justify-center h-9 px-5 rounded-lg border-2 border-primary text-primary text-sm font-semibold hover:bg-primary/5 transition-colors"
            >
              Per i pazienti
            </Link>
            {isPazienti ? (
              <a href="https://app.welmed.it/welcomedicine/download-patient-app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center h-12 px-7 rounded-xl cta-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                <Download size={18} /> Scarica l'App
              </a>
            ) : (
              <a href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-9 px-5 rounded-lg cta-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                Prova gratis
              </a>
            )}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden overflow-hidden bg-background border-b border-border">
              <div className="flex flex-col gap-3 p-4">
                {isHome &&
                  navLinks.map((l) => (
                    <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
                      {l.label}
                    </a>
                  ))}
                <Link to="/pazienti" onClick={() => setOpen(false)} className="text-sm font-semibold text-primary py-2">
                  Per i pazienti
                </Link>
                {isPazienti ? (
                  <a href="https://app.welmed.it/welcomedicine/download-patient-app" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 justify-center h-12 px-7 rounded-xl cta-gradient text-primary-foreground text-sm font-semibold mt-2 hover:opacity-90 transition-opacity">
                    <Download size={18} /> Scarica l'App
                  </a>
                ) : (
                  <a href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="inline-flex items-center justify-center h-10 rounded-lg cta-gradient text-primary-foreground text-sm font-semibold mt-2">
                    Prova gratis
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Urgency banner */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-primary text-primary-foreground text-center py-2 text-xs font-semibold tracking-wide">
        🎯 Onboarding assistito gratuito
      </div>
    </>
  );
};

export default Navbar;
