import logo from "@/assets/logo-welcomedicine.jpg";

const Footer = () => (
  <footer className="bg-muted/50 border-t border-border py-10">
    <div className="container max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <a href="#" className="flex items-center">
        <img src={logo} alt="Welcomedicine" className="h-7" />
      </a>
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
