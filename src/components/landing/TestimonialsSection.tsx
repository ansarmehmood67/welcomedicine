import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Play, X, Youtube } from "lucide-react";


const videoTestimonials = [
  { quote: "Non riuscivo a distinguere le e-mail cliniche dalle comunicazioni quotidiane, e spesso non riuscivo a rispondere a tutti i pazienti.", name: "Dott. Carmelo Morana", role: "Urologia", initials: "CM", videoId: "AqXS8FVX_t0" },
  { quote: "Avere tutti i documenti e le comunicazioni in una unica cartella su Welcomedicine è un significativo risparmio di tempo rispetto a dover ricercare le informazioni tra le e-mail o le chat di WhatsApp.", name: "Dr. Claudio Cusini", role: "Endocrinologia", initials: "CC", videoId: "2F6UM4lBwnc" },
  { quote: "I pazienti che usano la piattaforma la riusano sempre. Ho apprezzato la possibilità di scaricare i DICOM, cosa che altri sistemi non consentono, ed è fondamentale perché le valutazioni sono sempre più multidisciplinari e ho bisogno di discutere delle immagini del paziente con altri colleghi.", name: "Dr. Alberto Frazin", role: "Neurochirurgia", initials: "AF", videoId: "7h5p7rnTYes" },
  { quote: "La struttura della piattaforma trasmette professionalità ai pazienti che lo vivono come un vero e proprio ambulatorio con la comodità di essere in remoto.", name: "Dr. Stefano Romanò", role: "Psicologia Clinica", initials: "SR", videoId: "Btb1UiWtFPA" },
  { quote: "Organizzare il lavoro che facevo via e-mail è stata una grande svolta della mia attività professionale, tutelando anche i miei spazi personali.", name: "Dr. Giovanni Rossini", role: "Endocrinologia", initials: "GR", videoId: "b4DHRYQPKts" },
  { quote: "Nelle televisite di piattaforma il paziente può anticipare la documentazione. La visita diventa così più focalizzata, il paziente è più rilassato in un ambiente confortevole, e tutto questo comporta un risparmio di tempo rispetto alle visite in studio.", name: "Dr. Gionata Fiorino", role: "Gastroenterologia", initials: "GF", videoId: "kdHIkzkhTxk" },
  { quote: "La piattaforma limita quei carichi di lavoro invisibili che abbiamo a lungo sostenuto per garantire la continuità di cura del paziente.", name: "Dr.ssa Daniela Agrimi", role: "Endocrinologia", initials: "DA", videoId: "kk6boeGyOvM" },
  { quote: "Avevo il problema della e-mail intasata e del rischio che finissero in spam referti importanti. Ora è tutto sotto controllo e si è ridotto del 70% il numero di comunicazioni con i pazienti che, utilizzando la piattaforma, focalizzano meglio le richieste.", name: "Dr.ssa Chiara Boschetto", role: "Ginecologia ed Ostetricia", initials: "CB", videoId: "vKgg-Va0ujE" },
  { quote: "Dal caos dei CD ad una piattaforma che non è la semplice mail ma qualcosa di più solido, professionale e conforme ai requisiti della privacy per gestire i follow up in radiochirurgia.", name: "Dr. Piero Picozzi", role: "Neurochirurgia", initials: "PP", videoId: "pUxVRwPii_s" },
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
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">"{quote}"</p>
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
            <a
              href="https://www.youtube.com/@welmed1329/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 h-14 px-7 rounded-xl bg-[#FF0000] text-white font-bold text-base hover:bg-[#cc0000] transition-colors shadow-lg hover:shadow-xl"
            >
              <Youtube size={26} fill="currentColor" strokeWidth={1.5} />
              Guarda tutte le testimonianze su YouTube
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="https://www.welcomedicineonline.it/product/abbonamento-welcomedicine" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Prova gratis →
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
