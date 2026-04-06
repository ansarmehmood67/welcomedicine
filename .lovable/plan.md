

## Piano: Allineamento completo della landing page con PDF e insights della call

### Analisi dei gap

Ho confrontato il PDF della presentazione, le note della call e la landing page attuale. Ecco cosa manca:

**6 sezioni create ma non inserite nella pagina:**
- `ProblemSection` (il problema che risolviamo)
- `BenefitsSection` (vantaggi per il medico)
- `HowItWorksSection` (3 passi + demo CTA)
- `SavingsCalculator` (calcolatore risparmio)
- `FAQSection` (domande frequenti)
- `FinalCTASection` (CTA finale)

**Contenuti da aggiornare per allineamento con il PDF:**

1. **BenefitsSection** — aggiungere i 2 vantaggi mancanti dal PDF:
   - "+ Rapidità": Consultazione documentale e refertazione assistite dall'AI
   - "+ Controllo": Proprietà di dati, referti e pazienti, indipendentemente dalle strutture

2. **FeaturesSection** — aggiungere le funzionalità mancanti dal PDF:
   - Import del repository pazienti esistente
   - Assistenza tecnica telefonica per medici e pazienti
   - Fatturazione automatica con gestione bollo e Tessera Sanitaria

3. **Footer** — aggiungere i dati di contatto dal PDF:
   - Email: giulia.arpinati@welmed.it
   - Telefono: +347 5307064
   - Indirizzo: Corso Indipendenza, 5 - Milano
   - Sito: welcomedicineonline.it

4. **Navbar** — aggiungere i link alle nuove sezioni visibili (Vantaggi, Come funziona)

5. **Nuova sezione: "I Servizi Offerti"** — dal PDF pagina 3, una sezione dedicata ai servizi del centro erogatore (piattaforma + fatturazione + assistenza + import repository) che si distingue dalle features tecniche

### Ordine sezioni nella pagina

```text
Navbar
HeroSection
TrustBar
ProblemSection          ← aggiunta
FeaturesSection
BenefitsSection         ← aggiunta + aggiornata
HowItWorksSection       ← aggiunta
TestimonialsSection
SavingsCalculator       ← aggiunta
PricingSection
FAQSection              ← aggiunta
FinalCTASection         ← aggiunta
Footer                  ← aggiornato con contatti
```

### Modifiche file

| File | Azione |
|------|--------|
| `src/pages/Index.tsx` | Aggiungere tutte le 6 sezioni mancanti nell'ordine corretto |
| `src/components/landing/BenefitsSection.tsx` | Aggiungere "Rapidità con AI" e "Controllo dati" |
| `src/components/landing/FeaturesSection.tsx` | Aggiungere Import repository, Assistenza tecnica, Fatturazione bollo/TS |
| `src/components/landing/Footer.tsx` | Aggiungere contatti reali (email, telefono, indirizzo, sito) |
| `src/components/landing/Navbar.tsx` | Aggiungere link a "Vantaggi" e "Come funziona" |

