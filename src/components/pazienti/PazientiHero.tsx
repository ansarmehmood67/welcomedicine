import { motion } from "framer-motion";
import { Search } from "lucide-react";

const PazientiHero = () => (
  <section className="dark-section pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
    {/* Decorative gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,43%,18%)] via-[hsl(210,60%,25%)] to-[hsl(216,43%,18%)] opacity-90" />
    
    <div className="container max-w-6xl mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-primary-foreground mb-6">
          Cerca, comunica e resta in contatto con gli Specialisti di{" "}
          <span className="text-primary">Welcomedicine</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground/90 mb-4">
          Hai un problema di salute?
        </h2>

        <p className="text-primary-foreground/70 text-base sm:text-lg leading-relaxed mb-8">
          Cerca i nostri Specialisti e comunica subito con loro da computer o smartphone, ovunque tu sia
        </p>

        {/* Search bar */}
        <div className="flex items-center bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl overflow-hidden mb-6">
          <div className="flex items-center gap-2 px-4 flex-1">
            <Search size={18} className="text-primary-foreground/50" />
            <input
              type="text"
              placeholder="Cerca per Professionista, Specializzazione, Patologia o Sintomo"
              className="w-full bg-transparent py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none"
            />
          </div>
          <button className="h-full px-6 py-4 cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            Cerca
          </button>
        </div>

        <p className="text-primary-foreground/60 text-sm">
          Oppure{" "}
          <a href="https://app.welmed.it/welcomedicine/login" className="text-primary hover:underline font-medium">Accedi</a>
          {" "}o{" "}
          <a href="https://app.welmed.it/welcomedicine/registration/patient" className="text-primary hover:underline font-medium">Registrati</a>
          {" "}per prenotare la tua visita online.
        </p>
      </motion.div>
    </div>
  </section>
);

export default PazientiHero;
