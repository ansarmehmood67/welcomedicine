import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Perché usare la Piattaforma?",
    a: `La Piattaforma è uno strumento che ti permette di avere continuità di comunicazione e di cura con i tuoi Medici. Tramite la Piattaforma raccogli e tieni sempre aggiornata tutta la tua documentazione e storia clinica in un unico posto, senza dispersioni tra materiale cartaceo e digitale.

Usare la Piattaforma ti offre anche altri vantaggi perché:
• hai un solo canale di comunicazione con il tuo Medico, sempre aperto e facilmente accessibile
• hai il tuo Fascicolo Clinico sempre a disposizione e sempre aggiornato con tutti i tuoi dati clinici
• raggiungi facilmente qualsiasi Professionista Sanitario di cui hai bisogno senza spostarti da casa
• i tuoi dati sanitari sono tutelati e protetti, a differenza che su altri strumenti non professionali`,
  },
  {
    q: "Cosa posso fare in Piattaforma?",
    a: `Con la Piattaforma puoi:
• prendere visione dell'offerta sanitaria online di Welcomedicine
• cercare un Medico per nome, specializzazione, patologia, sintomo, parti del corpo
• chattare e scambiare documentazione con il Medico
• ricevere dal Medico pareri, referti e ricette attraverso Videovisite o Consulti scritti
• archiviare tutta la documentazione clinica nel Fascicolo Clinico senza limiti di formato e spazio
• impostare e ricevere promemoria
• richiedere informazioni alla Segreteria medica
• visionare i membri del Care Team che hanno accesso al tuo Fascicolo Clinico`,
  },
  {
    q: "Devo installare qualcosa?",
    a: "No, basta essere online per usare la Piattaforma! Non dovrai installare nessun programma specifico né per la messaggistica con i Professionisti Sanitari, né per lo svolgimento delle Prestazioni in Telemedicina (Videovisite e Consulti scritti), né per caricare in Piattaforma la documentazione clinica.",
  },
  {
    q: "Su quali dispositivi posso navigare la Piattaforma?",
    a: "La Piattaforma è navigabile da qualsiasi dispositivo: computer, tablet e smartphone. Puoi accedere alla tua area riservata con le tue credenziali oppure scaricare l'App Welcomedicine per Android e iOS e accedere tramite credenziali o riconoscimento biometrico (impronta digitale e riconoscimento facciale).",
  },
];

const PazientiFAQ = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-foreground mb-4"
      >
        Dubbi o domande? Siamo qui per rispondere!
      </motion.h2>

      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-left font-semibold text-foreground">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground whitespace-pre-line leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <a
          href="https://www.welcomedicineonline.it/faq-pazienti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-10 px-6 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary/5 transition-colors"
        >
          Continua a leggere &gt;
        </a>
        <a
          href="https://www.welcomedicineonline.it/supporto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-10 px-6 rounded-lg cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Contattaci per supporto
        </a>
      </div>
    </div>
  </section>
);

export default PazientiFAQ;
