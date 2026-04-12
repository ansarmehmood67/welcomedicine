

## Piano: Dare risalto al messaggio "i ricavi restano al medico"

### Situazione attuale
Il concetto esiste già ma è nascosto in testo piccolo (11px) nelle card dei prezzi e in una FAQ. Non ha il peso visivo che merita.

### Strategia proposta

**1. SavingsCalculator — aggiungere terza card "Ricavo netto"**
Sotto il potenziale ricavo mensile, aggiungere una terza card risultato che mostra:
- Il ricavo netto dopo la trattenuta del 3% (con icona Wallet/Banknote)
- Label: "Ricavo netto — il 97% resta a te"
- Sotto-testo: "Trattenuta del 3% per spese bancarie e gestione amministrativa"

Questo rende il concetto interattivo: il medico muove lo slider e vede in tempo reale quanto guadagna lui.

**2. PricingSection — rendere il messaggio più visibile**
Trasformare la riga attuale (11px, quasi invisibile) in un banner/callout più prominente posizionato tra le card dei piani e la sezione "Cosa comprende", con icona e testo più grande. Qualcosa come:
> "I tuoi ricavi restano tuoi. Trattenuta solo del 3% per spese bancarie e amministrative."

**3. BenefitsSection — aggiungere bullet nella card "Per te"**
Aggiungere un punto: "I ricavi delle tue prestazioni restano a te, al netto del 3%"

### File modificati
- `src/components/landing/SavingsCalculator.tsx` — terza result card con ricavo netto
- `src/components/landing/PricingSection.tsx` — callout più visibile
- `src/components/landing/BenefitsSection.tsx` — nuovo bullet point

