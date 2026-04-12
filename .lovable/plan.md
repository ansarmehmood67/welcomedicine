

## Aggiunta 3 feature mancanti alla FeaturesSection

### Modifiche

**File: `src/components/landing/FeaturesSection.tsx`**

Aggiungere 3 elementi all'array `features`:

1. **Follow-up** — icona `ClipboardCheck`, color `text-emerald-600`, bg `bg-emerald-600/10`
   - Desc: "Digitalizza i controlli post-visita e monitora i parametri dei pazienti nel tempo. Tutto tracciato e sempre accessibile."

2. **Second opinion** — icona `UsersRound`, color `text-violet-600`, bg `bg-violet-600/10`
   - Desc: "Richiedi o offri consulenze specialistiche, in modalità sincrona o asincrona, singolarmente o in team multidisciplinare."

3. **Agenda e promemoria** — icona `CalendarCheck`, color `text-yellow-500`, bg `bg-yellow-500/10`
   - Desc: "Calendario prestazioni e promemoria automatici per esami e terapie. I tuoi pazienti non dimenticano più nulla."

Inseriti in fondo all'array, prima della chiusura. Import delle 3 nuove icone da `lucide-react`. Nessun altro file modificato.

