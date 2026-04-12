import { motion } from "framer-motion";
import { Download } from "lucide-react";
import appScreenshot from "@/assets/app-smartphone.png";

const ScaricaApp = () => (
  <section className="py-20 md:py-32 dark-section overflow-hidden">
    <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center"
      >
        <img
          src={appScreenshot}
          alt="App Welcomedicine su smartphone"
          className="w-64 h-auto rounded-3xl shadow-2xl"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 leading-tight">
          Scarica l'APP{" "}
          <span className="text-primary">WELCOMEDICINE</span>
        </h2>
        <p className="text-primary-foreground/70 text-base sm:text-lg leading-relaxed mb-8">
          Non solo da computer, ma anche da smartphone: scarica l'App gratuita per i Pazienti, accedi o registrati e comincia subito a comunicare facilmente con i nostri Specialisti!
        </p>
        <motion.a
          href="https://app.welmed.it/welcomedicine/download-patient-app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 h-12 px-7 rounded-xl cta-gradient text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Download size={18} /> Scarica l'App
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default ScaricaApp;
