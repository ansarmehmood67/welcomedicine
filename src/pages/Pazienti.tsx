import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PazientiHero from "@/components/pazienti/PazientiHero";
import ComeFunziona from "@/components/pazienti/ComeFunziona";
import ScaricaApp from "@/components/pazienti/ScaricaApp";
import PazientiFAQ from "@/components/pazienti/PazientiFAQ";

const Pazienti = () => (
  <>
    <Navbar />
    <PazientiHero />
    <ComeFunziona />
    <ScaricaApp />
    <PazientiFAQ />
    <Footer />
  </>
);

export default Pazienti;
