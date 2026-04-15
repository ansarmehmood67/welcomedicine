

## Sostituzione immagine con mosaico di medici

### Contesto
L'elemento selezionato e la `<img>` nella BenefitsSection (riga 23) che attualmente mostra `section-benefits.jpg`. Va sostituita con un mosaico di volti di medici su sfondo bianco, con nome sotto ogni foto.

### Problema tecnico
Non e possibile estrarre automaticamente i volti scontornati dai video YouTube. Le thumbnail YouTube (`https://img.youtube.com/vi/{ID}/hqdefault.jpg`) mostrano il medico ma con sfondo, e la rimozione automatica dello sfondo richiederebbe un servizio esterno non disponibile.

### Approccio proposto
Creare un componente **DoctorsMosaic** che sostituisce l'immagine singola con una griglia di card medici. Ogni card avra:
- Thumbnail YouTube ritagliata circolarmente (CSS `rounded-full` + `object-cover`) per simulare l'effetto scontornato su sfondo bianco
- Nome del medico sotto la foto
- Sfondo bianco, layout pulito

Dati gia disponibili nel progetto (da `TestimonialsSection` e `QuotesSection`): 10 medici con nome, ruolo e videoId/iniziali.

### Modifiche

**1. `src/components/landing/BenefitsSection.tsx`**
- Rimuovere import di `sectionImage`
- Definire array di medici con `name` e `videoId` (riutilizzando i dati esistenti)
- Sostituire il blocco `<img>` con una griglia 3x3 o 2x5 di card circolari su sfondo bianco:
  ```
  ┌──────────────────────────┐
  │  (foto)  (foto)  (foto)  │
  │  Nome 1  Nome 2  Nome 3  │
  │                          │
  │  (foto)  (foto)  (foto)  │
  │  Nome 4  Nome 5  Nome 6  │
  │                          │
  │  (foto)  (foto)  (foto)  │
  │  Nome 7  Nome 8  Nome 9  │
  └──────────────────────────┘
  ```
- Foto circolari con bordo sottile, sfondo bianco, nome centrato sotto
- Animazioni motion stagger come gia usato nel progetto

**2. Nessun altro file modificato**

### Note
- Le thumbnail YouTube sono il miglior compromesso disponibile per ottenere i volti senza upload manuali
- Il crop circolare su sfondo bianco crea un effetto visivo simile allo scontornamento
- Se in futuro si volessero foto realmente scontornate, andranno caricate come asset statici in `src/assets/`

