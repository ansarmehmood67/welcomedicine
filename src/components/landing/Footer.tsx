const Footer = () => (
  <footer className="bg-muted/50 border-t border-border py-10">
    <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2 font-bold text-foreground">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md cta-gradient text-primary-foreground text-xs font-extrabold">W</span>
        Welcome Medicine
      </div>
      <p>© {new Date().getFullYear()} Welcome Medicine. Tutti i diritti riservati.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Termini</a>
        <a href="#" className="hover:text-foreground transition-colors">Contatti</a>
      </div>
    </div>
  </footer>
);

export default Footer;
