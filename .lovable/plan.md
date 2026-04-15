

## Piano: Sostituire l'immagine statica con un mockup chat in italiano

### Problema
La sezione "Il problema che risolviamo" usa un'immagine statica (`section-problem.jpg`) che mostra una chat su tablet con testo non in italiano. Essendo un file JPG, non e possibile modificarne il contenuto testuale.

### Soluzione
Sostituire l'immagine statica con un componente HTML/CSS che simula una chat su tablet con messaggi in italiano, mantenendo lo stesso stile visivo del sito.

### Dettagli tecnici

1. **Creare un componente `ChatMockup.tsx`** in `src/components/landing/` che renderizza:
   - Un frame a forma di tablet/dispositivo con bordi arrotondati e ombra
   - Un header con nome paziente e avatar
   - Bolle di chat con messaggi realistici in italiano (es. paziente chiede informazioni, medico risponde)
   - Timestamp e indicatori di lettura
   - Stile coerente con i colori del sito (primary, muted, card, border)

2. **Aggiornare `ProblemSection.tsx`**:
   - Rimuovere l'import dell'immagine statica `section-problem.jpg`
   - Sostituire il tag `<img>` con il nuovo componente `<ChatMockup />`
   - Mantenere le stesse animazioni framer-motion

### Contenuto chat di esempio
- **Paziente**: "Buongiorno Dottore, le invio i risultati degli esami del sangue. Potrebbe darmi un parere?"
- **Medico**: "Buongiorno, ho ricevuto tutto. I valori sono nella norma, ne parliamo al prossimo videoconsulto."
- **Paziente**: "Perfetto, grazie mille!"

