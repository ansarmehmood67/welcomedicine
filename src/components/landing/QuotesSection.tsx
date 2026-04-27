import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const textTestimonials = [
  { quote: "La gestione della continuità tra le visite in piattaforma mi ha fatto sentire una professionista, in quanto le microattività, prima stancanti, sono alleviate dalla possibilità di avere un unico ambiente organizzato per visite, refertazione, consulti e aggiornamenti.", name: "Dr.ssa Daniela Agrimi", role: "Endocrinologa", initials: "DA" },
  { quote: "Ora risparmio il 50% di tempo nella gestione della comunicazione.", name: "Dr. Carmelo Morana", role: "Urologo", initials: "CM" },
  { quote: "La piattaforma è perfetta per visionare TAC e Risonanze Magnetiche senza invio di CD o spostare il paziente, con il viewer incluso che è medical device IIb.", name: "Dr.ssa Giovanna Piragine", role: "Radiologa Senologa", initials: "GP" },
  { quote: "La piattaforma semplifica l'inquadramento dei pazienti, la comunicazione e la refertazione ed è meno invasiva del mio tempo personale riaperto a una chiamata o a un WhatsApp.", name: "Dr. Gionata Fiorino", role: "Gastroenterologo", initials: "GF" },
  { quote: "Nell'ambito della mia specializzazione in cardiologia, dove abbiamo tanti nuovi farmaci che richiedono la valutazione di esami ematochimici per la prescrizione di piani terapeutici, con la piattaforma si risolve il problema quotidiano della trasmissione di innumerevoli e-mail per vedere questi esami.", name: "Dr. Roberto Spoladore", role: "Cardiologo", initials: "RS" },
  { quote: "Avere sempre uno storico, una traccia di quello che è stato comunicato in senso bidirezionale, avere sempre dei dati certi e un ancoraggio alla situazione clinica è molto importante per non creare confusione a livello della mia interpretazione. Perché purtroppo nel tempo i pazienti si accavallano e le informazioni si possono anche, diciamo, confondere, facendo delle sovrapposizioni improprie.", name: "Dr. Luigi Cerri", role: "Endocrinologo", initials: "LC" },
];

const QuotesSection = () => {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;
    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", () => {
      setScrollSnaps(api.scrollSnapList());
      setSelectedIndex(api.selectedScrollSnap());
    });
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-pill-bg text-pill-fg mb-4 uppercase tracking-wide">La voce dei medici</span>
          <h2 className="text-5xl sm:text-5xl lg:text-5xl font-black sm:font-extrabold text-foreground mb-4 leading-tight">
            Risultati <span className="text-primary">concreti</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ecco come i professionisti descrivono l'impatto quotidiano di Welcomedicine.
          </p>
        </motion.div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          setApi={setApi}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
          className="px-4 sm:px-12"
        >
          <CarouselContent className="-ml-5">
            {textTestimonials.map(({ quote, name, role, initials }, i) => (
              <CarouselItem key={name} className="pl-5 sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="rounded-2xl border border-border p-5 card-elevated flex flex-col bg-secondary-foreground text-primary-foreground h-full"
                >
                  <Quote size={20} className="mb-3 text-primary-foreground" fill="currentColor" />
                  <p className="text-base leading-relaxed mb-4 flex-1 text-primary-foreground">"{quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-destructive-foreground bg-primary">{initials}</div>
                    <div>
                      <p className="text-sm font-semibold text-primary-foreground">{name}</p>
                      <p className="text-xs text-primary-foreground">{role}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              aria-label={`Vai alla slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === selectedIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
