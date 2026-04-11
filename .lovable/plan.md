

## Piano: Correzioni di accuratezza, branding e conversione

Il feedback contiene correzioni fattuali importanti e miglioramenti strategici. Ecco il piano organizzato per priorità.

---

### 1. Correzioni fattuali obbligatorie (accuratezza)

**HeroSection.tsx**
- Rimuovere "Nessuna carta richiesta" → sostituire con "Carta richiesta, nessun addebito il primo mese"
- Rimuovere "Setup in 2 minuti" → sostituire con "Onboarding assistito dal team"

**FAQSection.tsx**
- FAQ "Come funziona la prova gratuita?": correggere — carta richiesta ma nessun addebito per 30 giorni
- FAQ "Posso cancellare quando voglio?": correggere — disdetta via customer care, dopo la prova vincolo 6 mesi
- FAQ "Quanto tempo serve per configurare tutto?": rimuovere "in pochi click", sostituire con onboarding assistito e configurazione guidata dal team
- Aggiungere FAQ su monetizzazione: "I ricavi restano al medico, trattenuta del 3% (bancaria + amministrativa), pagamenti online inclusi"

**FinalCTASection.tsx**
- "Nessuna carta di credito" → "Nessun addebito il primo mese"
- "Cancella in un click" → "Disdetta tramite customer care"

**PricingSection.tsx**
- "Inizia con la prova gratuita di 30 giorni: zero costi, zero rischi, disdici quando vuoi" → correggere: carta richiesta, dopo prova vincolo 6 mesi
- Rimuovere "Prenota una demo" → "Prova gratis"
- Aggiungere info monetizzazione: ricavi al medico, 3% trattenuta, pagamenti online inclusi

**WorkflowSection.tsx**
- Step 1 "Importi o inserisci facilmente i pazienti" → chiarire che l'import dati è un servizio gestito (add-on), non self-service
- Sottotitolo: rimuovere "tutto è pensato per essere immediato" → "dall'onboarding assistito alla gestione quotidiana"

**FeaturesSection.tsx**
- "Import repository pazienti — in pochi click" → "Servizio gestito di importazione dati (add-on)"
- "DICOM Viewer" → specificare "immagini radiologiche non diagnostiche"
- Rimuovere "Prenota una demo" se presente, unificare CTA a "Prova gratis"

### 2. Naming e Brand Consistency (tutti i file)

Ricerca e sostituzione globale:
- "Welcomedicine" → "Welcome Medicine" (con spazio)
- "WellMed" → "Welmed" (maiuscola solo la W)
- "WelMed" → "Welmed"
- Verificare coerenza in navbar, footer, hero, testimonials, trust bar

### 3. Contatti (Footer.tsx)

- Email: `giulia.arpinati@welmed.it` → `info@welmed.it`
- Telefono: `+39 347 530 7064` → `02 82960009`
- Rimuovere riferimenti personali

### 4. CTA unificate

Sostituire tutte le "Prenota una demo" con "Prova gratis" come CTA primaria in:
- TestimonialsSection.tsx
- BenefitsSection.tsx
- FAQSection.tsx
- PricingSection.tsx

### 5. Posizionamento: Welmed = poliambulatorio autorizzato

Rafforzare il pillar message in:
- **HeroSection.tsx**: nel pill/badge → "Welmed — Poliambulatorio autorizzato"
- **FeaturesSection.tsx**: il titolo "Siamo un poliambulatorio autorizzato" è già presente — bene
- **ProblemSection.tsx**: nella soluzione, aggiungere "Come poliambulatorio autorizzato, Welmed garantisce..."

### 6. Copy e messaggi chiave

**ProblemSection.tsx**
- Enfatizzare nella lista problemi: referti via USB, email non protette, nessuna compliance GDPR, informazioni disperse, rischio buchi nella storia clinica
- Nella soluzione: informazioni centralizzate, compliance GDPR + tutela medico-legale, continuità clinica, gestione ordinata
- Aggiungere messaggio chiave: "Mai più messaggi dei pazienti sui tuoi canali personali"

**SavingsCalculator.tsx**
- Slider pazienti: label già "a settimana" — OK
- Verificare che non ci siano riferimenti a "100 pazienti" generici

**HeroSection.tsx**
- Sottotitolo: rendere più specifico e meno generico-SaaS
- Aggiungere messaggio: centralizzazione comunicazioni medico-paziente (non medico-medico)

### 7. Urgency banner (Navbar.tsx)

- Cambiare "prima videovisita" (se presente) → "primo utilizzo con i pazienti"
- Chiarire: onboarding assistito, configurazione guidata

### 8. TrustBar.tsx

- "Ecosistema WellMed" → "Ecosistema Welmed"
- Loghi: aumentare dimensioni (`h-12 md:h-16` per i large → `h-16 md:h-20`)
- Layout più arioso: aumentare gap nella griglia

### 9. TestimonialsSection.tsx

- Brand fix nelle quote: "Welcomedicine" → "Welcome Medicine"
- Relazione medico-paziente (non medico-medico) nei testi

---

### Dettaglio tecnico

| File | Modifiche |
|------|-----------|
| `HeroSection.tsx` | Micro-copy corretto, badge "poliambulatorio autorizzato", copy specifico |
| `FinalCTASection.tsx` | Rimuovere "nessuna carta", "cancella in un click", correggere garanzie |
| `FAQSection.tsx` | Riscrittura 4 FAQ (prova, cancellazione, setup, monetizzazione) |
| `PricingSection.tsx` | Correzione copy prova, info monetizzazione, CTA unificata |
| `ProblemSection.tsx` | Copy allineato a referti/USB/GDPR, messaggio "mai più canali personali" |
| `WorkflowSection.tsx` | Import = servizio gestito, onboarding assistito |
| `FeaturesSection.tsx` | Import = add-on, DICOM = non diagnostiche, CTA unificata |
| `BenefitsSection.tsx` | CTA → "Prova gratis" |
| `TestimonialsSection.tsx` | Brand fix, CTA → "Prova gratis" |
| `TrustBar.tsx` | "Welmed" fix, loghi più grandi, layout più arioso |
| `SavingsCalculator.tsx` | Verifiche copy |
| `Navbar.tsx` | Brand fix, urgency banner aggiornato |
| `Footer.tsx` | Email e telefono aggiornati, brand fix |

