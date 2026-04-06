import { motion } from "framer-motion";
import { Search } from "lucide-react";
import heroImage from "@/assets/pazienti-hero.jpg";

const PazientiHero = () => (
  <section className="dark-section pt-28 pb-16 md:pt-40 md:pb-28 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(216,43%,18%)] via-[hsl(210,60%,25%)] to-[hsl(216,43%,18%)] opacity-90" />

    <div className="container max-w-6xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-primary-foreground mb-6">
          Cerca, comunica e resta in contatto con gli Specialisti di{" "}
          <span className="text-primary">Welcomedicine</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-primary-foreground/90 mb-4">
          Hai un problema di salute?
        </h2>

        <p className="text-primary-foreground/70 text-base sm:text-lg leading-relaxed mb-8">
          Cerca i nostri Specialisti e comunica subito con loro da computer o smartphone, ovunque tu sia
        </p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl overflow-hidden mb-6"
        >
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-primary-foreground/60 text-sm"
        >
          Oppure{" "}
          <a href="https://app.welmed.it/welcomedicine/login" className="text-primary hover:underline font-medium">Accedi</a>
          {" "}o{" "}
          <a href="https://app.welmed.it/welcomedicine/registration/patient" className="text-primary hover:underline font-medium">Registrati</a>
          {" "}per prenotare la tua visita online.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block relative"
      >
        <img
          src={heroImage}
          alt="Paziente in videochiamata con medico"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-foreground/10" />
      </motion.div>
    </div>
  </section>
);

export default PazientiHero;
