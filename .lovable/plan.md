

## Problema

Nel Navbar, il bottone CTA mostra ancora "Prova gratis" con link a `/abbonamento`. Sulla pagina Pazienti, questo bottone dovrebbe mostrare "Scarica l'App" con link al download dell'app, coerentemente con tutte le altre CTA della pagina.

## Piano

1. **Modificare il Navbar** (`src/components/landing/Navbar.tsx`):
   - Quando l'utente si trova sulla pagina `/pazienti`, il bottone CTA principale cambia da "Prova gratis" (link a `/abbonamento`) a "Scarica l'App" (link a `https://app.welmed.it/welcomedicine/download-patient-app`, target `_blank`)
   - Usare la variabile `location.pathname` già presente per distinguere il contesto
   - Applicare lo stesso stile uniforme degli altri bottoni: `h-12 px-7 rounded-xl` con icona `Download`
   - Aggiornare anche la versione mobile del menu nello stesso modo

