import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-welcomedicine.jpg";

const navLinks = [
  { label: "Funzioni", href: "#funzioni" },
  { label: "Testimonianze", href: "#testimonianze" },
  { label: "Piani e Prezzi", href: "#prezzi" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Welcomedicine" className="h-8" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta-finale" className="inline-flex items-center justify-center h-9 px-5 rounded-lg cta-gradient text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Prova gratis
          </a>
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
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2">
                  {l.label}
                </a>
              ))}
              <a href="#cta-finale" onClick={() => setOpen(false)} className="inline-flex items-center justify-center h-10 rounded-lg cta-gradient text-primary-foreground text-sm font-semibold mt-2">
                Prova gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
