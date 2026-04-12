

## Analisi del messaggio attuale

L'hero attuale presenta:
- **H1**: "Smetti di lavorare gratis fuori dall'ambulatorio" — tono emotivo, accusa il paziente di sfruttamento
- **Sottotitolo**: "Mai più messaggi dei pazienti sui tuoi canali personali" — focus negativo sul problema

Entrambi sono giudicati troppo "di pancia" e poco etici.

---

## Nuova direzione proposta

**Core message**: Organizzazione → Efficienza → Capacità di gestire più pazienti con qualità

**Tono**: Professionale, credibile, costruttivo

---

## Implementazione

### 1. Nuovo titolo principale (H1)

```
"Centralizza le consulenze mediche 
 in un flusso di lavoro strutturato."
```

Oppure alternativa:
```
"Gestisci ogni consulenza con 
 efficienza e tranquillità professionale."
```

### 2. Nuovo sottotitolo (p)

```
Un'unica piattaforma sicura per coordinare comunicazioni, 
videoconsulti e documenti. Ora già utilizzata da +4.500 
professionisti per ottimizzare il proprio workflow.
```

### 3. Badge sopra il titolo

Mantenere: "Welmed — Poliambulatorio autorizzato" (già professionale)

### 4. Pills (già appropriati)

Mantenere: Chat illimitate, Videoconsulti, Scambio documenti, Conforme GDPR

---

## Cambiamenti nel codice

File: `src/components/landing/HeroSection.tsx`

| Riga | Attuale | Nuovo |
|------|---------|-------|
| 22-23 | `Smetti di lavorare gratis fuori dall'ambulatorio.` | `Centralizza le consulenze mediche in un flusso di lavoro strutturato.` |
| 25-27 | `Mai più messaggi... canali personali...` | `Un'unica piattaforma sicura per coordinare comunicazioni, videoconsulti e documenti. Ora già utilizzata da +4.500 professionisti per ottimizzare il proprio workflow.` |

---

## Verifica coerenza

- ✅ Elimina riferimenti emotivi ("lavorare gratis", "sfruttamento")
- ✅ Focus su organizzazione e struttura
- ✅ Beneficio concreto: efficienza → più pazienti gestibili
- ✅ Mantiene credibilità con il riferimento ai 4.500+ professionisti

