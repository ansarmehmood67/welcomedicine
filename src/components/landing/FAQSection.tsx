import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Come funziona la prova gratuita?", a: "Puoi registrarti e accedere a tutte le funzionalità per 30 giorni. Avrai a disposizione una videocall gratuita con il nostro team di formazione e configurazione guidata del profilo. Carta di credito richiesta, nessun addebito, dopo 30 giorni potrai decidere cosa fare." },
  { q: "I miei pazienti devono pagare per usare la piattaforma?", a: "No, l'accesso per i pazienti è completamente gratuito.\nPossono comunicare con te, ricevere documenti e caricare documenti nel fascicolo clinico personale senza alcun costo.\nSarai tu a decidere se erogare consulenze e televisite a pagamento inserendo il tuo listino nelle impostazioni del profilo." },
  { q: "Quanto tempo serve per configurare tutto?", a: "2 minuti.\nLa registrazione è guidata, entro 24 ore configuriamo  il  tuo profilo e riceverai l’invito per una videocall di formazione e configurazione gratuita" },
  { q: "Posso cancellare quando voglio?", a: "Sì, puoi disdire il tuo abbonamento durante il periodo di prova  in qualsiasi momento scrivendo a support@welmed.it .\nDopo il periodo di prova l’abbonamento può essere disdetto in qualsiasi momento decorsi i primi sei mesi di abbonamento. I tuoi dati restano tuoi e potrai chiedere al nostro team di esportarli." },
  { q: "Welcomedicine è conforme al GDPR?", a: "Sì, la piattaforma è stata progettata sin dall'inizio per essere pienamente conforme al GDPR e alle normative sulla privacy in ambito sanitario. Tutti i dati sono crittografati e conservati su server europei." },
  { q: "Posso monetizzare le mie consulenze online?", a: "Sì, puoi impostare tariffe personalizzate per videovisite e consulti,\n La piattaforma gestisce automaticamente l’incasso dei pagamenti e la fatturazione ai pazienti, bollo e sistema Tessera Sanitaria. \nPuoi fatturare mensilmente  il valore delle consulenze svolte al nostro centro medico. Tratteniamo solo il 3% per le spese bancarie e amministrative.\n\n\n" },
  { q: "Come gestite la sicurezza dei dati clinici?", a: "Utilizziamo crittografia end-to-end, autenticazione a due fattori e backup automatici. I dati sono conservati su infrastruttura certificata ISO 27001 con datacenter in Europa." },
  { q: "Come funziona il Care Team?", a: "Più medici possono collaborare sullo stesso fascicolo clinico di un paziente. Ogni medico e paziente vede chi ha accesso al fascicolo, e il paziente viene sempre notificato quando un nuovo professionista viene aggiunto al team." },
  { q: "I medici possono avere una segretaria in piattaforma?", a: "Sì, è possibile creare un account segreteria dedicato che può gestire messaggi, appuntamenti e smistamento richieste per conto del medico, senza accesso ai dati clinici sensibili." },
  { q: "La piattaforma funziona anche con le strutture ospedaliere?", a: "Sì, le piattaforme Welmed ospedaliere sono interoperabili con Welcomedicine. I medici che lavorano sia in struttura che privatamente possono gestire tutto da un unico ecosistema integrato." },
  { q: "Posso utilizzare Welcomedicine anche dal cellulare?", a: "Assolutamente sì. Welcomedicine è ottimizzata per tutti i dispositivi: desktop, tablet e smartphone. Puoi accedere dal browser o dall'app dedicata." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 md:py-32 bg-background scroll-mt-20 overflow-hidden">
    <div className="container max-w-3xl mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">FAQ</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
          Domande{" "}
          <span className="text-primary">frequenti</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map(({ q, a }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <AccordionItem value={`faq-${i}`} className="rounded-xl border border-border bg-card px-5 data-[state=open]:card-elevated">
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline py-4">{q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 whitespace-pre-wrap font-extralight">{a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
        <p className="text-muted-foreground text-base mb-4">Hai ancora dubbi?</p>
        <a href="#cta-finale" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Prova gratis →
        </a>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
