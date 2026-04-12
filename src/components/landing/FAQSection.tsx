import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Come funziona la prova gratuita?", a: "Puoi registrarti e accedere a tutte le funzionalità per 30 giorni. Avrai a disposizione una videocall gratuita con il nostro team di formazione e configurazione guidata del profilo. Carta di credito richiesta, nessun addebito, dopo 30 giorni potrai decidere cosa fare." },
  { q: "I miei pazienti devono pagare per usare la piattaforma?", a: "No, l'accesso per i pazienti è completamente gratuito.\nPossono comunicare con te, ricevere documenti e caricare documenti nel fascicolo clinico personale senza alcun costo.\nSarai tu a decidere se erogare consulenze e televisite a pagamento inserendo il tuo listino nelle impostazioni del profilo." },
...
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 whitespace-pre-wrap">{a}</AccordionContent>
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
