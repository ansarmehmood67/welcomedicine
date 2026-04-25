## Sezione "App Welmed Pro" — Implementazione

### 1. Asset
- Copia `user-uploads://image-9.png` → `src/assets/app-welmed-pro-devices.png` (mockup multi-device)

### 2. Nuovo componente `src/components/landing/AppWelmedProSection.tsx`
- Layout 2 colonne: immagine multi-device a sinistra, contenuto a destra (stack su mobile)
- Sfondo `section-alt` per stacco visivo
- Animazioni framer-motion coerenti con altre sezioni

**Header:**
- Pill: "APP MOBILE"
- Titolo: *"L'App **Welmed Pro** per i Professionisti Sanitari"*
- Sottotitolo: *"Disponibile per Android e iOS, ti aiuta a tenere sempre sott'occhio tutte le attività della Piattaforma e a lavorare in mobilità."*

**4 feature card** (icona + titolo + descrizione, stile `card-elevated`):
- 🔔 **Notifiche push in tempo reale** — Aggiornamenti di Pazienti e Colleghi con anteprima mittente e messaggio
- 🔄 **Integrata e sincronizzata** — App e Piattaforma dialogano tra loro per il massimo della potenzialità
- 👆 **Firma biometrica** — Firma ed emetti ricette e referti tramite impronta digitale o riconoscimento facciale, senza app esterne
- 🔒 **Codice PIN alternativo** — Imposta un PIN personale se preferisci o se il cellulare non supporta il biometrico

**CTA**: pulsante "Scarica Welmed Pro" (link placeholder verso area download)

### 3. Modifica `src/pages/Index.tsx`
- Import `AppWelmedProSection`
- Inserimento tra `BenefitsSection` e `WorkflowSection`
