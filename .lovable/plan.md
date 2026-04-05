
## Plan: Update Landing Page Based on Meeting Insights

The meeting transcript reveals several strategic decisions that should reshape the landing page. Here are the key changes:

### Key Insights from the Meeting

1. **Welcome Medicine = WellMed for the open market** — Position WM as part of the "ecosistema WellMed", already used by top Italian hospitals
2. **Hospital logos as trust signals** — Display logos of San Raffaele, Gruppo San Donato, CDI, and other client hospitals
3. **Doctor testimonials** — Feature real doctor quotes with name, title, and affiliation
4. **Problem-first messaging** — Focus on doctor pain points: email overload, WhatsApp chaos, USB sticks, lost patients due to poor communication
5. **Savings calculator** — Interactive tool: input emails/patients per day → output time and money saved
6. **Monetization angle** — Emphasize that doctors can monetize their time (consultations, second opinions)
7. **Ecosystem messaging** — Doctors on WM can collaborate with doctors on hospital platforms (e.g., refer patients to San Raffaele)

### Changes

**1. Update Hero Section messaging**
- Change subtitle to emphasize: "La stessa tecnologia scelta dai migliori ospedali d'Italia, ora disponibile per te"
- Add "ecosistema WellMed" reference
- Refine headline to speak to doctor pain points more directly

**2. Add Hospital Logos / Trust Bar (new component)**
- New `TrustBar` section right below the hero
- Display placeholder logos for: Ospedale San Raffaele, Gruppo San Donato, CDI, and others
- Header: "Scelto con successo dalle migliori strutture sanitarie d'Italia"
- Subtext about ecosystem and proven technology

**3. Refine Problem Section messaging**
- Make problems more visceral based on meeting discussion: email overload (100+ emails/day), USB sticks for TAC scans, patients calling personal WhatsApp, losing patients due to poor communication
- Solution side: emphasize time savings ("50% del tempo in meno sulle mail"), patient retention, monetization

**4. Add Testimonials Section (new component)**
- New `TestimonialsSection` between Benefits and HowItWorks
- 3-4 placeholder testimonial cards with doctor name, specialty, and quote
- Quotes inspired by meeting insights: "Mi sono sentita di nuovo una professionista felice", time savings, organization
- Video play button placeholders (linking to YouTube channel later)

**5. Add Savings Calculator (new component)**
- New `SavingsCalculator` section after HowItWorks
- Interactive mini-form: "Quante email ricevi al giorno?", "Quanti pazienti vedi a settimana?"
- Instant result showing estimated time saved per week and potential extra revenue
- CTA: "Scopri se fa per te"

**6. Update Benefits Section**
- Add "Fidelizza i tuoi pazienti" benefit — doctors lose patients due to poor communication
- Emphasize the ecosystem angle: collaborate with specialists across hospitals

**7. Update Final CTA**
- Add ecosystem/trust reinforcement: "Unisciti all'ecosistema già scelto dai migliori ospedali d'Italia"

### File Changes

| File | Action |
|------|--------|
| `src/components/landing/TrustBar.tsx` | Create — hospital logo trust strip |
| `src/components/landing/TestimonialsSection.tsx` | Create — doctor testimonials with placeholders |
| `src/components/landing/SavingsCalculator.tsx` | Create — interactive savings estimator |
| `src/components/landing/HeroSection.tsx` | Edit — update messaging with ecosystem angle |
| `src/components/landing/ProblemSection.tsx` | Edit — sharpen pain points from meeting |
| `src/components/landing/BenefitsSection.tsx` | Edit — add patient retention benefit |
| `src/components/landing/FinalCTASection.tsx` | Edit — add ecosystem trust line |
| `src/pages/Index.tsx` | Edit — add new sections in correct order |
