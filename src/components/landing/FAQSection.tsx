import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Come funziona la prova gratuita?", a: "Puoi registrarti e accedere a tutte le funzionalità per 30 giorni senza inserire alcuna carta di credito. Al termine del periodo di prova, potrai scegliere il piano più adatto alle tue esigenze." },
  { q: "I miei pazienti devono pagare per usare la piattaforma?", a: "No, l'accesso per i pazienti è completamente gratuito. Possono comunicare con te, ricevere documenti e partecipare ai videoconsulti senza alcun costo." },
  { q: "Quanto tempo serve per configurare tutto?", a: "2 minuti. La registrazione è guidata, il profilo si configura in pochi click e il nostro team ti assiste nell'onboarding gratuito." },
  { q: "Posso cancellare quando voglio?", a: "Sì, puoi disdire il tuo abbonamento in qualsiasi momento con un click. I tuoi dati restano tuoi e puoi esportarli in ogni momento." },
  { q: "Welcome Medicine è conforme al GDPR?", a: "Sì, la piattaforma è stata progettata sin dall'inizio per essere pienamente conforme al GDPR e alle normative sulla privacy in ambito sanitario. Tutti i dati sono crittografati e conservati su server europei." },
  { q: "Posso monetizzare le mie consulenze online?", a: "Sì, puoi impostare tariffe personalizzate per videoconsulti, pareri specialistici e consulenze telefoniche. La piattaforma gestisce automaticamente pagamenti e fatturazione." },
  { q: "Come gestite la sicurezza dei dati clinici?", a: "Utilizziamo crittografia end-to-end, autenticazione a due fattori e backup automatici. I dati sono conservati su infrastruttura certificata ISO 27001 con datacenter in Europa." },
  { q: "Come funziona il Care Team?", a: "Più medici possono collaborare sullo stesso fascicolo clinico di un paziente. Ogni medico e paziente vede chi ha accesso al fascicolo, e il paziente viene sempre notificato quando un nuovo professionista viene aggiunto al team." },
  { q: "I medici possono avere una segretaria in piattaforma?", a: "Sì, è possibile creare un account segreteria dedicato che può gestire messaggi, appuntamenti e smistamento richieste per conto del medico, senza accesso ai dati clinici sensibili." },
  { q: "La piattaforma funziona anche con le strutture ospedaliere?", a: "Sì, le piattaforme WelMed ospedaliere sono interoperabili con Welcome Medicine. I medici che lavorano sia in struttura che privatamente possono gestire tutto da un unico ecosistema integrato." },
  { q: "Posso utilizzare Welcome Medicine anche dal cellulare?", a: "Assolutamente sì. Welcome Medicine è ottimizzata per tutti i dispositivi: desktop, tablet e smartphone. Puoi accedere dal browser o dall'app dedicata." },
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
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">{a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
        <p className="text-muted-foreground text-base mb-4">Hai ancora dubbi?</p>
        <a href="#cta-finale" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition-colors">
          Prenota una demo →
        </a>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
