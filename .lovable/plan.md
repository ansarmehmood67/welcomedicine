

## Piano: Integrazione contenuti dalla trascrizione della demo

### Analisi della trascrizione

Ho letto l'intera trascrizione della demo (299 righe). Confrontando con il sito attuale, emergono diverse funzionalità e concetti chiave menzionati nella call ma **non presenti** nella landing page:

### Gap identificati

| Funzionalità dalla call | Presente nel sito? |
|---|---|
| **Fascicolo Clinico digitale** — repository centralizzato per ogni paziente con cronologia prestazioni | No |
| **DICOM Viewer integrato** — visualizzazione immagini diagnostiche (classe 2B) senza WeTransfer/USB | No |
| **AI estrazione dati** — da documenti scannerizzati, estrae esami e dati per i referti | Parziale (solo "rapidità con AI") |
| **App WelMed Pro** per medici + App Welcome Medicine per pazienti, con push notification | No |
| **Care Team** — più medici su un fascicolo, trasparente per medico e paziente | No |
| **Gestione segretaria** — account dedicato per delegare risposte e gestione | No |
| **Tracciamento chiamate** — ogni call VoIP è un evento medico-legale tracciato | No |
| **Scheduling on-demand vs fisso** per videoconsulti | No |
| **Interoperabilità cross-piattaforma** — WelMed ospedaliero ↔ Welcome Medicine | No |
| **Repository gratuito per pazienti** — si caricano documenti anche senza prestazione attiva | No |
| **Assistente di piattaforma** — smistamento richieste (segreteria vs medico, gratuito vs a pagamento) | No |
| **Video DPO** per trust sulla sicurezza dati | No (menzionato nella call come asset da aggiungere) |

### Modifiche previste

**1. FeaturesSection — Aggiungere 4 feature mancanti**
Le 9 feature attuali diventano 12, aggiungendo:
- **Fascicolo Clinico digitale**: cronologia completa, documenti, referti e note in un'unica scheda paziente
- **DICOM Viewer integrato**: visualizzazione immagini diagnostiche direttamente in piattaforma, medical device classe 2B
- **App mobile dedicata**: WelMed Pro per medici e Welcome Medicine per pazienti, con notifiche push
- **Gestione segretaria**: delega risposte e gestione appuntamenti a un account segreteria dedicato

Riorganizzare il layout: 6 feature a sinistra, 6 a destra con immagine mobile al centro.

**2. BenefitsSection — Arricchire il beneficio AI**
Aggiornare la descrizione di "Rapidità con l'AI" per includere l'estrazione dati da documenti scannerizzati e la compilazione assistita dei referti (come descritto nella demo).

**3. ProblemSection — Aggiungere problemi dalla call**
Aggiungere alla colonna "Senza Welcome Medicine":
- "Immagini DICOM inviate via WeTransfer o chiavetta USB"
- "Nessuna cronologia organizzata delle prestazioni"

E nella colonna "Con Welcome Medicine":
- "DICOM Viewer integrato: visualizzi tutto in piattaforma"
- "Cronologia completa di ogni prestazione per paziente"

**4. FAQSection — Aggiungere 3 FAQ dalla call**
- "Come funziona il Care Team?" — Ogni medico e paziente vede chi ha accesso al fascicolo. Il paziente viene sempre notificato.
- "I medici possono avere una segretaria in piattaforma?" — Sì, account dedicato per gestire messaggi e appuntamenti.
- "La piattaforma funziona anche con le strutture ospedaliere?" — Sì, le piattaforme WelMed ospedaliere si parlano con Welcome Medicine.

**5. Nuova sezione: "Come funziona in pratica"** (workflow visuale)
Una sezione con il flusso reale descritto nella demo, in 4 step:
1. Il medico visita il paziente e referta digitalmente in piattaforma
2. Il paziente riceve referto firmato e può scrivere al medico per il follow-up
3. L'assistente di piattaforma smista: segreteria, chat gratuita o prestazione a pagamento
4. Il medico risponde, firma, chiude la prestazione — tutto tracciato

Questa sezione si posiziona subito dopo HowItWorksSection (che è sui 3 passi di onboarding) e mostra il workflow quotidiano.

### File da modificare

| File | Azione |
|---|---|
| `src/components/landing/FeaturesSection.tsx` | Aggiungere 4 feature (fascicolo clinico, DICOM, app mobile, segretaria). Layout 6+6 |
| `src/components/landing/BenefitsSection.tsx` | Arricchire descrizione AI con estrazione documenti |
| `src/components/landing/ProblemSection.tsx` | Aggiungere 2 problemi e 2 soluzioni |
| `src/components/landing/FAQSection.tsx` | Aggiungere 3 FAQ (Care Team, segretaria, interoperabilità) |
| `src/components/landing/WorkflowSection.tsx` | **Nuovo** — sezione workflow quotidiano in 4 step |
| `src/pages/Index.tsx` | Inserire WorkflowSection dopo HowItWorksSection |

