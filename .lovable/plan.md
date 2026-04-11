

## Piano: Aggiornamento copy con messaging delle reference

### Analisi
Le reference mostrano un approccio copy superiore per la conversione:
- Frasi brevi e d'impatto vs muri di testo
- "Risultato: perdi tempo, perdi controllo, perdi opportunità" — agita il dolore in 3 parole
- "Non è telemedicina. È continuità di cura organizzata." — posizionamento differenziante forte
- Benefici divisi "Per te" / "Per i tuoi pazienti" — doppio angolo persuasivo
- Workflow in 4 step minimal senza descrizioni verbose

### Modifiche

#### 1. ProblemSection.tsx — Aggiungere il "Risultato" e il posizionamento
- Dopo la lista problemi, aggiungere il blocco "Risultato: perdi tempo, perdi controllo, perdi opportunità cliniche ed economiche"
- Nel box soluzione, sostituire il titolo con "Welmed trasforma tutto questo in un sistema organizzato" e aggiungere la tagline: "Non è telemedicina. È continuità di cura organizzata."
- Semplificare i bullet soluzione con quelli della reference: gestire pazienti, strutturare follow-up, comunicare in modo tracciato, supporto AI

#### 2. WorkflowSection.tsx — Semplificare i 4 step
- Sostituire i workflowSteps con quelli della reference:
  1. "Aggiungi i tuoi pazienti" — "Importi o inserisci facilmente i pazienti"
  2. "Gestisci la comunicazione" — "Messaggi strutturati, niente più caos"
  3. "Organizza i follow-up" — "Reminder, controlli, percorsi"
  4. "Usa l'AI" — "Riassunti, supporto e organizzazione automatica"
- Rimuovere la sezione onboarding (3 step) che è ridondante — tenere solo i 4 step operativi

#### 3. BenefitsSection.tsx — Split "Per te" / "Per i tuoi pazienti"
- Sostituire la griglia 7 card con due colonne clean:
  - **Per te**: Più ordine, Meno tempo perso, Più controllo clinico
  - **Per i tuoi pazienti**: Più continuità, Più attenzione, Più qualità percepita
- Mantenere l'immagine e il titolo sezione, ma semplificare drasticamente il contenuto

### Dettaglio tecnico

| File | Cosa cambia |
|------|------------|
| `ProblemSection.tsx` | Aggiunta blocco "Risultato" + riscrittura box soluzione con copy reference + tagline posizionamento |
| `WorkflowSection.tsx` | 4 step semplificati dalla reference, rimosso blocco onboarding ridondante |
| `BenefitsSection.tsx` | Da 7 card a 2 colonne "Per te" / "Per i tuoi pazienti" con bullet minimal |

