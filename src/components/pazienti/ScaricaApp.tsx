import { motion } from "framer-motion";
import { Download } from "lucide-react";
import appScreenshot from "@/assets/app-smartphone.png";

const ScaricaApp = () => (
  <section className="py-16 md:py-24 dark-section">
    <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src={appScreenshot}
          alt="App Welcomedicine su smartphone"
          className="w-64 h-auto rounded-3xl shadow-2xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-6">
          Scarica l'APP <span className="text-primary">WELCOMEDICINE</span>
        </h2>
        <p className="text-primary-foreground/70 text-base sm:text-lg leading-relaxed mb-8">
          Non solo da computer, ma anche da smartphone: scarica l'App gratuita per i Pazienti, accedi o registrati e comincia subito a comunicare facilmente con i nostri Specialisti!
        </p>
        <a
          href="https://app.welmed.it/welcomedicine/download-patient-app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-12 px-7 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Download size={18} /> Scarica l'App
        </a>
      </motion.div>
    </div>
  </section>
);

export default ScaricaApp;
