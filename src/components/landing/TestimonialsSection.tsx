import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Play, X } from "lucide-react";

const videoTestimonials = [
  { quote: "L'adozione di Welcomedicine ha migliorato la gestione dei controlli, della documentazione clinica e della relazione medico-paziente. Finalmente ho confini chiari tra attività professionale e tempo personale.", name: "Dr. Claudio Cusini", role: "Endocrinologo", initials: "CC", videoId: "2F6UM4lBwnc" },
  { quote: "La piattaforma mi ha permesso di strutturare meglio il percorso terapeutico dei miei pazienti, migliorando la comunicazione e riducendo il carico organizzativo quotidiano.", name: "Dr. Stefano Romanò", role: "Psicologo Clinico", initials: "SR", videoId: "Btb1UiWtFPA" },
  { quote: "Welcomedicine ha trasformato il modo in cui gestisco i follow-up urologici. I pazienti sono più coinvolti e io ho una visione completa e organizzata della loro storia clinica.", name: "Dott. Carmelo Morana", role: "Urologo", initials: "CM", videoId: "AqXS8FVX_t0" },
  { quote: "Avere sempre uno storico e una traccia bidirezionale delle comunicazioni è fondamentale per non confondere le informazioni quando i pazienti si accavallano nel tempo.", name: "Dr. Luigi Cerri", role: "Endocrinologo", initials: "LC", videoId: "YHmim9pJ6X4" },
  { quote: "La piattaforma semplifica l'inquadramento dei pazienti, la comunicazione e la refertazione, ed è meno invasiva del mio tempo personale.", name: "Dr. Gionata Fiorino", role: "Gastroenterologo", initials: "GF", videoId: "uRdEmAi6jzQ" },
  { quote: "In neurochirurgia la chiarezza dei dati clinici e la continuità delle informazioni sono essenziali: Welcomedicine mi permette di seguire i pazienti con precisione lungo tutto il percorso.", name: "Dr. Piero Picozzi", role: "Neurochirurgo", initials: "PP", videoId: "pUxVRwPii_s" },
  { quote: "Avere uno strumento unico per gestire follow-up, esami e comunicazione con i pazienti ha reso il mio lavoro quotidiano più ordinato ed efficace.", name: "Dr. Alberto Frazin", role: "Neurochirurgo", initials: "AF", videoId: "7h5p7rnTYes" },
  { quote: "La telemedicina integrata con Welcomedicine mi consente di mantenere una relazione continua con i pazienti, garantendo qualità e tempestività delle risposte.", name: "Dr. Giuseppe Pizzetti", role: "Cardiologo — Osp. San Raffaele", initials: "GP", videoId: "i-vNbllcS5E" },
  { quote: "In ginecologia e ostetricia la continuità di cura è cruciale: la piattaforma mi aiuta a seguire le pazienti in ogni fase con organizzazione e attenzione personalizzata.", name: "Dr.ssa Chiara Boschetto", role: "Ginecologa e Ostetrica", initials: "CB", videoId: "vKgg-Va0ujE" },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section id="testimonianze" className="py-20 md:py-32 bg-background scroll-mt-20 overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">I medici dicono di noi</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 leading-tight">
              Cosa dicono i{" "}
              <span className="text-primary">professionisti</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Medici e specialisti di diverse discipline raccontano come Welcomedicine ha trasformato la loro pratica quotidiana.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {videoTestimonials.map(({ quote, name, role, initials, videoId }, i) => (
              <motion.div key={name} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="relative flex flex-col rounded-2xl bg-card border border-border card-elevated overflow-hidden">
                <button onClick={() => setActiveVideo(videoId)} className="relative w-full aspect-video bg-muted group cursor-pointer">
                  <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt={`Video testimonianza ${name}`} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full cta-gradient flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={22} className="text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </button>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">"{quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center text-primary-foreground text-xs font-bold">{initials}</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{name}</p>
                      <p className="text-xs text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10 flex flex-col items-center gap-4">
            <a href="#cta-finale" className="inline-flex items-center gap-2 h-12 px-8 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Prova gratis →
            </a>
            <a href="https://www.youtube.com/watch?v=pXG-xtz1rOQ&list=PLdA1IIBWLzBGMGKY6D1pVrlX9a6p5QBhm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Vedi tutte le testimonianze dei medici →
            </a>
          </motion.div>
        </div>
      </section>

      {activeVideo && (
        <div className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-10 right-0 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center text-background hover:bg-background/30 transition-colors z-10">
              <X size={18} />
            </button>
            <iframe src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`} title="Video testimonianza" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
