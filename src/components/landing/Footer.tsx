const logo = "https://wp-uploads.welmed.it/uploads/sites/9/2024/05/Logo-Welcomedicine-png-trasparente.png";

const Footer = () => (
  <footer style={{ backgroundColor: "#D6EEF8" }} className="py-20">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-16 items-start">
        {/* Brand */}
        <div>
          <a href="#">
            <img src={logo} alt="Welcomedicine" className="h-28 w-auto" />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2">
          <a href="https://www.welcomedicineonline.it/faq-pazienti" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-[#0090C5] transition-colors underline underline-offset-2 text-[15px] font-medium">FAQ Pazienti</a>
          <a href="https://www.welcomedicineonline.it/faq-medici" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-[#0090C5] transition-colors underline underline-offset-2 text-[15px] font-medium">FAQ Professionisti Sanitari</a>
          <a href="https://www.welcomedicineonline.it/supporto" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-[#0090C5] transition-colors underline underline-offset-2 text-[15px] font-medium">Supporto</a>
          <a href="https://pb-attachments.s.welmed.it/privacy/lp/welcomedicine/privacy-policy-e-cookie-policy.html" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-[#0090C5] transition-colors underline underline-offset-2 text-[15px] font-medium">Cookie policy</a>
        </div>

        {/* Legal */}
        <div className="text-sm text-foreground flex flex-col gap-0.5">
          <span>Copyright Reserved © 2024</span>
          <span>Soluzioni Salute Informatica S.r.l</span>
          <span>Sede legale: Corso Indipendenza, 5, 20129 Milano MI,</span>
          <span>C.F / P.IVA: 10044050960</span>
          <span>REA: MI - 2500917</span>
          <span>Capitale sociale deliberato: 133.333,33 €</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
