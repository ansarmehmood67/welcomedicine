import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "@/assets/logo-welcomedicine-full.png";

const Footer = () => (
  <footer className="dark-section py-10">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center mb-4">
            <img src={logo} alt="Welcomedicine" className="h-7" />
          </a>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            La piattaforma professionale per la comunicazione medico-paziente, parte dell'ecosistema Welmed.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-semibold text-primary-foreground mb-1">Link utili</h4>
          <a href="#funzioni" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Funzionalità</a>
          <a href="#vantaggi" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Vantaggi</a>
          <a href="#prezzi" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Piani e Prezzi</a>
          <a href="#faq" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">FAQ</a>
        </div>

        {/* Contacts */}
        <div className="flex flex-col gap-2 text-sm">
          <h4 className="font-semibold text-primary-foreground mb-1">Contatti</h4>
          <a href="mailto:info@welmed.it" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <Mail size={14} /> info@welmed.it
          </a>
          <a href="tel:+390282960009" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <Phone size={14} /> 02 82960009
          </a>
          <span className="flex items-center gap-2 text-primary-foreground/60">
            <MapPin size={14} /> Corso Indipendenza, 5 — Milano
          </span>
          <a href="https://welcomedicineonline.it" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
            <Globe size={14} /> welcomedicineonline.it
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
        <p>© {new Date().getFullYear()} Welcomedicine. Tutti i diritti riservati.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Termini</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Contatti</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
