# Roadmap

Kort strategi för att bygga mer relevant trafik och fler kundförfrågningar utan att fylla sajten med generiska AI-artiklar.

## Princip

Satsa på kvalitet före kvantitet. 20-30 nischade, lokala och hjälpsamma sidor är mer värdefullt än 100 tunna bloggposter. AI kan användas för research, struktur och korrektur, men slutresultatet ska kännas lokalt, personligt och bilddrivet.

## Fokusområden

### 1. Lokal SEO med tydlig intention

- Prioritera sökningar kopplade till Göteborg, Kungälv och närområdet.
- Skapa guider som svarar på konkreta kundproblem, till exempel platser, tider, klädval, brudlokaler och planering.
- Byt generella ämnen som "tips inför fotografering" mot lokala vinklar som "bästa platserna för utomhusporträtt i Göteborg".

### 2. Korta content-hubbar och tydliga undersidor

- Bygg en enkel navsida för guider: `/guider/`.
- Skapa få men starka undersidor istället för många tunna sidor.
- Prioritera sidor med tydligt syfte och konkret nytta.

Föreslagen v1-struktur:

- `/guider/`
- `/guider/brollopsplanerare/`
- `/guider/brollopstidslinje/`
- `/guider/golden-hour/`
- `/guider/brollop-checklista-goteborg/`
- `/case/`
- `/case/brollop-goteborg/`
- `/case/portratt-foretag/`

### 3. Praktiska verktyg

- Bygg enkla interaktiva verktyg som faktiskt hjälper kunden att boka eller planera.
- Första verktyget bör vara en bröllopsplanerare med checkboxar för bildmoment, till exempel gäster, familj, mingel, detaljer, vigsel, gruppbilder och porträtt.
- Bygg sidan som vanlig React + print-stöd med `window.print()` och `@media print`, istället för att börja med PDF.
- Ha bara en utskriftsanpassad layout för ett konkret brukstillfälle.

### 4. Case studies från riktiga uppdrag

- Skriv korta case med problem, lösning och resultat.
- Använd dem för att visa erfarenhet och skapa förtroende.
- Håll dem lokala och konkreta i stället för generiska.

### 5. AI som assistent

- Använd AI för sökordsförslag, vanliga kundfrågor, dispositioner och korrektur.
- Lägg alltid till egen erfarenhet, lokala tips, kundcase och unika bilder.
- Optimera egna bilder med tydliga filnamn och alt-texter, till exempel `foretagsfotografering-goteborg.jpg`.

### 6. Kunddrivande innehåll

- Skapa en enkel rutin för att be om recensioner efter levererad galleri-länk.
- Optimera Google Business Profile.
- Skapa nedladdningsbara guider om det finns ett tydligt syfte, men bara när de hjälper kunden och stöttar försäljning eller förfrågan.

## Nästa steg

1. Lista 10-15 specifika problem som lokala kunder ofta har.
2. Välj 5 prioriterade sidor att skapa först.
3. Planera första verktyget som en printvänlig bröllopsplanerare.
4. Ta fram 2-3 lokala case studies från riktiga uppdrag.
5. Sätt en enkel rutin för recensioner efter avslutat uppdrag.
6. Använd egna bilder mer systematiskt med bra namn, alt-text och lokal kontext.

## Tekniskt för verktygen

- Bygg nya kundsidor som vanliga React-sidor i samma route-struktur som resten av sajten.
- Använd print CSS för att göra sidan utskriftsvänlig.
- Håll navigation, footer och andra oviktiga element utanför utskrift.
- Lägg till en enkel skriv-ut-knapp på sidan.
- Använd PDF bara om ni senare behöver en exakt exportfil.
